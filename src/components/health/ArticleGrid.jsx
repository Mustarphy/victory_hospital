import { SearchX } from 'lucide-react'
import ArticleCard from './ArticleCard.jsx'
import Reveal from '../motion/Reveal.jsx'
import { stagger } from '../../hooks/useInViewOnce.js'

export default function ArticleGrid({ items, onClear }) {
  if (items.length === 0) {
    return (
      <div className="mt-8 flex flex-col items-center rounded-t-3xl rounded-bl-3xl border border-dashed border-brand-200 bg-brand-50/60 px-6 py-14 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-white text-brand-600 shadow-card">
          <SearchX className="size-7" aria-hidden="true" />
        </span>
        <p className="mt-5 font-display text-xl font-medium text-brand-900">No articles match your search</p>
        <p className="mt-2 max-w-md leading-relaxed text-body">
          Try a different word, check the spelling, or browse all topics. New articles are added over time.
        </p>
        <button
          type="button"
          onClick={onClear}
          className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-brand-900 px-6 font-semibold text-white transition active:scale-[0.98] hover:bg-brand-800"
        >
          Show all articles
        </button>
      </div>
    )
  }

  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((article, index) => (
        <Reveal as="li" key={article.id} delay={stagger(index % 3)}>
          <ArticleCard article={article} />
        </Reveal>
      ))}
    </ul>
  )
}
