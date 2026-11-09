import { MapPin, Phone } from 'lucide-react'
import { hospital } from '../data/site.js'

const pillBase =
  'inline-flex h-10 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold whitespace-nowrap transition active:scale-[0.98]'

export default function HeaderActions({ className = '' }) {
  return (
    <div className={className}>
      <a
        href={hospital.phone.href}
        className={`${pillBase} border border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white`}
        aria-label={`Call the hospital on ${hospital.phone.display}`}
      >
        <Phone className="size-4" aria-hidden="true" />
        Call Us
      </a>
      <a
        href={hospital.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${pillBase} border border-brand-900 bg-brand-900 text-white hover:border-brand-800 hover:bg-brand-800`}
      >
        <MapPin className="size-4" aria-hidden="true" />
        Get Directions
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  )
}
