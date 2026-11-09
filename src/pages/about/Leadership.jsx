import { Quote } from 'lucide-react'
import AboutNav from '../../components/about/AboutNav.jsx'
import LeaderPortrait from '../../components/about/LeaderPortrait.jsx'
import RelatedLinks from '../../components/about/RelatedLinks.jsx'
import PageHero from '../../components/PageHero.jsx'
import QuickActions from '../../components/QuickActions.jsx'
import { chairman, relatedPagesExcept } from '../../data/about.js'
import Reveal from '../../components/motion/Reveal.jsx'

export default function Leadership() {
  const { name, role, bio, message } = chairman

  return (
    <>
      <title>Our Leadership | Victory Specialist Hospital</title>
      <meta
        name="description"
        content={`Meet ${name}, ${role} of Victory Specialist Hospital, and read a message from our Chief Medical Officer.`}
      />

      <PageHero
        title="Our Leadership"
        intro="Meet the leadership guiding care at Victory Specialist Hospital."
        breadcrumb={[{ label: 'About Us', to: '/about' }]}
        image={{
          src: '/images/hospital/victory-specialist-hospital-building.jpg',
          width: 986,
          height: 1080,
          position: '50% 38%',
          alt: 'The Victory Specialist Hospital building, with the hospital name on the front',
        }}
      />
      <AboutNav />

      <section aria-labelledby="leader-name" className="px-4 pt-12 sm:px-6 md:pt-16">
        <Reveal as="article" className="mx-auto grid max-w-content overflow-hidden rounded-t-3xl rounded-bl-3xl bg-white shadow-heavy md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="aspect-4/3 md:aspect-auto md:min-h-112">
            <LeaderPortrait leader={chairman} />
          </div>
          <div className="px-6 py-8 md:px-10 md:py-12 lg:px-12">
            <h2 id="leader-name" className="text-[2rem] leading-tight font-bold text-brand-900">
              {name}
            </h2>
            <p className="mt-2 text-lg font-medium text-brand-600">{role}</p>
            <div className="mt-6 space-y-4 leading-relaxed text-ink">
              {bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="message-heading" className="px-4 py-16 sm:px-6 md:py-24">
        <Reveal as="figure" className="mx-auto max-w-content rounded-t-3xl rounded-bl-3xl bg-surface px-6 py-10 md:px-14 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.6fr)] lg:gap-14">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent-400 text-brand-950 lg:size-16">
                <Quote className="size-7" aria-hidden="true" />
              </span>
              <h2 id="message-heading" className="text-2xl leading-tight font-bold text-brand-900 md:text-[2rem]">
                {message.heading}
              </h2>
            </div>
            <div>
              <blockquote className="space-y-5 text-lg leading-relaxed text-ink md:text-xl md:leading-relaxed">
                {message.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                <span className="size-14 shrink-0 overflow-hidden rounded-full">
                  <LeaderPortrait leader={chairman} compact />
                </span>
                <span>
                  <span className="block font-display text-lg font-semibold text-brand-900">{name}</span>
                  <span className="block text-sm text-muted">{message.attribution}</span>
                </span>
              </figcaption>
            </div>
          </div>
        </Reveal>
      </section>

      <RelatedLinks heading="Learn more about us" items={relatedPagesExcept('/about/leadership')} />
      <QuickActions />
    </>
  )
}
