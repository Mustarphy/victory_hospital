import { Eye, Target } from 'lucide-react'
import AboutNav from '../../components/about/AboutNav.jsx'
import RelatedLinks from '../../components/about/RelatedLinks.jsx'
import PageHero from '../../components/PageHero.jsx'
import AnimatedCounter from '../../components/motion/AnimatedCounter.jsx'
import Reveal from '../../components/motion/Reveal.jsx'
import QuickActions from '../../components/QuickActions.jsx'
import { coreValues, mission, relatedPagesExcept, vision } from '../../data/about.js'
import { yearsOfService } from '../../data/site.js'
import { stagger } from '../../hooks/useInViewOnce.js'

// Renders value text, replacing {years} with an animated, always-current years-of-service count.
function ValueText({ text }) {
  const [before, after] = text.split('{years}')
  if (after === undefined) return text
  return (
    <>
      {before}
      <AnimatedCounter value={yearsOfService()} duration={1500} />
      {after}
    </>
  )
}

const valueStyles = [
  {
    card: 'bg-brand-900 text-white md:col-span-1 lg:col-span-3',
    icon: 'bg-white/10 text-accent-300',
    number: 'text-white/50',
    title: 'text-white',
    text: 'text-white/85',
  },
  {
    card: 'bg-brand-100 lg:col-span-3',
    icon: 'bg-white text-brand-600',
    number: 'text-brand-900/45',
    title: 'text-brand-900',
    text: 'text-ink',
  },
  {
    card: 'bg-white shadow-heavy lg:col-span-2',
    icon: 'bg-brand-50 text-brand-600',
    number: 'text-muted',
    title: 'text-brand-900',
    text: 'text-body',
  },
  {
    card: 'bg-accent-400/20 lg:col-span-2',
    icon: 'bg-white text-brand-900',
    number: 'text-brand-900/45',
    title: 'text-brand-900',
    text: 'text-ink',
  },
  {
    card: 'border border-line bg-surface md:col-span-2 lg:col-span-2',
    icon: 'bg-white text-brand-600',
    number: 'text-muted',
    title: 'text-brand-900',
    text: 'text-body',
  },
]

export default function MissionVisionValues() {
  return (
    <>
      <title>Mission, Vision & Values | Victory Specialist Hospital</title>
      <meta
        name="description"
        content="The vision, mission and core values of Victory Specialist Hospital: compassion, integrity, excellence, reliability and a community-centred approach to care."
      />

      <PageHero
        title="Mission, Vision & Values"
        intro="Discover the purpose, aspirations and principles that guide everyone at Victory Specialist Hospital."
        breadcrumb={[{ label: 'About Us', to: '/about' }]}
        image={{
          src: '/images/about/consultation-child.jpg',
          width: 1400,
          height: 933,
          position: '45% 50%',
          alt: 'Representative image: a health worker in a white coat consulting with a young girl at a clinic desk',
        }}
      />
      <AboutNav />

      <section aria-label="Introduction" className="px-4 pt-12 sm:px-6 md:pt-16">
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-ink">
          Our vision, mission and values describe what we aspire to, why we exist and the way we
          work together to care for every patient and family who comes to us.
        </p>
      </section>

      <section aria-labelledby="vision-heading" className="px-4 pt-12 sm:px-6 md:pt-16">
        <Reveal
          variant="scale"
          className="relative mx-auto max-w-content overflow-hidden rounded-t-3xl rounded-bl-3xl bg-brand-900 px-6 py-12 text-white md:px-14 md:py-16"
        >
          <Eye
            className="absolute -right-6 -bottom-8 size-48 text-white/5 md:size-64"
            aria-hidden="true"
          />
          <h2
            id="vision-heading"
            className="flex items-center gap-3 text-sm font-semibold tracking-[0.14em] text-accent-300 uppercase"
          >
            <Eye className="size-5" aria-hidden="true" />
            Our vision
          </h2>
          <p className="relative mt-6 max-w-4xl font-display text-2xl leading-snug font-medium md:text-[2.25rem] md:leading-[1.3]">
            {vision}
          </p>
        </Reveal>
      </section>

      <section aria-labelledby="mission-heading" className="px-4 pt-12 sm:px-6 md:pt-16">
        <div className="mx-auto grid max-w-content gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] md:gap-12">
          <Reveal variant="left">
            <span className="flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <Target className="size-7" aria-hidden="true" />
            </span>
            <h2 id="mission-heading" className="mt-5 text-[2rem] leading-tight font-bold text-brand-900 md:text-section">
              Our mission
            </h2>
          </Reveal>
          <Reveal
            as="p"
            variant="right"
            delay={100}
            className="border-l-4 border-accent-400 pl-6 text-lg leading-relaxed text-ink md:pl-8 md:text-xl md:leading-relaxed"
          >
            {mission}
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-content">
          <h2 id="values-heading" className="text-[2rem] leading-tight font-bold text-brand-900 md:text-section">
            Our core values
          </h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed">
            Five values shape how we care for patients and how we work together.
          </p>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {coreValues.map(({ title, text, icon: Icon }, index) => {
              const style = valueStyles[index % valueStyles.length]
              return (
                <Reveal
                  as="li"
                  key={title}
                  variant="scale"
                  delay={stagger(index)}
                  className={`flex flex-col rounded-t-2xl rounded-bl-2xl p-6 md:p-8 ${style.card}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className={`flex size-12 items-center justify-center rounded-full ${style.icon}`}>
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span aria-hidden="true" className={`font-display text-3xl font-bold ${style.number}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className={`mt-6 text-2xl leading-snug font-bold ${style.title}`}>{title}</h3>
                  <p className={`mt-3 leading-relaxed ${style.text}`}>
                    <ValueText text={text} />
                  </p>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </section>

      <RelatedLinks heading="Learn more about us" items={relatedPagesExcept('/about/mission-vision-values')} />
      <QuickActions />
    </>
  )
}
