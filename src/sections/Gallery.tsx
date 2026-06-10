/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Maximize } from "lucide-react";
import { GALLERY_ITEMS } from "../data/villaData";
import { Lightbox } from "../components/Lightbox";
import { LanguageCode, TranslationSet } from "../types";
import { getDirectImageUrl } from "../utils/imageUtils";

interface GalleryProps {
  /** Master user language selection code */
  currentLang: LanguageCode;
  /** Translation dictionaries */
  translations: TranslationSet;
}

// Allowed category filter tags
type FilterCategory = "all" | "exterior" | "interior" | "pool" | "surroundings";

/**
 * Gallery Component
 * 
 * Provides an aesthetic, filterable visual showcase of the villa's architecture and grounds.
 * Key Pillars:
 * 1. Cinematic Filter Tabs: Category selectors running on responsive toggle chips.
 * 2. Visual Hover Grid: Staggered tiles with smooth overlays, custom tags, and zoom modifiers.
 * 3. Maximize Spotlight overlays: Links individual thumbnail click events with full-viewport Lightbox states.
 */
export function Gallery({ currentLang, translations }: GalleryProps) {
  // Currently active filter tag default: 'all'
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  // Lightbox selection holder context tracking active photo index
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Computes active items list based on selected filter state
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  const categories: { label: string; value: FilterCategory }[] = [
    { label: currentLang === "en" ? "All Photos" : "Semua", value: "all" },
    { label: currentLang === "en" ? "Architecture" : "Arsitektur", value: "exterior" },
    { label: currentLang === "en" ? "Suites" : "Suasana Kamar", value: "interior" },
    { label: currentLang === "en" ? "Saltpool" : "Kolam Air Asin", value: "pool" },
    { label: currentLang === "en" ? "Surrounds" : "Sekitar", value: "surroundings" },
  ];

  /** Updates index to open lightboxes dynamically */
  const handleOpenLightbox = (itemIndex: number) => {
    setLightboxIndex(itemIndex);
  };

  return (
    <section id="gallery" className="bg-[#fdfcfb] py-16 px-6 md:px-12 text-stone-900">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="border-l-4 border-gold pl-4 max-w-xl">
            <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase font-semibold">
              {translations.navGallery}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mt-2 leading-tight">
              {currentLang === "en" ? "Sekar Sophia Villa Aesthetic" : "Estetika Sekar Sophia Villa"}
            </h2>
          </div>
          <div className="font-sans text-xs sm:text-sm text-stone-500 font-light max-w-xs shrink-0 self-start md:self-end">
            {currentLang === "en"
              ? "All images captured under natural Kasongan sunlight."
              : "Foto rilis asli area properti di bawah sinar matahari alami Bantul."}
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-stone-200/50 pb-4 justify-start">
          {categories.map((cat) => (
            <button
              id={`filter-btn-${cat.value}`}
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-4 py-2 rounded-lg text-[10px] tracking-wider uppercase font-bold transition-all duration-300 cursor-pointer focus:outline-none ${
                activeFilter === cat.value
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:border-stone-400"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              id={`gallery-thumb-${item.id}`}
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-stone-100 aspect-video md:aspect-[4/3] shadow-2xs transition-transform hover:-translate-y-1 duration-500 border border-stone-200/50"
            >
              <img
                src={getDirectImageUrl(item.url)}
                alt={item.caption[currentLang]}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />
              
              <div className="absolute top-4 right-4 p-2 bg-[#fdfcfb]/90 border border-stone-200 text-gold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs">
                <Maximize className="h-4 w-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 pt-10 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="bg-gold text-[8px] font-mono tracking-widest uppercase font-bold px-2 py-0.5 rounded text-white inline-block mb-1.5">
                  {item.category}
                </span>
                <p className="font-serif text-xs text-stone-100 font-medium line-clamp-1">
                  {item.caption[currentLang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {lightboxIndex !== null && (
          <Lightbox
            items={filteredItems}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={(newIdx) => setLightboxIndex(newIdx)}
            currentLang={currentLang}
          />
        )}

      </div>
    </section>
  );
}
