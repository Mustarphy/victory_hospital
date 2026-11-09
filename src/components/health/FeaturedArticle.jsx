import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categoryLabel } from '../../data/health/categories.js'
import ArticleMeta from './ArticleMeta.jsx'
import Reveal from '../motion/Reveal.jsx'

export default function FeaturedArticle({ article }) {
  const { slug, title, excerpt, category, featuredImage, altText } = article

  return (
    <section aria-labelledby="featured-heading" className="px-4 pt-12 sm:px-6 md:pt-16">
      <div className="mx-auto max-w-content">
        <h2 id="featured-heading" className="text-sm font-semibold tracking-[0.14em] text-brand-600 uppercase">
          Featured article
        </h2>
        <Reveal as="article" className="mt-5 grid overflow-hidden rounded-t-3xl rounded-bl-3xl bg-white shadow-heavy lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div className="aspect-16/10 lg:aspect-auto lg:min-h-112">
            <img
              src={featuredImage.src}
              width={featuredImage.width}
              height={featuredImage.height}
              alt={altText}
              decoding="async"
              style={{ objectPosition: featuredImage.position ?? '50% 50%' }}
              className="size-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
            <p className="text-xs font-semibold tracking-[0.12em] text-brand-600 uppercase">{categoryLabel(category)}</p>
            <h3 className="mt-3 text-[1.75rem] leading-tight font-bold text-brand-900 md:text-[2.125rem]">{title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-body">{excerpt}</p>
            <ArticleMeta article={article} className="mt-6" />
            <Link
              to={`/health-resources/${slug}`}
              className="mt-8 inline-flex h-13 items-center justify-center gap-2 self-start rounded-lg bg-brand-900 px-6 font-semibold text-white transition active:scale-[0.98] hover:bg-brand-800"
            >
              Read article
              <span className="sr-only">: {title}</span>
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
