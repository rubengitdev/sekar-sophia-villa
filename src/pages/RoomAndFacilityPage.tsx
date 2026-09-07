import React from 'react';
import { Accommodation } from '../components/sections/Accommodation';
import { Facilities } from '../components/sections/Facilities';
import { LanguageCode, TranslationSet } from '../types';

interface RoomAndFacilityProps {
    currentLang: LanguageCode;
    translations: TranslationSet;
}

export function RoomAndFacilityPage({
    currentLang,
    translations,
}: RoomAndFacilityProps) {
    return (
        <div id="living-page" className="space-y-4">
            {/* SECTION 1: Tabbed Accommodations & Carousels */}
            <Accommodation
                currentLang={currentLang}
                translations={translations}
            />

            {/* SECTION 2: Responsive Bento-grid of high-end resort amenities */}
            <Facilities currentLang={currentLang} translations={translations} />
        </div>
    );
}
