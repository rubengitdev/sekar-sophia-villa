# 🌸 Product Requirements Document (PRD): Sekar Sophia Villa

## 1. Executive Summary & Product Vision

### 1.1 Vision Statement
**Sekar Sophia Villa** is an art-crafted, boutique tropical retreat web application. The platform serves as a modern digital showcase and booking assistant for a luxurious Javanese Joglo-Modern villa in Kasongan, Bantul (Yogyakarta, Indonesia). Translating the aesthetic design choices of the physical estate to a high-performance web experience, the product showcases the villa across four distinct thematic chapters with fluid, native-app-like transitions. Its ultimate objective is to elevate direct reservation conversions by providing a seamless, real-time seasonal stay rate estimator that generates formatted booking inquiries routed instantly to the owner, Sophia, via WhatsApp.

### 1.2 Target Audience
*   **Aesthetic & Heritage Enthusiasts**: Travelers looking for immersive architectural stays that merge Javanese heritage (modern Joglo wooden-frame pavilions) with boutique high-end organic materials.
*   **Leisure & Solitude Seekers**: Couples, families, and remote creatives who prioritize premium private amenities (such as a saltwater pool, custom ceramic baths, and high-speed working bays).
*   **Direct-Booking Savvy Guests**: Independent travelers seeking verified rates, seasonal rules transparency, and direct communication with local hosts rather than inflated OTA booking platforms.

### 1.3 Key Value Propositions
*   **Immersive Single-Tab Scrolling Chapters**: Grouped narrative layouts that prevent multiple slow page refreshes.
*   **Zero-Load Direct Price Estimator**: An instantaneous seasonal rate calculator with precise calendar stay computations.
*   **Instant Direct Channel Hook**: WhatsApp API invoice templates pre-filled with correct reservation data, names, dates, calculated price breakdown, and guest count.
*   **Zero-Friction Bilingualism**: Immediate, client-side, single-toggle translation mapping between English (`EN`) and Indonesian (`ID`).

---

## 2. Brand Identity & Visual Language Layout

The application's digital experience mirrors a curated, high-end editorial look designed with spacious breathing margins, thin structural borders, and organic, eye-safe tones.

### 2.1 Color Palette Archetype (The "Aesthetic Cream" Theme)
*   **Primary Backdrop (Cream)**: `#fdfcfb` – Replaces typical clinical whites with a warm, soft material-first surface.
*   **Accent Surface (Warm Gray)**: `#f7f3ee` – Applied on alternate section wrappers, cards, or footer divisions to guide visual hierarchy.
*   **Body & Header Text (Luxe Charcoal)**: `#1a1613` – Soft, dark charcoal that retains premium readability without the harsh contrast of pitch black (`#000000`).
*   **Boutique Highlight (Boutique Gold / Terracotta-Brown)**: `#A86523` – Warm gold tone to represent the wood elements of the Joglo cottage and potter clays of Kasongan. Used for icons, focus highlight states, selected borders, and active tabs.

### 2.2 Typography Selection & Pairings
1.  **Display Headings**: `Playfair Display` (Serif) – Invokes a sense of bespoke craftsmanship, hospitality, and editorial sophistication. Applied to hero headlines, section subtitles, and suite titles.
2.  **General Body Copy**: `Inter` (Sans-Serif) – Provides high legibility, clean letter spacing, and a modern neutral backbone for system explanations, rules, and descriptions.
3.  **Monospaced Metadata / Labels**: `JetBrains Mono` (Monospace uppercase) – Establishes clean technical and financial details for pricing breakdowns, status states, driving distances, check-in schedules, and capacity figures.

### 2.3 Motion & Transitions (Under `motion`)
*   **Page Transitions**: Lazy fade and subtle vertical slide-ins on switching chapters.
*   **Interactive Controls**: Staggered list entrances for amenities, zoom-on-hover for photography cards, and active under-lines transitioning across the Navigation menu items.

---

## 3. Product Features & Detailed Visual Layouts

The application is structured into **Four Section Chapters** accessible instantly through a floating sticky Navigation Header.

### 3.1 Navigation & Global Controls (Bilingual Header)
*   **Left-aligned**: Minimalist title logo `"Sekar Sophia Villa"` styled in elegant serif typography.
*   **Center-aligned**: Dynamic list of active navigation links matching current chapters: `[Story]`, `[Spaces]`, `[Discover]`, `[Reserve]`. Hovering creates a gold-toned underline effect.
*   **Right-aligned**: Language switcher trigger button (`EN | ID`) swapping the state reactively, plus a high-visibility CTA button highlighting the primary Reserve target.

---

### 3.2 Chapter 1: The Story (`story`)

#### Section A: Hero View (`Hero.tsx`)
*   **Layout Structure**: Full screen, immersive single-image backdrop, dark natural overlay.
*   **Content Elements**:
    *   Boutique tropical resort badges (e.g., "Art-Crafted Sanctuary" / "Kasongan, Yogyakarta").
    *   Focal headline (e.g., "Where Javanese Heritage Meets Organic Luxury").
    *   Quick Trust Statistics grid (e.g., `4.9 ★ Guest Rating`, `3 Bed Residences`, `100% Saltwater Resort`).
    *   Dual visual Action Buttons: primary direct reservation shortcut, secondary story exploration trigger.

#### Section B: History & Essence Description (`About.tsx`)
*   **Layout Structure**: 2-Column responsive grid (Visual backdrop split with copy blocks).
*   **Content Elements**:
    *   **Left Column**: High-resolution showcase of the open-concept living pavilion Joglo.
    *   **Right Column**: Narrative prose explaining Sophia's vision, history of Joglo wooden engineering, collaborations with local potters from Kasongan for custom clay items, and core estate stats (built year, ground acreage, and tropical garden setups).
    *   **Key Trust Badges**: Visual grid showcasing core values (e.g., Artisan Sourcing, Quiet Neighborhood, Private Host).

---

### 3.3 Chapter 2: The Spaces (`living`)

#### Section A: Interactive Accommodation Suites (`Accommodation.tsx`)
*   **Layout Structure**: Alternating split layouts or an interactive tabbed suite selector with image-carousel panels.
*   **Content Elements**:
    *   Dynamic Suite Tab buttons: `[ Master Suite ]` | `[ Garden Pavilion ]`.
    *   **Active Suite Image Slider**: Large aspect-[4/3] high-fidelity image panel with subtle left/right arrows, and a bottom row of visual thumbnails for instantaneous image swap.
    *   **Specifications Grid**: Monospaced tags stating `[ Area: 45 sqm ]`, `[ Bed: 1 King ]`, `[ Occupancy: 2 Adults ]`, and `[ Private Bath: Yes ]`.
    *   Detailed narrative description of the suite highlights (e.g., custom stone-carved bathtubs, private glass terrace view, direct pool access).
    *   Check-marked inclusions list for the specific room.

#### Section B: Resort Amenities & Bento Spotlight (`Facilities.tsx`)
*   **Layout Structure**: Harmonized Bento Layout consisting of structured blocks.
*   **Content Elements**:
    *   Highlight cards covering individual amenities: Private Saltwater Swimming Pool, Outdoor Firepit & Lounge, High-speed Fibre Wifi, Custom Craft Ceramic Kitchen.
    *   Icons utilizing `lucide-react` with precise, responsive alignment inside border-bounded grid containers.

---

### 3.4 Chapter 3: Discover (`discover`)

#### Section A: Filterable Media Portfolio (`Gallery.tsx`)
*   **Layout Structure**: Filter tabs followed by a responsive Masonry-like grid wrapping high-quality visual items.
*   **Filters**: `[ All ]` | `[ Architecture ]` | `[ Suites ]` | `[ Saltpool ]` | `[ Surroundings ]`.
*   **Interactive Actions**:
    *   Image hover triggers a subtle zoom effect (`hover:scale-103`).
    *   Clicking opens the cinematic Lightbox overlay.
*   **Lightbox Elements (`Lightbox.tsx`)**:
    *   Full-viewport dark backdrop.
    *   High-definition image render using CDN links.
    *   Intuitive controls: left-arrow, right-arrow, close button (`X`), and thumbnail strip. Supports keyboard triggers (Left, Right, Escape) and click-overlay-to-dismiss behavior.

#### Section B: Local Attractions Guideline (`LocalAttraction.tsx`)
*   **Layout Structure**: Clean responsive vertical timeline or itemized lists with distance/driving badges.
*   **Content Elements**:
    *   Visual representation of local sights: `Kasongan Pottery Village`, `Kraton Yogyakarta Palace`, `Parangtritis Beach`, `Local Culinary Spots`.
    *   Monospaced distance metrics (e.g., `[ 1.2 km ]` | `[ 5 mins driving ]`).
    *   Action triggers routing to Google Maps navigation for each landmark.

---

### 3.5 Chapter 4: Reserve (`reserve`)

#### Section A: Rates, Seasons & Policies (`Rates.tsx`)
*   **Layout Structure**: Comparative seasonal pricing sheets with transparent check-in timelines and policies.
*   **Seasonal Rates Matrix**:
    *   *Standard Season*: Baseline IDR 1,450,000 per night. Applied on all dates outside major holiday blocks.
    *   *High Season (June 1 - August 31)*: Dry season peak at IDR 1,800,000 per night.
    *   *Peak Season (Dec 15 - Jan 8)*: Holiday congestion block at IDR 2,200,000 per night.
*   **House Rules Grid**:
    *   Check-in (14:00 GMT+7) & Check-out (12:00 GMT+7).
    *   Smoking restricted to designated outdoor garden sections.
    *   Pet-friendliness with advance authorization.
    *   Event hosting coordinates.

#### Section B: Interactive Booking Widget (`BookingWidget.tsx`)
*   **Layout Structure**: Compact floating reservation panel with native calendar fields.
*   **Inputs**:
    *   Check-in & Check-out date pickers.
    *   Guest Count selector (Adults, Children, Extra Beds).
    *   Special Notes / Request text area.
*   **Formulaic Rate Engine**:
    *   Calculates number of nights: $N = \text{Date}_{\text{Check-out}} - \text{Date}_{\text{Check-in}}$.
    *   Iterates through each night of the booking block to evaluate exact calendar-specific rate matching:
        $$\text{Total Price} = \sum_{d=1}^{N} \text{Rate}(d)$$
    *   Displays instant, live breakdown detailing standard nights, premium seasonal add-on, extra bed costs, and the absolute cumulative total.
*   **WhatsApp API Invoice Generator**:
    *   Composes a high-end structured reservation draft with custom styling borders.
    *   Encodes state and triggers: `https://wa.me/6281234567890?text=[INVOICE_BODY_URI_ENCODED]`.

#### Section C: Visual Social Proof (`Reviews.tsx`)
*   **Layout Structure**: Interactive horizontal pagination slider.
*   **Content Elements**:
    *   Guest avatar illustrations.
    *   Text testimonials, gold stars score rating out of 5, traveler origins, and stay dates.
    *   Navigation markers showing state indicator dots.

#### Section D: Contact Info & Alternative Channels (`Contact.tsx`)
*   **Layout Structure**: Dual-grid consisting of primary contact data alongside interactive Embed Maps.
*   **Content Elements**:
    *   Host communication details (Sophia's verified host email and active hotlines).
    *   Google Maps embedded interactive map viewport.
    *   Alternative OTA booking links (Airbnb, Tiket, Booking.com) mapping to existing villa listings.

---

## 4. Technical Constraints & Architecture

### 4.1 Framework & Core Engine
*   **Language**: Standard strict **TypeScript** (`TSX/TS`).
*   **Framework**: **React 18** configured with Vite.
*   **Style Engine**: **Tailwind CSS** using native theme mapping variables inside `src/index.css`.
*   **Animations**: **motion** (imported from `motion/react`).
*   **Icons**: Centralized `lucide-react` vector library.

### 4.2 Storage & Persistent State Config
The current web application functions as a static frontend app with client-side localization state, image parser buffers, and direct API anchors (WhatsApp redirect). 
*   **Key State Controllers**: All localized mappings exist inside `src/data/languages.ts`.
*   **Asset Management**: Images are dynamically converted from Google Drive sharing URLs (which typically fail in standard `img src` calls) into raw CDN-delivery direct targets via `/src/utils/imageUtils.ts` (`https://lh3.googleusercontent.com/d/[FILE_ID]`).

---

## 5. Non-Functional Requirements (Performance & Security)

### 5.1 Image Processing Resilience
*   All images are loaded with absolute fallback buffers and utilize standard React characteristics (e.g., `referrerPolicy="no-referrer"`) to allow direct parsing from remote cloud engines safely.

### 5.2 Performance & Responsiveness
*   **Mobile Optimizations**: Custom gesture support or touch targets of at least 44px to prevent user frustration.
*   **Fluid Responsive Boundaries**: Layout bounds configured through standard Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`) prioritizing elegant space preservation.

### 5.3 Code Modularity & Scalability
*   Data must remain cleanly decoupled from interface logic to avoid messy token pollution. Code additions must leverage the central aggregator under `/src/data/villaData.ts`.

---

## 6. Maintenance & Future Milestones

### 6.1 Database Migration Roadmap
If the villa expands to multiple hosts, requires built-in credit card processing, or automated inventory blockings, the transition plan includes:
*   Integrating **Firebase Firestore** with robust document structures mapping to `bookings`, `rates`, and `rooms` endpoints.
*   Initializing **Firebase Security Rules** to lock and coordinate guest accounts.

### 6.2 Calendar Synchronization iCal Sync
*   Development of server-side routes mapping iCal channels from Airbnb or booking.com to auto-block dates in the local `BookingWidget` calendar picker.
