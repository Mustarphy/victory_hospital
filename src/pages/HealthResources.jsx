import { Phone } from 'lucide-react'
import { useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import ArticleGrid from '../components/health/ArticleGrid.jsx'
import FeaturedArticle from '../components/health/FeaturedArticle.jsx'
import HealthCategoryFilter from '../components/health/HealthCategoryFilter.jsx'
import HealthHero from '../components/health/HealthHero.jsx'
import PageMeta from '../components/PageMeta.jsx'
import { categoryLabel, healthCategories } from '../data/health/categories.js'
import { articleCategories, articles, featuredArticle, filterArticles } from '../data/health/index.js'
import { hospital } from '../data/site.js'

const categoryCounts = Object.fromEntries([
  ['', articles.length],
  ...healthCategories.map(({ id }) => [id, articles.filter((article) => articleCategories(article).includes(id)).length]),
])

export default function HealthResources() {
  const [params, setParams] = useSearchParams()
  const resultsHeadingRef = useRef(null)

  const query = params.get('q') ?? ''
  const rawCategory = params.get('category') ?? ''
  const category = healthCategories.some(({ id }) => id === rawCategory) ? rawCategory : ''
  const isFiltering = Boolean(query || category)

  const results = filterArticles({ query, category })
  // Without filters the featured article is shown on its own above the list.
  const listed = isFiltering ? results : results.filter(({ id }) => id !== featuredArticle?.id)

  const updateFilters = (next, { focusResults = false } = {}) => {
    const merged = { q: query, category, ...next }
    const search = new URLSearchParams()
    if (merged.q) search.set('q', merged.q)
    if (merged.category) search.set('category', merged.category)
    setParams(search, { preventScrollReset: true })
    if (focusResults) requestAnimationFrame(() => resultsHeadingRef.current?.focus())
  }

  const clearFilters = () => updateFilters({ q: '', category: '' }, { focusResults: true })

  const heading = isFiltering ? 'Search results' : 'Latest health articles'
  const summary = (() => {
    const count = `${results.length} ${results.length === 1 ? 'article' : 'articles'}`
    const parts = []
    if (query) parts.push(`matching “${query}”`)
    if (category) parts.push(`in ${categoryLabel(category)}`)
    return parts.length ? `${count} ${parts.join(' ')}` : `${count} available`
  })()

  return (
    <>
      <PageMeta
        title="Health & Wellness | Victory Specialist Hospital"
        description="Health information for individuals and families: pregnancy and antenatal care, child health and immunisation, high blood pressure, diabetes, infection prevention and healthy living."
        path="/health-resources"
      />

      <HealthHero
        key={query}
        initialQuery={query}
        searchEnabled={articles.length > 0}
        onSearch={(q) => updateFilters({ q }, { focusResults: true })}
      />

      {articles.length === 0 ? (
        <section aria-labelledby="coming-soon-heading" className="px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="coming-soon-heading" className="text-[2rem] leading-tight font-bold text-brand-900">
              Health articles are being prepared
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-body">
              Our health education articles will appear here soon. If you have a question about your health in
              the meantime, our team is available 24 hours a day.
            </p>
            <a
              href={hospital.phone.href}
              aria-label={`Call the hospital on ${hospital.phone.display}`}
              className="mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-brand-900 px-6 font-semibold text-white transition active:scale-[0.98] hover:bg-brand-800"
            >
              <Phone className="size-5" aria-hidden="true" />
              Call {hospital.phone.display}
            </a>
          </div>
        </section>
      ) : (
        <>
          {!isFiltering && featuredArticle && <FeaturedArticle article={featuredArticle} />}

          <section aria-labelledby="articles-heading" className="px-4 py-12 sm:px-6 md:py-16">
            <div className="mx-auto max-w-content">
              <div className="flex flex-col gap-2 border-b border-line pb-6">
                <h2
                  id="articles-heading"
                  ref={resultsHeadingRef}
                  tabIndex={-1}
                  className="text-[2rem] leading-tight font-bold text-brand-900 outline-none md:text-section"
                >
                  {heading}
                </h2>
                <p className="text-body">Browse by topic or use the search above.</p>
              </div>

              <div className="mt-6">
                <HealthCategoryFilter
                  selected={category}
                  counts={categoryCounts}
                  onSelect={(id) => updateFilters({ category: id })}
                />
              </div>

              <div role="status" className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-body">
                <span>{summary}</span>
                {isFiltering && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="rounded-sm font-semibold text-brand-600 underline underline-offset-4 hover:text-brand-800"
                  >
                    Clear filters
                  </button>
                )}
              </div>

              <ArticleGrid items={listed} onClear={clearFilters} />

              <p className="mt-12 max-w-3xl text-sm leading-relaxed text-muted">
                These articles provide general health information for education only. They are not a substitute
                for advice, diagnosis or treatment from a qualified health professional. If you are worried about
                your health, please speak to a health worker.
              </p>
            </div>
          </section>
        </>
      )}
    </>
  )
}
