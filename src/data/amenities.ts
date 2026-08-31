import { AmenityDetail } from '../types';

/**
 * Curated Amenities Dataset
 *
 * Lists standard luxury items included free across all booking types.
 * Each item maps to a custom Lucide-React icon string resolved dynamically in Facilities.tsx.
 */
export const AMENITIES: AmenityDetail[] = [
    {
        icon: 'Tv',
        name: {
            en: 'Smart TV with Netflix',
            id: 'Smart TV & Aplikasi Streaming',
        },
        description: {
            en: 'A high-definition 4K TV with pre-installed premium channels and surround audio.',
            id: 'TV 4K definisi tinggi dengan aplikasi premium pra-instal dan audio surround.',
        },
    },
    {
        icon: 'FlameKindling', // Representing Kitchen / Cooking
        name: { en: "Chef's Kitchen", id: 'Dapur Lengkap Koki' },
        description: {
            en: 'Complete with high-end appliances, coffee maker, induction cooktop, and custom dinnerware.',
            id: 'Lengkap dengan alat pembuat kopi, kompor induksi, dan peralatan makan kustom.',
        },
    },
    {
        icon: 'Wifi',
        name: { en: 'High-Speed Wi-Fi', id: 'Koneksi Wi-Fi Cepat' },
        description: {
            en: 'Seamless coverage across the entire estate with reliable backup lines.',
            id: 'Cakupan internet mulus di seluruh sudut vila dengan cadangan koneksi ganda.',
        },
    },
    {
        icon: 'Sparkles',
        name: {
            en: 'Daily Dedicated Cleaning',
            id: 'Pembersihan Harian Rutin',
        },
        description: {
            en: 'Our professional housekeeper tidies your suites daily without disturbing your privacy.',
            id: 'Staf kami membersihkan kamar Anda secara berkala dengan tetap menjaga privasi Anda.',
        },
    },
    {
        icon: 'Sun',
        name: { en: 'Traditional Gazebo', id: 'Gazebo & Pendopo Santai' },
        description: {
            en: 'An elevated teak pavilion ideal for open-air yoga, meditation, or tropical afternoon tea.',
            id: 'Gazebo tinggi serbaguna dari kayu jati untuk yoga, meditasi, atau minum teh sore.',
        },
    },
    {
        icon: 'Wind',
        name: { en: 'Pure Air Conditioning', id: 'Pendingin Ruang Hebat' },
        description: {
            en: 'Whisper-quiet air conditioning systems installed inside all closed rooms.',
            id: 'Sistem pengondisi udara senyap terpasang sempurna di dalam seluruh kamar tidur.',
        },
    },
    {
        icon: 'Car',
        name: { en: 'Private Secure Parking', id: 'Area Parkir Pribadi Aman' },
        description: {
            en: 'Spacious private carport with secure gates matching larger SUVs.',
            id: 'Lahan parkir mobil pribadi dengan gerbang kokoh yang muat untuk kendaraan besar.',
        },
    },
    {
        icon: 'Coffee',
        name: { en: 'Morning Java Espresso', id: 'Kafein Pagi Gratis' },
        description: {
            en: "Fresh local organic coffee beans provided free for Sophia's guests.",
            id: 'Biji kopi lokal Jawa yang segar disediakan khusus gratis bagi para tamu Sophia.',
        },
    },
];
