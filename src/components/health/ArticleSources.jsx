import { ExternalLink } from 'lucide-react'
import { formatDate } from '../../data/health/index.js'

export default function ArticleSources({ sources }) {
  return (
    <section aria-labelledby="sources-heading" className="mt-14 border-t border-line pt-10">
      <h2 id="sources-heading" className="text-2xl leading-tight font-bold text-brand-900">
        References and further reading
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        This article was written in our own words using the sources below. Their inclusion does not mean these
        organisations endorse Victory Specialist Hospital.
      </p>
      <ol className="mt-6 list-decimal space-y-5 pl-6 marker:font-semibold marker:text-brand-700">
        {sources.map(({ organisation, title, url, published, accessed }) => (
          <li key={url} className="pl-1 leading-relaxed">
            <span className="block text-sm font-semibold text-muted">{organisation}</span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm font-medium text-brand-700 underline underline-offset-4 hover:text-brand-900"
            >
              {title}
              <ExternalLink className="ml-1.5 inline size-3.5 align-[-0.1em]" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <span className="mt-1 block text-sm text-muted">
              {published && <>Published or updated {formatDate(published)}. </>}
              Accessed {formatDate(accessed)}.
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}
