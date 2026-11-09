import { hospital } from '../data/site.js'

const absoluteUrl = (path) => (typeof window === 'undefined' ? path : new URL(path, window.location.origin).href)

/**
 * Page-level SEO tags. React 19 hoists these into <head>.
 * Canonical and Open Graph URLs use the current origin, so they stay correct on any domain.
 */
// Default social-sharing image: the official logo as supplied (designed on a black background).
const DEFAULT_IMAGE = '/images/brand/victory-logo-original.jpg'

export default function PageMeta({
  title,
  description,
  path,
  type = 'website',
  image = DEFAULT_IMAGE,
  noindex = false,
  article,
}) {
  const url = absoluteUrl(path)

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={hospital.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={absoluteUrl(image)} />}
      {article?.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
      {article?.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
      {article?.section && <meta property="article:section" content={article.section} />}
    </>
  )
}
