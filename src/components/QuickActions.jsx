import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { hospital } from '../data/site.js'
import Reveal from './motion/Reveal.jsx'

const linkClass =
  'flex min-h-16 items-center justify-between gap-4 rounded-t-xl rounded-bl-xl bg-white px-5 py-4 font-display text-lg font-medium text-brand-900 shadow-card transition-[color,box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:text-brand-600 hover:shadow-heavy motion-reduce:hover:translate-y-0'

function Badge() {
  return (
    <span className="inline-flex h-6 shrink-0 items-center rounded-md bg-accent-400 px-1.5 text-brand-950">
      <ChevronRight className="size-4" aria-hidden="true" />
    </span>
  )
}

export default function QuickActions() {
  return (
    <section aria-labelledby="quick-actions-heading" className="bg-surface px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-content">
        <h2
          id="quick-actions-heading"
          className="text-[2rem] leading-tight font-bold text-brand-900 md:text-section"
        >
          I want to…
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-5">
          <Reveal as="li">
            <a href={hospital.phone.href} className={linkClass}>
              Call the hospital
              <Badge />
            </a>
          </Reveal>
          <Reveal as="li" delay={80}>
            <a href={hospital.directionsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <span>
                Get directions<span className="sr-only"> (opens in a new tab)</span>
              </span>
              <Badge />
            </a>
          </Reveal>
          <Reveal as="li" delay={160}>
            <Link to="/contact" className={linkClass}>
              Get an opinion
              <Badge />
            </Link>
          </Reveal>
        </ul>
      </div>
    </section>
  )
}
