import { CircleAlert, Info } from 'lucide-react'
import { sectionId } from '../../data/health/index.js'

function Callout({ tone, title, text }) {
  const urgent = tone === 'urgent'
  const Icon = urgent ? CircleAlert : Info
  return (
    <aside
      className={`flex gap-4 rounded-t-2xl rounded-bl-2xl border-l-4 p-5 ${
        urgent ? 'border-red-600 bg-red-50' : 'border-brand-500 bg-brand-50'
      }`}
    >
      <Icon className={`mt-0.5 size-5 shrink-0 ${urgent ? 'text-red-700' : 'text-brand-600'}`} aria-hidden="true" />
      <div>
        <p className={`font-semibold ${urgent ? 'text-red-900' : 'text-brand-900'}`}>{title}</p>
        <p className="mt-1.5 leading-relaxed text-ink">{text}</p>
      </div>
    </aside>
  )
}

function Block({ block }) {
  if (typeof block === 'string') return <p>{block}</p>
  if (block.subheading) {
    return <h3 className="pt-2 text-xl leading-snug font-bold text-brand-900">{block.subheading}</h3>
  }
  if (block.list) {
    return (
      <ul className="list-disc space-y-2.5 pl-6 marker:text-brand-500">
        {block.list.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
    )
  }
  if (block.callout) return <Callout {...block.callout} />
  return null
}

export function ArticleSections({ sections }) {
  return sections.map(({ heading, blocks }) => (
    <section key={heading} aria-labelledby={sectionId(heading)} className="mt-12 first:mt-0">
      <h2 id={sectionId(heading)} className="text-[1.75rem] leading-tight font-bold text-brand-900 md:text-[2rem]">
        {heading}
      </h2>
      <div className="mt-5 space-y-5 text-[1.0625rem] leading-[1.75] text-ink md:text-lg">
        {blocks.map((block, index) => (
          <Block key={index} block={block} />
        ))}
      </div>
    </section>
  ))
}
