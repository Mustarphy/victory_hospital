import { ArrowRight, Minus, Plus } from 'lucide-react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { hospital } from '../../data/site.js'

function RichText({ text }) {
  return text.split(/(\{phone\}|\{address\})/).map((part, index) => {
    if (part === '{phone}') {
      return (
        <a
          key={index}
          href={hospital.phone.href}
          className="rounded-sm font-semibold whitespace-nowrap text-brand-600 underline underline-offset-4 hover:text-brand-800"
        >
          {hospital.phone.display}
        </a>
      )
    }
    if (part === '{address}') {
      return (
        <strong key={index} className="font-semibold text-ink">
          {hospital.address.full}
        </strong>
      )
    }
    return <Fragment key={index}>{part}</Fragment>
  })
}

function AnswerBlock({ block }) {
  if (typeof block === 'string') {
    return (
      <p>
        <RichText text={block} />
      </p>
    )
  }
  if (block.list) {
    return (
      <ul className="list-disc space-y-2 pl-6 marker:text-brand-500">
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
  if (block.link) {
    return (
      <p>
        <Link
          to={block.link.to}
          className="inline-flex items-center gap-2 rounded-sm font-semibold text-brand-600 underline underline-offset-4 hover:text-brand-800"
        >
          {block.link.label}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </p>
    )
  }
  return null
}

export default function FAQItem({ id, question, answer, isOpen, onToggle }) {
  const buttonId = `faq-${id}-button`
  const panelId = `faq-${id}-panel`

  return (
    <li id={`faq-${id}`} className="border-b border-line">
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-start justify-between gap-5 py-6 text-left font-display text-lg leading-snug font-medium text-brand-900 transition-colors hover:text-brand-600 md:py-7 md:text-xl"
        >
          <span className="pt-1.5">{question}</span>
          <span
            className={`flex size-10 shrink-0 items-center justify-center rounded-full transition-colors ${
              isOpen
                ? 'bg-brand-900 text-white'
                : 'bg-brand-50 text-brand-700 group-hover:bg-brand-100'
            }`}
          >
            {/* Plus rotates and fades into a minus (and back), rather than swapping instantly. */}
            <span className="relative size-5" aria-hidden="true">
              <Plus
                className={`absolute inset-0 size-5 transition-[rotate,opacity] duration-300 ease-soft motion-reduce:transition-none ${
                  isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`}
              />
              <Minus
                className={`absolute inset-0 size-5 transition-[rotate,opacity] duration-300 ease-soft motion-reduce:transition-none ${
                  isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                }`}
              />
            </span>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`max-w-3xl space-y-4 pr-2 pb-7 text-[1.0625rem] leading-relaxed text-body transition-opacity duration-300 motion-reduce:transition-none md:pr-16 ${
              isOpen ? 'opacity-100 delay-75' : 'opacity-0'
            }`}
          >
            {answer.map((block, index) => (
              <AnswerBlock key={index} block={block} />
            ))}
          </div>
        </div>
      </div>
    </li>
  )
}
