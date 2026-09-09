import { GalleryItem } from '../types';

const galleryPhotoFiles = import.meta.glob('./photos/gallery/*.webp', {
    eager: true,
    import: 'default',
});

// A small helper that turns a folder of photos into a sorted list
function getSortedPhotoUrls(photoFiles: Record<string, unknown>): string[] {
    const filePaths = Object.keys(photoFiles);
    filePaths.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    const sortedUrls = filePaths.map((path) => photoFiles[path] as string);

    return sortedUrls;
}

// Get final sorted list of URLs
const galleryUrls = getSortedPhotoUrls(galleryPhotoFiles);

// Build the gallery items
const galleryItems: GalleryItem[] = [];
for (let i = 0; i < galleryUrls.length; i++) {
    galleryItems.push({
        id: `g-out-${i + 1}`,
        url: galleryUrls[i],
        category: 'exterior',
    });
}

export const GALLERY_ITEMS: GalleryItem[] = [...galleryItems];
