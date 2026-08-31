import React from 'react';
import { Gallery } from '../components/sections/Gallery';
import { LocalAttraction } from '../components/sections/LocalAttraction';
import { LanguageCode, TranslationSet } from '../types';

interface GalleryPageProps {
    currentLang: LanguageCode;
    translations: TranslationSet;
}

/**
 * GalleryPage Component (Chapter 3: Gallery)
 *
 * Invites visitors to explore the aesthetic atmosphere surrounding Bantul and Parangtritis.
 * It coordinates two primary segments:
 * 1. Filterable Architectural Portfolio/Gallery: Beautifully responsive layout matching suites,
 *    surroundings, and architecture themes with a cinematic image lightbox preview.
 * 2. Local Attraction: Explains nearby historical spots and local food destinations accompanied
 *    by precise travel guides (driving minutes and kilometer indices).
 */
export function GalleryPage({ currentLang, translations }: GalleryPageProps) {
    return (
        <div id="gallery-page">
            {/* 1. GALLERY - High-fidelity photography grid & modular lightboxes */}
            <Gallery currentLang={currentLang} translations={translations} />

            {/* 2. LOCAL ATTRACTIONS - Driving indexes to pottery centers and beach locations */}
            <LocalAttraction
                currentLang={currentLang}
                translations={translations}
            />
        </div>
    );
}
