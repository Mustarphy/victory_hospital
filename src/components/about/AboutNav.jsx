import { NavLink } from 'react-router-dom'
import { aboutPages } from '../../data/about.js'

export default function AboutNav() {
  return (
    <nav aria-label="About us" className="px-4 pt-6 sm:px-6 md:pt-8">
      <ul className="mx-auto flex max-w-content flex-wrap gap-2 border-b border-line pb-4 sm:gap-3">
        {aboutPages.map(({ label, to }) => (
          <li key={to}>
            <NavLink
              to={to}
              end
              className={({ isActive }) =>
                `inline-flex min-h-11 items-center rounded-full px-4 text-[0.9375rem] font-medium transition-colors sm:px-5 ${
                  isActive
                    ? 'bg-brand-900 text-white'
                    : 'border border-line bg-white text-brand-900 hover:border-brand-200 hover:bg-brand-50'
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
