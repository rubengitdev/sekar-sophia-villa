/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReviewItem } from "../types";
import { REVIEW_AVATARS } from "./photos";

/**
 * Guest Reviews Feed Dataset (REVIEWS)
 * 
 * Central registry hosting reviews written by global visitors.
 * Features 5-star ratings, customized avatars, and bilingual comment nodes.
 */
export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Alexandre & Camille",
    country: "France",
    date: "May 2026",
    rating: 5,
    avatar: REVIEW_AVATARS.alexandreAndCamille,
    comment: {
      en: "Sekar Sophia is an absolute masterpiece! Sophia's design aesthetic is outstanding. We stayed for seven days and basically didn't want to leave. The open layout, the pristine saltwater pool, and the terracotta pot details made our Instagram feed look unreal. Sophia was the perfect host!",
      id: "Sekar Sophia adalah sebuah mahakarya sejati! Estetika desain Sophia sungguh luar biasa. Kami menginap selama tujuh hari dan tidak ingin pergi. Kolam renang air asin yang jernih, pot terakota yang cantik membawa kebahagiaan tersendiri. Sophia adalah tuan rumah luar biasa!",
    },
  },
  {
    id: "rev-2",
    name: "Dian Sastrowardoyo",
    country: "Indonesia",
    date: "April 2026",
    rating: 5,
    avatar: REVIEW_AVATARS.dianSastro,
    comment: {
      en: "Beautifully hidden in Kasongan but so close to Bantul's best spots. The villa joglo layout is incredibly peaceful. It was so easy to relax, and our kids spent endless hours playing in the pool under palm trees. Perfect for writing or escaping city noise. 10/10 recommended!",
      id: "Sangat tersembunyi dengan cantik di Kasongan namun dekat dengan tempat asyik di Bantul. Desain joglonya damai sekali. Suasana menenangkan ini cocok untuk relaksasi atau membaca buku kami sekeluarga. Sangat direkomendasikan!",
    },
  },
  {
    id: "rev-3",
    name: "Markus Schmidt",
    country: "Germany",
    date: "March 2026",
    rating: 5,
    avatar: REVIEW_AVATARS.markusSchmidt,
    comment: {
      en: "As a digital nomad, finding stable internet in secluded places is hard. Sekar Sophia Villa exceeded expectations! The Starlink backup Wi-Fi was blazing fast, the workstation overlooking the garden was perfect, and Sophia's hospitality was incredible. I will definitely be back next summer.",
      id: "Als digitaler Nomade... Oh, wait, in Indonesian: Sebagai pekerja lepas digital, Wi-Fi cadangan Starlink di sini luar biasa cepat, meja kerja yang langsung menghadap taman dan pancuran luar ruangan sangat memuaskan harian saya. Terima kasih banyak Sophia atas sambutannya!",
    },
  },
  {
    id: "rev-3",
    name: "Evelinda",
    country: "Indonesia",
    date: "March 2026",
    rating: 5,
    avatar: REVIEW_AVATARS.evelinda,
    comment: {
      en: "As a digital nomad, finding stable internet in secluded places is hard. Sekar Sophia Villa exceeded expectations! The Starlink backup Wi-Fi was blazing fast, the workstation overlooking the garden was perfect, and Sophia's hospitality was incredible. I will definitely be back next summer.",
      id: "Als digitaler Nomade... Oh, wait, in Indonesian: Sebagai pekerja lepas digital, Wi-Fi cadangan Starlink di sini luar biasa cepat, meja kerja yang langsung menghadap taman dan pancuran luar ruangan sangat memuaskan harian saya. Terima kasih banyak Sophia atas sambutannya!",
    },
  },
];
