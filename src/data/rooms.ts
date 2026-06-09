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
    id: "deluxe_room",
    name: {
      en: "Sekar Exclusive Deluxe Room",
      id: "Kamar Deluxe Eksklusif Sekar",
    },
    categoryName: {
      en: "Deluxe Room",
      id: "Kamar Deluxe",
    },
    badgeName: {
      en: "Most Premium",
      id: "Paling Premium",
    },
    roomDescription: {
      en: "Our most premium room, beautifully designed with an elegant and exclusive ambiance. It seamlessly blends modern, minimalist design with warm wooden accents and authentic Kasongan artistry. The perfect choice for guests seeking a truly special, comfortable, and memorable stay. This cozy retreat features a premium King-size bed and a spacious, modern bathroom.",
      id: "Kamar paling premium yang dirancang dengan suasana elegan dan eksklusif. Perpaduan antara design yang modern, minimalist, dengan sentuhan kayu dan seni khas Kasongan. Pilihan sempurna untuk tamu yang menginginkan pengalaman menginap yang lebih istimewa, nyaman, dan berkesan. Kamar yang nyaman dilengkapi kasur berkualitas ukuran King, dengan kamar mandi yang luas dan modern.",
    },
    specs: {
      size: "35 m²",
      beds: {
        en: "1 King Size Bed",
        id: "1 Kasur Ukuran King",
      },
      baths: {
        en: "1 Indoor Bath",
        id: "1 Kamar Mandi Dalam",
      },
      capacity: {
        en: "2 People (2 extra bed available)",
        id: "2 Orang (2 Kasur tambahan tersedia)",
      },
    },
    images: SUITE_PHOTOS.templeSuite,
    features: {
      en: ["Closest Pool Access", "King Size Bed", "Eco-Friendly AC", "Android TV", "Mini Fridge", "Sofa Bed"],
      id: ["Akses Terdekat Kolam Renang", "Kasur Ukuran King", "AC Hemat Energi", "TV Android", "Kulkas Mini", "Sofa Bed"],
    },
  },

  {
    id: "standard_room",
    name: {
      en: "Sekar Standard Room",
      id: "Kamar Standar Sekar",
    },
    categoryName: {
      en: "Standard Room",
      id: "Kamar Standar",
    },
    badgeName: {
      en: "Standard",
      id: "Standar",
    },
    roomDescription: {
      en: "The perfect choice for guests looking to work from anywhere (WFC) while enjoying a comfortable and effortless stay. This room features a sleek, modern minimalist design. Though compact, it is thoughtfully equipped with a high-quality Queen bed and a clean, modern bathroom.",
      id: "Pilihan sempurna untuk tamu yang menginginkan WFC, dan pengalaman menginap yang nyaman dan mudah. Kamar yang dirancang dengan suasana minimalist dan modern. Kamar yang compact dilengkapi kasur berkualitas ukuran Queen, dengan kamar mandi yang minimalist dan modern.",
    },
    specs: {
      size: "35 m²",
      beds: {
        en: "1 Queen Size Bed",
        id: "1 Kasur Ukuran Queen",
      },
      baths: {
        en: "1 Indoor Bath",
        id: "1 Kamar Mandi Dalam",
      },
      capacity: {
        en: "2 People (2 extra bed available)",
        id: "2 Orang (2 Kasur tambahan tersedia)",
      },
    },
    images: SUITE_PHOTOS.pavilionSuite,
    features: {
      en: ["Closest Parking Access", "Queen-Size Bed", "Energy-Efficient AC", "Comfortable Workspace", "Android TV"],
      id: ["Akses Terdekat ke Parkiran", "Kasur Ukuran Queen", "AC Hemat Energi", "TV Android", "Meja Kerja Nyaman"],
    },
  },
  {
    id: "twin_size_room",
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
    roomDescription: {
      en: "Our Regular Suite offers guest comfort at its finest. Designed with high-quality local teak furniture, elegant lighting, and modern conveniences. Standard amenities include a posture-pedic queen bed, en-suite modern shower, and a beautiful sit-out patio overlooking the peaceful gardens.",
      id: "Regular Suite kami menawarkan kenyamanan terbaik bagi para tamu. Didesain menggunakan furnitur kayu jati lokal berkualitas tinggi, pencahayaan hangat yang elegan, dan fasilitas modern. Dilengkapi ranjang terapi berukuran Queen, kamar mandi shower modern en-suite, serta teras luar pribadi yang asri menghadap taman.",
    },
    specs: {
      size: "38 m²",
      beds: {
        en: "1 Queen Bed (Comfort Latex)",
        id: "1 Ranjang Queen (Lateks Nyaman)",
      },
      baths: {
        en: "1 Indoor Bath",
        id: "1 Kamar Mandi Dalam",
      },
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
