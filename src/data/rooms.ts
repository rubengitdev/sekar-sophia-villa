/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RoomDetails } from "../types";
import { SUITE_PHOTOS } from "./photos";

/**
 * Suites and Rooms Collection Dataset (ROOMS)
 * 
 * Houses room details for Temple Suite, Garden Pavilion, and Comfort Regular Suite.
 * Establishes specifications detailing sizes, bed capacities, bathroom options, and inclusions.
 */
export const ROOMS: RoomDetails[] = [
  {
    id: "suite-master",
    name: {
      en: "The Sophia Master Temple Suite",
      id: "Sophia Master Temple Suite",
    },
    categoryName: {
      en: "Temple Suite",
      id: "Temple Suite",
    },
    badgeName: {
      en: "Premium Residence",
      id: "Residensi Premium",
    },
    shortDescription: {
      en: "A majestic integration of high-crafted teak paneling, floating king size bed, and romantic semi-outdoor stone tub.",
      id: "Perpaduan agung panel kayu jati berkualitas, kasur ukuran King melayang, dan bak mandi batu semi-terbuka romantis.",
    },
    longDescription: {
      en: "Our flagship suite features premium bespoke finishings that celebrate natural light. Floor-to-ceiling glass doors open directly to the central salt-water pool, allowing you to walk straight into the water at dawn. Dominated by luxurious organic fabrics, handcrafted ceramics, and a gorgeous private desk with sunset views.",
      id: "Suite utama kami memiliki sentuhan akhir premium yang memuliakan cahaya alami. Pintu kaca setinggi langit-langit menghadap ke kolam renang air asin tengah, memungkinkan Anda melangkah langsung ke air di pagi hari. Dilengkapi kain organik mewah, keramik buatan tangan, dan meja kerja pribadi yang menawan.",
    },
    specs: {
      size: "75 m²",
      beds: {
        en: "1 King Bed (Supreme Latex)",
        id: "1 Ranjang King (Lateks Supreme)",
      },
      baths: "1 En-Suite (Semi-Outdoor Stone Tub & Rain Shower)",
      capacity: {
        en: "2 Adults (Extra bed available)",
        id: "2 Dewasa (Kasur tambahan tersedia)",
      },
    },
    images: SUITE_PHOTOS.templeSuite,
    features: {
      en: ["Direct Pool Access", "King Size Draped Bed", "Outdoor Handcrafted Stone Tub", "Custom Teak Wardrobe", "Smart Air Conditioning", "Premium Organic Linens"],
      id: ["Akses Kolam Renang Langsung", "Kasur King Kelambu Romantis", "Bathtub Batu Alam Terbuka", "Lemari Jati Kustom", "AC Pintar Hemat Energi", "Sprei Organik Premium"],
    },
  },
  {
    id: "pavilion-garden",
    name: {
      en: "The Sekar Garden Pavilion Suite",
      id: "Sekar Garden Pavilion Suite",
    },
    categoryName: {
      en: "Pavilion Suite",
      id: "Pavilion Suite",
    },
    badgeName: {
      en: "Garden Retreat",
      id: "Peristirahatan Kebun",
    },
    shortDescription: {
      en: "A tranquil private bungalow detached from the main lounge, featuring traditional craft architecture with a sleek minimal touch.",
      id: "Bungalo pribadi yang terpisah dari ruang utama, menawarkan arsitektur tradisional berbalut minimalisme modern.",
    },
    longDescription: {
      en: "Perfect for lovers of nature and writing. Detached from the main residence, this pavilion is surrounded by water lilies, organic banana trees, and ginger plants. Features a private wooden porch with local handmade pottery decor, and a luxurious sky-lit rainfall shower that brings the tropical rain sentiment inside safely.",
      id: "Cocok bagi pencinta alam dan ketenangan. Terpisah dari bangunan utama, paviliun ini dikelilingi bunga seroja, pohon pisang hias, dan tanaman jahe hutan. Memiliki teras kayu pribadi dengan dekorasi tembikar lokal Bantul, serta pancuran mandi atap kaca tembus langit.",
    },
    specs: {
      size: "50 m²",
      beds: {
        en: "1 King Bed or 2 Single Beds",
        id: "1 Ranjang King atau 2 Ranjang Single",
      },
      baths: "1 Private (Glass Skylight Rainfall Bathroom)",
      capacity: {
        en: "2 Adults",
        id: "2 Dewasa",
      },
    },
    images: SUITE_PHOTOS.pavilionSuite,
    features: {
      en: ["Private Wooden Porch", "Detached Garden Bungalow", "Skylight Rainforest Shower", "Terracotta Accents", "Bose Bluetooth Companion", "Special Espresso Machine"],
      id: ["Teras Kayu Pribadi", "Bungalo Kebun Terpisah", "Pancuran Atap Kaca Alami", "Aksen Seni Terakota", "Speaker Bose Companion", "Mesin Espresso Khusus"],
    },
  },
  {
    id: "suite-regular",
    name: {
      en: "The Sophia Comfort Regular Suite",
      id: "Sophia Comfort Regular Suite",
    },
    categoryName: {
      en: "Regular Suite",
      id: "Regular Suite",
    },
    badgeName: {
      en: "Comfort Suite",
      id: "Suite Nyaman",
    },
    shortDescription: {
      en: "A beautifully appointed, cosy room with modern organic finishes, custom craft details, and poolside views.",
      id: "Kamar yang didesain cantik dan nyaman dengan sentuhan akhir organik modern, detail kerajinan khas, dan pemandangan kolam renang.",
    },
    longDescription: {
      en: "Our Regular Suite offers guest comfort at its finest. Designed with high-quality local teak furniture, elegant lighting, and modern conveniences. Standard amenities include a posture-pedic queen bed, en-suite modern shower, and a beautiful sit-out patio overlooking the peaceful gardens.",
      id: "Regular Suite kami menawarkan kenyamanan terbaik bagi para tamu. Didesain menggunakan furnitur kayu jati lokal berkualitas tinggi, pencahayaan hangat yang elegan, dan fasilitas modern. Dilengkapi ranjang terapi berukuran Queen, kamar mandi shower modern en-suite, serta teras luar pribadi yang asri menghadap taman.",
    },
    specs: {
      size: "38 m²",
      beds: {
        en: "1 Queen Bed (Comfort Latex)",
        id: "1 Ranjang Queen (Lateks Nyaman)",
      },
      baths: "1 En-Suite (Modern Rain Shower Bathroom)",
      capacity: {
        en: "2 Adults",
        id: "2 Dewasa",
      },
    },
    images: SUITE_PHOTOS.regularSuite,
    features: {
      en: ["Pool Side View", "Comfort Queen Bed", "Modern Rain Shower", "Sleek Workspace Desk", "Smart Flat TV", "Premium Soft Linens"],
      id: ["Pemandangan Sisi Kolam", "Kasur Queen Terapeutik", "Pancuran Shower Modern", "Meja Kerja Minimalis", "Smart TV Interaktif", "Sprei Katun Lembut"],
    },
  },
];
