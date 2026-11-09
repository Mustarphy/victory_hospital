import { ArrowRight, FlaskConical } from 'lucide-react'
import { Link } from 'react-router-dom'
import AboutNav from '../../components/about/AboutNav.jsx'
import RelatedLinks from '../../components/about/RelatedLinks.jsx'
import PageHero from '../../components/PageHero.jsx'
import AnimatedCounter from '../../components/motion/AnimatedCounter.jsx'
import Reveal from '../../components/motion/Reveal.jsx'
import QuickActions from '../../components/QuickActions.jsx'
import { relatedPagesExcept, vision } from '../../data/about.js'
import { services } from '../../data/services.js'
import { hospital } from '../../data/site.js'
import { stagger } from '../../hooks/useInViewOnce.js'

const clinicalServiceCount = services.filter((service) => !service.support).length

const facts = [
  {
    stat: <AnimatedCounter value={hospital.established} from={1} duration={2000} />,
    title: 'Established May 3, 1991',
    text: 'More than three decades of healthcare for individuals and families.',
  },
  {
    stat: '24/7',
    title: 'Open every hour of every day',
    text: 'Our doors stay open day and night, every day of the year.',
  },
  {
    stat: <AnimatedCounter value={clinicalServiceCount} duration={1500} />,
    title: 'Medical services',
    text: 'From family medicine and paediatrics to obstetrics, gynaecology and fertility care.',
  },
  {
    icon: FlaskConical,
    title: 'Onsite laboratory and pharmacy',
    text: 'Tests and prescribed medicines are available within the hospital.',
  },
]

export default function AboutOverview() {
  return (
    <>
      <title>About Us | Victory Specialist Hospital</title>
      <meta
        name="description"
        content="Learn about Victory Specialist Hospital, a licensed private secondary healthcare facility in Ogun State caring for individuals and families 24 hours a day since 1991."
      />

      <PageHero
        title="About Victory Specialist Hospital"
        intro="A licensed private secondary healthcare facility caring for individuals and families, 24 hours a day, since 1991."
        image={{
          src: '/images/about/care-team.jpg',
          width: 1400,
          height: 2100,
          position: '50% 30%',
          alt: 'Representative image: two doctors in white coats reviewing information together',
        }}
      />
      <AboutNav />

      <section aria-label="Introduction" className="px-4 pt-12 sm:px-6 md:pt-16">
        <Reveal className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-ink">
          <p>
            Victory Specialist Hospital is a licensed private secondary healthcare facility in
            Ijebu Igbo, Ogun State, Nigeria. Since opening on May 3, 1991, we have provided
            accessible healthcare to individuals and families, and our doors remain open 24 hours a
            day, every day.
          </p>
          <p>
            Our care covers family medicine, general surgery, paediatrics, antenatal care,
            immunization, maternal and newborn care, obstetrics, gynaecology, family planning,
            non-communicable disease management, and fertility and assisted reproductive
            techniques, supported by our own onsite laboratory and pharmacy.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-sm font-semibold text-brand-600 underline underline-offset-4 hover:text-brand-800"
          >
            View all medical services
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      <section aria-labelledby="glance-heading" className="px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-content">
          <h2 id="glance-heading" className="text-[2rem] leading-tight font-bold text-brand-900 md:text-section">
            At a glance
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5">
            {facts.map(({ stat, icon: Icon, title, text }, index) => (
              <Reveal
                as="li"
                key={title}
                delay={stagger(index)}
                className="flex items-center gap-5 rounded-xl border border-line bg-white p-5 sm:gap-6 sm:p-6"
              >
                <span className="flex h-20 w-24 shrink-0 items-center justify-center rounded-lg bg-brand-50 font-display text-[1.75rem] font-bold text-brand-900 sm:w-28">
                  {Icon ? <Icon className="size-9 text-brand-600" aria-hidden="true" /> : stat}
                </span>
                <div>
                  <h3 className="text-lg leading-snug font-medium text-brand-900">{title}</h3>
                  <p className="mt-1.5 leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="history-heading" className="bg-surface px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-content items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal as="figure" variant="left">
            <img
              src="/images/history/community-clinic.jpg"
              width="1400"
              height="1050"
              loading="lazy"
              decoding="async"
              alt="Representative image: a mother holding her newborn baby while a health worker completes records at a clinic"
              className="aspect-4/3 w-full rounded-t-3xl rounded-bl-3xl object-cover shadow-heavy"
            />
            <figcaption className="mt-3 text-xs text-muted">Representative image</figcaption>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <h2 id="history-heading" className="text-[2rem] leading-tight font-bold text-brand-900 md:text-section">
              Our history
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              Victory Specialist Hospital opened its doors on May 3, 1991. For more than three
              decades since, we have provided healthcare to individuals and families in our
              community, offering family, maternal, children&apos;s and surgical care as a
              licensed secondary healthcare facility.
            </p>
            <h3 className="mt-10 text-2xl leading-snug font-bold text-brand-900">Our commitment</h3>
            <p className="mt-3 text-lg leading-relaxed text-ink">
              We believe good healthcare should be easy to reach and should not stop at closing
              time. That is why we stay open 24 hours a day, and why our laboratory and pharmacy
              are on site, so patients can be tested, treated and given their medicines in one
              place.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="vision-teaser-heading" className="px-4 py-16 sm:px-6 md:py-24">
        <Reveal
          variant="scale"
          className="mx-auto max-w-content rounded-t-3xl rounded-bl-3xl bg-brand-900 px-6 py-12 text-white md:px-14 md:py-16"
        >
          <h2
            id="vision-teaser-heading"
            className="text-sm font-semibold tracking-[0.14em] text-accent-300 uppercase"
          >
            Where we are headed
          </h2>
          <p className="mt-5 max-w-4xl font-display text-2xl leading-snug font-medium md:text-[2rem]">
            {vision}
          </p>
          <Link
            to="/about/mission-vision-values"
            className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-accent-400 px-7 font-semibold text-brand-950 transition active:scale-[0.98] hover:bg-accent-300"
          >
            Read our mission, vision & values
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>

      <RelatedLinks heading="Our organization" items={relatedPagesExcept('/about')} />
      <QuickActions />
    </>
  )
}
