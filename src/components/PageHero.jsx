import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PageHero({ title, intro, image, breadcrumb = [] }) {
  return (
    <section aria-labelledby="page-heading" className="px-4 pt-4 sm:px-6 md:pt-6">
      <div
        className={`mx-auto grid max-w-site gap-4 ${image ? 'md:grid-cols-[minmax(0,1.85fr)_minmax(0,1fr)]' : ''}`}
      >
        <div className="flex min-h-64 flex-col justify-center rounded-3xl bg-brand-100 px-6 py-10 md:min-h-76 md:px-12 lg:px-14">
          {breadcrumb.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-brand-900">
                <li>
                  <Link to="/" className="flex rounded-sm p-0.5 hover:text-brand-600" aria-label="Home">
                    <Home className="size-4" aria-hidden="true" />
                  </Link>
                </li>
                {breadcrumb.map(({ label, to }) => (
                  <li key={to} className="flex items-center gap-1.5">
                    <ChevronRight className="size-4" aria-hidden="true" />
                    <Link to={to} className="rounded-sm underline underline-offset-2 hover:text-brand-600">
                      {label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 id="page-heading" className="enter-up text-[2.5rem] leading-tight font-bold text-brand-900 md:text-[3.25rem]">
            {title}
          </h1>
          {intro && <p style={{ '--enter-delay': '120ms' }} className="enter-up mt-4 max-w-2xl text-lg leading-relaxed text-ink">{intro}</p>}
        </div>
        {image && (
          <div className="relative h-60 overflow-hidden rounded-3xl sm:h-72 md:h-auto">
            <img
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              fetchPriority="high"
              decoding="async"
              style={{ objectPosition: image.position ?? '50% 50%' }}
              className="enter-image absolute inset-0 size-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  )
}
