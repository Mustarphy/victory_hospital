import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

export default function MainLayout() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-md bg-brand-900 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
