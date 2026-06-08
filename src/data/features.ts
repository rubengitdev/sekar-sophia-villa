/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HighlightFeature, USPItem } from "../types";

/**
 * Highlighting Features Dataset
 * 
 * Lists aesthetic high-level perks (Artisan Living, Salt-Water pool, Starlink internet) 
 * shown on homepage intro sheets.
 */
export const HIGHLIGHT_FEATURES: HighlightFeature[] = [
  {
    icon: "Sparkles",
    title: {
      en: "Artisan Living",
      id: "Gaya Hidup Artisan",
    },
    description: {
      en: "Each piece of pottery, brickwork, and furniture is custom-commissioned from local Kasongan artists.",
      id: "Setiap kerajinan tanah liat, bata ekspos, dan perabot dipesan khusus dari seniman lokal Kasongan.",
    },
  },
  {
    icon: "Droplets",
    title: {
      en: "Salt-Water Oasis",
      id: "Kolam Air Asin Oasis",
    },
    description: {
      en: "An eco-friendly salt-water pool that is gentle on your skin and beautifully framed by lush jungle flora.",
      id: "Kolam renang air asin ramah lingkungan yang lembut di kulit dan dikelilingi rimbunnya flora tropis.",
    },
  },
  {
    icon: "Wifi",
    title: {
      en: "Digital Nomad Heaven",
      id: "Surga Digital Nomad",
    },
    description: {
      en: "Starlink back-up high-speed Wi-Fi throughout the property ensures constant connection for creative work.",
      id: "Wi-Fi berkecepatan tinggi dengan cadangan Starlink di seluruh area menjamin koneksi tanpa hambatan.",
    },
  },
];

/**
 * Unique Selling Propositions (USP_ITEMS)
 * 
 * Focuses on natural insulation layouts, bespoke local sourcing, and Sophia's hosting services.
 * Displayed under the main Javenese-Modern bento section in About.tsx.
 */
export const USP_ITEMS: USPItem[] = [
  {
    icon: "Trees",
    title: {
      en: "Untamable Tropical Privacy",
      id: "Privasi Tropis Seutuhnya",
    },
    description: {
      en: "Walled by rich volcanic soil gardens, towering coconut palms, and deep green heliconias, providing absolute seclusion.",
      id: "Dikelilingi taman subur tanah vulkanik, pohon kelapa yang tinggi, dan herba pisang hias, memberikan privasi absolut.",
    }
  },
  {
    icon: "Compass",
    title: {
      en: "Aesthetic Spatial Wellness",
      id: "Tata Ruang Estetis Sehat",
    },
    description: {
      en: "High-volume vaulted teak ceilings and cross-ventilation designed to drop temperature naturally without noise.",
      id: "Langit-langit tinggi berkonstruksi jati dan ventilasi silang yang dirancang menurunkan suhu ruangan secara alami.",
    }
  },
  {
    icon: "Heart",
    title: {
      en: "Hyper-Host Hospitality",
      id: "Keramahan Istimewa Sophia",
    },
    description: {
      en: "Owner Sophia provides direct, personal touch recommendations, cultural itineraries, and bespoke home services.",
      id: "Pemilik vila Sophia memberikan rekomendasi kuliner, rencana wisata budaya lokal, serta layanan personal terbaik.",
    }
  }
];
