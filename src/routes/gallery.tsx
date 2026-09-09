import type { Route } from './+types/gallery';
import { GalleryPage } from '../pages/GalleryPage';
import { useVillaContext } from '../App';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Photo Gallery - Sekar Sophia Villa' },
        {
            name: 'description',
            content:
                'Browse photos of Sekar Sophia Villa in Kasongan, Bantul — indoor and outdoor spaces, rooms, and surroundings.',
        },
    ];
}

export default function GalleryRoute() {
    const { currentLang, translations } = useVillaContext();
    return (
        <GalleryPage currentLang={currentLang} translations={translations} />
    );
}
