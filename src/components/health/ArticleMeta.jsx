import { CalendarDays, Clock, ShieldAlert } from 'lucide-react'
import { ARTICLE_STATUS, formatDate } from '../../data/health/index.js'

/** Reading time plus publication date, or a review badge for unpublished articles. */
export default function ArticleMeta({ article, className = '' }) {
  const isPublished = article.status === ARTICLE_STATUS.published && article.publicationDate

  return (
    <ul className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted ${className}`}>
      <li className="inline-flex items-center gap-1.5">
        <Clock className="size-4" aria-hidden="true" />
        {article.readingTime} min read
      </li>
      <li className="inline-flex items-center gap-1.5">
        {isPublished ? (
          <>
            <CalendarDays className="size-4" aria-hidden="true" />
            <span>
              <span className="sr-only">Published </span>
              <time dateTime={article.publicationDate}>{formatDate(article.publicationDate)}</time>
            </span>
          </>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-300/30 px-2.5 py-0.5 font-medium text-brand-950">
            <ShieldAlert className="size-3.5" aria-hidden="true" />
            Pending clinical review
          </span>
        )}
      </li>
    </ul>
  )
}
