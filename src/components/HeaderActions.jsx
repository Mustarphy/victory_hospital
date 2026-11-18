import { CalendarCheck, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { hospital } from '../data/site.js'

const pillBase =
  'h-10 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold whitespace-nowrap transition active:scale-[0.98]'
const outline = 'border border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white'

/**
 * Header call-to-action buttons, shared by the desktop header and the mobile menu.
 * `compact` (desktop): Book Appointment and Call Us; Get Directions only on very wide screens.
 */
export default function HeaderActions({ className = '', compact = false, onNavigate }) {
  return (
    <div className={className}>
      <Link
        to="/book-appointment"
        onClick={onNavigate}
        className={`${pillBase} order-first inline-flex border border-brand-900 bg-brand-900 text-white hover:border-brand-800 hover:bg-brand-800 sm:col-span-2 xl:order-last`}
      >
        <CalendarCheck className="size-4" aria-hidden="true" />
        Book Appointment
      </Link>
      <a href={hospital.phone.href} className={`${pillBase} inline-flex ${outline}`} aria-label={`Call the hospital on ${hospital.phone.display}`}>
        <Phone className="size-4" aria-hidden="true" />
        Call Us
      </a>
      <a
        href={hospital.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${pillBase} ${outline} ${compact ? 'hidden 2xl:inline-flex' : 'inline-flex'}`}
      >
        <MapPin className="size-4" aria-hidden="true" />
        Get Directions
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  )
}
