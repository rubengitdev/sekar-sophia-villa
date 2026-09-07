import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { LanguageCode, TranslationSet } from '../types';

interface StoryPageProps {
    currentLang: LanguageCode;
    translations: TranslationSet;
    /** Callback triggered when guest requests background exploration (e.g., jump to Living/Spaces chapter) */
    onExploreClick: () => void;
    /** Callback triggered when guest requests immediate rate estimations (e.g., jump to Reserve chapter) */
    onBookClick: () => void;
}

export function AboutPage({
    currentLang,
    translations,
    onExploreClick,
    onBookClick,
}: StoryPageProps) {
    return (
        <div id="story-page" className="animate-fade-in text-stone-800">
            {/* 1. HERO - Dramatic visual overlay spotlighting direct conversion controls */}
            <Hero
                currentLang={currentLang}
                translations={translations}
                onExploreClick={onExploreClick}
                onBookClick={onBookClick}
            />

            {/* 2. ABOUT - Deeper brand history detailing Javanese wooden Joglo heritage & pottery */}
            <About currentLang={currentLang} translations={translations} />
        </div>
    );
}
