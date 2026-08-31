import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Image } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryItem, LanguageCode } from '../types';
import { getDirectImageUrl } from '../utils/imageUtils';

interface LightboxProps {
    /** Array containing full category-scoped gallery image datasets */
    items: GalleryItem[];
    /** Integer representing index coordinates in the filtered array, or null if collapsed */
    currentIndex: number | null;
    /** Callback triggered to close the lightbox modal and collapse the viewport overlay */
    onClose: () => void;
    /** Callback triggered when navigators invoke index alterations (e.g., transition next/previous photo) */
    onNavigate: (index: number) => void;
    /** Active language string used to display controls translation headers */
    currentLang: LanguageCode;
}

/**
 * Lightbox Component
 *
 * Cinematic, immersive media container that takes over the entire browser viewport on photo click.
 * Key Pillars:
 * 1. Global Keyboard Listeners: Installs global window listeners mapping Escape, ArrowLeft, and ArrowRight keys.
 * 2. Body Scroll Suspension: Freezes overflow layout attributes of the host body layer during overlay mounting.
 * 3. Fluid Animated Carousel: Uses Framer Motion's hardware-accelerated entry configurations.
 */
export function Lightbox({
    items,
    currentIndex,
    onClose,
    onNavigate,
    currentLang,
}: LightboxProps) {
    useEffect(() => {
        if (currentIndex === null) return;

        /**
         * Window Keyboard Input Router
         * Links keyboard button states with corresponding pagination directions.
         */
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') {
                onNavigate((currentIndex - 1 + items.length) % items.length);
            }
            if (e.key === 'ArrowRight') {
                onNavigate((currentIndex + 1) % items.length);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Prevent background scrolling and micro-bouncing during active overlays
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [currentIndex, onNavigate, onClose, items.length]);

    // Safeguard: Do not render if closed or data state is empty
    if (
        currentIndex === null ||
        !items ||
        items.length === 0 ||
        !items[currentIndex]
    )
        return null;

    const currentItem = items[currentIndex];

    return (
        <AnimatePresence>
            <div
                onClick={onClose}
                className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-950/98 backdrop-blur-xl cursor-zoom-out"
            >
                {/* Top Header Controls */}
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:p-6 text-white bg-linear-to-b from-black/80 to-transparent"
                >
                    <div className="flex items-center space-x-3">
                        <span className="bg-gold/20 text-gold px-2.5 py-1 rounded text-[10px] font-mono tracking-widest uppercase border border-gold/30">
                            {currentItem.category}
                        </span>
                        <span className="text-xs font-mono text-stone-400">
                            {currentIndex + 1} / {items.length}
                        </span>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                        className="flex items-center space-x-2 px-4 py-2 bg-stone-900/90 hover:bg-stone-800 rounded-full border border-stone-800 text-stone-200 hover:text-white transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold pointer-events-auto"
                        aria-label="Close lightbox"
                    >
                        <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                            {currentLang === 'en' ? 'Close' : 'Tutup'}
                        </span>
                        <X className="h-4.5 w-4.5" />
                    </button>
                </div>

                {/* Previous Navigation Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onNavigate(
                            (currentIndex - 1 + items.length) % items.length,
                        );
                    }}
                    className="absolute left-4 z-40 p-3 bg-stone-900/50 hover:bg-gold/90 text-white rounded-full transition-all backdrop-blur-sm cursor-pointer focus:outline-none"
                    aria-label="Previous photo"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Center Image Container */}
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="w-full max-w-5xl px-4 md:px-12 flex flex-col items-center justify-center max-h-[75vh]"
                >
                    <motion.img
                        key={currentItem.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        src={getDirectImageUrl(currentItem.url)}
                        alt={currentItem.caption[currentLang]}
                        className="max-h-[70vh] max-w-full object-contain rounded shadow-2xl border border-stone-800/40"
                        referrerPolicy="no-referrer"
                    />
                </div>

                {/* Next Navigation Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onNavigate((currentIndex + 1) % items.length);
                    }}
                    className="absolute right-4 z-40 p-3 bg-stone-900/50 hover:bg-gold/90 text-white rounded-full transition-all backdrop-blur-sm cursor-pointer focus:outline-none"
                    aria-label="Next photo"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Bottom Caption and Details */}
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-stone-950/70 to-transparent pt-12 pb-6 px-6 md:px-12 text-center"
                >
                    <div className="max-w-2xl mx-auto">
                        <p className="font-serif text-sm md:text-base text-stone-200 tracking-wide leading-relaxed">
                            {currentItem.caption[currentLang]}
                        </p>
                        <div className="flex justify-center items-center space-x-2 mt-3 text-[10px] font-mono text-stone-500 uppercase tracking-widest">
                            <span>Sekar Sophia Villa Experience</span>
                            <span>•</span>
                            <span className="text-gold">Kasongan, Bantul</span>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
}
