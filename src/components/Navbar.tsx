import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LanguageCode, TranslationSet } from '../types';
import sekarLogo from '../data/photos/sekar_logo.png';
import { useLocation, useNavigate } from 'react-router';

interface NavbarProps {
    currentLang: LanguageCode;
    onLanguageChange: (lang: LanguageCode) => void;
    translations: TranslationSet;
}

/**
 * Navbar Component (Bilingual Sticky Floating Header)
 *
 * Provides responsive navigational controls at the top of the browser page.
 * Key Pillars:
 * 1. Scroll-Direction Watcher: Uses a micro-debounce delta (10px threshold) to hide the bar when
 *    scrolling down and reveal it instantly when scrolling up, preserving screen real estate.
 * 2. Background Blur Blending: Swaps background density and adds borders dynamically based on scroll offset triggers.
 * 3. Fluid Underline Tracker: Employs Framer Motion layout animations to transition underlines smoothly
 *    across navigation items.
 * 4. Bilingual Switch Controls: Coordinates English and Indonesian dictionaries reactively.
 */
export function Navbar({
    currentLang,
    onLanguageChange,
    translations,
}: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lastScrollYRef = useRef(0);
    const navigate = useNavigate();
    const location = useLocation();

    const activeTab =
        location.pathname === '/' ? 'about' : location.pathname.slice(1);

    useEffect(() => {
        /**
         * Scroll Direction Evaluator
         * Implements directional scrolling offsets with minor delta buffers to filter micro-twitches.
         */
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // 1. Density trigger: add shadow and opaque colored frames upon scroll
            if (currentScrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // 2. Hide/Show logic: compare offsets against last scroll y reference points
            const lastScrollY = lastScrollYRef.current;
            if (currentScrollY <= 40) {
                setIsVisible(true);
            } else {
                // Apply 10px buffer delta to handle elastic bouncing and device frame tremors
                if (currentScrollY > lastScrollY + 10) {
                    setIsVisible(false);
                } else if (currentScrollY < lastScrollY - 10) {
                    setIsVisible(true);
                }
            }

            lastScrollYRef.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: currentLang === 'en' ? 'About' : 'Kisah Kami', id: 'about' },
        {
            label:
                currentLang === 'en' ? 'Room & Facility' : 'Kamar & Fasilitas',
            id: 'roomandfacility',
        },
        { label: currentLang === 'en' ? 'Gallery' : 'Galeri', id: 'gallery' },
        {
            label: currentLang === 'en' ? 'Reserve' : 'Pemesanan',
            id: 'reserve',
        },
    ];

    /**
     * Nav Item Click Router
     * Performs tab alterations, halts mobile drawer overlays, and shifts viewport smoothly.
     */
    const handleItemClick = (id: string) => {
        navigate(id === 'about' ? '/' : `/${id}`);
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <nav
                id="navbar-container"
                className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 transform px-6 md:px-12 ${
                    isVisible || isMobileMenuOpen
                        ? 'translate-y-0'
                        : '-translate-y-full'
                } ${
                    isScrolled
                        ? 'bg-white/85 py-3 text-stone-900 shadow-sm border-b border-stone-200/50 backdrop-blur-md'
                        : 'bg-cream/70 py-4 text-stone-900 border-b border-stone-200/25 backdrop-blur-sm'
                }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    {/* Logo Brand */}
                    <button
                        id="brand-logo-btn"
                        onClick={() => handleItemClick('about')}
                        className="group flex items-center focus:outline-none cursor-pointer"
                        aria-label="Sekar Sophia Villa home"
                    >
                        <img
                            src={sekarLogo}
                            alt="Sekar Sophia Villa"
                            className="h-11 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80 md:h-12"
                        />
                    </button>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                id={`nav-link-${item.id}`}
                                key={item.id}
                                onClick={() => handleItemClick(item.id)}
                                className={`font-sans text-[12px] uppercase tracking-widest transition-all duration-200 cursor-pointer focus:outline-none py-1 relative ${
                                    activeTab === item.id
                                        ? 'text-gold font-semibold'
                                        : 'text-stone-600 hover:text-stone-900 font-medium'
                                }`}
                            >
                                <span>{item.label}</span>
                                {activeTab === item.id && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                                        transition={{
                                            type: 'spring',
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Action Zone: Lang Switch & Booking CTA */}
                    <div className="hidden sm:flex items-center space-x-4">
                        {/* Language Selection Switcher */}
                        <div className="flex items-center bg-stone-100 rounded-full p-0.5 border border-stone-200">
                            <button
                                onClick={() => onLanguageChange('en')}
                                className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
                                    currentLang === 'en'
                                        ? 'bg-stone-900 text-white shadow-xs'
                                        : 'text-stone-500 hover:text-stone-850'
                                }`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => onLanguageChange('id')}
                                className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
                                    currentLang === 'id'
                                        ? 'bg-stone-900 text-white shadow-xs'
                                        : 'text-stone-500 hover:text-stone-850'
                                }`}
                            >
                                ID
                            </button>
                        </div>

                        {/* Quick action button to trigger instant Reserve view */}
                        <button
                            id="header-book-cta"
                            onClick={() => handleItemClick('reserve')}
                            className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-xs transition-all duration-300 cursor-pointer border ${
                                activeTab === 'reserve'
                                    ? 'bg-gold text-white border-gold'
                                    : 'bg-stone-900 hover:bg-gold text-white border-stone-900 hover:border-gold'
                            }`}
                        >
                            <Calendar className="h-3.5 w-3.5" />
                            <span>
                                {currentLang === 'en'
                                    ? 'Book Direct'
                                    : 'Pesan Langsung'}
                            </span>
                        </button>
                    </div>

                    {/* Mobile Actions: Lang swap + Burger */}
                    <div className="flex items-center space-x-3 md:hidden">
                        <button
                            onClick={() =>
                                onLanguageChange(
                                    currentLang === 'en' ? 'id' : 'en',
                                )
                            }
                            className="flex items-center space-x-1 bg-stone-100 p-2 rounded-full border border-stone-200 text-stone-600 hover:text-stone-900 focus:outline-none text-[10px] font-bold"
                            aria-label="Toggle language"
                        >
                            <Globe className="h-3.5 w-3.5 text-gold shrink-0" />
                            <span>{currentLang === 'en' ? 'ID' : 'EN'}</span>
                        </button>

                        <button
                            id="mobile-menu-burger"
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className="p-2 bg-stone-100 hover:bg-stone-200 rounded-full border border-stone-200 text-stone-700 hover:text-stone-900 focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer Slide-Over */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        id="mobile-drawer-overlay"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-0 z-45 bg-cream pt-24 px-6 flex flex-col items-center justify-start min-h-screen"
                    >
                        <div className="text-center mb-10 flex flex-col items-center">
                            <img
                                src={sekarLogo}
                                alt="Sekar Sophia Villa"
                                className="h-16 w-auto object-contain"
                            />
                            <p className="font-mono text-[10px] tracking-widest text-stone-500 uppercase mt-2">
                                Bantul, Yogyakarta
                            </p>
                        </div>

                        <div className="flex flex-col items-center space-y-6 w-full max-w-xs">
                            {navItems.map((item, index) => (
                                <motion.button
                                    id={`mob-nav-link-${item.id}`}
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => handleItemClick(item.id)}
                                    className={`font-sans text-sm uppercase tracking-widest cursor-pointer focus:outline-none w-full py-2.5 border-b border-stone-100 text-center ${
                                        activeTab === item.id
                                            ? 'text-gold font-bold'
                                            : 'text-stone-600 hover:text-stone-900'
                                    }`}
                                >
                                    {item.label}
                                </motion.button>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.25 }}
                                className="pt-6 w-full flex flex-col space-y-4"
                            >
                                <button
                                    id="mobile-drawer-booking-cta"
                                    onClick={() => handleItemClick('reserve')}
                                    className="w-full text-center bg-gold hover:bg-gold-hover text-white py-3 rounded font-bold uppercase tracking-widest text-[11px] shadow-sm transition-all cursor-pointer"
                                >
                                    {currentLang === 'en'
                                        ? 'Book Direct'
                                        : 'Pesan Langsung'}
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
