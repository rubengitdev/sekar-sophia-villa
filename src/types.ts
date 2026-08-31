export interface TranslationSet {
    // Common Elements
    navHome: string;
    navAbout: string;
    navAccommodation: string;
    navGallery: string;
    navFacilities: string;
    navRates: string;
    navAttractions: string;
    navReviews: string;
    navContact: string;
    bookNowButton: string;
    whatsappMessagePrefill: string;

    // Hero Section
    heroTagline: string;
    heroSubheadline: string;
    exploreMore: string;

    // About Section
    aboutTitle: string;
    aboutSubtitle: string;
    aboutStoryTitle: string;
    aboutStoryText: string;
    propertyOverviewTitle: string;
    propertyOverviewSubtitle: string;
    uspTitle: string;

    // Accommodation Section
    accommodationTitle: string;
    accommodationSubtitle: string;
    capacityLabel: string;
    specSize: string;
    specBed: string;
    specBath: string;

    // Facilities Section
    facilitiesTitle: string;
    facilitiesSubtitle: string;

    // Rates Section
    ratesTitle: string;
    ratesSubtitle: string;
    nightlyRateLabel: string;
    seasonalPricingTitle: string;
    seasonalPeriod: string;
    seasonalPrice: string;
    bookingRulesTitle: string;
    minimumStayLabel: string;
    daysLabel: string;
    checkInLabel: string;
    checkOutLabel: string;

    // Attractions Section
    attractionsTitle: string;
    attractionsSubtitle: string;
    distanceLabel: string;

    // Reviews Section
    reviewsTitle: string;
    reviewsSubtitle: string;

    // Contact Section
    contactTitle: string;
    contactSubtitle: string;
    contactInfoHeading: string;
    locationHeading: string;
    bookingFormHeading: string;
    yourNamePlaceholder: string;
    yourEmailPlaceholder: string;
    checkInDatePlaceholder: string;
    checkOutDatePlaceholder: string;
    guestsCountPlaceholder: string;
    specialNotesPlaceholder: string;
    submitBookingWhatsApp: string;
    linksThirdPartyHeading: string;
}

export type LanguageCode = 'en' | 'id';

/** Structural outline for home Highlights or USP items visible in About.tsx list blocks */
export interface HighlightFeature {
    icon: string;
    title: Record<LanguageCode, string>;
    description: Record<LanguageCode, string>;
}

export interface USPItem {
    icon: string;
    title: Record<LanguageCode, string>;
    description: Record<LanguageCode, string>;
}

/** Amenities listing inside Facilities.tsx grids */
export interface AmenityDetail {
    icon: string;
    name: Record<LanguageCode, string>;
    description: Record<LanguageCode, string>;
}

/** Structural dimensions and capacity rules bounding an accommodation suite */
export interface RoomSpec {
    size: string;
    beds: Record<LanguageCode, string>;
    baths: Record<LanguageCode, string>;
    capacity: Record<LanguageCode, string>;
}

/** Comprehensive specifications containing room galleries, tags, and detailed descriptions */
export interface RoomDetails {
    id: string;
    name: Record<LanguageCode, string>;
    categoryName?: Record<LanguageCode, string>; // Optional clean label for tabs, e.g. "Temple Suite"
    badgeName?: Record<LanguageCode, string>; // Optional collection label, e.g. "Premium Residence"
    roomDescription: Record<LanguageCode, string>;
    specs: RoomSpec;
    images: string[];
    features: Record<LanguageCode, string[]>;
}

/** Asset schema mapping index images inside Gallery.tsx and Lightbox overlays */
export interface GalleryItem {
    id: string;
    url: string;
    category: 'exterior' | 'interior' | 'pool' | 'surroundings';
    caption: Record<LanguageCode, string>;
}

/** Seasonal rate configurations referenced in pricing cards and booking algorithms */
export interface RateSeason {
    name: Record<LanguageCode, string>;
    dates: Record<LanguageCode, string>;
    rate: number;
}

/** Local attraction data guide nodes in LocalAttraction maps */
export interface AttractionItem {
    id: string;
    name: Record<LanguageCode, string>;
    category: 'beach' | 'restaurant' | 'culture' | 'shopping';
    distance: string;
    duration: string;
    image: string;
    description: Record<LanguageCode, string>;
    googleMapsUrl: string;
}

/** Customer review rating cards with stars and avatar files */
export interface ReviewItem {
    id: string;
    name: string;
    country: string;
    date: string;
    rating: number;
    avatar: string;
    comment: Record<LanguageCode, string>;
}

export interface SocialLinks {
    instagram: string;
    facebook: string;
    youtube: string;
}

/** Alternative third-party checkout listings (OTAs) */
export interface ThirdPartyLinks {
    airbnb: string;
    tiket: string;
    bookingCom: string;
}

/** Central config parameters mapping owner name, contacts, prices, base currencies, and seasons */
export interface VillaConfig {
    name: string;
    owner: string;
    contact: {
        phone: string; // WhatsApp styled format e.g. "628123456789"
        email: string;
        address: Record<LanguageCode, string>;
        googleMapsEmbedUrl: string;
        googleMapsDirectionUrl: string;
    };
    pricing: {
        baseRate: number;
        currency: string;
        currencySymbol: string;
        minimumStay: number;
        seasons: RateSeason[];
        rules: Record<LanguageCode, string[]>;
    };
    socials: SocialLinks;
    thirdParty: ThirdPartyLinks;
}
