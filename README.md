# Victory Specialist Hospital website

Website for Victory Specialist Hospital, Ijebu Igbo, Ogun State. Built with React, Vite,
Tailwind CSS v4, React Router and Lucide React.

```bash
npm install
npm run dev      # development server
npm run lint     # ESLint
npm run build    # production build in dist/
```

## Structure

- `src/data/site.js` – hospital name, phone (`09118179778`), address, hours, directions URL and
  map embed (`mapEmbedUrl`, left `null` until the exact map pin is confirmed)
- `src/data/` – navigation, services, about and FAQ content (`faqs.js`)
- `src/data/health/` – Health & Wellness articles, sources and categories (see `docs/HEALTH-CONTENT.md`)
- `src/layouts/MainLayout.jsx` – navbar and page outlet
- `src/components/` – Navbar, MobileMenu, Hero, SpecialistDoctors and shared pieces
- `src/pages/` – route pages
- `src/index.css` – fonts and design tokens (`@theme`)
- `docs/ASSETS.md` – image and font sources and licences

## Deployment note

Routes such as `/services` use client-side routing. Configure the host to serve `index.html`
for unknown paths (SPA fallback).
