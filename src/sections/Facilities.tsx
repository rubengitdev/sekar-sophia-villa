/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Tv, Flame, Wifi, Sparkles, Sun, Wind, Car, Coffee } from "lucide-react";
import { AMENITIES } from "../data/villaData";
import { LanguageCode, TranslationSet } from "../types";

interface FacilitiesProps {
  /** Master user language state */
  currentLang: LanguageCode;
  /** Active language translation sets */
  translations: TranslationSet;
}

// Maps static string keys inside the AMENITIES dataset with ready-to-mount visual Lucide React component nodes
const iconMap: Record<string, React.ReactNode> = {
  Tv: <Tv className="h-6 w-6 text-gold" />,
  FlameKindling: <Flame className="h-6 w-6 text-gold" />,
  Wifi: <Wifi className="h-6 w-6 text-gold animate-pulse" />,
  Sparkles: <Sparkles className="h-6 w-6 text-gold" />,
  Sun: <Sun className="h-6 w-6 text-gold" />,
  Wind: <Wind className="h-6 w-6 text-gold" />,
  Car: <Car className="h-6 w-6 text-gold" />,
  Coffee: <Coffee className="h-6 w-6 text-gold" />,
};

/**
 * Facilities Component
 * 
 * Renders a structured layout showcasing standard and bespoke high-end villa amenities.
 * Pillars:
 * 1. Curated Amenities Header: High-contrast title focusing on the peaceful nature of Bantul.
 * 2. Visual Bento Modules: Maps AMENITIES data into clean cards styled with custom shadows and active gold border glows.
 * 3. Exclusive Use Assurance Block: A centralized footnote assuring visitors that no shared bookings can disrupt their stay.
 */
export function Facilities({ currentLang, translations }: FacilitiesProps) {
  return (
    <section id="facilities" className="bg-[#fdfcfb] py-16 px-6 md:px-12 text-stone-900 border-t border-stone-200/40">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase font-semibold">
            {currentLang === "en" ? "Curated Amenities" : "Fasilitas Terpilih"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mt-2 leading-tight">
            {translations.facilitiesTitle}
          </h2>
          <p className="font-sans text-sm sm:text-base text-stone-600 mt-3 font-light leading-relaxed">
            {translations.facilitiesSubtitle}
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((amenity, idx) => (
            <div
              id={`facility-card-${idx}`}
              key={idx}
              className="group bg-white border border-stone-200/60 hover:border-gold/30 rounded-xl p-5 shadow-2xs hover:shadow-sm transition-all duration-355"
            >
              <div className="p-3 bg-stone-100 group-hover:bg-gold/10 inline-block rounded-lg mb-4 transition-colors duration-300">
                {iconMap[amenity.icon] || <Sparkles className="h-6 w-6 text-gold" />}
              </div>
              <h4 className="font-serif text-base sm:text-lg font-bold text-stone-900 tracking-tight mb-1.5">
                {amenity.name[currentLang]}
              </h4>
              <p className="font-sans text-stone-600 font-light text-xs sm:text-sm leading-relaxed">
                {amenity.description[currentLang]}
              </p>
            </div>
          ))}
        </div>

        {/* Comfort assurance notice */}
        <div className="mt-14 bg-stone-100/50 border border-stone-200/50 rounded-xl p-6 max-w-2xl mx-auto text-center font-sans">
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
            {currentLang === "en"
              ? "All listed facilities are fully private and exclusive to your group. Sophia manages direct villa upkeep daily to guarantee no shared bookings or overlap interruptions."
              : "Seluruh fasilitas terdaftar sepenuhnya privat bagi kunjungan Anda. Sophia menjamin kepuasan ekstra tanpa risiko gangguan tamu luar."}
          </p>
        </div>

      </div>
    </section>
  );
}
