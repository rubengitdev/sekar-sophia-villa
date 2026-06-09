/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { LanguageCode, TranslationSet } from "../types";
import { HERO_PHOTOS } from "../data/photos/index";
import { getDirectImageUrl } from "../utils/imageUtils";

interface HeroProps {
  /** User language context */
  currentLang: LanguageCode;
  /** Active visual translations dictionary mapping */
  translations: TranslationSet;
  /** Callback triggered to jump down into suites and spaces explorer */
  onExploreClick: () => void;
  /** Callback triggered to jump down into direct rate calculator */
  onBookClick: () => void;
}

/**
 * Hero Component (Hero Header Billboard)
 * 
 * Renders the primary landing stage of the villa platform.
 * Features:
 * 1. High-Resolution Sunlit Background: Immersive sunset pool view utilizing lazy Google Drive proxies.
 * 2. Frosted Crystal UI Panel: Framed glass mockup (`backdrop-blur-xl bg-white/45`) protecting light-contrast text content.
 * 3. Entrance Slide Animations: Staggered entry motions running on hardware-accelerated vectors.
 * 4. Premium Hotel Metadata: Displays quick bullet statistics tracking review ratings (Superhost 4.9+) and private status.
 */
export function Hero({ currentLang, translations, onExploreClick, onBookClick }: HeroProps) {
  return (
    <header
      id="hero-header"
      className="relative flex h-[calc(100vh-5rem)] min-h-[600px] md:min-h-[700px] w-full items-center justify-center overflow-hidden bg-[#fdfcfb] text-stone-900"
    >
      {/* Immersive Hero High-Res Background with Elegant Light Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={getDirectImageUrl(HERO_PHOTOS.backgroundImage)}
          alt="Sekar Sophia Sunset Pool View"
          className="h-full w-full object-cover opacity-80 transition-opacity duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Only a subtle bottom fade-out to blend perfectly with the ivory page background */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fdfcfb] to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-8 pb-10">
        {/* Elegant frosted glass panel that ensures flawless light contrast while letting the beautiful background image show through with an exquisite crystal glow */}
        <div className="w-full max-w-2xl bg-[#fdfcfb]/45 backdrop-blur-xl rounded-2xl p-6 sm:p-10 md:p-12 border border-white/60 shadow-[0_24px_60px_rgba(40,25,12,0.08)] flex flex-col items-center">
          {/* Superior Boutique Hotel Tag */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 flex items-center space-x-2 rounded-full border border-white/70 bg-white/70 px-4.5 py-1.5 font-mono text-[9px] sm:text-[10px] tracking-[4px] uppercase text-stone-900 font-bold shadow-2xs backdrop-blur-xs select-none"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold fill-gold/10" />
            <span>Sekar Sophia Villa</span>
          </motion.div>

          {/* Elegant Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 leading-[1.15]"
          >
            {translations.heroTagline}
          </motion.h1>

          {/* Descriptive Narrative Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="mt-5 max-w-xl font-sans text-xs sm:text-sm md:text-base text-stone-800 tracking-wide font-medium leading-relaxed"
          >
            {translations.heroSubheadline}
          </motion.p>

          {/* CTA Button Actions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full justify-center max-w-sm sm:max-w-none"
          >
            <button
              id="hero-explore-cta"
              onClick={onExploreClick}
              className="w-full sm:w-auto bg-stone-900 hover:bg-gold text-white px-8 py-3.5 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer focus:outline-none"
            >
              {currentLang === "en" ? "Explore Suites" : "Lihat Kamar"}
            </button>
            <button
              id="hero-book-cta"
              onClick={onBookClick}
              className="w-full sm:w-auto bg-white border border-stone-250 hover:border-gold hover:text-gold text-stone-750 px-8 py-3.5 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-xs transition-all duration-300 cursor-pointer focus:outline-none"
            >
              {translations.navRates}
            </button>
          </motion.div>

          {/* Trust Badges Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 border-t border-stone-200/60 pt-6 text-center w-full"
          >
            <div className="flex flex-col items-center">
              <span className="font-serif text-base sm:text-xl font-bold text-gold">4.9+</span>
              <span className="font-mono text-[8px] tracking-widest text-stone-500 uppercase mt-1">Superhost Rated</span>
            </div>
            <div className="flex flex-col items-center border-x border-stone-200/50 px-1 sm:px-3">
              <span className="font-serif text-base sm:text-xl font-bold text-gold">100%</span>
              <span className="font-mono text-[8px] tracking-widest text-stone-500 uppercase mt-1">Private Retreat</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-base sm:text-xl font-bold text-gold">Kasongan</span>
              <span className="font-mono text-[8px] tracking-widest text-stone-500 uppercase mt-1">Bantul, Jogja</span>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
