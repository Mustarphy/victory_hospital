import { Clock, ExternalLink, MapPin, MapPinned, Navigation, Phone } from 'lucide-react'
import { hospital } from '../../data/site.js'
import Reveal from '../motion/Reveal.jsx'

function MapPanel() {
  if (hospital.mapEmbedUrl) {
    return (
      <iframe
        src={hospital.mapEmbedUrl}
        title={`Map showing the location of ${hospital.name}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-80 w-full rounded-t-3xl rounded-bl-3xl border-0 shadow-heavy md:h-full md:min-h-112"
      />
    )
  }

  // Shown until hospital management confirms the exact map pin (see hospital.mapEmbedUrl).
  return (
    <div className="relative flex h-full min-h-80 flex-col items-center justify-center overflow-hidden rounded-t-3xl rounded-bl-3xl bg-brand-50 px-6 py-12 text-center md:min-h-112">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(var(--color-brand-100)_1px,transparent_1px),linear-gradient(90deg,var(--color-brand-100)_1px,transparent_1px)] [background-size:2.5rem_2.5rem]"
      />
      <div className="relative flex max-w-sm flex-col items-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-white text-brand-600 shadow-card">
          <MapPinned className="size-8" aria-hidden="true" />
        </span>
        <p className="mt-5 font-display text-xl font-medium text-brand-900">Interactive map coming soon</p>
        <p className="mt-2 leading-relaxed text-body">
          Use <strong className="font-semibold text-ink">Get Directions</strong> to open our address
          in Google Maps and plan your route.
        </p>
      </div>
    </div>
  )
}

export default function HospitalLocation({ id = 'location', heading = 'Find the hospital' }) {
  const headingId = `${id}-heading`

  return (
    <section id={id} aria-labelledby={headingId} className="px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-content">
        <h2 id={headingId} className="text-[2rem] leading-tight font-bold text-brand-900 md:text-section">
          {heading}
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-8">
          <Reveal variant="left" className="rounded-t-3xl rounded-bl-3xl bg-white p-6 shadow-heavy sm:p-8">
            <h3 className="text-2xl leading-snug font-bold text-brand-900">{hospital.name}</h3>
            <dl className="mt-6 space-y-5">
              <div className="flex gap-4">
                <dt className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <MapPin className="size-5" aria-hidden="true" />
                  <span className="sr-only">Address</span>
                </dt>
                <dd className="pt-2 leading-relaxed text-ink">
                  <address className="not-italic">
                    {hospital.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Phone className="size-5" aria-hidden="true" />
                  <span className="sr-only">Phone</span>
                </dt>
                <dd className="pt-2.5">
                  <a
                    href={hospital.phone.href}
                    className="rounded-sm font-semibold text-brand-600 underline underline-offset-4 hover:text-brand-800"
                  >
                    {hospital.phone.display}
                  </a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Clock className="size-5" aria-hidden="true" />
                  <span className="sr-only">Opening hours</span>
                </dt>
                <dd className="pt-2.5 text-ink">{hospital.hours}</dd>
              </div>
            </dl>
            <div className="mt-8 grid gap-3 *:whitespace-nowrap sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a
                href={hospital.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-brand-900 px-5 font-semibold text-white transition active:scale-[0.98] hover:bg-brand-800"
              >
                <Navigation className="size-5" aria-hidden="true" />
                Get Directions
                <ExternalLink className="size-4 opacity-80" aria-hidden="true" />
                <span className="sr-only"> (opens Google Maps in a new tab)</span>
              </a>
              <a
                href={hospital.phone.href}
                aria-label={`Call the hospital on ${hospital.phone.display}`}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-lg border-2 border-brand-900 px-5 font-semibold text-brand-900 transition active:scale-[0.98] hover:bg-brand-900 hover:text-white"
              >
                <Phone className="size-5" aria-hidden="true" />
                Call Hospital
              </a>
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <MapPanel />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
