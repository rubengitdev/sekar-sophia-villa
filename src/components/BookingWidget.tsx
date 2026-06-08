/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Calendar, UserPlus, FileText, Send, Sparkles } from "lucide-react";
import { VILLA_CONFIG } from "../data/villaData";
import { LanguageCode, TranslationSet } from "../types";

interface BookingWidgetProps {
  currentLang: LanguageCode;
  translations: TranslationSet;
}

/**
 * BookingWidget Component
 * 
 * This component handles the interactive real-time stay rate calculations and
 * triggers direct customer reservations over WhatsApp with instant quotation logs.
 * 
 * Key Pillars of the System:
 * 1. Reactive State Hook: Computes stay parameters on-the-fly when inputs change.
 * 2. Timezone-Resilient Math: Circumvents calendar daylight deviations with strict noon date offsets.
 * 3. Daily Rate Engine: Calculates dates sequentially to apply custom seasonal premiums dynamically.
 * 4. WhatsApp Direct API Dispatcher: Serializes user reservation telemetry into an elegant URL query string.
 */
export function BookingWidget({ currentLang, translations }: BookingWidgetProps) {
  
  /**
   * Helper: Generates a formatted date string (YYYY-MM-DD) Relative to Today's Date.
   * Useful for setting default date attributes and calendar minimum boundaries.
   */
  const getTodayString = (offsetDays = 0) => {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    const yr = d.getFullYear();
    const mo = String(d.getMonth() + 1).padStart(2, "0"); // Pad with leading zero (e.g. 05)
    const dy = String(d.getDate()).padStart(2, "0");
    return `${yr}-${mo}-${dy}`;
  };

  // State Declarations for Input Fields & Calculated Variables
  const [checkIn, setCheckIn] = useState<string>(getTodayString(1)); // Default: Check-in Tomorrow
  const [checkOut, setCheckOut] = useState<string>(getTodayString(3)); // Default: Check-out Day After Tomorrow
  const [guestCount, setGuestCount] = useState<number>(2); // Default to double occupancy
  const [fullName, setFullName] = useState<string>(""); // Required field to custom greet the host Sophia
  const [specialNotes, setSpecialNotes] = useState<string>(""); // Optional textarea segment

  // State Pools updated automatically by our React Effect Engine
  const [nights, setNights] = useState<number>(2);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [priceBreakdown, setPriceBreakdown] = useState<{ date: string; rate: number; isPremium: boolean; seasonName: string }[]>([]);

  /**
   * Pricing & Nights Evaluation Engine
   * 
   * This effect runs automatically whenever checkIn, checkOut, or currentLang changes.
   * It calculates the exact amount of nights, iterates through every calendar night,
   * matches individual dates to seasonal rules, and aggregates the total stayed package cost.
   */
  useEffect(() => {
    if (!checkIn || !checkOut) return;

    /**
     * Local Timezone-Safe Date Parser
     * 
     * IMPORTANT: Parsing calendar inputs (YYYY-MM-DD) directly using new Date(dateStr) 
     * defaults to midnight UTC time, which triggers timezone regressions depending 
     * on the visitor's local timezone (potentially changing dates by +/- 1 day).
     * 
     * Solution: We split components manually and force the hour to exactly 12:00:00 (Noon).
     * This buffers the date securely against local timezone offset discrepancies.
     */
    const parseLocalDate = (dateStr: string) => {
      if (!dateStr) return new Date();
      const parts = dateStr.split("-");
      if (parts.length !== 3) return new Date(dateStr);
      const [year, month, day] = parts.map(Number);
      return new Date(year, month - 1, day, 12, 0, 0);
    };

    const start = parseLocalDate(checkIn);
    const end = parseLocalDate(checkOut);

    // Safeguard: Force Check-out to be at least 1 day after Check-in
    if (end <= start) {
      const correctedEnd = new Date(start);
      correctedEnd.setDate(start.getDate() + 1);
      const yr = correctedEnd.getFullYear();
      const mo = String(correctedEnd.getMonth() + 1).padStart(2, "0");
      const dy = String(correctedEnd.getDate()).padStart(2, "0");
      setCheckOut(`${yr}-${mo}-${dy}`);
      return;
    }

    // Compute duration in Nights
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const calculatedNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setNights(calculatedNights);

    const breakdown: { date: string; rate: number; isPremium: boolean; seasonName: string }[] = [];
    let runningTotal = 0;

    /**
     * Sequential Calendar Scanner
     * We iterate night-by-night from the arrival date up to (but excluding) checkout date.
     * This allows us to handle stays that transition across multiple price seasons!
     */
    for (let i = 0; i < calculatedNights; i++) {
      const currentNightDate = new Date(start);
      currentNightDate.setDate(start.getDate() + i);

      const month = currentNightDate.getMonth(); // 0 is January, 11 is December
      const day = currentNightDate.getDate();

      // Retrieve default baseline rate from our centralized configuration
      let rate = VILLA_CONFIG.pricing.baseRate;
      let seasonName = currentLang === "en" ? "Standard" : "Standar";
      let isPremium = false;

      // Rule A: Dry Season / Mid-Year Peak (June 1st - August 31st)
      if (month === 5 || month === 6 || month === 7) {
        const hs = VILLA_CONFIG.pricing.seasons[1];
        rate = hs.rate;
        seasonName = hs.name[currentLang].split(" ")[0]; // Extra text clipped for grid fits
        isPremium = true;
      }
      // Rule B: Winter Holidays / New Year Congestion (November 15th - January 8th)
      else if ((month === 11 && day >= 15) || (month === 0 && day <= 8)) {
        const ps = VILLA_CONFIG.pricing.seasons[2];
        rate = ps.rate;
        seasonName = ps.name[currentLang].split(" ")[0];
        isPremium = true;
      }

      breakdown.push({
        date: currentNightDate.toLocaleDateString(currentLang === "en" ? "en-US" : "id-ID", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
        rate,
        isPremium,
        seasonName,
      });

      runningTotal += rate;
    }

    // Synchronize computed results to visual states
    setPriceBreakdown(breakdown);
    setTotalCost(runningTotal);
  }, [checkIn, checkOut, currentLang]);

  /**
   * Helper: Formats numbers into Indonesian Rupiah (IDR) currency structure 
   * (e.g., Rp1,450,000) using native internationalization formatting.
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

  /**
   * Submit / WhatsApp Transmittal Handler
   * 
   * How it works & How to Test:
   * 1. Forms are submitted after completing client-side HTML validations (like 'required' inputs).
   * 2. This handler builds an invoice receipt template in the guest's active language choice.
   * 3. The raw string is converted to a URI-friendly payload using standard `encodeURIComponent`.
   * 4. A WhatsApp redirect URL is generated targeting Sophia's phone number configured in `config.ts` (e.g., https://wa.me/6281234567890?text=...).
   * 5. We trigger `window.open` target="_blank" to push this message directly to the guest's local WhatsApp App or Web window.
   * 
   * How to Test the Button:
   * 1. Fill in a sample guest name (e.g., "John Doe") and adjust check-in/out dates.
   * 2. Click the "Transmit via WhatsApp" button.
   * 3. A new browser tab will open navigating to "https://web.whatsapp.com/send" or the mobile redirect link.
   * 4. In your browser's address bar, you can inspect the full query string parameters to verify 
   *    their integrity, and you will see the formatted query with the dynamic reservation text.
   */
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedInquiryDate = new Date().toLocaleDateString();
    const guestName = fullName.trim() || (currentLang === "en" ? "Valued Guest" : "Tamu Terhormat");

    // Compose English Message Template if active selection is 'en'
    const textEn = `✨ *SEKAR SOPHIA VILLA RESERVATION* ✨
--------------------------------------------
*Guest Name:* ${guestName}
*Check-in:* ${checkIn}
*Check-out:* ${checkOut}
*Duration:* ${nights} Night(s)
*Guests:* ${guestCount} Person(s)
${specialNotes ? `*Special Request:* "${specialNotes}"` : ""}
--------------------------------------------
*Estimated Total:* ${formatMoney(totalCost)}
*(Calculated Direct Booking Rate)*

Hello Sophia, I would like to inquire about booking my stay at Sekar Sophia Villa on these dates. Ready to confirm availability!
Sent automatically on: ${formattedInquiryDate}`;

    // Compose Indonesian Message Template if active selection is 'id'
    const textId = `✨ *RESERVASI SEKAR SOPHIA VILLA* ✨
--------------------------------------------
*Nama Tamu:* ${guestName}
*Check-in:* ${checkIn}
*Check-out:* ${checkOut}
*Durasi:* ${nights} Malam
*Jumlah Tamu:* ${guestCount} Orang
${specialNotes ? `*Permintaan Khusus:* "${specialNotes}"` : ""}
--------------------------------------------
*Estimasi Total:* ${formatMoney(totalCost)}
*(Tarif Pemesanan Langsung)*

Halo Kak Sophia, saya ingin menanyakan ketersediaan kamar di Sekar Sophia Villa untuk tanggal tersebut. Mohon infonya ya, terima kasih!
Kirim otomatis pada: ${formattedInquiryDate}`;

    // Safely encode text using URI standards to preserve spaces, linebreaks, and emojis
    const finalMsg = encodeURIComponent(currentLang === "en" ? textEn : textId);
    const whatsappUrl = `https://wa.me/${VILLA_CONFIG.contact.phone}?text=${finalMsg}`;

    // Direct redirection via safe window frame spawning
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="booking-widget" className="bg-white border border-stone-200/80 rounded-xl p-6 md:p-8 shadow-sm text-stone-900">
      {/* Widget Header Area */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2.5 bg-gold/10 rounded-lg border border-gold/20">
          <Calendar className="h-5 w-5 text-gold" />
        </div>
        <div>
          <h4 className="font-serif text-lg font-bold text-stone-900">
            {currentLang === "en" ? "Direct Stay Rates Calculator" : "Kalkulator Tarif Langsung"}
          </h4>
          <p className="font-mono text-[10px] tracking-wider uppercase text-stone-500 mt-0.5">
            {currentLang === "en" ? "Exclusive pricing - No broker fee" : "Harga khusus - Bebas komisi agen"}
          </p>
        </div>
      </div>

      <form onSubmit={handleBookingSubmit} className="space-y-4">
        {/* Name input */}
        <div className="flex flex-col space-y-1">
          <label className="text-[10px] font-mono tracking-wider uppercase text-stone-500 font-semibold">
            {currentLang === "en" ? "Full Name" : "Nama Lengkap"} <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            required
            placeholder={translations.yourNamePlaceholder}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full bg-stone-50/50 border border-stone-200 focus:border-gold/80 rounded-lg px-3 py-2 text-sm text-stone-850 placeholder-stone-400 focus:outline-none transition-all font-sans"
          />
        </div>

        {/* Date Row with Start and End Calendars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1">
            <label className="text-[10px] font-mono tracking-wider uppercase text-stone-500 font-semibold">
              {translations.checkInDatePlaceholder}
            </label>
            <input
              type="date"
              required
              min={getTodayString()}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-stone-50/50 border border-stone-200 focus:border-gold/80 rounded-lg px-3 py-2 text-sm text-stone-850 focus:outline-none transition-all cursor-pointer font-sans"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-[10px] font-mono tracking-wider uppercase text-stone-500 font-semibold">
              {translations.checkOutDatePlaceholder}
            </label>
            <input
              type="date"
              required
              min={checkIn ? checkIn : getTodayString(1)} // Ensures departures cannot precede arrival selections
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-stone-50/50 border border-stone-200 focus:border-gold/80 rounded-lg px-3 py-2 text-sm text-stone-850 focus:outline-none transition-all cursor-pointer font-sans"
            />
          </div>
        </div>

        {/* Guest Volume Selector */}
        <div className="flex flex-col space-y-1">
          <label className="text-[10px] font-mono tracking-wider uppercase text-stone-500 font-semibold flex items-center justify-between">
            <span>{translations.guestsCountPlaceholder}</span>
            <span className="text-[10px] text-stone-400 font-sans tracking-tight font-normal">{translations.capacityLabel}: Max 6 Guests</span>
          </label>
          <div className="flex items-center space-x-3 bg-stone-50/50 border border-stone-200 rounded-lg p-1.5">
            <button
              type="button"
              disabled={guestCount <= 1}
              onClick={() => setGuestCount((prev) => Math.max(1, prev - 1))}
              className="w-8 h-8 rounded bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:text-stone-900 font-bold hover:bg-stone-50 disabled:opacity-30 cursor-pointer text-sm"
            >
              -
            </button>
            <div className="flex-1 text-center font-sans font-medium text-sm">
              <span className="text-stone-900 font-semibold">{guestCount}</span> {currentLang === "en" ? "Guest(s)" : "Orang"}
            </div>
            <button
              type="button"
              disabled={guestCount >= 6}
              onClick={() => setGuestCount((prev) => Math.min(6, prev + 1))}
              className="w-8 h-8 rounded bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:text-stone-900 font-bold hover:bg-stone-50 disabled:opacity-30 cursor-pointer text-sm"
            >
              +
            </button>
          </div>
        </div>

        {/* Optional Special Requests segment */}
        <div className="flex flex-col space-y-1">
          <label className="text-[10px] font-mono tracking-wider uppercase text-stone-500 font-semibold flex items-center space-x-1">
            <FileText className="h-3.5 w-3.5 text-gold" />
            <span>{currentLang === "en" ? "Special Notes (Optional)" : "Catatan Khusus (Opsional)"}</span>
          </label>
          <textarea
            rows={2}
            placeholder={translations.specialNotesPlaceholder}
            value={specialNotes}
            onChange={(e) => setSpecialNotes(e.target.value)}
            className="w-full bg-stone-50/50 border border-stone-200 focus:border-gold/80 rounded-lg px-3 py-2 text-sm text-stone-850 placeholder-stone-400 focus:outline-none transition-all resize-none font-sans"
          />
        </div>

        {/* Dynamic Cost Breakdown Sheet */}
        <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 font-sans text-xs space-y-2.5">
          <div className="flex justify-between items-center border-b border-stone-200/65 pb-2">
            <span className="text-stone-500">{currentLang === "en" ? "Stay Duration" : "Durasi Menginap"}</span>
            <span className="font-semibold text-stone-800">
              {nights} {currentLang === "en" ? "Night(s)" : "Malam"}
            </span>
          </div>

          {/* Daily sequential break list */}
          <div className="space-y-1.5 max-h-24 overflow-y-auto pr-1">
            {priceBreakdown.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <span className="text-stone-500">
                  {item.date} {item.isPremium && <span className="text-[9px] bg-gold/10 text-gold border border-gold/30 px-1 rounded ml-1 font-mono tracking-wide font-semibold">{item.seasonName}</span>}
                </span>
                <span className="font-mono text-stone-600 font-medium">{formatMoney(item.rate)}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center border-t border-stone-200/65 pt-2.5">
            <span className="font-serif font-bold text-stone-900 text-sm">
              {currentLang === "en" ? "Estimated Total" : "Estimasi Total"}
            </span>
            <span className="font-serif text-lg font-bold text-gold">{formatMoney(totalCost)}</span>
          </div>

          <div className="flex items-start space-x-2 text-[10px] bg-gold/5 border border-gold/10 rounded p-2 text-gold font-sans font-medium leading-relaxed">
            <Sparkles className="h-3.5 w-3.5 shrink-0 mt-0.5" />
            <span>
              {currentLang === "en"
                ? "Direct Host privilege: guarantees custom check-ins and late outs request checks."
                : "Keistimewaan Direct Host: jaminan koordinasi jam masuk dan keluar fleksibel."}
            </span>
          </div>
        </div>

        {/* Chat / Dispatch Trigger Action Link Button */}
        <button
          type="submit"
          className="w-full bg-gold hover:bg-gold-hover text-white font-bold uppercase tracking-wider text-xs py-3.5 rounded-lg shadow-sm transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer focus:outline-none"
        >
          <Send className="h-4.5 w-4.5" />
          <span>{translations.submitBookingWhatsApp}</span>
        </button>
      </form>
    </div>
  );
}

