import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/site.js'
import HeaderActions from './HeaderActions.jsx'

export default function MobileMenu({ id, isOpen, onNavigate }) {
  const firstLinkRef = useRef(null)

  useEffect(() => {
    if (isOpen) firstLinkRef.current?.focus()
  }, [isOpen])

  // The panel fades and slides in on open and out on close. `display` is transitioned discretely,
  // so the `hidden` attribute still removes the closed menu from the accessibility tree.
  return (
    <div
      id={id}
      hidden={!isOpen}
      className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-white shadow-card transition-[opacity,translate,display] transition-discrete duration-250 ease-soft starting:-translate-y-2 starting:opacity-0 motion-reduce:transition-none lg:hidden [&[hidden]]:-translate-y-2 [&[hidden]]:opacity-0"
    >
      <nav aria-label="Main" className="px-4 pt-3 pb-6 sm:px-6">
        <ul className="flex flex-col">
          {navLinks.map(({ label, to }, index) => (
            <li key={to}>
              <NavLink
                ref={index === 0 ? firstLinkRef : undefined}
                to={to}
                end={to === '/'}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `flex min-h-12 items-center rounded-md border-l-[3px] px-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'border-brand-500 bg-brand-50 text-ink'
                      : 'border-transparent text-body hover:bg-surface hover:text-brand-600'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <HeaderActions className="mt-4 grid gap-3 border-t border-line pt-5 sm:grid-cols-2 [&>a]:h-12" />
      </nav>
    </div>
  )
}
