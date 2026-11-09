import { services } from '../../data/services.js'
import { hospital } from '../../data/site.js'
import Reveal from '../motion/Reveal.jsx'
import { stagger } from '../../hooks/useInViewOnce.js'

const heavyShadow =
  'shadow-[0_0.125rem_1rem_0_rgb(0_0_0/0.1),0_0.875rem_1rem_-1.125rem_rgb(0_0_0/0.09)]'

function matches(service, query) {
  const needle = query.toLowerCase()
  return (
    service.name.toLowerCase().includes(needle) ||
    service.description.toLowerCase().includes(needle)
  )
}

export default function ServicesGrid({ query, onClear, headingRef }) {
  const results = query ? services.filter((service) => matches(service, query)) : services

  return (
    <section aria-labelledby="services-list-heading" className="px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-site">
        <h2
          id="services-list-heading"
          ref={headingRef}
          tabIndex={-1}
          className="text-[2rem] leading-tight font-bold text-brand-900 outline-none md:text-section"
        >
          Our services, A–Z
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed">
          Browse the services below. To find out how we can help you, call our 24-hour hotline on{' '}
          <a
            href={hospital.phone.href}
            className="rounded-sm font-semibold whitespace-nowrap text-brand-600 underline underline-offset-2 hover:text-brand-800"
          >
            {hospital.phone.display}
          </a>
          .
        </p>

        <div role="status" className="mt-6 min-h-6 text-sm text-body">
          {query && (
            <>
              {results.length > 0
                ? `Showing ${results.length} of ${services.length} services matching “${query}”. `
                : `No services match “${query}”. Please call us to ask about your healthcare needs. `}
              <button
                type="button"
                onClick={onClear}
                className="rounded-sm font-semibold text-brand-600 underline underline-offset-2 hover:text-brand-800"
              >
                Show all services
              </button>
            </>
          )}
        </div>

        {results.length > 0 && (
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {results.map(({ id, name, description, icon: Icon }, index) => (
              <Reveal as="li" key={id} id={`service-${id}`} delay={stagger(index % 3)}>
                <article
                  className={`h-full min-h-36 rounded-t-2xl rounded-bl-2xl bg-white p-6 ${heavyShadow}`}
                >
                  <h3 className="text-[1.375rem] leading-snug font-medium text-brand-900">
                    {name}
                    <span className="ml-3 inline-flex h-6 items-center rounded-md bg-accent-400 px-1.5 align-[0.15em] text-brand-950">
                      <Icon className="size-3.5" aria-hidden="true" />
                    </span>
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed">{description}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
