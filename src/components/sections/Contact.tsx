import {
    Mail,
    Phone,
    MapPin,
    ExternalLink,
    Instagram,
    Facebook,
    Youtube,
    Sparkles,
} from 'lucide-react';
import { VILLA_CONFIG } from '../../data/villaData';
import { LanguageCode, TranslationSet } from '../../types';

interface ContactProps {
    currentLang: LanguageCode;
    translations: TranslationSet;
}

export function Contact({ currentLang, translations }: ContactProps) {
    /**
     * Phone Number Formatter
     * Maps a raw digit string (e.g., 628123456789) into a spaced regional display (e.g. +62 812-3456-789).
     */
    const formatPhoneNumber = (num: string) => {
        return `+${num.slice(0, 2)} ${num.slice(2, 5)}-${num.slice(5, 9)}-${num.slice(9)}`;
    };

    return (
        <section
            id="contact"
            className="bg-cream py-16 px-6 md:px-12 text-stone-900"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center md:text-left mb-12 border-l-4 border-gold pl-4 max-w-2xl font-sans">
                    <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase font-semibold">
                        {translations.navContact}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mt-2 leading-tight">
                        {translations.contactTitle}
                    </h2>
                    <p className="font-sans text-sm sm:text-base text-stone-600 mt-3 font-light leading-relaxed">
                        {translations.contactSubtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                    {/* Contact Details & Links */}
                    <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                        {/* Direct Contacts Info */}
                        <div className="bg-white border border-stone-200/60 p-6 rounded-xl shadow-2xs space-y-6">
                            <h3 className="font-serif text-base font-bold text-stone-900 border-b border-stone-100 pb-3">
                                {translations.contactInfoHeading}
                            </h3>

                            <div className="space-y-4 text-xs sm:text-sm font-sans">
                                {/* Owner Phone */}
                                <div className="flex items-start space-x-3.5">
                                    <div className="p-2 bg-stone-100 rounded-lg text-gold shrink-0 mt-0.5">
                                        <Phone className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <span className="block text-[8px] font-mono uppercase text-stone-400 font-bold tracking-wider">
                                            Owner & Host
                                        </span>
                                        <a
                                            href={`https://wa.me/${VILLA_CONFIG.contact.phone}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-bold text-stone-800 hover:text-gold transition-colors block mt-0.5"
                                        >
                                            {formatPhoneNumber(
                                                VILLA_CONFIG.contact.phone,
                                            )}{' '}
                                            (WhatsApp)
                                        </a>
                                    </div>
                                </div>

                                {/* Email address */}
                                <div className="flex items-start space-x-3.5">
                                    <div className="p-2 bg-stone-100 rounded-lg text-gold shrink-0 mt-0.5">
                                        <Mail className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <span className="block text-[8px] font-mono uppercase text-stone-400 font-bold tracking-wider">
                                            Email Address
                                        </span>
                                        <a
                                            href={`mailto:${VILLA_CONFIG.contact.email}`}
                                            className="font-semibold text-stone-700 hover:text-gold transition-colors block mt-0.5"
                                        >
                                            {VILLA_CONFIG.contact.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Physical address */}
                                <div className="flex items-start space-x-3.5">
                                    <div className="p-2 bg-stone-100 rounded-lg text-gold shrink-0 mt-0.5">
                                        <MapPin className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <span className="block text-[8px] font-mono uppercase text-stone-400 font-bold tracking-wider">
                                            Kasongan Presence
                                        </span>
                                        <p className="font-sans text-stone-600 font-light mt-1.5 leading-relaxed text-xs sm:text-sm">
                                            {
                                                VILLA_CONFIG.contact.address[
                                                    currentLang
                                                ]
                                            }
                                        </p>
                                        <a
                                            href={
                                                VILLA_CONFIG.contact
                                                    .googleMapsDirectionUrl
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center space-x-1 text-[10px] font-mono text-gold hover:text-gold-hover mt-2 font-bold cursor-pointer"
                                        >
                                            <span>Get GPS Directions</span>
                                            <ExternalLink className="h-3 w-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Third-party platform channels */}
                        <div className="bg-white border border-stone-200/60 p-6 rounded-xl shadow-2xs space-y-3.5">
                            <h3 className="font-serif text-[10px] font-bold uppercase tracking-widest text-stone-400">
                                {translations.linksThirdPartyHeading}
                            </h3>
                            <div className="grid grid-cols-3 gap-2">
                                <a
                                    href={VILLA_CONFIG.thirdParty.airbnb}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between px-2.5 py-2 bg-rose-50/50 hover:bg-rose-100/50 border border-rose-100 rounded-lg text-[9px] font-bold text-rose-700 font-sans transition-all"
                                >
                                    <span>Airbnb</span>
                                    <ExternalLink className="h-3 w-3" />
                                </a>
                                <a
                                    href={VILLA_CONFIG.thirdParty.tiket}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between px-2.5 py-2 bg-blue-50/50 hover:bg-blue-100/50 border border-blue-100 rounded-lg text-[9px] font-bold text-blue-700 font-sans transition-all"
                                >
                                    <span>Tiket</span>
                                    <ExternalLink className="h-3 w-3" />
                                </a>
                                <a
                                    href={VILLA_CONFIG.thirdParty.bookingCom}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between px-2.5 py-2 bg-sky-50/40 hover:bg-sky-100/40 border border-sky-100 rounded-lg text-[9px] font-bold text-sky-850 font-sans transition-all"
                                >
                                    <span>Booking</span>
                                    <ExternalLink className="h-3 w-3" />
                                </a>
                            </div>
                        </div>

                        {/* Social media connections */}
                        <div className="flex items-center justify-start space-x-3 pt-2">
                            <span className="font-mono text-[9px] uppercase text-stone-400 tracking-wider font-bold">
                                Follow Resort Journal:
                            </span>
                            <a
                                href={VILLA_CONFIG.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white hover:bg-gold/10 border border-stone-200 hover:border-gold text-stone-500 hover:text-gold rounded-full transition-all shadow-2xs"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a
                                href={VILLA_CONFIG.socials.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white hover:bg-gold/10 border border-stone-200 hover:border-gold text-stone-500 hover:text-gold rounded-full transition-all shadow-2xs"
                            >
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a
                                href={VILLA_CONFIG.socials.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white hover:bg-gold/10 border border-stone-200 hover:border-gold text-stone-500 hover:text-gold rounded-full transition-all shadow-2xs"
                            >
                                <Youtube className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Location Interactive Embed Map */}
                    <div className="lg:col-span-7 h-full">
                        <div className="bg-white border border-stone-200/60 p-4 rounded-xl shadow-2xs h-full flex flex-col justify-between">
                            <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-4 font-sans">
                                <h3 className="font-serif text-base font-bold text-stone-900">
                                    {translations.locationHeading}
                                </h3>
                                <span className="font-mono text-[9px] tracking-wider text-stone-400 uppercase font-bold">
                                    Bantul Regency, DIY
                                </span>
                            </div>

                            {/* The Iframe Map */}
                            <div className="w-full h-70 md:h-80 lg:h-87.5 rounded-lg overflow-hidden border border-stone-200">
                                <iframe
                                    title="Sekar Sophia Villa Google Map Kasongan location"
                                    src={
                                        VILLA_CONFIG.contact.googleMapsEmbedUrl
                                    }
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            <div className="flex items-center space-x-2 text-[10px] text-stone-400 font-sans mt-3">
                                <Sparkles className="h-3.5 w-3.5 text-gold shrink-0" />
                                <span className="font-light">
                                    {currentLang === 'en'
                                        ? "Located just 15 minutes away from downtown Yogyakarta Palace, inside Kasongan's clay artisan enclave."
                                        : 'Berjarak selemparan batu dari pusat kriya kramik Kasongan, hanya 15 menit menuju Kraton Yogyakarta.'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
