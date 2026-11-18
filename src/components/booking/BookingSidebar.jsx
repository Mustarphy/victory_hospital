import { Clock, ExternalLink, Mail, MapPin, Phone, Siren } from 'lucide-react'
import { hospital } from '../../data/site.js'

const steps = [
  { title: 'Send your request', text: 'Tell us the type of consultation you need and when you would prefer to come in.' },
  { title: 'We review it', text: 'Our team checks availability for your preferred date, time and specialty.' },
  { title: 'We confirm with you', text: 'We contact you by phone or email to confirm or agree a suitable time.' },
]

export default function BookingSidebar() {
  // The urgent-care card shows here on large screens; small screens show it above the form instead.
  return (
    <div className="space-y-6">
      <aside
        aria-labelledby="urgent-care-heading"
        className="hidden rounded-t-2xl rounded-bl-2xl border-l-4 border-red-600 bg-red-50 p-6 lg:block"
      >
        <h2 id="urgent-care-heading" className="flex items-center gap-2.5 text-lg font-bold text-red-900">
          <Siren className="size-5" aria-hidden="true" />
          Need urgent care?
        </h2>
        <p className="mt-2 leading-relaxed text-ink">
          Do not use this form for medical emergencies. Come to the hospital directly (we are open 24 hours) or call us
          now.
        </p>
        <a
          href={hospital.phone.href}
          aria-label={`Call the hospital now on ${hospital.phone.display}`}
          className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-red-700 px-5 font-semibold text-white transition hover:bg-red-800 active:scale-[0.98]"
        >
          <Phone className="size-5" aria-hidden="true" />
          Call {hospital.phone.display}
        </a>
      </aside>

      <section aria-labelledby="booking-steps-heading" className="rounded-t-2xl rounded-bl-2xl bg-surface p-6">
        <h2 id="booking-steps-heading" className="text-lg font-bold text-brand-900">
          What happens next
        </h2>
        <ol className="mt-4 space-y-4">
          {steps.map(({ title, text }, index) => (
            <li key={title} className="flex gap-3.5">
              <span
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-900 font-display text-sm font-bold text-white"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div>
                <p className="font-semibold text-ink">{title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-body">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="booking-contact-heading" className="rounded-t-2xl rounded-bl-2xl border border-line bg-white p-6">
        <h2 id="booking-contact-heading" className="text-lg font-bold text-brand-900">
          Prefer to talk to us?
        </h2>
        <ul className="mt-4 space-y-4 text-sm">
          <li className="flex gap-3">
            <Phone className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden="true" />
            <a href={hospital.phone.href} className="font-semibold text-brand-600 underline underline-offset-2">
              {hospital.phone.display}
            </a>
          </li>
          <li className="flex gap-3">
            <Mail className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden="true" />
            <a href={hospital.email.href} className="font-semibold break-all text-brand-600 underline underline-offset-2">
              {hospital.email.address}
            </a>
          </li>
          <li className="flex gap-3">
            <Clock className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden="true" />
            <span className="text-ink">{hospital.hours}</span>
          </li>
          <li className="flex gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden="true" />
            <span>
              <span className="block text-ink">{hospital.address.full}</span>
              <a
                href={hospital.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 font-semibold text-brand-600 underline underline-offset-2"
              >
                Get directions
                <ExternalLink className="size-3.5" aria-hidden="true" />
                <span className="sr-only"> (opens Google Maps in a new tab)</span>
              </a>
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}
