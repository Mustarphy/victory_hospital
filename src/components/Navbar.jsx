import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/site.js'
import BrandMark from './BrandMark.jsx'
import HeaderActions from './HeaderActions.jsx'
import MobileMenu from './MobileMenu.jsx'

const MOBILE_MENU_ID = 'mobile-menu'
const DESKTOP_QUERY = '(min-width: 64rem)'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleRef = useRef(null)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const desktop = window.matchMedia(DESKTOP_QUERY)
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    const handleViewportChange = (event) => {
      if (event.matches) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    desktop.addEventListener('change', handleViewportChange)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      desktop.removeEventListener('change', handleViewportChange)
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white shadow-header">
      <div className="relative mx-auto flex h-[4.5rem] max-w-site items-center justify-between gap-6 px-4 sm:px-6 lg:h-20">
        <BrandMark onNavigate={closeMenu} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-10">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    // Underline grows from the left on hover and stays in place for the active page.
                    `relative rounded-sm py-1 text-[0.9375rem] font-medium whitespace-nowrap transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-brand-500 after:transition-transform after:duration-300 after:ease-soft hover:text-brand-600 hover:after:scale-x-100 motion-reduce:after:transition-none ${
                      isActive ? 'text-ink after:scale-x-100' : 'text-body after:scale-x-0'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <HeaderActions className="hidden shrink-0 items-center gap-3 xl:flex" />

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 inline-flex size-11 shrink-0 items-center justify-center rounded-md text-ink transition-colors hover:bg-brand-50 lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls={MOBILE_MENU_ID}
          aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {/* Keyed so the incoming icon plays a short rotate-and-fade (skipped with reduced motion). */}
          {isMenuOpen ? (
            <X key="close" className="enter-icon size-6" aria-hidden="true" />
          ) : (
            <Menu key="open" className="enter-icon size-6" aria-hidden="true" />
          )}
        </button>

        <MobileMenu id={MOBILE_MENU_ID} isOpen={isMenuOpen} onNavigate={closeMenu} />
      </div>

      {isMenuOpen && (
        <div
          className="enter-fade fixed inset-x-0 top-[4.5rem] bottom-0 -z-10 bg-ink/30 lg:hidden"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}
    </header>
  )
}
