import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { hospital } from '../data/site.js'

const quickFacts = [
  { icon: Clock, label: 'Opening hours', value: '24 hours, every day' },
  { icon: MapPin, label: 'Location', value: hospital.shortAddress },
  {
    icon: Phone,
    label: 'Hotline',
    value: hospital.phone.display,
    href: hospital.phone.href,
  },
]

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-linear-to-b from-white to-surface px-4 pt-4 pb-10 sm:px-6 md:pt-6 md:pb-16">
      <div className="mx-auto max-w-site">
        <div className="relative overflow-hidden rounded-t-[2.25rem] bg-brand-900 md:rounded-t-hero lg:flex lg:min-h-178.75 lg:w-full">
          <img
            src="/images/hero/hero-consultation-1200.jpg"
            srcSet="/images/hero/hero-consultation-1200.jpg 1200w, /images/hero/hero-consultation-2400.jpg 2400w"
            sizes="(min-width: 87.25rem) 1396px, 100vw"
            width="2400"
            height="1600"
            alt="A healthcare worker in blue scrubs checks an older man's blood pressure"
            fetchPriority="high"
            decoding="async"
            className="enter-image aspect-square w-full rounded-t-3xl rounded-bl-[2.25rem] object-cover object-[64%_30%] sm:aspect-4/3 md:absolute md:inset-0 md:aspect-auto md:h-full md:rounded-none md:object-[60%_6%]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 hidden bg-[linear-gradient(254deg,rgb(10_42_82/0.35)_0%,rgb(10_42_82/0.9)_58%)] md:block lg:bg-[linear-gradient(254deg,rgb(10_42_82/0)_22%,rgb(10_42_82/0.88)_66%)]"
          />

          <div className="relative flex flex-col justify-center px-6 pt-8 pb-10 md:w-176 md:px-14 md:py-20 lg:w-[62%] lg:py-16 xl:w-200 xl:px-16">
            {/* Kept deliberately short: slogan, welcome, one supporting line, then actions.
                The hospital's fuller introduction lives on the About page. */}
            <p className="enter-up text-sm font-semibold tracking-[0.14em] text-accent-300 uppercase">
              Your Health, Our Priority
            </p>
            <h1
              id="hero-heading"
              style={{ '--enter-delay': '80ms' }}
              className="enter-up mt-4 text-[2.125rem] leading-[1.1] font-bold text-white sm:text-[2.5rem] md:text-[3.5rem] xl:text-[4rem]"
            >
              Welcome to Victory Specialist Hospital
            </h1>
            <p
              style={{ '--enter-delay': '180ms' }}
              className="enter-up mt-5 max-w-xl text-lg leading-relaxed font-light text-white/90 md:text-xl md:leading-8"
            >
              Trusted, continuous secondary healthcare for individuals and families since{' '}
              {hospital.established}, open 24 hours a day, 7 days a week.
            </p>
            <div style={{ '--enter-delay': '280ms' }} className="enter-up mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                to="/services"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-accent-400 px-7 font-semibold text-brand-950 transition active:scale-[0.98] hover:bg-accent-300"
              >
                Explore Our Services
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
              <a
                href={hospital.phone.href}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border border-white/70 px-7 font-semibold text-white transition active:scale-[0.98] hover:border-white hover:bg-white hover:text-brand-900"
                aria-label={`Call the hospital on ${hospital.phone.display}`}
              >
                <Phone className="size-5" aria-hidden="true" />
                Call {hospital.phone.display}
              </a>
            </div>
          </div>
        </div>

        <dl style={{ '--enter-delay': '400ms' }} className="enter-up grid divide-y divide-line rounded-b-[2.25rem] border border-t-0 border-line bg-white shadow-card md:grid-cols-3 md:divide-x md:divide-y-0 md:rounded-b-hero">
          {quickFacts.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="flex items-center gap-4 px-6 py-5 md:flex-col md:items-start md:gap-3 md:px-7 md:py-6 xl:flex-row xl:items-center xl:gap-4 xl:px-8"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="font-display text-lg font-medium text-ink">
                  {href ? (
                    <a href={href} className="rounded-sm transition-colors hover:text-brand-600">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
