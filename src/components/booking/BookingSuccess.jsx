import { CheckCircle2, Home, Phone } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { hospital } from '../../data/site.js'
import { consultationLabel, formatBookingDate, formatBookingTime, specialtyLabel } from '../../lib/booking.js'

export default function BookingSuccess({ booking, onNewRequest }) {
  const headingRef = useRef(null)

  // Move focus to the result so screen-reader and keyboard users hear the outcome immediately.
  useEffect(() => {
    headingRef.current?.focus()
  }, [])

  const consultation = booking.specialty
    ? `${consultationLabel(booking.consultationType)}: ${specialtyLabel(booking.specialty)}`
    : consultationLabel(booking.consultationType)

  return (
    <div className="enter-up">
      <span className="flex size-16 items-center justify-center rounded-full bg-accent-400/25 text-brand-900">
        <CheckCircle2 className="size-9" aria-hidden="true" />
      </span>
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="mt-6 text-[1.875rem] leading-tight font-bold text-brand-900 outline-none md:text-[2.25rem]"
      >
        Your Appointment Request Has Been Received!
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-ink">
        Thank you for contacting Victory Specialist Hospital. Your request has been submitted successfully. Our team will
        contact you to confirm the appointment.
      </p>
      
      <dl className="mt-8 divide-y divide-line overflow-hidden rounded-t-2xl rounded-bl-2xl border border-line bg-white">
        <div className="flex flex-col gap-1 bg-brand-900 px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
          <dt className="text-sm text-white/75">Request reference</dt>
          <dd className="font-display text-2xl font-bold tracking-wide">{booking.reference}</dd>
        </div>
        {[
          ['Consultation', consultation],
          ['Preferred date', formatBookingDate(booking.preferredDate)],
          ['Preferred time', formatBookingTime(booking.preferredTime)],
          ['Status', 'Awaiting confirmation'],
        ].map(([label, value]) => (
          <div key={label} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:justify-between sm:gap-6">
            <dt className="text-sm text-muted">{label}</dt>
            <dd className="font-semibold text-ink sm:text-right">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 space-y-2 text-sm leading-relaxed text-body">
        <p>
          <strong className="text-ink">Your appointment is not yet confirmed.</strong> A member of our team will call you
          to confirm your date and time. Please quote your request reference if you call us.
        </p>
        {booking.acknowledgementEmailSent && <p>We have also sent an acknowledgement to your email address.</p>}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/"
          className="inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-brand-900 px-6 font-semibold text-white transition hover:bg-brand-800 active:scale-[0.98]"
        >
          <Home className="size-5" aria-hidden="true" />
          Return to homepage
        </Link>
        <button
          type="button"
          onClick={onNewRequest}
          className="inline-flex h-13 items-center justify-center rounded-lg border-2 border-brand-900 px-6 font-semibold text-brand-900 transition hover:bg-brand-900 hover:text-white active:scale-[0.98]"
        >
          Make another request
        </button>
      </div>
      <p className="mt-6 flex items-center gap-2 text-sm text-body">
        <Phone className="size-4 text-brand-600" aria-hidden="true" />
        Questions? Call{' '}
        <a href={hospital.phone.href} className="font-semibold text-brand-600 underline underline-offset-2">
          {hospital.phone.display}
        </a>
      </p>
    </div>
  )
}
