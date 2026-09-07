import React from 'react';
import { Gallery } from '../components/sections/Gallery';
import { LocalAttraction } from '../components/sections/LocalAttraction';
import { LanguageCode, TranslationSet } from '../types';

interface GalleryPageProps {
    currentLang: LanguageCode;
    translations: TranslationSet;
}

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
