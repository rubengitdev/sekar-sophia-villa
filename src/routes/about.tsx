import type { Route } from './+types/about';
import { AboutPage } from '../pages/AboutPage';
import { useVillaContext } from '../App';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Sekar Sophia Villa - Private Villa in Kasongan, Bantul' },
        {
            name: 'description',
            content:
                "Discover Sekar Sophia Villa, a private villa retreat in Kasongan, Bantul, Yogyakarta. Peaceful surroundings, modern comfort, close to Jogja's cultural sites.",
        },
    ];
}

export default function AboutRoute() {
    const { currentLang, translations, onExploreClick, onBookClick } =
        useVillaContext();

    return (
        <AboutPage
            currentLang={currentLang}
            translations={translations}
            onExploreClick={onExploreClick}
            onBookClick={onBookClick}
        />
    );
}
