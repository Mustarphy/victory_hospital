import { hospital, siteUrl } from '../data/site.js'

// Production builds always point to the official domain (not www or *.vercel.app copies);
// development uses the local server's address.
const origin = () => (import.meta.env.PROD ? siteUrl : typeof window === 'undefined' ? siteUrl : window.location.origin)
const absoluteUrl = (path) => new URL(path, origin()).href

/** Page-level SEO tags. React 19 hoists these into <head>. */
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
