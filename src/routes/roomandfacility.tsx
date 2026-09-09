import type { Route } from './+types/roomandfacility';
import { RoomAndFacilityPage } from '../pages/RoomAndFacilityPage';
import { useVillaContext } from '../App';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Rooms & Facilities - Sekar Sophia Villa' },
        {
            name: 'description',
            content:
                'Explore the rooms and facilities at Sekar Sophia Villa in Kasongan, Bantul — Standard, Superior, Deluxe, and Twin Bed rooms with modern amenities.',
        },
    ];
}

export default function RoomAndFacilityRoute() {
    const { currentLang, translations } = useVillaContext();
    return (
        <RoomAndFacilityPage
            currentLang={currentLang}
            translations={translations}
        />
    );
}
