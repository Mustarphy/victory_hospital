import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categoryLabel } from '../../data/health/categories.js'
import ArticleMeta from './ArticleMeta.jsx'

export default function ArticleCard({ article, headingLevel = 'h3' }) {
  const Heading = headingLevel
  const { slug, title, excerpt, category, featuredImage, altText } = article

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-t-2xl rounded-bl-2xl bg-white shadow-heavy transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-card motion-reduce:hover:translate-y-0">
      <div className="aspect-16/10 overflow-hidden bg-brand-50">
        <img
          src={featuredImage.src}
          width={featuredImage.width}
          height={featuredImage.height}
          alt={altText}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: featuredImage.position ?? '50% 50%' }}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold tracking-[0.12em] text-brand-600 uppercase">{categoryLabel(category)}</p>
        <Heading className="mt-2 text-[1.3125rem] leading-snug font-medium text-brand-900">
          <Link
            to={`/health-resources/${slug}`}
            className="rounded-sm after:absolute after:inset-0 after:content-[''] group-hover:text-brand-600"
          >
            {title}
          </Link>
        </Heading>
        <p className="mt-3 flex-1 leading-relaxed text-body">{excerpt}</p>
        <ArticleMeta article={article} className="mt-5" />
        <span className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-600" aria-hidden="true">
          Read more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  )
}
