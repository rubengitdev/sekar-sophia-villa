/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Accommodation } from "../sections/Accommodation";
import { Facilities } from "../sections/Facilities";
import { LanguageCode, TranslationSet } from "../types";

interface LivingPageProps {
  currentLang: LanguageCode;
  translations: TranslationSet;
}

/**
 * LivingPage Component (Chapter 2: Spaces / Living)
 * 
 * Manages the luxurious physical interior of Sekar Sophia Villa. The page splits into:
 * 1. Accommodation: Immersive tabbed layout detailing the Javanese suites (Master Suite, garden rooms, etc.)
 *    equipped with specifications indices (room size, occupancy limits, and private baths).
 * 2. Facilities: Grid-aligned Bento modules presenting shared visual premium utilities (fiber internet, 
 *    saltwater pool, customized fire-pit lounge, and hand-molded pottery kitchen components).
 */
export function RoomAndFacilityPage({ currentLang, translations }: LivingPageProps) {
  return (
    <div id="living-page" className="space-y-4">
      {/* SECTION 1: Tabbed Accommodations & Carousels */}
      <Accommodation currentLang={currentLang} translations={translations} />
      
      {/* SECTION 2: Responsive Bento-grid of high-end resort amenities */}
      <Facilities currentLang={currentLang} translations={translations} />
    </div>
  );
}
