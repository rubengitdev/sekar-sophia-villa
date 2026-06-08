/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { VillaConfig } from "../types";

/**
 * Villa Configuration Parameters (VILLA_CONFIG)
 * 
 * Central truth repository holding baseline metrics, contacts, rates, and guidelines.
 * Modifying values here updates all downstream computation engines (e.g., BookingWidget calculations) automatically.
 */
export const VILLA_CONFIG: VillaConfig = {
  name: "Sekar Sophia Villa",
  owner: "Sophia",
  contact: {
    phone: "6281234567890", // Sophia's customized WhatsApp number format (without '+' or leading '0' for API)
    email: "sekarsophiavilla@gmail.com",
    address: {
      en: "Kasongan, Bantul Regency, Special Region of Yogyakarta, Indonesia",
      id: "Kasongan, Kabupaten Bantul, Daerah Istimewa Yogyakarta, Indonesia",
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15810.024629471714!2d110.33644023249052!3d-7.842037985392815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57ebf05be7f9%3A0xc33eafbbbf0b4934!2sKasongan%2C%20Bantul%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
    googleMapsDirectionUrl: "https://maps.google.com/?q=Kasongan+Bantul+Yogyakarta",
  },
  pricing: {
    baseRate: 1450000, // in IDR (Indonesian Rupiah)
    currency: "IDR",
    currencySymbol: "Rp",
    minimumStay: 1, // base minimum stay
    seasons: [
      {
        name: {
          en: "Standard Season",
          id: "Musim Standar",
        },
        dates: {
          en: "All dates except holiday periods",
          id: "Semua tanggal di luar musim liburan",
        },
        rate: 1450000,
      },
      {
        name: {
          en: "High Season (Summer / Dry Season)",
          id: "Musim Ramai (Musim Kemarau)",
        },
        dates: {
          en: "June 1st - August 31st",
          id: "1 Juni - 31 Agustus",
        },
        rate: 1800000,
      },
      {
        name: {
          en: "Peak Season (Christmas & New Year)",
          id: "Musim Puncak (Natal & Tahun Baru)",
        },
        dates: {
          en: "December 15th - January 8th",
          id: "15 Desember - 8 Januari",
        },
        rate: 2200000,
      },
    ],
    rules: {
      en: [
        "Standard Check-in time is 2:00 PM (GMT+7)",
        "Standard Check-out time is 12:00 PM (GMT+7)",
        "Early Check-in or Late Check-out is subject to room availability and additional charges",
        "Smoking is permitted only in designated outdoor garden areas and balconies",
        "Pets are allowed upon prior confirmation with the villa owner",
        "Events or parties require prior coordination and special event permits",
        "Please lower noise levels after 10:00 PM to respect the peaceful neighborhood",
      ],
      id: [
        "Waktu Check-in standar adalah jam 14:00 (WIB)",
        "Waktu Check-out standar adalah jam 12:00 (WIB)",
        "Check-in lebih cepat atau Check-out lebih lambat bergantung pada ketersediaan kamar dan dikenakan biaya tambahan",
        "Merokok hanya diperbolehkan di area luar taman yang telah ditentukan dan balkon",
        "Hewan peliharaan diperbolehkan setelah konfirmasi terlebih dahulu dengan pemilik vila",
        "Acara atau pesta memerlukan koordinasi sebelumnya dan izin penylenggaraan khusus",
        "Harap kurangi kebisingan setelah jam 22:00 untuk menghormati lingkungan sekitar yang damai",
      ],
    },
  },
  socials: {
    instagram: "https://instagram.com/sekarsophiavilla",
    facebook: "https://facebook.com/sekarsophiavilla",
    youtube: "https://youtube.com/@sekarspohiavilla",
  },
  thirdParty: {
    airbnb: "https://airbnb.com/rooms/sekar-sophia-villa-mock",
    tiket: "https://tiket.com/villas/sekar-sophia-villa-mock",
    bookingCom: "https://booking.com/hotel/id/sekar-sophia-villa-mock",
  },
};
