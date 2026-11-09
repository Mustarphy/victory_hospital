import childhoodImmunisation from './articles/childhood-immunisation.js'
import diabetesAwareness from './articles/diabetes-awareness.js'
import earlyAntenatalCare from './articles/early-antenatal-care.js'
import healthCheckups from './articles/health-checkups.js'
import healthyEating from './articles/healthy-eating.js'
import highBloodPressure from './articles/high-blood-pressure.js'
import hydrationSleepActivity from './articles/hydration-sleep-activity.js'
import infectiousDiseasePrevention from './articles/infectious-disease-prevention.js'
import newbornCare from './articles/newborn-care.js'
import postnatalCare from './articles/postnatal-care.js'
import pregnancyPreparation from './articles/pregnancy-preparation.js'
import warningSigns from './articles/warning-signs.js'
import { categoryLabel } from './categories.js'

/*
 * Publication workflow
 * --------------------
 * Every article has a `status`:
 *   'draft'           – being written; never shown.
 *   'pending_review'  – written and referenced, awaiting approval by the hospital's clinical team.
 *   'published'       – approved; publicly listed and indexable.
 *
 * Only 'published' articles appear on the live site. 'pending_review' articles are also shown
 * (with a review banner and `noindex`) in development, or in a preview build created with
 * VITE_PREVIEW_PENDING_ARTICLES=true, so reviewers can read them in context.
 *
 * To publish an article after clinical approval: set `status: 'published'`, set
 * `publicationDate` (YYYY-MM-DD), and optionally add `reviewedBy` with the reviewer's name and role
 * as approved by the hospital.
 */
export const ARTICLE_STATUS = { draft: 'draft', pendingReview: 'pending_review', published: 'published' }

export const EDITORIAL_AUTHOR = 'Health Education Editorial Team'

export const previewPendingArticles =
  import.meta.env.DEV || import.meta.env.VITE_PREVIEW_PENDING_ARTICLES === 'true'

const WORDS_PER_MINUTE = 200

const blockText = (block) => {
  if (typeof block === 'string') return block
  if (block.list) return block.list.join(' ')
  if (block.subheading) return block.subheading
  if (block.callout) return `${block.callout.title} ${block.callout.text}`
  return ''
}

const articleText = ({ title, intro, sections, keyTakeaways }) =>
  [title, ...intro, ...sections.flatMap(({ heading, blocks }) => [heading, ...blocks.map(blockText)]), ...keyTakeaways].join(' ')

const readingTime = (article) => Math.max(1, Math.round(articleText(article).split(/\s+/).length / WORDS_PER_MINUTE))

// Order here is the default listing order.
const allArticles = [
  earlyAntenatalCare,
  healthCheckups,
  warningSigns,
  pregnancyPreparation,
  postnatalCare,
  childhoodImmunisation,
  newbornCare,
  highBloodPressure,
  diabetesAwareness,
  infectiousDiseasePrevention,
  healthyEating,
  hydrationSleepActivity,
].map((article) => ({
  author: EDITORIAL_AUTHOR,
  reviewNotes: [],
  ...article,
  readingTime: readingTime(article),
}))

const isVisible = ({ status }) =>
  status === ARTICLE_STATUS.published || (previewPendingArticles && status === ARTICLE_STATUS.pendingReview)

/** Articles visible in this build. */
export const articles = allArticles.filter(isVisible)

/** Articles awaiting clinical approval (for maintainers). */
export const articlesAwaitingReview = allArticles.filter(({ status }) => status === ARTICLE_STATUS.pendingReview)

export const featuredArticle = articles.find(({ featured }) => featured) ?? articles[0] ?? null

export const getArticleBySlug = (slug) => articles.find((article) => article.slug === slug) ?? null

export const articleCategories = ({ category, alsoIn = [] }) => [category, ...alsoIn]

const searchableText = (article) =>
  [
    article.title,
    article.excerpt,
    ...article.keywords,
    ...articleCategories(article).map(categoryLabel),
    ...article.sections.map(({ heading }) => heading),
  ]
    .join(' ')
    .toLowerCase()

/** Filter articles by free-text query (all words must match) and category id. */
export const filterArticles = ({ query = '', category = '' }) => {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  return articles.filter((article) => {
    if (category && !articleCategories(article).includes(category)) return false
    if (!terms.length) return true
    const text = searchableText(article)
    return terms.every((term) => text.includes(term))
  })
}

/** Related articles: same primary category first, then any shared category. */
export const getRelatedArticles = (article, limit = 3) => {
  const shared = (other) => articleCategories(other).filter((id) => articleCategories(article).includes(id)).length
  return articles
    .filter((other) => other.id !== article.id && shared(other) > 0)
    .sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category) || shared(b) - shared(a))
    .slice(0, limit)
}

/** Anchor id for an article section heading. */
export const sectionId = (heading) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

export const formatDate = (isoDate) =>
  new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${isoDate}T00:00:00Z`),
  )
