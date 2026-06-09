/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Trees, Compass, Heart, Sparkles, Sprout } from "lucide-react";
import { USP_ITEMS } from "../data/villaData";
import { LanguageCode, TranslationSet } from "../types";
import { ABOUT_PHOTOS } from "../data/photos";
import { getDirectImageUrl } from "../utils/imageUtils";

interface AboutProps {
  /** Language switcher state */
  currentLang: LanguageCode;
  /** Active translations dictionary mapping */
  translations: TranslationSet;
}

// Map key string references inside USP_ITEMS object payloads with actual lucide-react vector nodes
const iconMap: Record<string, React.ReactNode> = {
  Trees: <Trees className="h-6 w-6 text-gold animate-pulse" />,
  Compass: <Compass className="h-6 w-6 text-gold" />,
  Heart: <Heart className="h-6 w-6 text-gold" />,
};

/**
 * About Component
 * 
 * Provides an editorial narrative explaining the heritage story of Sekar Sophia.
 * Key Sections:
 * 1. Visual Section Header: Gold-bordered displayed headline anchoring Javanese-Modern branding.
 * 2. Narrative Prose: Tells Sophia's founding goals, Kasongan arts, and wood construction.
 * 3. Numerical Statistics Bar: Metric summaries tracking construction year, land size, and design archetype.
 * 4. Kiln Pottery Badge: Overlay noting proximity to Bantul craftsmen.
 * 5. Unique Value Cards (USP): Horizontal blocks showing physical perks.
 */
export function About({ currentLang, translations }: AboutProps) {
  return (
    <section id="about" className="bg-[#fdfcfb] py-16 px-6 md:px-12 text-stone-900 border-t border-stone-200/50">
      <div className="mx-auto max-w-7xl">
        
        {/* Modern Section Header */}
        <div className="text-center md:text-left mb-12 border-l-4 border-gold pl-4 max-w-2xl">
          <span className="font-mono text-xs tracking-[0.2em] uppercase font-semibold text-gold">
            {translations.aboutTitle}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mt-2 leading-tight">
            {translations.aboutSubtitle}
          </h2>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
              {translations.aboutStoryTitle}
            </h3>
            <p className="font-sans text-stone-600 font-light text-sm sm:text-base leading-relaxed">
              {translations.aboutStoryText}
            </p>
            
            {/* Quick stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
              <div className="border-t border-stone-200 pt-3">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-gold">2022</span>
                <p className="font-sans text-[10px] text-stone-500 mt-1 uppercase tracking-[0.1em] font-semibold">
                  {currentLang === "en" ? "Year Opened" : "Tahun Dibuka"}
                </p>
              </div>
              <div className="border-t border-stone-200 pt-3">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-gold">500 m²</span>
                <p className="font-sans text-[10px] text-stone-500 mt-1 uppercase tracking-[0.1em] font-semibold">
                  {currentLang === "en" ? "Estate Area" : "Luas Lahan"}
                </p>
              </div>
              <div className="border-t border-stone-200 pt-3 col-span-2 sm:col-span-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-gold">Minimalist-Modern</span>
                <p className="font-sans text-[10px] text-stone-500 mt-1 uppercase tracking-[0.1em] font-semibold">
                  {currentLang === "en" ? "Architecture" : "Arsitektur"}
                </p>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative aspect-square overflow-hidden rounded-xl shadow-xs border border-stone-200/60">
              <img
                src={getDirectImageUrl(ABOUT_PHOTOS.openConceptLiving)}
                alt="Open concept living Joglo pavilion"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/5" />
            </div>

            {/* Overlap Card */}
            <div className="absolute -bottom-4 -left-4 hidden md:block bg-white text-stone-900 p-5 rounded-lg border border-stone-200/70 shadow-sm max-w-xs">
              <div className="flex items-center space-x-2 text-gold">
                <Sprout className="h-4.5 w-4.5" />
                <span className="font-mono text-[9px] tracking-widest uppercase font-bold">Nature Aligned</span>
              </div>
              <h4 className="font-serif text-sm font-semibold mt-1.5 text-stone-900">
                {currentLang === "en" ? "Kasongan Sourcing" : "Sourcing Kasongan"}
              </h4>
              <p className="font-sans text-[10px] text-stone-500 mt-1 leading-relaxed font-light">
                {currentLang === "en" 
                  ? "Every piece of heritage pottery was kiln-baked locally within minutes of our grounds."
                  : "Pot terakota langka diperoleh dari pembakaran tradisional di sekitar properti kami."}
              </p>
            </div>
          </div>
        </div>

        {/* Unique Selling Points Bento */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              {translations.uspTitle}
            </h3>
            <p className="font-mono text-[10px] text-gold uppercase tracking-[0.15em] mt-2 font-semibold">
              {translations.propertyOverviewSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {USP_ITEMS.map((usp, idx) => (
              <div
                id={`usp-card-${idx}`}
                key={idx}
                className="bg-white border border-stone-200/65 rounded-xl p-6 shadow-2xs hover:shadow-sm hover:border-gold/30 transition-all duration-300"
              >
                <div className="p-3 bg-stone-100/60 inline-block rounded-lg mb-4">
                  {iconMap[usp.icon] || <Sparkles className="h-6 w-6 text-gold" />}
                </div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-stone-900 tracking-tight mb-2">
                  {usp.title[currentLang]}
                </h4>
                <p className="font-sans text-stone-600 font-light text-xs sm:text-sm leading-relaxed">
                  {usp.description[currentLang]}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
