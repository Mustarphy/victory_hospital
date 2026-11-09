import { Search } from 'lucide-react'
import { useState } from 'react'
import { services } from '../../data/services.js'
import Reveal from '../motion/Reveal.jsx'

const clinicalServiceCount = services.filter((service) => !service.support).length

export default function ServiceSearch({ onSearch }) {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch(value.trim())
  }

  return (
    <section aria-labelledby="service-search-heading" className="px-4 pt-16 sm:px-6 md:pt-24">
      <Reveal className="mx-auto grid max-w-content overflow-hidden rounded-2xl md:grid-cols-2">
        <img
          src="/images/services/newborn-care.jpg"
          width="1400"
          height="933"
          loading="lazy"
          decoding="async"
          alt="Representative image: a nurse caring for a newborn baby in a hospital nursery"
          className="h-60 w-full object-cover sm:h-80 md:h-full"
        />
        <div className="flex flex-col justify-center bg-surface px-6 py-10 md:px-10 md:py-14 lg:px-12">
          <h2
            id="service-search-heading"
            className="text-[1.75rem] leading-tight font-bold text-brand-900 md:text-[2rem]"
          >
            Search for a service
          </h2>
          <p className="mt-4 leading-relaxed">
            We offer {clinicalServiceCount} medical services, from childhood immunization to
            fertility care, supported by our own laboratory and pharmacy.
          </p>
          <form role="search" onSubmit={handleSubmit} className="mt-7 flex flex-col gap-3 lg:flex-row">
            <label htmlFor="service-search" className="sr-only">
              Search our services
            </label>
            <div className="relative flex-1">
              <Search
                className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                id="service-search"
                type="search"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="For example, antenatal care"
                autoComplete="off"
                className="h-14 w-full rounded-lg border border-line bg-white pr-4 pl-12 text-ink placeholder:text-muted focus-visible:border-brand-500"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-14 items-center justify-center rounded-lg bg-accent-400 px-6 font-semibold whitespace-nowrap text-brand-950 transition active:scale-[0.98] hover:bg-accent-300"
            >
              Search our services
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  )
}
