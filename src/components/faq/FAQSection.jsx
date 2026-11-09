import { MapPin, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { answerToText, faqs } from '../../data/faqs.js'
import { hospital } from '../../data/site.js'
import FAQItem from './FAQItem.jsx'
import Reveal from '../motion/Reveal.jsx'

// FAQPage structured data built from the same content that is shown on the page.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answerToText(answer) },
  })),
}

export default function FAQSection({ items = faqs }) {
  const { hash } = useLocation()
  // A link such as /#faq-location opens that question on arrival.
  const [openIds, setOpenIds] = useState(() => {
    const linked = items.find(({ id }) => hash === `#faq-${id}`)
    return new Set(linked ? [linked.id] : [])
  })

  // Bring a linked question into view once it has rendered open.
  useEffect(() => {
    if (!hash.startsWith('#faq-')) return
    document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start', behavior: 'instant' })
  }, [hash])

  const allOpen = openIds.size === items.length

  const toggle = (id) =>
    setOpenIds((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const toggleAll = () => setOpenIds(allOpen ? new Set() : new Set(items.map(({ id }) => id)))

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-surface px-4 py-16 sm:px-6 md:py-24">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.85fr)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-10">
        <Reveal className="lg:col-start-1 lg:row-start-1">
          <h2 id="faq-heading" className="text-[2rem] leading-tight font-bold text-brand-900 md:text-section">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-body">
            Answers to common questions about visiting us, from appointments and opening hours to
            registration and getting here.
          </p>
        </Reveal>

        <Reveal variant="fade" delay={120} className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <div className="flex justify-end border-b border-line pb-4">
            <button
              type="button"
              onClick={toggleAll}
              className="rounded-sm text-sm font-semibold text-brand-600 underline underline-offset-4 hover:text-brand-800"
            >
              {allOpen ? 'Collapse all' : 'Expand all'}
            </button>
          </div>
          <ul>
            {items.map((item) => (
              <FAQItem
                key={item.id}
                {...item}
                isOpen={openIds.has(item.id)}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </ul>
        </Reveal>

        <Reveal
          as="aside"
          delay={200}
          aria-labelledby="faq-help-heading"
          className="self-start rounded-t-3xl rounded-bl-3xl bg-brand-900 p-6 text-white sm:p-8 lg:col-start-1 lg:row-start-2"
        >
          <h3 id="faq-help-heading" className="text-2xl leading-snug font-bold text-white">
            Still have a question?
          </h3>
          <p className="mt-3 leading-relaxed text-white/85">
            Our team is available 24 hours a day, 7 days a week. Call us on{' '}
            <span className="font-semibold whitespace-nowrap text-white">{hospital.phone.display}</span>{' '}
            and we will be glad to help.
          </p>
          <div className="mt-6 grid gap-3 *:whitespace-nowrap sm:grid-cols-2 lg:grid-cols-1">
            <a
              href={hospital.phone.href}
              aria-label={`Call the hospital on ${hospital.phone.display}`}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-accent-400 px-5 font-semibold text-brand-950 transition active:scale-[0.98] hover:bg-accent-300"
            >
              <Phone className="size-5" aria-hidden="true" />
              Call {hospital.phone.display}
            </a>
            <Link
              to="/contact#location"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-lg border-2 border-white/70 px-5 font-semibold text-white transition active:scale-[0.98] hover:bg-white hover:text-brand-900"
            >
              <MapPin className="size-5" aria-hidden="true" />
              Find the hospital
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
