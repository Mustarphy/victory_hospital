import { ArrowLeft, ChevronRight, ClipboardCheck, Home, Phone, ShieldAlert } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ArticleSections } from '../components/health/ArticleContent.jsx'
import ArticleCard from '../components/health/ArticleCard.jsx'
import ArticleSources from '../components/health/ArticleSources.jsx'
import PageMeta from '../components/PageMeta.jsx'
import PageNotice from '../components/PageNotice.jsx'
import { categoryLabel } from '../data/health/categories.js'
import { ARTICLE_STATUS, formatDate, getArticleBySlug, getRelatedArticles, sectionId } from '../data/health/index.js'
import { hospital } from '../data/site.js'
import Reveal from '../components/motion/Reveal.jsx'
import { stagger } from '../hooks/useInViewOnce.js'

function ReviewNotice({ article }) {
  return (
    <div role="note" className="rounded-t-2xl rounded-bl-2xl border border-accent-400 bg-accent-300/20 p-5">
      <p className="flex items-center gap-2 font-semibold text-brand-950">
        <ShieldAlert className="size-5" aria-hidden="true" />
        Preview: pending clinical review
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink">
        This article has been researched and referenced but has not yet been approved by Victory Specialist
        Hospital’s clinical team. It is visible only in development and preview builds, and is hidden from search
        engines.
      </p>
      {article.reviewNotes.length > 0 && (
        <>
          <p className="mt-3 text-sm font-semibold text-brand-950">Notes for the reviewer</p>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink">
            {article.reviewNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

function articleSchema(article) {
  const origin = window.location.origin
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: [new URL(article.featuredImage.src, origin).href],
    ...(article.publicationDate && { datePublished: article.publicationDate }),
    dateModified: article.lastUpdated,
    author: { '@type': 'Organization', name: `${hospital.name} ${article.author}` },
    publisher: { '@type': 'Organization', name: hospital.name },
    mainEntityOfPage: new URL(`/health-resources/${article.slug}`, origin).href,
    citation: article.sources.map(({ url }) => url),
  }
}

export default function HealthArticle() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <PageNotice
        title="Article not found"
        message="This health article is not available. It may have moved, or it may not have been published yet. Please browse our Health & Wellness articles or call our 24-hour hotline."
      />
    )
  }

  const isPublished = article.status === ARTICLE_STATUS.published
  const related = getRelatedArticles(article)

  return (
    <>
      <PageMeta
        title={`${article.title} | Health & Wellness | ${hospital.name}`}
        description={article.excerpt}
        path={`/health-resources/${article.slug}`}
        type="article"
        image={article.featuredImage.src}
        noindex={!isPublished}
        article={{
          publishedTime: article.publicationDate,
          modifiedTime: article.lastUpdated,
          section: categoryLabel(article.category),
        }}
      />
      <script type="application/ld+json">{JSON.stringify(articleSchema(article))}</script>

      <article aria-labelledby="article-title">
        <header className="px-4 pt-6 sm:px-6 md:pt-10">
          <div className="mx-auto max-w-content">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-brand-900">
                <li>
                  <Link to="/" className="flex rounded-sm p-0.5 hover:text-brand-600" aria-label="Home">
                    <Home className="size-4" aria-hidden="true" />
                  </Link>
                </li>
                <li className="flex items-center gap-1.5">
                  <ChevronRight className="size-4" aria-hidden="true" />
                  <Link to="/health-resources" className="rounded-sm underline underline-offset-2 hover:text-brand-600">
                    Health &amp; Wellness
                  </Link>
                </li>
                <li className="flex items-center gap-1.5">
                  <ChevronRight className="size-4" aria-hidden="true" />
                  <Link
                    to={`/health-resources?category=${article.category}`}
                    className="rounded-sm underline underline-offset-2 hover:text-brand-600"
                  >
                    {categoryLabel(article.category)}
                  </Link>
                </li>
              </ol>
            </nav>

            <div className="mt-8 max-w-4xl">
              <p className="text-sm font-semibold tracking-[0.14em] text-brand-600 uppercase">
                {categoryLabel(article.category)}
              </p>
              <h1
                id="article-title"
                className="mt-3 text-[2.25rem] leading-[1.15] font-bold text-brand-900 md:text-[3rem]"
              >
                {article.title}
              </h1>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink md:text-xl md:leading-relaxed">
                {article.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-y border-line py-5 text-sm">
                <div>
                  <dt className="text-muted">Written by</dt>
                  <dd className="font-semibold text-ink">{article.author}</dd>
                </div>
                <div>
                  <dt className="text-muted">Published</dt>
                  <dd className="font-semibold text-ink">
                    {isPublished && article.publicationDate ? (
                      <time dateTime={article.publicationDate}>{formatDate(article.publicationDate)}</time>
                    ) : (
                      'Not yet published'
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">Last updated</dt>
                  <dd className="font-semibold text-ink">
                    <time dateTime={article.lastUpdated}>{formatDate(article.lastUpdated)}</time>
                  </dd>
                </div>
                {article.reviewedBy && (
                  <div>
                    <dt className="text-muted">Clinically reviewed by</dt>
                    <dd className="font-semibold text-ink">{article.reviewedBy}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-muted">Reading time</dt>
                  <dd className="font-semibold text-ink">{article.readingTime} min read</dd>
                </div>
              </dl>
            </div>

            {!isPublished && (
              <div className="mt-6 max-w-4xl">
                <ReviewNotice article={article} />
              </div>
            )}

            <figure className="mt-8">
              <img
                src={article.featuredImage.src}
                width={article.featuredImage.width}
                height={article.featuredImage.height}
                alt={article.altText}
                fetchPriority="high"
                decoding="async"
                style={{ objectPosition: article.featuredImage.position ?? '50% 50%' }}
                className="aspect-video w-full rounded-t-3xl rounded-bl-3xl object-cover shadow-heavy md:aspect-21/9"
              />
              <figcaption className="mt-3 text-xs text-muted">
                Representative image. The people shown are not Victory Specialist Hospital patients or staff.
              </figcaption>
            </figure>
          </div>
        </header>

        <div className="px-4 py-12 sm:px-6 md:py-16">
          <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
            <div className="min-w-0 max-w-3xl">
              <ArticleSections sections={article.sections} />

              <section
                aria-labelledby="takeaways-heading"
                className="mt-14 rounded-t-3xl rounded-bl-3xl bg-brand-900 p-6 text-white sm:p-8"
              >
                <h2 id="takeaways-heading" className="flex items-center gap-3 text-2xl font-bold text-white">
                  <ClipboardCheck className="size-7 text-accent-300" aria-hidden="true" />
                  Key takeaways
                </h2>
                <ul className="mt-5 space-y-3">
                  {article.keyTakeaways.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-white/90">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <ArticleSources sources={article.sources} />

              <p className="mt-10 rounded-xl bg-surface p-5 text-sm leading-relaxed text-body">
                <strong className="text-ink">Important:</strong> This article provides general health information
                for education only. It is not medical advice and does not replace a consultation, diagnosis or
                treatment from a qualified health professional. If you have symptoms or concerns, speak to a health
                worker. In an emergency, go to the nearest hospital immediately.
              </p>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <nav aria-labelledby="toc-heading" className="hidden rounded-2xl border border-line p-5 lg:block">
                <h2 id="toc-heading" className="text-sm font-semibold tracking-[0.12em] text-muted uppercase">
                  On this page
                </h2>
                <ol className="mt-3 space-y-1">
                  {article.sections.map(({ heading }) => (
                    <li key={heading}>
                      <a
                        href={`#${sectionId(heading)}`}
                        className="block rounded-sm py-1 text-sm leading-snug text-brand-900 hover:text-brand-600 hover:underline"
                      >
                        {heading}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#sources-heading"
                      className="block rounded-sm py-1 text-sm leading-snug text-brand-900 hover:text-brand-600 hover:underline"
                    >
                      References
                    </a>
                  </li>
                </ol>
              </nav>
              <div className="rounded-t-2xl rounded-bl-2xl bg-brand-50 p-6">
                <p className="font-display text-lg font-medium text-brand-900">Have a question about your health?</p>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Our team is available 24 hours a day, 7 days a week.
                </p>
                <a
                  href={hospital.phone.href}
                  aria-label={`Call the hospital on ${hospital.phone.display}`}
                  className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-900 px-5 font-semibold whitespace-nowrap text-white transition active:scale-[0.98] hover:bg-brand-800"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  Call {hospital.phone.display}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section aria-labelledby="related-articles-heading" className="bg-surface px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-content">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2
              id="related-articles-heading"
              className="text-[2rem] leading-tight font-bold text-brand-900 md:text-section"
            >
              Related articles
            </h2>
            <Link
              to="/health-resources"
              className="inline-flex items-center gap-2 rounded-sm font-semibold text-brand-600 underline underline-offset-4 hover:text-brand-800"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to Health &amp; Wellness
            </Link>
          </div>
          {related.length > 0 ? (
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal as="li" key={item.id} delay={stagger(index)}>
                  <ArticleCard article={item} />
                </Reveal>
              ))}
            </ul>
          ) : (
            <p className="mt-6 text-body">More articles on this topic are coming soon.</p>
          )}
        </div>
      </section>
    </>
  )
}
