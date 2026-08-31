import { GalleryItem } from '../types';
import { GALLERY_PHOTOS } from './photos';

/**
 * Gallery Showcase Collection
 *
 * Central collection of photographic assets displayed inside Gallery.tsx grid.
 * Classified into: exterior (architecture), interior (rooms/suites), pool, or surroundings.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
    {
        id: 'g-ext-1',
        url: GALLERY_PHOTOS.exterior1,
        category: 'exterior',
        caption: {
            en: 'Stunning dusk light at Sekar Sophia Main Joglo and Pool Area.',
            id: 'Cahaya temaram senja di Joglo Utama Sekar Sophia dan Area Kolam.',
        },
    },
    {
        id: 'g-ext-2',
        url: GALLERY_PHOTOS.exterior2,
        category: 'exterior',
        caption: {
            en: 'Modern resort architectural angles with traditional structural materials.',
            id: 'Sudut arsitektur resor modern dengan perpaduan material tradisional Jawa.',
        },
    },
    {
        id: 'g-int-1',
        url: GALLERY_PHOTOS.interior1,
        category: 'interior',
        caption: {
            en: 'The cozy Master Temple Suite dressed in supreme linen blankets.',
            id: 'Suasana nyaman di Master Temple Suite dengan selimut katun linen premium.',
        },
    },
    {
        id: 'g-int-2',
        url: GALLERY_PHOTOS.interior2,
        category: 'interior',
        caption: {
            en: "Living area with open concept framing Yogyakarta's native green palm breeze.",
            id: 'Ruang keluarga konsep terbuka menangkap embusan angin sepoi pohon palem.',
        },
    },
    {
        id: 'g-int-3',
        url: GALLERY_PHOTOS.interior3,
        category: 'interior',
        caption: {
            en: 'Bespoke kitchen featuring a high solid-wood breakfast table.',
            id: 'Dapur kustom dengan meja bar tinggi dari kayu utuh untuk sarapan pagi.',
        },
    },
    {
        id: 'g-pool-1',
        url: GALLERY_PHOTOS.pool1,
        category: 'pool',
        caption: {
            en: 'Lush deep-colored tropical plants bordering the refreshing salt-water pool.',
            id: 'Rimbunnya vegetasi tropis menghiasi tepian kolam renang air asin yang jernih.',
        },
    },
    {
        id: 'g-pool-2',
        url: GALLERY_PHOTOS.pool2,
        category: 'pool',
        caption: {
            en: 'Lounging gazebo beside the pool - spectacular spot for daytime reading.',
            id: 'Gazebo bersantai di tepi kolam - tempat terbaik untuk membaca di siang hari.',
        },
    },
    {
        id: 'g-sur-1',
        url: GALLERY_PHOTOS.surroundings1,
        category: 'surroundings',
        caption: {
            en: "Kasongan's majestic nearby organic green rice paddies at sunrise.",
            id: 'Hijau asrinya hamparan sawah organik Kasongan di bawah sinar mentari pagi.',
        },
    },
    {
        id: 'g-sur-2',
        url: GALLERY_PHOTOS.surroundings2,
        category: 'surroundings',
        caption: {
            en: 'The artistic spirit of Bantul - handmade terracotta pots in local studios.',
            id: 'Semangat berseni Bantul - kerajinan pot tanah liat di sanggar kriya terdekat.',
        },
    },
];
