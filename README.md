# Victory Specialist Hospital website

Website for Victory Specialist Hospital, Ijebu Igbo, Ogun State. Built with React, Vite,
Tailwind CSS v4, React Router and Lucide React. Appointment requests are sent by email with
EmailJS (frontend only, no backend).

```bash
npm install
npm run dev      # development server
npm run lint     # ESLint
npm test         # booking form validation tests
npm run build    # production build in dist/
```

Copy `.env.example` to `.env` and add the EmailJS keys to enable appointment requests
(see `docs/EMAILJS.md`).

## Structure

- `src/data/site.js` – hospital name, phone (`09118179778`), email, address, hours, directions URL
  and map embed (`mapEmbedUrl`, left `null` until the exact map pin is confirmed)
- `src/data/` – navigation, services, about and FAQ content (`faqs.js`)
- `src/data/health/` – Health & Wellness articles, sources and categories (see `docs/HEALTH-CONTENT.md`)
- `src/layouts/MainLayout.jsx` – navbar and page outlet
- `src/components/` – Navbar, MobileMenu, Hero, SpecialistDoctors and shared pieces
- `src/components/booking/`, `src/pages/BookAppointment.jsx` – appointment request page (`/book-appointment`)
- `src/lib/booking.js` – booking options and validation; `src/lib/appointmentEmail.js` – EmailJS sending
- `src/pages/` – route pages
- `src/index.css` – fonts and design tokens (`@theme`)
- `docs/ASSETS.md` – image and font sources and licences
- `docs/EMAILJS.md` – EmailJS setup, email templates and limitations

## Deployment note

Routes such as `/services` use client-side routing. Configure the host to serve `index.html`
for unknown paths (SPA fallback); on Vercel, `vercel.json` already does this. Set the `VITE_EMAILJS_*` variables in the host's build
environment.
