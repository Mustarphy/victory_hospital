import { Link } from 'react-router-dom'
import { hospital } from '../data/site.js'

// Official logo emblem (heart, mother and child) supplied by the hospital; see docs/ASSETS.md.
export default function BrandMark({ onNavigate }) {
  return (
    <Link
      to="/"
      onClick={onNavigate}
      className="flex min-w-0 items-center gap-2.5 rounded-md"
      aria-label={`${hospital.name}, home`}
    >
      <img
        src="/images/brand/victory-emblem.webp"
        width="240"
        height="154"
        alt=""
        fetchPriority="high"
        className="h-11 w-auto shrink-0 lg:h-12"
      />
      <span className="flex min-w-0 flex-col leading-none" aria-hidden="true">
        <span className="font-display text-[1.375rem] font-bold tracking-tight text-brand-900 uppercase xl:text-2xl">
          Victory
        </span>
        <span className="mt-1 text-[0.6875rem] font-semibold tracking-[0.14em] whitespace-nowrap text-brand-600 uppercase xl:text-xs">
          Specialist Hospital
        </span>
      </span>
    </Link>
  )
}
