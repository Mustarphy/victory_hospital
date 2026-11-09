import { ArrowUp, Clock, ExternalLink, HeartPulse, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { footerQuickLinks, footerServices } from '../data/footer.js'
import { hospital } from '../data/site.js'
import Reveal from './motion/Reveal.jsx'

const headingClass = 'font-display text-lg font-medium text-white'
const linkClass =
  'inline-flex min-h-9 items-center rounded-sm text-white/75 transition-colors hover:text-white hover:underline hover:underline-offset-4'

function ContactRow({ icon: Icon, label, children }) {
  return (
    <li className="flex gap-3.5">
      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-white/8 text-accent-300">
        <Icon className="size-4.5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <span className="block text-xs font-semibold tracking-[0.12em] text-white/55 uppercase">{label}</span>
        {children}
      </div>
    </li>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-950 text-white/75 [&_:focus-visible]:outline-accent-300">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        {/* Contact call-to-action */}
        <Reveal
          as="section"
          variant="fade"
          aria-labelledby="footer-cta-heading"
          className="flex flex-col gap-6 border-b border-white/10 py-12 md:flex-row md:items-center md:justify-between md:gap-10 md:py-14"
        >
          <div className="flex items-start gap-4 md:gap-5">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent-400 text-brand-950 md:size-14">
              <HeartPulse className="size-6 md:size-7" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="footer-cta-heading"
                className="text-[1.625rem] leading-tight font-bold text-white md:text-[2rem]"
              >
                Your Health Matters, Every Hour.
              </h2>
              <p className="mt-2 max-w-xl text-lg leading-relaxed text-white/80">
                Professional medical care is available at {hospital.name}, 24 hours a day.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-stretch gap-2 sm:items-start md:items-end">
            <a
              href={hospital.phone.href}
              aria-label={`Call the hospital on ${hospital.phone.display}`}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-accent-400 px-7 font-semibold whitespace-nowrap text-brand-950 transition active:scale-[0.98] hover:bg-accent-300"
            >
              <Phone className="size-5" aria-hidden="true" />
              Call the Hospital
            </a>
            <span className="text-center text-sm text-white/65 sm:text-left md:text-right">
              Hotline: <span className="font-semibold text-white">{hospital.phone.display}</span>
            </span>
          </div>
        </Reveal>

        {/* Main footer columns */}
        <Reveal variant="fade" delay={100} className="grid gap-x-10 gap-y-12 py-12 md:grid-cols-2 md:py-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.75fr)_minmax(0,1.15fr)_minmax(0,1.2fr)] lg:gap-x-12">
          <div className="max-w-sm">
            {/* Full official logo on a white tile: its blue wordmark needs a light background. */}
            <Link
              to="/"
              aria-label={`${hospital.name}, home`}
              className="inline-block rounded-t-2xl rounded-bl-2xl bg-white px-5 py-4"
            >
              <img
                src="/images/brand/victory-logo.webp"
                width="640"
                height="534"
                alt={`${hospital.name}: Your Health, Our Priority`}
                loading="lazy"
                decoding="async"
                className="h-auto w-40 sm:w-44"
              />
            </Link>
            <p className="mt-5 leading-relaxed">
              Providing trusted, continuous secondary healthcare to individuals and families across
              Ijebu Igbo since {hospital.established}.
            </p>
            <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white">
              <span className="relative flex size-2.5" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-400 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2.5 rounded-full bg-accent-400" />
              </span>
              Open 24 hours, 7 days a week
            </p>
          </div>

          <nav aria-labelledby="footer-quick-links">
            <h2 id="footer-quick-links" className={headingClass}>
              Quick Links
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 md:grid-cols-1">
              {footerQuickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className={headingClass}>
              Our Services
            </h2>
            <ul className="mt-4">
              {footerServices.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className={`${linkClass} py-1 leading-snug`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>Contact Us</h2>
            <p className="mt-4 font-semibold text-white">{hospital.name}</p>
            <ul className="mt-5 space-y-5">
              <ContactRow icon={MapPin} label="Address">
                <a
                  href={hospital.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-1 inline-block rounded-sm leading-relaxed text-white/85 transition-colors hover:text-white"
                >
                  <address className="not-italic">
                    {hospital.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <span className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 group-hover:underline group-hover:underline-offset-4">
                    Get directions
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="sr-only"> (opens Google Maps in a new tab)</span>
                </a>
              </ContactRow>
              <ContactRow icon={Phone} label="Phone">
                <a
                  href={hospital.phone.href}
                  aria-label={`Call the hospital on ${hospital.phone.display}`}
                  className="mt-0.5 inline-flex min-h-9 items-center rounded-sm text-lg font-semibold text-white transition-colors hover:text-accent-300"
                >
                  {hospital.phone.display}
                </a>
              </ContactRow>
              <ContactRow icon={Clock} label="Opening hours">
                <span className="mt-1 block text-white/85">{hospital.hours}</span>
              </ContactRow>
            </ul>
          </div>
        </Reveal>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse gap-4 border-t border-white/10 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {hospital.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0 })}
            className="inline-flex items-center gap-2 self-start rounded-sm font-medium text-white/75 transition-colors hover:text-white sm:self-auto"
          >
            Back to top
            <ArrowUp className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
