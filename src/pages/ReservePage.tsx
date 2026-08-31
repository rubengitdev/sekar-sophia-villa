import React from 'react';
import { Rates } from '../components/sections/Rates';
import { Reviews } from '../components/sections/Reviews';
import { Contact } from '../components/sections/Contact';
import { LanguageCode, TranslationSet } from '../types';

interface ReservePageProps {
    currentLang: LanguageCode;
    translations: TranslationSet;
}

/**
 * ReservePage Component (Chapter 4: Reserve / Checkout)
 *
 * Aggregates all informational resources and action elements necessary to complete bookings:
 * 1. Rates Section: Highlights seasonal checklists (Standard, High, and Peak Seasons) and Javanese rules.
 * 2. Reviews Section: Staggered slider layout framing authentic social proof.
 * 3. Contact & Alternative Channels: Google Map renders paired with Airbnb, Booking.com, and direct email hotlines.
 */
export function ReservePage({ currentLang, translations }: ReservePageProps) {
    return (
        <div id="reserve-page" className="space-y-4">
            {/* 1. RATES & POLICIES - Seasonal baseline configurations and check-in timeline targets */}
            <Rates currentLang={currentLang} translations={translations} />

            {/* 2. REVIEWS - Slideable client endorsement cards demonstrating hospitality success */}
            <Reviews currentLang={currentLang} translations={translations} />

            {/* 3. CONTACT & MAP - Direct coordinates, map embed, and third-party booking gateways */}
            <Contact currentLang={currentLang} translations={translations} />
        </div>
    );
}
