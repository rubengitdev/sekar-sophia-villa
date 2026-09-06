import React, { useState } from 'react';
import {
    Maximize,
    Bed,
    Bath,
    Users,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';
import { ROOMS } from '../../data/villaData';
import { LanguageCode, TranslationSet } from '../../types';
import { getDirectImageUrl } from '../../utils/imageUtils';

interface AccommodationProps {
    currentLang: LanguageCode;
    translations: TranslationSet;
}

export function Accommodation({
    currentLang,
    translations,
}: AccommodationProps) {
    // Tracks active room model ID
    const [activeRoomId, setActiveRoomId] = useState<string>(ROOMS[0].id);
    // Tracks active image carousel index inside selected room dataset
    const [activeImgIndex, setActiveImgIndex] = useState<number>(0);

    // Computes active room data reference
    const activeRoom = ROOMS.find((r) => r.id === activeRoomId) || ROOMS[0];

    /** Room toggler callback; resets active visual carousel state pointers */
    const handleRoomChange = (roomId: string) => {
        setActiveRoomId(roomId);
        setActiveImgIndex(0);
    };

    /** Step images back, wrapping dynamically to the end */
    const handlePrevImg = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveImgIndex(
            (prev) =>
                (prev - 1 + activeRoom.images.length) %
                activeRoom.images.length,
        );
    };

    /** Step images forward, wrapping back to 0 */
    const handleNextImg = (e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveImgIndex((prev) => (prev + 1) % activeRoom.images.length);
    };

    return (
        <section
            id="accommodation"
            className="bg-cream text-stone-900 py-16 px-6 md:px-12"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase font-semibold">
                        {currentLang === 'en'
                            ? 'Private Co-Living Spaces'
                            : 'Ruang Hunian Privat Bersama'}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mt-2 leading-tight">
                        {translations.accommodationTitle}
                    </h2>
                    <p className="font-sans text-sm sm:text-base text-stone-600 mt-3 font-light leading-relaxed">
                        {translations.accommodationSubtitle}
                    </p>
                </div>

                {/* Dynamic Selector Tabs - Clean Light Mode Pill Slider */}
                <div className="flex flex-wrap md:flex-nowrap justify-center gap-1.5 mb-10 bg-stone-100/90 border border-stone-200/80 rounded-xl p-1.5 max-w-xl mx-auto">
                    {ROOMS.map((room) => (
                        <button
                            id={`tab-btn-${room.id}`}
                            key={room.id}
                            onClick={() => handleRoomChange(room.id)}
                            className={`flex-1 min-w-31 text-center py-2 px-4 rounded-lg text-[10px] tracking-wider uppercase font-bold transition-all duration-300 cursor-pointer focus:outline-none ${
                                activeRoomId === room.id
                                    ? 'bg-white text-gold shadow-sm'
                                    : 'text-stone-500 hover:text-stone-900'
                            }`}
                        >
                            {room.categoryName
                                ? room.categoryName[currentLang]
                                : room.name[currentLang]
                                      .split(' ')
                                      .slice(-2)
                                      .join(' ')}
                        </button>
                    ))}
                </div>

                {/* Highlighted Suite Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                    {/* Images Slider Column */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                        <div className="space-y-4">
                            {/* Main Active Room Image with Slide Controls */}
                            <div className="relative aspect-video md:aspect-4/3 rounded-xl overflow-hidden border border-stone-200/80 shadow-xs group">
                                <img
                                    src={getDirectImageUrl(
                                        activeRoom.images[activeImgIndex] ||
                                            activeRoom.images[0],
                                    )}
                                    alt={`${activeRoom.name[currentLang]} - Photo ${activeImgIndex + 1}`}
                                    className="h-full w-full object-cover transition-all duration-500 ease-in-out"
                                    referrerPolicy="no-referrer"
                                />

                                {/* Left Arrow */}
                                {activeRoom.images.length > 1 && (
                                    <button
                                        onClick={handlePrevImg}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-gold hover:text-white text-stone-800 transition-all shadow-md backdrop-blur-xs cursor-pointer md:opacity-0 md:group-hover:opacity-100"
                                        aria-label="Previous photo"
                                    >
                                        <ChevronLeft className="h-4 w-4" />
                                    </button>
                                )}

                                {/* Right Arrow */}
                                {activeRoom.images.length > 1 && (
                                    <button
                                        onClick={handleNextImg}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-gold hover:text-white text-stone-800 transition-all shadow-md backdrop-blur-xs cursor-pointer md:opacity-0 md:group-hover:opacity-100"
                                        aria-label="Next photo"
                                    >
                                        <ChevronRight className="h-4 w-4" />
                                    </button>
                                )}

                                {/* Photo Bullet indicators */}
                                {activeRoom.images.length > 1 && (
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 bg-black/35 px-2.5 py-1 rounded-full backdrop-blur-xs">
                                        {activeRoom.images.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setActiveImgIndex(idx);
                                                }}
                                                className={`w-1.5 h-1.5 rounded-full transition-all ${
                                                    activeImgIndex === idx
                                                        ? 'bg-gold scale-125'
                                                        : 'bg-white/60 hover:bg-white'
                                                }`}
                                                aria-label={`Go to photo ${idx + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Sub Gallery / Thumbnail Strip (Scrollable and dynamic) */}
                            {activeRoom.images.length > 0 && (
                                <div>
                                    <span className="block text-[10px] font-mono text-stone-500 uppercase tracking-widest mb-2 font-semibold">
                                        {currentLang === 'en'
                                            ? 'Suite Perspectives'
                                            : 'Pilihan Sudut Pandang'}{' '}
                                        ({activeRoom.images.length})
                                    </span>
                                    <div className="flex gap-3 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-stone-200 scrollbar-track-transparent">
                                        {activeRoom.images.map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() =>
                                                    setActiveImgIndex(idx)
                                                }
                                                className={`relative aspect-4/3 w-20 sm:w-24 rounded-lg overflow-hidden border shrink-0 transition-all duration-300 cursor-pointer focus:outline-none ${
                                                    activeImgIndex === idx
                                                        ? 'border-gold ring-1 ring-gold opacity-100'
                                                        : 'border-stone-200 hover:border-gold/50 opacity-60 hover:opacity-100'
                                                }`}
                                            >
                                                <img
                                                    src={getDirectImageUrl(img)}
                                                    alt={`${activeRoom.name[currentLang]} thumbnail ${idx + 1}`}
                                                    className="h-full w-full object-cover"
                                                    referrerPolicy="no-referrer"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Details Column */}
                    <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:pl-6">
                        <div>
                            <span className="text-[10px] font-mono text-gold tracking-[0.2em] uppercase font-semibold">
                                {activeRoom.badgeName
                                    ? activeRoom.badgeName[currentLang]
                                    : activeRoom.id === 'suite-master'
                                      ? 'Premium Residence'
                                      : 'Garden Retreat'}
                            </span>
                            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mt-1 leading-tight">
                                {activeRoom.name[currentLang]}
                            </h3>
                            <p className="font-sans text-stone-600 font-light text-sm sm:text-base leading-relaxed mt-4">
                                {activeRoom.roomDescription[currentLang]}
                            </p>
                        </div>

                        {/* Structured Specifications Grid */}
                        <div className="grid grid-cols-2 gap-3 border-t border-stone-200/70 pt-6">
                            <div className="flex items-center space-x-3 bg-stone-50/50 p-2.5 rounded-lg border border-stone-200/40">
                                <Maximize className="h-4 w-4 text-gold shrink-0" />
                                <div>
                                    <span className="block text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                                        {translations.specSize}
                                    </span>
                                    <span className="text-xs sm:text-sm font-semibold text-stone-850">
                                        {activeRoom.specs.size}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 bg-stone-50/50 p-2.5 rounded-lg border border-stone-200/40">
                                <Bed className="h-4 w-4 text-gold shrink-0" />
                                <div>
                                    <span className="block text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                                        {translations.specBed}
                                    </span>
                                    <span className="text-xs sm:text-sm font-semibold text-stone-850 line-clamp-1">
                                        {activeRoom.specs.beds[currentLang]}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 bg-stone-50/50 p-2.5 rounded-lg border border-stone-200/40">
                                <Bath className="h-4 w-4 text-gold shrink-0" />
                                <div>
                                    <span className="block text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                                        {translations.specBath}
                                    </span>
                                    <span className="text-xs sm:text-sm font-semibold text-stone-850 line-clamp-1">
                                        {activeRoom.specs.baths[currentLang]}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 bg-stone-50/50 p-2.5 rounded-lg border border-stone-200/40">
                                <Users className="h-4 w-4 text-gold shrink-0" />
                                <div>
                                    <span className="block text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                                        {translations.capacityLabel}
                                    </span>
                                    <span className="text-xs sm:text-sm font-semibold text-stone-850">
                                        {activeRoom.specs.capacity[currentLang]}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Bespoke Amenity Points */}
                        <div className="border-t border-stone-200/70 pt-6">
                            <span className="block text-[10px] font-mono text-stone-500 uppercase tracking-widest mb-3 font-semibold">
                                {currentLang === 'en'
                                    ? 'Suite Premium Inclusions'
                                    : 'Kelengkapan Premium Kamar'}
                            </span>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                {activeRoom.features[currentLang].map(
                                    (feat, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center space-x-2 text-xs sm:text-sm font-sans text-stone-600"
                                        >
                                            <CheckCircle className="h-3.5 w-3.5 text-gold shrink-0" />
                                            <span>{feat}</span>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
