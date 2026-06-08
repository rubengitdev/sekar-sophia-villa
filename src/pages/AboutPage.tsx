/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { LanguageCode, TranslationSet } from "../types";

interface StoryPageProps {
  currentLang: LanguageCode;
  translations: TranslationSet;
  /** Callback triggered when guest requests background exploration (e.g., jump to Living/Spaces chapter) */
  onExploreClick: () => void;
  /** Callback triggered when guest requests immediate rate estimations (e.g., jump to Reserve chapter) */
  onBookClick: () => void;
}

/**
 * StoryPage Component (Chapter 1: Story)
 * 
 * Serves as the main entrance page of the villa application. It bundles two critical areas:
 * 1. Hero Section: Direct high-contrast Javanese wood backdrop displaying hospitality statistics 
 *    and primary visual calls-to-action (CTAs).
 * 2. About Section: Chronological overview of Sophia's artistic vision, property outline, 
 *    Bantul clay artisans, and structural parameters accompanied by organic imagery.
 */
export function AboutPage({ currentLang, translations, onExploreClick, onBookClick }: StoryPageProps) {
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
