import { useState } from 'react';
import {
    Outlet,
    useLocation,
    useNavigate,
    useOutletContext,
} from 'react-router';
import { Navbar } from './components/layout/Navbar';
// import { AboutPage } from './pages/AboutPage';
// import { RoomAndFacilityPage } from './pages/RoomAndFacilityPage';
// import { GalleryPage } from './pages/GalleryPage';
// import { ReservePage } from './pages/ReservePage';
import { LANGUAGES } from './data/villaData';
import { LanguageCode } from './types';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Footer } from './components/layout/Footer';

type VillaContextValue = {
    currentLang: LanguageCode;
    translations: (typeof LANGUAGES)['en'];
    onExploreClick: () => void;
    onBookClick: () => void;
};

export default function App() {
    const [currentLang, setCurrentLang] = useState<LanguageCode>('en');
    const translations = LANGUAGES[currentLang];
    const navigate = useNavigate();
    const location = useLocation();

    /**
     * Smooth Scrolling Facilitator
     * Transitions scroll position elegantly back up to the zero vertical coordinate coordinate.
     */
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    /**
     * Link Hook Router
     * Performs dual action updates: changes active tab context and targets coordinates to top index on transition.
     */
    const handleFooterLinkClick = (tabId: string) => {
        navigate(tabId === 'about' ? '/' : `/${tabId}`);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            id="sekar-sophia-villa-site"
            className="min-h-screen bg-cream font-sans antialiased text-stone-900 selection:bg-gold/10 selection:text-gold"
        >
            {/* Header Sticky Strip */}
            <Navbar
                currentLang={currentLang}
                onLanguageChange={(lang) => setCurrentLang(lang)}
                translations={translations}
            />

            {/* Main Structural Layout Modules */}
            <main className="relative z-10 pt-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Outlet
                            context={
                                {
                                    currentLang,
                                    translations,
                                    onExploreClick: () =>
                                        handleFooterLinkClick(
                                            'roomandfacility',
                                        ),
                                    onBookClick: () =>
                                        handleFooterLinkClick('reserve'),
                                } satisfies VillaContextValue
                            }
                        />
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Footer */}
            <Footer
                currentLang={currentLang}
                onLinkClick={handleFooterLinkClick}
            />

            {/* Persistent Floating Back-to-Top Button */}
            <div className="fixed bottom-6 right-6 z-40">
                <button
                    onClick={handleScrollToTop}
                    className="p-2.5 bg-stone-900 hover:bg-gold text-white rounded-full border border-stone-850 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
                    aria-label="Scroll back to top"
                >
                    <ChevronUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
                </button>
            </div>
        </div>
    );
}

export function useVillaContext() {
    return useOutletContext<VillaContextValue>();
}
