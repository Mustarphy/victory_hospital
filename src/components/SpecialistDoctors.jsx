import { Link } from 'react-router-dom'
import { specialties } from '../data/specialties.js'
import Reveal from './motion/Reveal.jsx'
import { stagger } from '../hooks/useInViewOnce.js'

function SpecialtyCard({ specialty, className = '', delay = 0 }) {
  const { title, subtitle, description, tag, highlight, image } = specialty
  const HighlightIcon = highlight.icon

  return (
    <Reveal as="li" delay={delay} className={className}>
      <article className="flex h-full gap-4 rounded-card border border-line bg-white p-3.5 shadow-card sm:gap-5 sm:p-4">
        <img
          src={image.src}
          alt={image.alt}
          width="224"
          height="224"
          loading="lazy"
          decoding="async"
          style={{ objectPosition: image.position }}
          className="size-20 shrink-0 rounded-sm object-cover sm:size-28"
        />
        <div className="flex min-w-0 flex-col">
          <h3 className="text-[1.375rem] leading-tight font-normal">{title}</h3>
          <p className="mt-1.5 text-sm text-muted">{subtitle}</p>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">{description}</p>
          <p className="mt-2.5">
            <span className="inline-block rounded-sm border border-line bg-surface px-2 py-0.5 text-xs font-medium text-ink">
              {tag}
            </span>
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-ink">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
              <HighlightIcon className="size-3.5" aria-hidden="true" />
            </span>
            {highlight.label}
          </p>
        </div>
      </article>
    </Reveal>
  )
}

export default function SpecialistDoctors() {
  const lastIndex = specialties.length - 1
  const hasOddCount = specialties.length % 2 === 1

  return (
    <section
      id="specialists"
      aria-labelledby="specialists-heading"
      className="relative isolate overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-24"
    >
      <span
        aria-hidden="true"
        className="absolute top-2 left-[6%] -z-10 hidden size-40 sm:block rounded-full border-[1.75rem] border-brand-200/70 blur-[2px] md:top-6 md:size-56 md:border-[2.25rem] lg:left-[10%]"
      />
      <span
        aria-hidden="true"
        className="absolute -top-16 -right-24 -z-10 h-48 w-72 rounded-full bg-brand-100/80 blur-3xl"
      />

      <div className="mx-auto max-w-content">
        <h2 id="specialists-heading" className="text-center text-[2rem] leading-tight font-medium md:text-section">
          Specialist Doctors
        </h2>

        <ul className="mt-10 grid gap-y-5 md:mt-14 md:grid-cols-2 md:gap-x-10">
          {specialties.map((specialty, index) => (
            <SpecialtyCard
              key={specialty.id}
              specialty={specialty}
              delay={stagger(index, 100)}
              className={
                hasOddCount && index === lastIndex
                  ? 'md:col-span-2 md:mx-auto md:w-[70%]'
                  : ''
              }
            />
          ))}
        </ul>

        {/* <div className="mt-10 flex flex-col items-center gap-3 text-center md:mt-12">
          <Link
            to="/services"
            className="rounded-sm text-lg font-medium text-brand-600 underline underline-offset-4 transition-colors hover:text-brand-800"
          >
            View more
          </Link>
          <p className="max-w-xl text-xs text-muted">
            Photographs are representative and do not show Victory Specialist Hospital staff or
            patients.
          </p>
        </div> */}
      </div>
    </section>
  )
}
