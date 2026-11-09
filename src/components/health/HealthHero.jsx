import { Search } from 'lucide-react'
import { useState } from 'react'

const popularTopics = ['Pregnancy', 'Malaria', 'Blood pressure', 'Immunisation', 'Diabetes']

export default function HealthHero({ initialQuery = '', onSearch, searchEnabled = true }) {
  const [value, setValue] = useState(initialQuery)

  const submit = (query) => {
    setValue(query)
    onSearch(query.trim())
  }

  return (
    <section aria-labelledby="page-heading" className="px-4 pt-4 sm:px-6 md:pt-6">
      <div className="mx-auto grid max-w-site gap-4 overflow-hidden rounded-3xl bg-brand-100 px-6 py-10 md:px-12 md:py-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:px-14 lg:py-16">
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-brand-600 uppercase">Health information centre</p>
          <h1 id="page-heading" className="enter-up mt-3 text-[2.5rem] leading-tight font-bold text-brand-900 md:text-[3.25rem]">
            Health &amp; Wellness
          </h1>
          <p style={{ '--enter-delay': '120ms' }} className="enter-up mt-4 max-w-2xl font-display text-xl leading-snug font-medium text-brand-900 md:text-2xl">
            Reliable health information to help you make informed decisions about your health and the
            wellbeing of your family.
          </p>
          <p style={{ '--enter-delay': '200ms' }} className="enter-up mt-4 max-w-2xl text-lg leading-relaxed text-ink">
            Explore practical health education, preventive care information, and expert-backed guidance
            covering different stages of life.
          </p>
        </div>

        {searchEnabled && (
          <div style={{ '--enter-delay': '280ms' }} className="enter-up rounded-t-3xl rounded-bl-3xl bg-white p-6 shadow-heavy sm:p-8">
            <form
              role="search"
              aria-label="Health articles"
              onSubmit={(event) => {
                event.preventDefault()
                submit(value)
              }}
            >
              <label htmlFor="health-search" className="font-display text-xl font-medium text-brand-900">
                Search health articles
              </label>
              <p id="health-search-hint" className="mt-1 text-sm text-muted">
                Search by title, topic or keyword.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Search
                    className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted"
                    aria-hidden="true"
                  />
                  <input
                    id="health-search"
                    type="search"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    aria-describedby="health-search-hint"
                    placeholder="e.g. antenatal care"
                    autoComplete="off"
                    className="h-13 w-full rounded-lg border border-line bg-white pr-4 pl-12 text-ink placeholder:text-muted focus:border-brand-500"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-13 items-center justify-center rounded-lg bg-brand-900 px-6 font-semibold text-white transition active:scale-[0.98] hover:bg-brand-800"
                >
                  Search
                </button>
              </div>
            </form>
            <div className="mt-5">
              <p id="popular-topics" className="text-sm font-semibold text-ink">
                Popular topics
              </p>
              <ul aria-labelledby="popular-topics" className="mt-2 flex flex-wrap gap-2">
                {popularTopics.map((topic) => (
                  <li key={topic}>
                    <button
                      type="button"
                      onClick={() => submit(topic)}
                      className="rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-800 transition-colors hover:border-brand-500 hover:bg-white"
                    >
                      {topic}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
