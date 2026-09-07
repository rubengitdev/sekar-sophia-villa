import { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../../data/villaData';
import { LanguageCode, TranslationSet } from '../../types';
import { getDirectImageUrl } from '../../utils/imageUtils';

interface ReviewsProps {
    currentLang: LanguageCode;
    translations: TranslationSet;
}

export function Reviews({ currentLang, translations }: ReviewsProps) {
    // Coordinates current index coordinate pointer inside REVIEWS list datasets
    const [activeIndex, setActiveIndex] = useState<number>(0);

    /** Progressively cycles testimonials forward */
    const handleNextReview = () => {
        setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
    };

    /** Regressively steps testimonials backward */
    const handlePrevReview = () => {
        setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
    };

    // Extracts current review item reference point
    const activeReview = REVIEWS[activeIndex];

    return (
        <section
            id="reviews"
            className="bg-cream text-stone-900 py-16 px-6 md:px-12"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase font-semibold">
                        {translations.navReviews}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mt-2 leading-tight">
                        {translations.reviewsTitle}
                    </h2>
                    <p className="font-sans text-sm sm:text-base text-stone-600 mt-3 font-light leading-relaxed">
                        {translations.reviewsSubtitle}
                    </p>
                </div>

                {/* Highlight Quote Box */}
                <div className="relative max-w-3xl mx-auto bg-white border border-stone-250/70 p-6 md:p-10 rounded-2xl shadow-xs">
                    {/* Decorative quote mark */}
                    <div className="absolute top-6 left-6 text-gold/5 pointer-events-none">
                        <Quote className="h-16 w-16 transform -scale-x-100" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center space-y-5">
                        {/* Rating Stars */}
                        <div className="flex items-center space-x-1">
                            {[...Array(activeReview.rating)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-4 w-4 fill-gold text-gold"
                                />
                            ))}
                        </div>

                        {/* Comment Copy */}
                        <blockquote className="font-serif text-base sm:text-lg md:text-xl text-stone-800 tracking-wide leading-relaxed italic max-w-2xl">
                            "{activeReview.comment[currentLang]}"
                        </blockquote>

                        {/* Guest Identifier */}
                        <div className="flex items-center space-x-4 pt-4 border-t border-stone-150 w-full max-w-xs justify-center">
                            <img
                                src={getDirectImageUrl(activeReview.avatar)}
                                alt={activeReview.name}
                                className="w-11 h-11 rounded-full object-cover border border-gold/30 shadow-xs"
                                referrerPolicy="no-referrer"
                            />
                            <div className="text-left font-sans">
                                <span className="font-serif font-bold text-stone-900 text-sm block">
                                    {activeReview.name}
                                </span>
                                <span className="font-mono text-[8px] tracking-widest uppercase text-stone-400 block mt-0.5">
                                    {activeReview.country} • {activeReview.date}
                                </span>
                            </div>
                        </div>

                        {/* Carousel Slide Indicators */}
                        <div className="flex items-center space-x-2 pt-4">
                            {REVIEWS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                                        activeIndex === i
                                            ? 'w-6 bg-gold'
                                            : 'w-1.5 bg-stone-200 hover:bg-stone-300'
                                    }`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Left/Right Navigation */}
                        <div className="flex space-x-3 pt-1">
                            <button
                                onClick={handlePrevReview}
                                className="px-3.5 py-1.5 border border-stone-200 hover:border-gold hover:text-gold text-stone-500 bg-white hover:bg-gold/5 rounded text-[10px] font-mono tracking-widest uppercase cursor-pointer transition-colors"
                            >
                                {currentLang === 'en' ? 'Prev' : 'Sblm'}
                            </button>
                            <button
                                onClick={handleNextReview}
                                className="px-3.5 py-1.5 border border-stone-200 hover:border-gold hover:text-gold text-stone-500 bg-white hover:bg-gold/5 rounded text-[10px] font-mono tracking-widest uppercase cursor-pointer transition-colors"
                            >
                                {currentLang === 'en' ? 'Next' : 'Slanj'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
