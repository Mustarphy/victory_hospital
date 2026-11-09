import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../motion/Reveal.jsx'
import { stagger } from '../../hooks/useInViewOnce.js'

export default function RelatedLinks({ heading, items }) {
  return (
    <section aria-labelledby="related-heading" className="px-4 pb-16 sm:px-6 md:pb-24">
      <div className="mx-auto max-w-content">
        <h2 id="related-heading" className="text-[2rem] leading-tight font-bold text-brand-900 md:text-section">
          {heading}
        </h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3 md:gap-6">
          {items.map(({ title, description, to, icon: Icon }, index) => (
            <Reveal as="li" key={to} delay={stagger(index)}>
              <Link
                to={to}
                className="group flex h-full flex-col rounded-t-2xl rounded-bl-2xl bg-white p-6 shadow-heavy transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-card motion-reduce:hover:translate-y-0"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="mt-5 font-display text-[1.375rem] leading-snug font-medium text-brand-900 group-hover:text-brand-600">
                  {title}
                  <span className="ml-2.5 inline-flex h-6 items-center rounded-md bg-accent-400 px-1.5 align-[0.15em] text-brand-950">
                    <ChevronRight className="size-4" aria-hidden="true" />
                  </span>
                </span>
                <span className="mt-2.5 leading-relaxed text-body">{description}</span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
