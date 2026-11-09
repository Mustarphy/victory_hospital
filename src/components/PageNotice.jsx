import { ArrowLeft, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { hospital } from '../data/site.js'

export default function PageNotice({ title, message }) {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 md:py-32">
      <title>{`${title} | ${hospital.name}`}</title>
      <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
      <p className="mt-5 text-lg leading-relaxed">{message}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={hospital.phone.href}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-900 px-6 font-semibold text-white transition active:scale-[0.98] hover:bg-brand-800"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call {hospital.phone.display}
        </a>
        <Link
          to="/"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-brand-900 px-6 font-semibold text-brand-900 transition active:scale-[0.98] hover:bg-brand-50"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to home
        </Link>
      </div>
    </section>
  )
}
