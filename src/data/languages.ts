/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TranslationSet } from "../types";

/**
 * Bilingual Languages Translation Key Mappings (LANGUAGES)
 * 
 * Houses complete translation mappings for English ("en") and Indonesian ("id") languages.
 * Provides granular field variables covering navigation layout headers, forms, policies, and CTAs.
 */
export const LANGUAGES: Record<"en" | "id", TranslationSet> = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navAccommodation: "Suites & Rooms",
    navGallery: "Visual Gallery",
    navFacilities: "Amenities",
    navRates: "Rates & Check",
    navAttractions: "Local Attractions",
    navReviews: "Guest Stories",
    navContact: "Inquire Now",
    bookNowButton: "Reserve on WhatsApp",
    whatsappMessagePrefill: "Hello Sophia! I'm interested in booking Sekar Sophia Villa. Could you please check availability?",

    heroTagline: "A Serene Sanctuary of Art, Greenery & Soul",
    heroSubheadline: "Escape to Bantul's cultural heart. Experience a luxury tropical boutique villa designed for ultimate tranquility and creative living.",
    exploreMore: "Explore The Estate",

    aboutTitle: "Our Story",
    aboutSubtitle: "The Soul of Sekar Sophia",
    aboutStoryTitle: "A Harmonious Blend of Culture and Solitude",
    aboutStoryText: "Nestled in the famous pottery artisan village of Kasongan, Bantul, Sekar Sophia Villa is the brainchild of Sophia. Combining classical Javanese structural warmth (Joglo inspirations) with contemporary luxurious organic minimalism, the property spans premium private spaces surrounded by ancient palms, handmade terracotta artworks, and a salt-water private pool. It serves as a creative sanctuary for digital nomads, couples looking for a romantic tropical getaway, and families hoping to reconnect in high-style serenity.",
    propertyOverviewTitle: "Property Overview",
    propertyOverviewSubtitle: "Sophisticated scale designed to frame light, breeze, and absolute comfort.",
    uspTitle: "Why Choose Sekar Sophia",

    accommodationTitle: "Minimalist Living Spaces",
    accommodationSubtitle: "Each corner meticulously designed to offer premium resort leisure & Javanese warmth.",
    capacityLabel: "Accommodates",
    specSize: "Est. Size",
    specBed: "Beds",
    specBath: "Baths",

    facilitiesTitle: "Bespoke Resort Amenities",
    facilitiesSubtitle: "Every modern convenience blended seamlessly into a tropical organic escape.",

    ratesTitle: "Investment & Seasonal Rates",
    ratesSubtitle: "Transparent seasonal pricing that guarantees premium comfort and exclusive direct booking privileges.",
    nightlyRateLabel: "Nightly Standard Rate",
    seasonalPricingTitle: "Seasonal Premium Calendars",
    seasonalPeriod: "In Effect / Period",
    seasonalPrice: "Nightly Rate",
    bookingRulesTitle: "House Guidelines & Policies",
    minimumStayLabel: "Minimum Duration",
    daysLabel: "day(s)",
    checkInLabel: "Check-in After",
    checkOutLabel: "Check-out Before",

    attractionsTitle: "Kasongan & Bantul Treasures",
    attractionsSubtitle: "Explore the magical creative community, serene beaches, and historic sights nearby.",
    distanceLabel: "Distance",

    reviewsTitle: "Guest Experiences",
    reviewsSubtitle: "Unfiltered testimonials from travellers across the globe who called our villa home.",

    contactTitle: "Connect & Inquire",
    contactSubtitle: "Plan your timeless tropical getaway. Sophia is ready to welcome you.",
    contactInfoHeading: "Direct Contacts",
    locationHeading: "Our Location",
    bookingFormHeading: "Direct Inquiry Form",
    yourNamePlaceholder: "Your Full Name",
    yourEmailPlaceholder: "Your Email Address",
    checkInDatePlaceholder: "Check-in Date",
    checkOutDatePlaceholder: "Check-out Date",
    guestsCountPlaceholder: "Number of Guests",
    specialNotesPlaceholder: "Special Requests / Message for Sophia (e.g., airport pickup, dietary needs)",
    submitBookingWhatsApp: "Transmit via WhatsApp",
    linksThirdPartyHeading: "Also Available On",
  },
  id: {
    navHome: "Beranda",
    navAbout: "Tentang Vila",
    navAccommodation: "Kamar & Suite",
    navGallery: "Galeri Visual",
    navFacilities: "Fasilitas",
    navRates: "Tarif & Ketersediaan",
    navAttractions: "Wisata Sekitar",
    navReviews: "Ulasan Tamu",
    navContact: "Hubungi Kami",
    bookNowButton: "Pesan via WhatsApp",
    whatsappMessagePrefill: "Halo Sophia! Saya tertarik untuk memesan Sekar Sophia Villa. Bisa tolong cek ketersediaannya?",

    heroTagline: "Oase Kedamaian Seni, Alam, & Jiwa",
    heroSubheadline: "Lepaskan penat di jantung budaya Bantul. Nikmati pengalaman menginap di vila butik tropis mewah yang dirancang untuk ketenangan total dan gaya hidup kreatif.",
    exploreMore: "Jelajahi Vila",

    aboutTitle: "Kisah Kami",
    aboutSubtitle: "Jiwa Sekar Sophia",
    aboutStoryTitle: "Perpaduan Harmonis Budaya dan Ketenangan",
    aboutStoryText: "Terletak di desa perajin tanah liat Kasongan yang terkenal di Bantul, Sekar Sophia Villa adalah karya impian Sophia. Memadukan kehangatan arsitektur tradisional Jawa (inspirasi Joglo) dengan minimalis organik kontemporer yang mewah, properti ini menawarkan ruang pribadi premium yang dipenuhi pohon palem kuno, karya seni terakota buatan tangan, dan kolam renang pribadi air asin. Vila ini berfungsi sebagai tempat pelarian kreatif bagi pengembara digital, pasangan yang mencari liburan romantis, dan keluarga yang ingin berkumpul kembali.",
    propertyOverviewTitle: "Spesifikasi Properti",
    propertyOverviewSubtitle: "Tata ruang canggih yang dirancang untuk menangkap cahaya, angin sejuk, dan kenyamanan mutlak.",
    uspTitle: "Keistimewaan Sekar Sophia",

    accommodationTitle: "Ruang Hunian Minimalis",
    accommodationSubtitle: "Setiap sudut dirancang secara teliti untuk menyajikan kemudahan resor premium & kehangatan khas Jawa.",
    capacityLabel: "Kapasitas Tamu",
    specSize: "Luas Estimasi",
    specBed: "Tempat Tidur",
    specBath: "Kamar Mandi",

    facilitiesTitle: "Fasilitas Resor Pribadi",
    facilitiesSubtitle: "Setiap kenyamanan modern berpadu sempurna dalam pelarian tropis yang asri.",

    ratesTitle: "Investasi & Tarif Musiman",
    ratesSubtitle: "Informasi harga transparan yang menjamin kenyamanan eksklusif dan hak istimewa pemesanan langsung.",
    nightlyRateLabel: "Harga Standar per Malam",
    seasonalPricingTitle: "Kalender Musim Khusus",
    seasonalPeriod: "Periode Berlaku",
    seasonalPrice: "Tarif per Malam",
    bookingRulesTitle: "Panduan & Aturan Menginap",
    minimumStayLabel: "Minimum Menginap",
    daysLabel: "hari",
    checkInLabel: "Check-in Setelah",
    checkOutLabel: "Check-out Sebelum",

    attractionsTitle: "Eksotisme Kasongan & Bantul",
    attractionsSubtitle: "Jelajahi komunitas kreatif kerajinan seni, pantai yang sunyi, dan situs sejarah menawan di sekitar.",
    distanceLabel: "Jarak",

    reviewsTitle: "Kisah Pengalaman Tamu",
    reviewsSubtitle: "Ulasan berharga dari berbagai pelancong dari seluruh penjuru dunia.",

    contactTitle: "Hubungi & Pesan",
    contactSubtitle: "Rencanakan liburan tropis Anda yang tak terlupakan. Sophia siap menyambut kedatangan Anda.",
    contactInfoHeading: "Kontak Langsung",
    locationHeading: "Lokasi Vila",
    bookingFormHeading: "Formulir Pemesanan Langsung",
    yourNamePlaceholder: "Nama Lengkap Anda",
    yourEmailPlaceholder: "Alamat Email Anda",
    checkInDatePlaceholder: "Tanggal Check-in",
    checkOutDatePlaceholder: "Tanggal Check-out",
    guestsCountPlaceholder: "Jumlah Tamu",
    specialNotesPlaceholder: "Permintaan Khusus / Catatan untuk Sophia (misalnya, jemputan bandara, diet khusus)",
    submitBookingWhatsApp: "Kirim via WhatsApp",
    linksThirdPartyHeading: "Juga Tersedia Di",
  },
};
