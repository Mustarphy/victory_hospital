import { ArrowRight, BadgeCheck, FlaskConical, MessageSquareText, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'
import { hospital } from '../data/site.js'
import Reveal from './motion/Reveal.jsx'
import AnimatedCounter from './motion/AnimatedCounter.jsx'

const highlights = [
  {
    icon: BadgeCheck,
    text: `Licensed private secondary healthcare facility, established in ${hospital.established}`,
  },
  {
    icon: Stethoscope,
    text: 'Family medicine, paediatrics, maternal and newborn care, obstetrics, gynaecology and general surgery',
  },
  {
    icon: FlaskConical,
    text: 'Onsite laboratory and pharmacy',
  },
]

const notchMask = {
  WebkitMask: 'radial-gradient(circle 1.5rem at 0 0, #0000 calc(1.5rem - 0.5px), #000 1.5rem)',
  mask: 'radial-gradient(circle 1.5rem at 0 0, #0000 calc(1.5rem - 0.5px), #000 1.5rem)',
}

const buttonBase =
  'inline-flex h-14 items-center justify-center gap-2 rounded-lg px-7 font-semibold transition active:scale-[0.98]'

export default function GreatCareSection() {
  return (
    <section
      aria-labelledby="great-care-heading"
      className="bg-surface px-4 pt-4 pb-16 sm:px-6 md:pt-6 md:pb-24"
    >
      <div className="mx-auto grid max-w-content items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-16">
        <Reveal variant="left">
          <h2
            id="great-care-heading"
            className="text-[2rem] leading-tight font-bold text-brand-900 lg:text-section"
          >
            Great care starts here
          </h2>
          <p className="mt-4 text-lg leading-relaxed font-light text-body">
            From a child&apos;s first vaccines to antenatal visits and surgical care, Victory
            Specialist Hospital has looked after families since {hospital.established}. Our doors
            are open 24 hours a day.
          </p>

          <ul className="mt-8 space-y-5">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-600 shadow-card">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="pt-2.5 leading-relaxed text-ink">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              to="/services"
              className={`${buttonBase} bg-brand-900 text-white hover:bg-brand-800`}
            >
              View Specialties
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className={`${buttonBase} border border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white`}
            >
              <MessageSquareText className="size-5" aria-hidden="true" />
              Get Opinion
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted">
            To discuss your healthcare needs, call our 24-hour hotline on{' '}
            <a
              href={hospital.phone.href}
              className="rounded-sm font-semibold whitespace-nowrap text-brand-600 underline underline-offset-2 hover:text-brand-800"
            >
              {hospital.phone.display}
            </a>
            .
          </p>
        </Reveal>

        <Reveal as="figure" variant="right" delay={100} className="relative">
          <img
            src="/images/hospital/victory-specialist-hospital-building.jpg"
            width="986"
            height="1080"
            loading="lazy"
            decoding="async"
            alt="Front of the Victory Specialist Hospital building, with the hospital name on the facade and on the sign beside the main gate"
            className="aspect-986/1080 w-full rounded-t-3xl rounded-bl-3xl object-cover shadow-[0_0.125rem_1rem_0_rgb(0_0_0/0.1),0_0.875rem_1rem_-1.125rem_rgb(0_0_0/0.09)]"
          />
          <figcaption className="absolute right-0 bottom-0 rounded-tl-3xl bg-white py-3.5 pr-5 pl-5 sm:py-4 sm:pr-6 sm:pl-6">
            <span aria-hidden="true" className="absolute right-0 bottom-full size-6 bg-white" style={notchMask} />
            <span aria-hidden="true" className="absolute right-full bottom-0 size-6 bg-white" style={notchMask} />
            <span className="block text-xs text-muted sm:text-sm">Our hospital</span>
            <span className="block font-display text-base font-medium text-ink sm:text-lg">
              Established <AnimatedCounter value={hospital.established} from={1} duration={2000} />
            </span>
          </figcaption>
        </Reveal>
      </div>
    </section>
  )
}
