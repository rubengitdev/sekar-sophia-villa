/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { CalendarCheck, ShieldCheck, Clock } from "lucide-react";
import { VILLA_CONFIG } from "../data/villaData";
import { BookingWidget } from "../components/BookingWidget";
import { LanguageCode, TranslationSet } from "../types";

interface RatesProps {
  /** Active user dictionary selection code string */
  currentLang: LanguageCode;
  /** Direct translations mapping nodes */
  translations: TranslationSet;
}

/**
 * Rates Component (Rates Sheet and General Pricing Page)
 * 
 * Embeds direct pricing panels next to the main interactive BookingWidget.
 * Key Sections:
 * 1. Base Rate Display: Highlights standard nightly baseline rates using localized currencies.
 * 2. Seasonal Calendars list: Tabular list showcasing dates, periods, and pricing for high-season events.
 * 3. House Rules and Timings Block: Highlights official Check-In/Check-Out guidelines and custom accommodation rules.
 * 4. Live Booking Widget Panel: Houses the main date calculation engine.
 */
export function Rates({ currentLang, translations }: RatesProps) {
  /**
   * Currency Formatter
   * Maps integers to clean Rupiah text formatted matching active language standards.
   */
  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat(currentLang === "en" ? "en-US" : "id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace("IDR", "Rp");
  };

  return (
    <section id="rates" className="bg-[#fdfcfb] text-stone-900 py-16 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase font-semibold">
            {translations.navRates}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mt-2 leading-tight">
            {translations.ratesTitle}
          </h2>
          <p className="font-sans text-sm sm:text-base text-stone-600 mt-3 font-light leading-relaxed">
            {translations.ratesSubtitle}
          </p>
        </div>

        {/* Pricing Content Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Rate Sheets and Guidelines */}
          <div className="lg:col-span-6 space-y-8 text-stone-700">
            
            {/* Standard Rate Headline */}
            <div className="bg-white border border-stone-200/80 rounded-xl p-6 relative overflow-hidden shadow-xs">
              <div className="absolute top-0 right-0 h-20 w-20 translate-x-8 -translate-y-8 bg-gold/5 blur-xl rounded-full" />
              <span className="text-[10px] font-mono tracking-wider uppercase text-gold font-semibold">
                {translations.nightlyRateLabel}
              </span>
              <div className="flex items-baseline space-x-1 mt-1.5 font-serif">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
                  {formatMoney(VILLA_CONFIG.pricing.baseRate)}
                </span>
                <span className="font-sans text-xs text-stone-500">/ {currentLang === "en" ? "night" : "malam"}</span>
              </div>
              <p className="font-sans text-sm text-stone-600 mt-3 font-light leading-relaxed">
                {currentLang === "en"
                  ? "Standard occupancy: up to 4 adults. Max 6 guests (additional latex floor rollaways configurable on direct inquiry)."
                  : "Kapasitas standar: hingga 4 orang dewasa. Maksimal 6 tamu (kasur latex lantai tambahan tersedia via koordinasi langsung)."}
              </p>
            </div>

            {/* Seasonal Pricing Calendars */}
            <div className="space-y-4">
              <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 flex items-center space-x-2 border-b border-stone-150 pb-2">
                <CalendarCheck className="h-4.5 w-4.5 text-gold" />
                <span>{translations.seasonalPricingTitle}</span>
              </h3>
              <div className="space-y-3">
                {VILLA_CONFIG.pricing.seasons.map((season, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-white border border-stone-200/60 p-4 rounded-xl hover:border-gold/20 transition-all font-sans text-xs sm:text-sm shadow-2xs"
                  >
                    <div>
                      <span className="font-serif font-bold text-stone-900 block text-sm sm:text-base">
                        {season.name[currentLang]}
                      </span>
                      <span className="text-xs text-stone-500 font-light block mt-0.5">
                        {translations.seasonalPeriod}: {season.dates[currentLang]}
                      </span>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <span className="font-serif font-bold text-gold text-base sm:text-lg block">
                        {formatMoney(season.rate)}
                      </span>
                      <span className="font-mono text-[9px] text-stone-400 block uppercase tracking-wider">/ {currentLang === "en" ? "night" : "malam"}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* House Guidelines & Policies */}
            <div className="space-y-4">
              <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 flex items-center space-x-2 border-b border-stone-150 pb-2">
                <ShieldCheck className="h-4.5 w-4.5 text-gold" />
                <span>{translations.bookingRulesTitle}</span>
              </h3>
              
              {/* Check times summary */}
              <div className="grid grid-cols-2 gap-4 bg-stone-50/50 p-3 rounded-xl border border-stone-150 text-xs leading-none">
                <div className="flex items-center space-x-2.5 bg-white p-2.5 rounded-lg border border-stone-200/50">
                  <Clock className="h-4 w-4 text-gold shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">{translations.checkInLabel}</span>
                    <span className="font-sans text-sm font-semibold text-stone-900 block mt-1">2:00 PM (WIB)</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2.5 bg-white p-2.5 rounded-lg border border-stone-200/50">
                  <Clock className="h-4 w-4 text-gold shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">{translations.checkOutLabel}</span>
                    <span className="font-sans text-sm font-semibold text-stone-900 block mt-1">12:00 PM (WIB)</span>
                  </div>
                </div>
              </div>

              {/* List item rules */}
              <ul className="space-y-2 text-xs sm:text-sm font-sans text-stone-600 font-light">
                {VILLA_CONFIG.pricing.rules[currentLang].map((rule, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 leading-relaxed">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0 mt-2" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Interactive Calculator widget */}
          <div className="lg:col-span-6">
            <BookingWidget currentLang={currentLang} translations={translations} />
          </div>

        </div>

      </div>
    </section>
  );
}
