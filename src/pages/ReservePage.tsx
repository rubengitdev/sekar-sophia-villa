import React from 'react';
import { Rates } from '../components/sections/Rates';
import { Reviews } from '../components/sections/Reviews';
import { Contact } from '../components/sections/Contact';
import { LanguageCode, TranslationSet } from '../types';

interface ReservePageProps {
    currentLang: LanguageCode;
    translations: TranslationSet;
}

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
