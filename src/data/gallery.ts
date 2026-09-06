import { GalleryItem } from '../types';

const outdoorPhotoFiles = import.meta.glob('./photos/gallery/outdoor-*.webp', {
    eager: true,
    import: 'default',
});

const indoorPhotoFiles = import.meta.glob('./photos/gallery/indoor-*.webp', {
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
const outdoorUrls = getSortedPhotoUrls(outdoorPhotoFiles);
const indoorUrls = getSortedPhotoUrls(indoorPhotoFiles);

// Build the outdoor gallery items
const outdoorItems: GalleryItem[] = [];
for (let i = 0; i < outdoorUrls.length; i++) {
    outdoorItems.push({
        id: `g-out-${i + 1}`,
        url: outdoorUrls[i],
        category: 'exterior',
    });
}

// Build the indoor gallery items
const indoorItems: GalleryItem[] = [];
for (let i = 0; i < indoorUrls.length; i++) {
    indoorItems.push({
        id: `g-in-${i + 1}`,
        url: indoorUrls[i],
        category: 'interior',
    });
}

export const GALLERY_ITEMS: GalleryItem[] = [...outdoorItems, ...indoorItems];
