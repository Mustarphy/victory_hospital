import { CalendarCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../motion/Reveal.jsx'

/** Compact band inviting visitors to request a (specialist) consultation. */
export default function BookingCta({
  heading = 'Need to see a specialist?',
  text = 'Request a consultation with our specialists online. Our team will contact you to confirm a suitable date and time.',
}) {
  return (
    <section aria-labelledby="booking-cta-heading" className="px-4 pb-16 sm:px-6 md:pb-20">
      <Reveal className="mx-auto flex max-w-content flex-col gap-6 rounded-t-3xl rounded-bl-3xl bg-brand-100 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10 md:py-10">
        <div>
          <h2 id="booking-cta-heading" className="text-2xl leading-tight font-bold text-brand-900 md:text-[1.75rem]">
            {heading}
          </h2>
          <p className="mt-2 max-w-2xl leading-relaxed text-ink">{text}</p>
        </div>
        <Link
          to="/book-appointment"
          className="inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-900 px-6 font-semibold whitespace-nowrap text-white transition hover:bg-brand-800 active:scale-[0.98]"
        >
          <CalendarCheck className="size-5" aria-hidden="true" />
          Book an Appointment
        </Link>
      </Reveal>
    </section>
  )
}
