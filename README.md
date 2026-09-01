# Sekar Sophia Website

A website built with **React Router v8**, **TypeScript**, and **Tailwind CSS v4**.

## Tech Stack

| Tool            | What it does                       |
| --------------- | ---------------------------------- |
| React 19        | Builds the UI                      |
| React Router v8 | Handles routing + server rendering |
| TypeScript      | Adds type safety                   |
| Tailwind CSS v4 | Styles the app                     |
| Express         | Runs the production server         |
| Vite            | Bundles everything fast            |

## Getting Started

```bash
npm install
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:3000`).

## Scripts

| Command           | What it does                                        |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Starts the app in development mode                  |
| `npm run build`   | Builds the app for production → outputs to `build/` |
| `npm run preview` | Previews the production build locally               |
| `npm run clean`   | Deletes `dist/` and `server.js`                     |
| `npm run lint`    | Type-checks the code (no auto-fix)                  |

## Project Structure

```
src/
├── components/     # Reusable UI pieces (Navbar, Lightbox, etc.)
│   └── sections/   # Page sections (Hero, About, Gallery, etc.)
├── pages/          # Route pages (AboutPage, GalleryPage, etc.)
├── data/           # Static content (rooms, reviews, amenities, etc.)
├── utils/          # Helper functions
├── routes.ts       # Route definitions
└── root.tsx        # App root/layout
```

- `build/` → output from `react-router build` (used for deployment)
- `dist/` → old leftover folder, not used, safe to ignore

## Notes

- Routing is file/config-based via `src/routes.ts`, not `react-router-dom` (that package is gone in v8 — everything imports from `react-router`).
- `npm run lint` only **checks** types, it doesn't fix anything.

## License

See [LICENCE](./LICENCE).
