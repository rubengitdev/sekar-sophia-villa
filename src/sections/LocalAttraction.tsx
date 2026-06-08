/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Car, MapPin } from "lucide-react";
import { ATTRACTIONS } from "../data/villaData";
import { LanguageCode, TranslationSet } from "../types";
import { getDirectImageUrl } from "../utils/imageUtils";

interface LocalAttractionProps {
  currentLang: LanguageCode;
  translations: TranslationSet;
}

type CategoryFilter = "all" | "beach" | "restaurant" | "culture";

/**
 * LocalAttraction Component
 * 
 * Renders a visually aesthetic guide showcasing points of interest around Yogyakarta, 
 * Bantul, and Parangtritis beaches. Guests can discover handpainted pottery villages,
 * local organic eateries and seaside areas.
 * 
 * Pillars:
 * 1. Filter Chips: Reactive category toggles updating the layout layout instantly.
 * 2. Visual Cards: Grid layout listing images and multilingual descriptions.
 * 3. Distance Pill metrics: Uses 'lucide-react' vehicle icons paired with custom km measurements.
 */
export function LocalAttraction({ currentLang, translations }: LocalAttractionProps) {
  // Category state filter: defaults to 'all' spots
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const categoriesSet: { label: string; value: CategoryFilter }[] = [
    { label: currentLang === "en" ? "All Spots" : "Semua Lokasi", value: "all" },
    { label: currentLang === "en" ? "Yogyakarta Culture" : "Budaya Jawa", value: "culture" },
    { label: currentLang === "en" ? "Beaches" : "Pantai", value: "beach" },
    { label: currentLang === "en" ? "Bespoke Dining" : "Kuliner Bantul", value: "restaurant" },
  ];

  // Filters attractions database array based on reactive category key choice
  const filteredAttractions = ATTRACTIONS.filter((att) => {
    if (activeCategory === "all") return true;
    return att.category === activeCategory;
  });

  return (
    <section id="attractions" className="bg-[#fdfcfb] py-16 px-6 md:px-12 text-stone-900 border-t border-stone-200/40">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12 border-l-4 border-gold pl-4 max-w-2xl font-sans">
          <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase font-semibold">
            {translations.navAttractions}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mt-2 leading-tight">
            {translations.attractionsTitle}
          </h2>
          <p className="font-sans text-sm sm:text-base text-stone-600 mt-3 font-light leading-relaxed">
            {translations.attractionsSubtitle}
          </p>
        </div>  

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-10 justify-start">
          {categoriesSet.map((cat, idx) => (
            <button
              id={`att-filter-chip-${cat.value}`}
              key={idx}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer focus:outline-none ${
                activeCategory === cat.value
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:border-stone-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Attractions Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAttractions.map((attSnippet) => (
            <div
              id={`att-item-${attSnippet.id}`}
              key={attSnippet.id}
              className="flex flex-col sm:flex-row bg-white border border-stone-200/60 hover:border-gold/20 rounded-xl overflow-hidden shadow-2xs hover:shadow-sm transition-all duration-350 sm:min-h-56"
            >
              
              {/* Image side */}
              <div className="sm:w-2/5 relative h-44 sm:h-auto overflow-hidden shrink-0">
                <img
                  src={getDirectImageUrl(attSnippet.image)}
                  alt={attSnippet.name[currentLang]}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating category banner */}
                <span className="absolute top-3 left-3 bg-[#fdfcfb]/90 border border-gold/25 text-gold text-[8px] font-mono tracking-widest uppercase font-bold py-1 px-2 rounded font-semibold backdrop-blur-xs">
                  {attSnippet.category}
                </span>
              </div>

              {/* Text info side */}
              <div className="p-5 sm:w-3/5 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-1 font-mono text-[8px] tracking-widest uppercase text-stone-400">
                    <MapPin className="h-3 w-3 text-gold shrink-0" />
                    <span>Kasongan, Bantul</span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 tracking-tight">
                    {attSnippet.name[currentLang]}
                  </h3>
                  <p className="font-sans text-stone-600 font-light text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {attSnippet.description[currentLang]}
                  </p>
                </div>

                {/* Distance specifics pill */}
                <div className="flex items-center space-x-4 border-t border-stone-150 pt-3 mt-3 text-[10px] font-mono font-semibold text-stone-500">
                  <div className="flex items-center space-x-1">
                    <span className="text-stone-400 uppercase tracking-widest font-bold">{translations.distanceLabel}:</span>
                    <span className="text-gold font-bold">{attSnippet.distance}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Car className="h-3.5 w-3.5 text-stone-400" />
                    <span className="font-medium">{attSnippet.duration}</span>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
