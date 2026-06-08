# 🌸 Sekar Sophia Villa - Project & Code Documentation
Welcome to the documentation for **Sekar Sophia Villa**, an aesthetic, minimalist, and highly polished light-themed web application. This boutique website is engineered using **React 18**, **TypeScript**, and **Tailwind CSS**, with smooth page/section transitions powered by **motion** (f.k.a. Framer Motion).

---

## 🧭 1. Architectural Design & Philosophy

This website utilizes a **single-screen grouped layout model** instead of standard multiple-route page reloads. Why? This ensures a fluid, immersive, and fast experience that mimics native mobile applications while reducing bundle overhead:

*   **Aesthetic & Minimalist**: Generous negative space, clean thin borders, precise responsive gaps, elegant gold accents, and a soft cream/warm gray backdrop (`#fdfcfb`).
*   **Zero Visual Clutter**: Elements are aligned to a strict grid. Hover states are subtle, and status tags are stylized in tiny monospaced typography to retain a high-end editorial feel (similar to boutique architectural magazines).
*   **Dual Language Support**: Easily bridges Indonesian (`ID`) and English (`EN`) instantly with local reactive state, without complex third-party translation packages.

---

## 📂 2. Directory Structure

Below is the directory breakdown of the codebase:

```bash
/src
  ├── types.ts              # Contains strict TypeScript interfaces and types
  ├── main.tsx              # Application entry point
  ├── App.tsx               # Root controller, state coordinator & layout manager
  ├── index.css             # Global CSS, Google font imports, and Tailwind theme mappings
  ├── /data
  │    ├── /photos
  │    │    └── index.ts    # Centralized Photo Assets Dictionary (edit all URLs/photos here)
  │    ├── villaData.ts     # Core aggregator exporting all modular datasets below
  │    ├── config.ts        # Primary villa specifications, metadata, and seasonal rules pricing sheets
  │    ├── languages.ts     # Bilingual localization strings mapping files for EN & ID languages
  │    ├── features.ts      # Highlight features & Unique Selling Propositions (USPs) data
  │    ├── rooms.ts         # Accommodation suites details, sizes, specs, and configurations
  │    ├── gallery.ts       # Visual portfolio items, categories, and localized photo captions
  │    ├── amenities.ts     # Resort amenities, icons, and detailed description lists
  │    ├── attractions.ts   # Curated neighborhood landmarks with distance & driving duration
  │    └── reviews.ts       # Authentic global guest testimonials and scoring details
  ├── /components
  │    ├── Navbar.tsx       # Dynamic stickheader, dropdowns, language triggers
  │    ├── BookingWidget.tsx# Interactive stay-rate calculator & WhatsApp pre-fill composer
  │    ├── Lightbox.tsx     # Full-screen cinematic photo viewer carousel
  │    └── LazyImage.tsx    # Optimized progressive image loader (if needed)
  └── /sections
  │     ├── Hero.tsx         # Dramatic display title, trust stats, and main CTAs
  │     ├── About.tsx        # Story timeline, property size stats, and history
  │     ├── Accommodation.tsx# High-fidelity tabbed suite views, dimensions, and occupancy
  │     ├── Facilities.tsx   # Bento grid showcasing private inclusions
  │     ├── Gallery.tsx      # Filterable multi-view photography showcase
  │     ├── LocalAttraction.tsx # Curated map coordinates & beaches (with distance tags)
  │     ├── Rates.tsx        # High/low season sheets, check-in timelines, and policies
  │     ├── Reviews.tsx      # Premium slideable feedback cards
  │     └── Contact.tsx      # Contact details, third-party channels (Airbnb, Tiket), and Embed Maps
  └── /pages           # Unified chapter navigation views
  │     ├── StoryPage.tsx    # Chapter containing Hero & About
  │     ├── LivingPage.tsx   # Chapter containing Accommodation & Facilities
  │     ├── DiscoverPage.tsx # Chapter containing Gallery & LocalAttraction
  │     └── ReservePage.tsx  # Chapter containing Rates, Reviews & Contact
```

---

## 🏛️ 3. Section Chapters (Grouped Content Views)

To avoid visual overload, content is grouped into **four key Chapters** accessed seamlessly via the navigation bar:

### 📖 Chapter 1: The Story (`story`)
*   **Hero Section (`Hero.tsx`)**: Displays an ultra-clean introductory tagline, boutique resort badges, high-resolution organic backdrop, and primary exploration action buttons.
*   **About Section (`About.tsx`)**: Establishes the Joglo-Modern historical background, custom local sourcing (clays from surrounding Kasongan potters), and key statistics (built year, total estate area).

### 🛏️ Chapter 2: The Spaces (`living`)
*   **Accommodation Suite Section (`Accommodation.tsx`)**: Presents an interactive slider allowing the guest to inspect individual suites (Master Suite vs. Garden Pavillion), view exact sizes, bed styles, and private features.
*   **Facilities Section (`Facilities.tsx`)**: Displays a clean, itemized bento grid of curated amenities (saltwater swimming pool, firepit, complimentary fast WiFi, coffee bay).

### 🖼️ Chapter 3: Discover (`discover`)
*   **Gallery Section (`Gallery.tsx`)**: Features a filterable photography grid partitioned into Architecture, Suites, Saltpool, and Surroundings. Clicking any photo opens a high-fidelity cinematic Lightbox.
*   **LocalAttraction Section (`LocalAttraction.tsx`)**: Lists nearby points of interest (Yogyakarta culture, Parangtritis beaches, artisan local food) complete with precise driving times and distances.

### 📅 Chapter 4: Reserve (`reserve`)
*   **Rates Section (`Rates.tsx`)**: Explains baseline pricing policies, house rules, and seasonal pricing sheets.
*   **Direct Stay Calculator (`BookingWidget.tsx`)**: Active form allowing guests to input check-in/out dates, calculate the exact seasonal rates live, and submit a formatted WhatsApp message to the manager Sophia.
*   **Reviews Section (`Reviews.tsx`)**: Slideable social proof carousel showcasing genuine guest reviews.
*   **Contact Section (`Contact.tsx`)**: Provides maps, GPS coordinate buttons, email, host phone numbers, and redirect buttons for third-party platforms like Airbnb, Tiket, and Booking.com.

---

## ⚙️ 4. Modular Data & Translation System (`src/data/`)

To support seamless updates, scalability, and ease of future contributions, the massive, unified dataset has been split into dedicated, purpose-driven modules under `src/data/`. A central aggregator file (`src/data/villaData.ts`) imports and re-exports everything so existing pages continue working immutably.

### 🗂️ Data Module Matrix

| File Path | Description | Key Exposed Constants |
| :--- | :--- | :--- |
| `src/data/photos/index.ts` | Centralized photography asset dictionary; holds all image & avatar URLs | `HERO_PHOTOS`, `ABOUT_PHOTOS`, `SUITE_PHOTOS`, `GALLERY_PHOTOS`, `ATTRACTION_PHOTOS`, `REVIEW_AVATARS` |
| `src/data/config.ts` | Primary villa specs, metadata, and seasonal rules pricing sheets | `VILLA_CONFIG` |
| `src/data/languages.ts` | Integrated translation mapping files for UI buttons and details | `LANGUAGES` |
| `src/data/features.ts` | Essential site highlights and Unique Selling Propositions (USP) grids | `HIGHLIGHT_FEATURES`, `USP_ITEMS` |
| `src/data/rooms.ts` | Interactive room structures, specifications, size, beds and captions | `ROOMS` |
| `src/data/gallery.ts` | Categorized visual media library indices for the filterable list | `GALLERY_ITEMS` |
| `src/data/amenities.ts` | Property services list and luxury resort details | `AMENITIES` |
| `src/data/attractions.ts` | High-value location landmarks and sightseeing guidelines | `ATTRACTIONS` |
| `src/data/reviews.ts` | Slideable guest feedback testimonials and scoring | `REVIEWS` |

---

## 🎨 5. Style Mapping & Custom Branding (`src/index.css`)

The application defines a strict visual palette mapped through Tailwind's modern `@theme` directive, utilizing soft, eye-safe natural presets:

*   **Cream Backdrop (`--color-cream` : `#fdfcfb`)**: Replaces old dark dark themes with a clean, light, and modern boutique feel that gives content generous room to breathe.
*   **Warm Gray (`--color-warmgray` : `#f7f3ee`)**: Used for background sections or footer wrappers to create gentle, soft contrast divisions.
*   **Luxe Charcoal (`--color-luxuryblack` : `#1a1613`)**: Used for body and title text layout instead of plain `#000` to yield a softer, luxury publishing house feel.
*   **Boutique Gold (`--color-gold` : `#A86523`)**: Accents, borders, selected tags, and icons utilize this customized warm gold tint to draw eye focus cleanly.

### Font Pairings
1.  **Display Headings**: `Playfair Display` (serif) is used to draw elegant focus on titles and subtitles.
2.  **General Copy**: `Inter` (sans-serif) is implemented across body descriptions for crystal-clear readability.
3.  **Metadata/Labels**: `JetBrains Mono` (monospace uppercase) is used on helper figures, capacities, driving distances, and statuses to present technical data neatly.

---

## 🚀 6. Core Functional Features

### 📅 Real-Time Seasonal Price Estimator
The `BookingWidget` calculates custom rates on-the-fly dynamically depending on user search dates:
1.  Guests choose their desired Dates.
2.  The widget parses dates night-by-night.
3.  It compares dates against **High Season (June - August)** and **Peak Season (Nov 15 - Jan 8)** rates declared in structural configs.
4.  It presents an on-screen breakdown showing standard vs. premium pricing, calculating the estimated total instantly.

### 📱 Whatsapp Integration Api
When clicking "Pesan Sekarang / Send Booking Inquiry Direct":
1.  The widget fetches the computed price breakdown, names, dates, guests count, and special notes.
2.  It translates and pre-fills this data into a highly stylized reservation invoice templates (decorated with emoji borders).
3.  It encodes the text and opens a secure WhatsApp chat link (`https://wa.me/...`) directly pointing to owner Sophia.

### 🔎 Cinematic Lightbox Overlay
When a user explores the gallery:
1.  Images open in an absolute overlay.
2.  The Lightbox uses a dark overlay backdrop with responsive dimensions.
3.  Includes easy, simple navigation controls (`[Prev]`, `[Next]`, and click-to-exit background overlay) to view large, uncompressed captures beautifully.

---

## 🛠️ 7. Maintenance & Updates Cheat Sheet

### To Edit Rates:
Open `/src/data/config.ts` and locate the `pricing` block:
*   Modify `baseRate` to change baseline standard rates.
*   Edit the `seasons` rates array to adjust seasonal premium rates.

### To Edit Photos or Avatars Manually:
Open `/src/data/photos/index.ts` and update the relevant image asset dictionaries:
*   `HERO_PHOTOS`: Change the main background banner image.
*   `ABOUT_PHOTOS`: Swap out the lifestyle/open-living illustration assets.
*   `SUITE_PHOTOS`: Add or replace high-resolution room photos for Temple, Pavilion, or Regular Suites.
*   `GALLERY_PHOTOS`: Manage the grid showcase photos categorized into Architecture, Interiors, Pool view, or Surroundings.
*   `ATTRACTION_PHOTOS`: Provide custom representations for neighborhood interest spots.
*   `REVIEW_AVATARS`: Change portraits for user review cards.

### To Support a New Language (e.g., German):
1.  Modify `/src/types.ts`'s `LanguageCode` type:
    `export type LanguageCode = "en" | "id" | "de";`
2.  Add a new translation profile block inside `LANGUAGES` inside `/src/data/languages.ts`.
3.  The layout switcher inside `Navbar.tsx` will automatically scale beautifully to support the supplementary language.
