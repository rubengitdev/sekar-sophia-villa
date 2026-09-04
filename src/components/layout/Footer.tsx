import { VILLA_CONFIG } from '../../data/villaData';
import { LanguageCode } from '../../types';

interface FooterProps {
    currentLang: LanguageCode;
    onLinkClick: (tabId: string) => void;
}

export function Footer({ currentLang, onLinkClick }: FooterProps) {
    return (
        <footer
            id="global-footer"
            className="bg-warmgray text-stone-800 border-t border-stone-200/60 pt-14 pb-8 px-6 md:px-12 mt-12"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-stone-200 pb-10 text-center md:text-left">
                    {/* Branding Column */}
                    <div className="space-y-3">
                        <h3 className="font-serif text-xl font-bold text-stone-900 tracking-tight">
                            Sekar Sophia{' '}
                            <span className="text-gold">Villa</span>
                        </h3>
                        <p className="font-sans text-xs text-stone-500 font-light max-w-xs leading-relaxed mx-auto md:mx-0">
                            {currentLang === 'en'
                                ? "An organic artistic sanctuary built to capture Bantul's heritage, designed for quiet minds."
                                : 'Suaka seni organik yang didirikan untuk menangkap warisan budaya Bantul, dirancang bagi ketenangan jiwa.'}
                        </p>
                    </div>

                    {/* Inquiries / Direct Line Column */}
                    <div className="space-y-3 font-sans text-xs">
                        <span className="block text-[9px] font-mono uppercase text-stone-450 tracking-widest font-bold">
                            {currentLang === 'en'
                                ? 'Reservations'
                                : 'Reservasi Resmi'}
                        </span>
                        <p className="text-stone-600 font-light">
                            sekarsophiavilla@gmail.com
                        </p>
                        <a
                            href={`https://wa.me/${VILLA_CONFIG.contact.phone}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold font-bold hover:underline block mt-1"
                        >
                            +62 812-3456-7890 (Sophia Direct)
                        </a>
                    </div>

                    {/* Links and Policies */}
                    <div className="space-y-3 text-xs">
                        <span className="block text-[9px] font-mono uppercase text-stone-450 tracking-widest font-bold">
                            {currentLang === 'en'
                                ? 'Quick Chapters'
                                : 'Halaman Utama'}
                        </span>
                        <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-stone-500 text-[11px] font-medium">
                            <button
                                onClick={() => onLinkClick('about')}
                                className="hover:text-gold cursor-pointer"
                            >
                                {currentLang === 'en' ? 'About' : 'Kisah Kami'}
                            </button>
                            <button
                                onClick={() => onLinkClick('roomandfacility')}
                                className="hover:text-gold cursor-pointer"
                            >
                                {currentLang === 'en'
                                    ? 'Room & Facility'
                                    : 'Kamar & Fasilitas'}
                            </button>
                            <button
                                onClick={() => onLinkClick('gallery')}
                                className="hover:text-gold cursor-pointer"
                            >
                                {currentLang === 'en' ? 'Gallery' : 'Galeri'}
                            </button>
                            <button
                                onClick={() => onLinkClick('reserve')}
                                className="hover:text-gold cursor-pointer"
                            >
                                {currentLang === 'en' ? 'Reserve' : 'Pemesanan'}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-[9px] font-mono text-stone-450 tracking-wider">
                    <span>© 2026 SEKARSOPHIAVILLA. ALL RIGHTS RESERVED.</span>
                    <div className="flex items-center space-x-2 mt-3 sm:mt-0 uppercase text-stone-500 font-bold">
                        <span>Managed by Sekar Sophia</span>
                        <span>•</span>
                        <span className="text-gold">Kasongan, Bantul</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
