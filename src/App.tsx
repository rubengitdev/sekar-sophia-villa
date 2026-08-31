import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { RoomAndFacilityPage } from './pages/RoomAndFacilityPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReservePage } from './pages/ReservePage';
import { LANGUAGES, VILLA_CONFIG } from './data/villaData';
import { LanguageCode } from './types';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * App Root Controller Component
 *
 * Functions as the central hub of the web application.
 * Highlights:
 * 1. Global Localization Store: Controls direct bilingual mapping ('en' <-> 'id') dynamically consumed across all child pages.
 * 2. Seamless Chapter Router: Manages tabs states synchronously, feeding back into the Sticky Header.
 * 3. Liquid Page Transitions: Wraps sections in Framer Motion wrappers, keeping DOM mounting fluid and clean.
 * 4. Unified Theme Canvas: Paints backing elements using soft creamy tones and custom luxury typography overlays.
 */
export default function App() {
    // Localization storage - standard codes supported: "en" | "id"
    const [currentLang, setCurrentLang] = useState<LanguageCode>('en');

    // Tab/Chapter router state - supports: "about" | "roomandfacility" | "gallery" | "reserve"
    const [activeTab, setActiveTab] = useState<string>('about');

    // Retrieve matching multilingual dictionaries based on active selection
    const translations = LANGUAGES[currentLang];

    /**
     * Smooth Scrolling Facilitator
     * Transitions scroll position elegantly back up to the zero vertical coordinate coordinate.
     */
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    /**
     * Link Hook Router
     * Performs dual action updates: changes active tab context and targets coordinates to top index on transition.
     */
    const handleFooterLinkClick = (tabId: string) => {
        setActiveTab(tabId);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            id="sekar-sophia-villa-site"
            className="min-h-screen bg-cream font-sans antialiased text-stone-900 selection:bg-gold/10 selection:text-gold"
        >
            {/* Header Sticky Strip */}
            <Navbar
                currentLang={currentLang}
                onLanguageChange={(lang) => setCurrentLang(lang)}
                translations={translations}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {/* Main Structural Layout Modules - Grouped beautifully into 4 cohesive views */}
            <main className="relative z-10 pt-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {activeTab === 'about' && (
                            <AboutPage
                                currentLang={currentLang}
                                translations={translations}
                                onExploreClick={() =>
                                    handleFooterLinkClick('roomandfacility')
                                }
                                onBookClick={() =>
                                    handleFooterLinkClick('reserve')
                                }
                            />
                        )}

                        {activeTab === 'roomandfacility' && (
                            <RoomAndFacilityPage
                                currentLang={currentLang}
                                translations={translations}
                            />
                        )}

                        {activeTab === 'gallery' && (
                            <GalleryPage
                                currentLang={currentLang}
                                translations={translations}
                            />
                        )}

                        {activeTab === 'reserve' && (
                            <ReservePage
                                currentLang={currentLang}
                                translations={translations}
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* High-style brand footer */}
            <footer
                id="global-footer"
                className="bg-warmgray text-stone-800 border-t border-stone-200/60 pt-14 pb-8 px-6 md:px-12 mt-12"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-stone-200 pb-10 text-center md:text-left">
                        {/* Branding Column */}
                        <div className="space-y-3">
                            <h3 className="font-serif text-xl font-bold text-stone-900 tracking-tight">
                                Sekar Sophia{' '}
                                <span className="text-gold">Villa</span>
                            </h3>
                            <p className="font-sans text-xs text-stone-500 font-light max-w-xs leading-relaxed mx-auto md:mx-0">
                                {currentLang === 'en'
                                    ? "An organic artistic sanctuary built to capture Bantul's heritage, designed for quiet minds."
                                    : 'Suaka seni organik yang didirikan untuk menangkap warisan budaya Bantul, dirancang bagi ketenangan jiwa.'}
                            </p>
                        </div>

                        {/* Inquiries / Direct Line Column */}
                        <div className="space-y-3 font-sans text-xs">
                            <span className="block text-[9px] font-mono uppercase text-stone-450 tracking-widest font-bold">
                                {currentLang === 'en'
                                    ? 'Reservations'
                                    : 'Reservasi Resmi'}
                            </span>
                            <p className="text-stone-600 font-light">
                                sekarsophiavilla@gmail.com
                            </p>
                            <a
                                href={`https://wa.me/${VILLA_CONFIG.contact.phone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gold font-bold hover:underline block mt-1"
                            >
                                +62 812-3456-7890 (Sophia Direct)
                            </a>
                        </div>

                        {/* Links and Policies */}
                        <div className="space-y-3 text-xs">
                            <span className="block text-[9px] font-mono uppercase text-stone-450 tracking-widest font-bold">
                                {currentLang === 'en'
                                    ? 'Quick Chapters'
                                    : 'Halaman Utama'}
                            </span>
                            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-stone-500 text-[11px] font-medium">
                                <button
                                    onClick={() =>
                                        handleFooterLinkClick('about')
                                    }
                                    className="hover:text-gold cursor-pointer"
                                >
                                    {currentLang === 'en'
                                        ? 'About'
                                        : 'Kisah Kami'}
                                </button>
                                <button
                                    onClick={() =>
                                        handleFooterLinkClick('roomandfacility')
                                    }
                                    className="hover:text-gold cursor-pointer"
                                >
                                    {currentLang === 'en'
                                        ? 'Room & Facility'
                                        : 'Kamar & Fasilitas'}
                                </button>
                                <button
                                    onClick={() =>
                                        handleFooterLinkClick('gallery')
                                    }
                                    className="hover:text-gold cursor-pointer"
                                >
                                    {currentLang === 'en'
                                        ? 'Gallery'
                                        : 'Galeri'}
                                </button>
                                <button
                                    onClick={() =>
                                        handleFooterLinkClick('reserve')
                                    }
                                    className="hover:text-gold cursor-pointer"
                                >
                                    {currentLang === 'en'
                                        ? 'Reserve'
                                        : 'Pemesanan'}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-[9px] font-mono text-stone-450 tracking-wider">
                        <span>
                            © 2026 SEKARSOPHIAVILLA. ALL RIGHTS RESERVED.
                        </span>
                        <div className="flex items-center space-x-2 mt-3 sm:mt-0 uppercase text-stone-500 font-bold">
                            <span>Managed by Sekar Sophia</span>
                            <span>•</span>
                            <span className="text-gold">Kasongan, Bantul</span>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Persistent Floating Back-to-Top Button */}
            <div className="fixed bottom-6 right-6 z-40">
                <button
                    onClick={handleScrollToTop}
                    className="p-2.5 bg-stone-900 hover:bg-gold text-white rounded-full border border-stone-850 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
                    aria-label="Scroll back to top"
                >
                    <ChevronUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
                </button>
            </div>
        </div>
    );
}
