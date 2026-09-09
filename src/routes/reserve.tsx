import type { Route } from './+types/reserve';
import { ReservePage } from '../pages/ReservePage';
import { useVillaContext } from '../App';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Book Now - Sekar Sophia Villa' },
        {
            name: 'description',
            content:
                'Reserve your stay at Sekar Sophia Villa in Kasongan, Bantul, Yogyakarta. Check availability and book directly.',
        },
    ];
}

export default function ReserveRoute() {
    const { currentLang, translations } = useVillaContext();
    return (
        <ReservePage currentLang={currentLang} translations={translations} />
    );
}
