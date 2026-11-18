import { AlertCircle, CalendarDays, Clock3, Loader2, Send, ShieldAlert } from 'lucide-react'
import { useId, useRef, useState } from 'react'
import { hospital } from '../../data/site.js'
import { sendAppointmentRequest } from '../../lib/appointmentEmail.js'
import {
  CONSULTATION_TYPES,
  LIMITS,
  MAX_DAYS_AHEAD,
  PATIENT_STATUSES,
  SPECIALTIES,
  addDays,
  hospitalNow,
  validateBooking,
} from '../../lib/booking.js'

const FIELD_ORDER = [
  'fullName',
  'phone',
  'email',
  'patientStatus',
  'consultationType',
  'specialty',
  'preferredDate',
  'preferredTime',
  'notes',
  'acknowledged',
]

const FIELD_LABELS = {
  fullName: 'Full name',
  phone: 'Phone number',
  email: 'Email address',
  patientStatus: 'Patient status',
  consultationType: 'Consultation type',
  specialty: 'Specialty',
  preferredDate: 'Preferred date',
  preferredTime: 'Preferred time',
  notes: 'Additional information',
  acknowledged: 'Confirmation',
}

// The first focusable control for each field (radio groups focus their first option).
const fieldTarget = (name) =>
  document.getElementById(`booking-${name}`) ?? document.querySelector(`[name="${name}"]`)

const inputClass = (hasError) =>
  `h-13 w-full rounded-lg border bg-white px-4 text-ink placeholder:text-muted transition-colors focus:border-brand-500 ${
    hasError ? 'border-red-600' : 'border-line'
  }`

function Field({ name, label, required, hint, error, children }) {
  return (
    <div>
      <label htmlFor={`booking-${name}`} className="block font-semibold text-ink">
        {label}
        {required ? (
          <span className="ml-1 text-red-700" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-2 text-sm font-normal text-muted">(optional)</span>
        )}
      </label>
      {hint && (
        <p id={`booking-${name}-hint`} className="mt-1 text-sm text-muted">
          {hint}
        </p>
      )}
      <div className="mt-2">{children}</div>
      <FieldError name={name} error={error} />
    </div>
  )
}

function FieldError({ name, error }) {
  if (!error) return null
  return (
    <p id={`booking-${name}-error`} className="mt-2 flex items-start gap-1.5 text-sm font-medium text-red-700">
      <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      {error}
    </p>
  )
}

const describedBy = (name, { hint, error }) =>
  [hint && `booking-${name}-hint`, error && `booking-${name}-error`].filter(Boolean).join(' ') || undefined

// Friendly messages only; technical EmailJS errors are never shown to patients.
const FAILURE_MESSAGES = {
  not_configured: 'Online appointment requests are not available at the moment.',
  failed: 'We could not send your appointment request. Please check your internet connection and try again.',
}

export default function BookingForm({ initialType = '', initialSpecialty = '', onBooked }) {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    patientStatus: '',
    consultationType: initialType,
    specialty: initialSpecialty,
    preferredDate: '',
    preferredTime: '',
    notes: '',
    acknowledged: false,
    website: '',
  })
  const [errors, setErrors] = useState({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState('')
  const summaryRef = useRef(null)
  // Updated synchronously, so a fast double click cannot send the request twice.
  const inFlightRef = useRef(false)
  const formId = useId()

  const { date: today } = hospitalNow()
  const maxDate = addDays(today, MAX_DAYS_AHEAD)

  const update = (name, value) => {
    const next = { ...form, [name]: value }
    if (name === 'consultationType' && value !== 'specialist') next.specialty = ''
    setForm(next)
    // After a failed submit, re-check as the visitor corrects the form.
    if (submitAttempted) setErrors(validateBooking(next).errors)
  }

  const showErrors = (fieldErrors) => {
    setErrors(fieldErrors)
    requestAnimationFrame(() => summaryRef.current?.focus())
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (inFlightRef.current) return
    setSubmitAttempted(true)
    setFormError('')

    const { values, errors: fieldErrors } = validateBooking(form)
    if (Object.keys(fieldErrors).length) {
      showErrors(fieldErrors)
      return
    }

    inFlightRef.current = true
    setSubmitting(true)
    // The hidden spam-trap field is only ever filled in by bots: never send those requests.
    if (form.website && import.meta.env.DEV) console.warn('[booking] Not sent: the hidden spam-trap field was filled in.')
    const result = form.website ? { ok: false, kind: 'failed' } : await sendAppointmentRequest(values)
    inFlightRef.current = false
    setSubmitting(false)

    if (result.ok) {
      // Only reached when EmailJS has accepted the hospital notification.
      onBooked({
        reference: result.reference,
        consultationType: values.consultationType,
        specialty: values.specialty,
        preferredDate: values.preferredDate,
        preferredTime: values.preferredTime,
        acknowledgementEmailSent: result.patientEmailSent,
      })
      return
    }
    // The entered details are kept so the patient can simply try again.
    setFormError(FAILURE_MESSAGES[result.kind] ?? FAILURE_MESSAGES.failed)
    requestAnimationFrame(() => summaryRef.current?.focus())
  }

  const errorEntries = FIELD_ORDER.filter((name) => errors[name])
  const hasSummary = errorEntries.length > 0 || formError

  return (
    <form id={formId} noValidate onSubmit={handleSubmit} aria-describedby="booking-required-note" className="space-y-10">
      <p id="booking-required-note" className="text-sm text-muted">
        Fields marked <span className="text-red-700">*</span> are required.
      </p>

      {hasSummary && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-t-2xl rounded-bl-2xl border-l-4 border-red-600 bg-red-50 p-5 outline-none"
        >
          {errorEntries.length > 0 ? (
            <>
              <p className="font-semibold text-red-900">
                Please correct {errorEntries.length === 1 ? 'the following' : `these ${errorEntries.length}`}{' '}
                {errorEntries.length === 1 ? 'item' : 'items'}:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-red-900">
                {errorEntries.map((name) => (
                  <li key={name}>
                    <a
                      href={`#booking-${name}`}
                      onClick={(event) => {
                        event.preventDefault()
                        fieldTarget(name)?.focus()
                      }}
                      className="underline underline-offset-2"
                    >
                      {FIELD_LABELS[name]}: {errors[name]}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <p className="font-semibold text-red-900">Your request has not been sent</p>
              <p className="mt-1 text-sm text-red-900">
                {formError} If the problem continues, please call us on{' '}
                <a href={hospital.phone.href} className="font-semibold underline">
                  {hospital.phone.display}
                </a>
                .
              </p>
            </>
          )}
        </div>
      )}

      {/* Spam trap: hidden from people and assistive technology, left empty by real visitors. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${formId}-website`}>Leave this field empty</label>
        {/* A meaningless name, and hints to password managers, so browser autofill never fills it in
            (Chrome ignores autocomplete="off" and autofilled a field named "website"). */}
        <input
          id={`${formId}-website`}
          name="vsh_trap_field"
          type="text"
          tabIndex={-1}
          autoComplete="new-password"
          data-lpignore="true"
          data-1p-ignore="true"
          data-bwignore="true"
          data-form-type="other"
          value={form.website}
          onChange={(event) => update('website', event.target.value)}
        />
      </div>

      <fieldset className="space-y-6">
        <legend className="mb-6 font-display text-2xl font-bold text-brand-900">1. Your details</legend>

        <Field name="fullName" label="Full name" required error={errors.fullName}>
          <input
            id="booking-fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            maxLength={LIMITS.nameMax}
            value={form.fullName}
            onChange={(event) => update('fullName', event.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={describedBy('fullName', { error: errors.fullName })}
            aria-required="true"
            className={inputClass(errors.fullName)}
          />
        </Field>

        <div className="grid gap-6 md:grid-cols-2">
          <Field
            name="phone"
            label="Phone number"
            required
            hint="Nigerian or international number, e.g. 0803 123 4567"
            error={errors.phone}
          >
            <input
              id="booking-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              maxLength={20}
              value={form.phone}
              onChange={(event) => update('phone', event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={describedBy('phone', { hint: true, error: errors.phone })}
              aria-required="true"
              className={inputClass(errors.phone)}
            />
          </Field>
          <Field name="email" label="Email address" required hint="We may also contact you by email." error={errors.email}>
            <input
              id="booking-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              maxLength={LIMITS.emailMax}
              value={form.email}
              onChange={(event) => update('email', event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy('email', { hint: true, error: errors.email })}
              aria-required="true"
              className={inputClass(errors.email)}
            />
          </Field>
        </div>

        <fieldset aria-describedby={errors.patientStatus ? 'booking-patientStatus-error' : undefined}>
          <legend className="font-semibold text-ink">
            Have you been treated at Victory Specialist Hospital before?
            <span className="ml-2 text-sm font-normal text-muted">(optional)</span>
          </legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {PATIENT_STATUSES.map(({ id, label }) => (
              <label
                key={id}
                className="flex min-h-12 cursor-pointer items-center gap-3 rounded-lg border border-line bg-white px-4 transition-colors has-checked:border-brand-600 has-checked:bg-brand-50"
              >
                <input
                  type="radio"
                  name="patientStatus"
                  value={id}
                  checked={form.patientStatus === id}
                  onChange={() => update('patientStatus', id)}
                  className="size-4 accent-brand-600"
                />
                <span className="font-medium text-ink">{label}</span>
              </label>
            ))}
          </div>
          <FieldError name="patientStatus" error={errors.patientStatus} />
        </fieldset>
      </fieldset>

      <fieldset className="space-y-6 border-t border-line pt-10">
        <legend className="float-left mb-6 w-full font-display text-2xl font-bold text-brand-900">2. Your appointment</legend>

        <fieldset
          className="clear-both"
          aria-describedby={errors.consultationType ? 'booking-consultationType-error' : undefined}
        >
          <legend className="font-semibold text-ink">
            Type of consultation
            <span className="ml-1 text-red-700" aria-hidden="true">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {CONSULTATION_TYPES.map(({ id, label, description }, index) => (
              <label
                key={id}
                className={`relative flex cursor-pointer gap-3 rounded-xl border bg-white p-4 transition-colors hover:border-brand-500 has-checked:border-brand-600 has-checked:bg-brand-50 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand-500 ${
                  errors.consultationType ? 'border-red-600' : 'border-line'
                }`}
              >
                <input
                  id={index === 0 ? 'booking-consultationType' : undefined}
                  type="radio"
                  name="consultationType"
                  value={id}
                  checked={form.consultationType === id}
                  onChange={() => update('consultationType', id)}
                  className="mt-1 size-4 shrink-0 accent-brand-600"
                />
                <span>
                  <span className="block font-semibold text-brand-900">{label}</span>
                  <span className="mt-0.5 block text-sm leading-snug text-body">{description}</span>
                </span>
              </label>
            ))}
          </div>
          <FieldError name="consultationType" error={errors.consultationType} />
        </fieldset>

        {form.consultationType === 'specialist' && (
          <div className="enter-up rounded-xl bg-surface p-5">
            <Field
              name="specialty"
              label="Specialty"
              required
              hint="Specialist consultations are arranged by specialty and confirmed by our team."
              error={errors.specialty}
            >
              <select
                id="booking-specialty"
                name="specialty"
                value={form.specialty}
                onChange={(event) => update('specialty', event.target.value)}
                aria-invalid={Boolean(errors.specialty)}
                aria-describedby={describedBy('specialty', { hint: true, error: errors.specialty })}
                aria-required="true"
                className={inputClass(errors.specialty)}
              >
                <option value="">Choose a specialty</option>
                {SPECIALTIES.map(({ id, label }) => (
                  <option key={id} value={id}>
                    {label}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          <Field name="preferredDate" label="Preferred date" required error={errors.preferredDate}>
            <div className="relative">
              <CalendarDays
                className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                id="booking-preferredDate"
                name="preferredDate"
                type="date"
                min={today}
                max={maxDate}
                value={form.preferredDate}
                onChange={(event) => update('preferredDate', event.target.value)}
                aria-invalid={Boolean(errors.preferredDate)}
                aria-describedby={describedBy('preferredDate', { error: errors.preferredDate })}
                aria-required="true"
                className={`${inputClass(errors.preferredDate)} pl-12`}
              />
            </div>
          </Field>
          <Field
            name="preferredTime"
            label="Preferred time"
            required
            hint="Our team will confirm the exact time with you."
            error={errors.preferredTime}
          >
            <div className="relative">
              <Clock3
                className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                id="booking-preferredTime"
                name="preferredTime"
                type="time"
                value={form.preferredTime}
                onChange={(event) => update('preferredTime', event.target.value)}
                aria-invalid={Boolean(errors.preferredTime)}
                aria-describedby={describedBy('preferredTime', { hint: true, error: errors.preferredTime })}
                aria-required="true"
                className={`${inputClass(errors.preferredTime)} pl-12`}
              />
            </div>
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-6 border-t border-line pt-10">
        <legend className="float-left mb-6 w-full font-display text-2xl font-bold text-brand-900">3. Anything else?</legend>
        <div className="clear-both">
          <Field
            name="notes"
            label="Is there anything else we should know about your appointment?"
            hint="For example, a preferred language or accessibility needs. Please do not include medical records, detailed medical history, passwords or payment details."
            error={errors.notes}
          >
            <textarea
              id="booking-notes"
              name="notes"
              rows={4}
              maxLength={LIMITS.notesMax}
              value={form.notes}
              onChange={(event) => update('notes', event.target.value)}
              aria-invalid={Boolean(errors.notes)}
              aria-describedby={`${describedBy('notes', { hint: true, error: errors.notes })} booking-notes-count`}
              className={`${inputClass(errors.notes)} h-auto py-3 leading-relaxed`}
            />
          </Field>
          <p id="booking-notes-count" className="mt-1 text-right text-xs text-muted">
            {form.notes.length} / {LIMITS.notesMax} characters
          </p>
        </div>

        <div>
          <label
            className={`flex cursor-pointer gap-3 rounded-xl border p-4 ${
              errors.acknowledged ? 'border-red-600 bg-red-50/50' : 'border-line bg-surface'
            }`}
          >
            <input
              id="booking-acknowledged"
              name="acknowledged"
              type="checkbox"
              checked={form.acknowledged}
              onChange={(event) => update('acknowledged', event.target.checked)}
              aria-invalid={Boolean(errors.acknowledged)}
              aria-describedby={errors.acknowledged ? 'booking-acknowledged-error' : undefined}
              aria-required="true"
              className="mt-1 size-5 shrink-0 accent-brand-600"
            />
            <span className="leading-relaxed text-ink">
              I understand that this is an appointment <strong>request</strong>, not a confirmed appointment, and that
              it is not for medical emergencies. I agree that Victory Specialist Hospital may use these details to
              contact me about this appointment.
              <span className="ml-1 text-red-700" aria-hidden="true">
                *
              </span>
            </span>
          </label>
          <FieldError name="acknowledged" error={errors.acknowledged} />
        </div>
      </fieldset>

      <div className="space-y-4 border-t border-line pt-8">
        <button
          type="submit"
          disabled={submitting}
          aria-disabled={submitting}
          className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-lg bg-brand-900 px-6 text-base font-semibold sm:px-8 sm:text-lg text-white transition hover:bg-brand-800 active:scale-[0.98] disabled:cursor-wait disabled:opacity-80 md:w-auto"
        >
          {submitting ? (
            <>
              <Loader2 className="size-5 animate-spin motion-reduce:animate-none" aria-hidden="true" />
              Submitting your appointment request...
            </>
          ) : (
            <>
              <Send className="size-5" aria-hidden="true" />
              Submit appointment request
            </>
          )}
        </button>
        <p role="status" className="sr-only">
          {submitting ? 'Submitting your appointment request, please wait.' : ''}
        </p>
        <p className="flex items-start gap-2 text-sm text-muted">
          <ShieldAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          Your details are used only to arrange this appointment.
        </p>
      </div>
    </form>
  )
}
