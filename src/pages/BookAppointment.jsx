import { Info, Siren } from 'lucide-react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import BookingForm from '../components/booking/BookingForm.jsx'
import BookingSidebar from '../components/booking/BookingSidebar.jsx'
import BookingSuccess from '../components/booking/BookingSuccess.jsx'
import Reveal from '../components/motion/Reveal.jsx'
import PageHero from '../components/PageHero.jsx'
import PageMeta from '../components/PageMeta.jsx'
import { hospital } from '../data/site.js'
import { CONSULTATION_TYPES, resolveSpecialty } from '../lib/booking.js'

export default function BookAppointment() {
  const [params] = useSearchParams()
  const [result, setResult] = useState(null)
  const [formKey, setFormKey] = useState(0)

  // Links such as /book-appointment?specialty=paediatrics preselect a specialist consultation.
  // Unknown values are ignored.
  const specialty = resolveSpecialty(params.get('specialty'))
  const requestedType = params.get('type')
  const initialType = specialty
    ? 'specialist'
    : CONSULTATION_TYPES.some(({ id }) => id === requestedType)
      ? requestedType
      : ''

  const startOver = () => {
    setResult(null)
    setFormKey((key) => key + 1)
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <PageMeta
        title="Book an Appointment | Victory Specialist Hospital"
        description="Request a general, antenatal, follow-up or specialist consultation at Victory Specialist Hospital. Our team will contact you to confirm your appointment."
        path="/book-appointment"
      />

      <PageHero
        title="Book an Appointment"
        intro="Schedule a consultation with our medical team. Whether you need a general consultation or wish to see a specialist, our team is here to help you arrange a suitable appointment."
        image={{
          src: '/images/services/consultation.jpg',
          width: 1400,
          height: 933,
          position: '45% 50%',
          alt: 'Representative image: a clinician talking a patient through information on a tablet',
        }}
      />

      <section aria-label="Appointment request" className="px-4 py-12 sm:px-6 md:py-16">
        {/* On small screens the sidebar sits below the form, so the urgent-care notice is repeated here. */}
        <p className="mx-auto mb-8 flex max-w-content gap-3 rounded-t-2xl rounded-bl-2xl border-l-4 border-red-600 bg-red-50 p-4 text-sm leading-relaxed text-ink lg:hidden">
          <Siren className="mt-0.5 size-5 shrink-0 text-red-700" aria-hidden="true" />
          <span>
            <strong className="text-red-900">Need urgent care?</strong> Do not use this form for emergencies. Come to the
            hospital directly (open 24 hours) or call{' '}
            <a href={hospital.phone.href} className="font-semibold whitespace-nowrap text-red-800 underline">
              {hospital.phone.display}
            </a>
            .
          </span>
        </p>
        <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-12">
          <Reveal className="min-w-0 rounded-t-3xl rounded-bl-3xl bg-white p-6 shadow-heavy sm:p-8 md:p-10">
            {result ? (
              <BookingSuccess booking={result} onNewRequest={startOver} />
            ) : (
              <>
                <h2 className="text-[1.75rem] leading-tight font-bold text-brand-900 md:text-[2rem]">
                  Your Health Matters. Let&apos;s Get You the Care You Need.
                </h2>
                <p className="mt-4 flex gap-3 rounded-xl bg-brand-50 p-4 leading-relaxed text-ink">
                  <Info className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden="true" />
                  <span>
                    Appointment requests are subject to confirmation by our hospital team. Our staff will contact you to
                    confirm your preferred date and time.
                  </span>
                </p>
                <div className="mt-8">
                  <BookingForm
                    key={formKey}
                    initialType={initialType}
                    initialSpecialty={specialty}
                    onBooked={(outcome) => {
                      setResult(outcome)
                      window.scrollTo({ top: 0 })
                    }}
                  />
                </div>
              </>
            )}
          </Reveal>

          <Reveal variant="right" delay={100} className="lg:sticky lg:top-28 lg:self-start">
            <BookingSidebar />
          </Reveal>
        </div>
      </section>
    </>
  )
}
