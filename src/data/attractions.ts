/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttractionItem } from "../types";
import { ATTRACTION_PHOTOS } from "./photos";

/**
 * Local Attractions Dataset
 * 
 * Maps cultural and leisure spots surrounding the Kasongan estate in Bantul, Yogyakarta.
 * Displays metric distances, travel time estimates, and bilingual descriptive text snippets.
 */
export const ATTRACTIONS: AttractionItem[] = [
  {
    id: "att-kasongan",
    name: {
      en: "Kasongan Ceramic & Pottery Sanctuary",
      id: "Pusat Kerajinan Keramik Kasongan",
    },
    category: "culture",
    distance: "100 m",
    duration: "2 min walk",
    image: ATTRACTION_PHOTOS.kasongan,
    description: {
      en: "The historic hub of stunning terracotta ceramics. Watch local artisans shape clay or try a pottery workshop yourself.",
      id: "Pusat sejarah kerajinan keramik tanah liat yang indah. Saksikan seniman lokal memahat tanah liat langsung.",
    },
  },
  {
    id: "att-kraton",
    name: {
      en: "Yogyakarta Royal Palace (Kraton)",
      id: "Kraton Yogyakarta Hadiningrat",
    },
    category: "culture",
    distance: "6.5 km",
    duration: "15 min drive",
    image: ATTRACTION_PHOTOS.kraton,
    description: {
      en: "The living monument of Javanese heritage, showcasing majestic architectural details, classic courts, and dynamic museums.",
      id: "Istana kesultanan Jawa yang aktif, menyuguhkan detil ukir emas megah, museum pusaka, dan tarian klasik gamelan.",
    },
  },
  {
    id: "att-parangtritis",
    name: {
      en: "Parangtritis Mystical Beach",
      id: "Pantai Mistis Parangtritis",
    },
    category: "beach",
    distance: "23 km",
    duration: "35 min drive",
    image: ATTRACTION_PHOTOS.parangtritis,
    description: {
      en: "An iconic volcanic black-sand beach. Experience magical golden sunsets over towering limestone hills and rolling tides.",
      id: "Pantai pasir hitam legendaris. Rasakan pesona matahari tenggelam di balik tebing batuan tinggi samudera selatan.",
    },
  },
  {
    id: "att-restaurants",
    name: {
      en: "Aesthetic Culinary Kasongan & Bantul",
      id: "Kuliner Estetis Kasongan & Bantul",
    },
    category: "restaurant",
    distance: "1.2 km",
    duration: "5 min drive",
    image: ATTRACTION_PHOTOS.culinary,
    description: {
      en: "Lush garden bistros, rustic local coffee houses, and traditional culinary stalls serving Bantul's famous hot Mangut Lele.",
      id: "Bistro kebun rimbun, kedai kopi perbukitan yang tenang, dan warung makan legendaris Mangut Lele Kasongan.",
    },
  },
];
