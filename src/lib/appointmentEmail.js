import emailjs from '@emailjs/browser'
import { hospital } from '../data/site.js'
import {
  HOSPITAL_TIME_ZONE,
  consultationLabel,
  formatBookingDate,
  formatBookingTime,
  hospitalNow,
  patientStatusLabel,
  specialtyLabel,
} from './booking.js'

/*
 * Sends appointment requests with EmailJS (https://www.emailjs.com/) directly from the browser.
 * There is no backend: the hospital notification is the only record of a request.
 *
 * Configure in .env (see .env.example and docs/EMAILJS.md):
 *   VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY   (required)
 *   VITE_EMAILJS_PATIENT_TEMPLATE_ID                                           (optional acknowledgement)
 * The recipient (victoryspecialist1960@gmail.com) is set in the EmailJS template, not here,
 * so visitors cannot change where requests are sent.
 */
const config = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  patientTemplateId: import.meta.env.VITE_EMAILJS_PATIENT_TEMPLATE_ID,
}

export const emailConfigured = Boolean(config.serviceId && config.templateId && config.publicKey)

const sendOptions = {
  publicKey: config.publicKey,
  // Ignore automated (headless) browsers, and stop the same browser sending repeatedly.
  blockHeadless: true,
  limitRate: { id: 'appointment-request', throttle: 10_000 },
}

const REFERENCE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // no 0/O or 1/I to avoid confusion

/** A short reference such as VSH-20261118-K7Q2M for matching phone calls to emails. */
export function createRequestReference(now = new Date()) {
  const random = new Uint8Array(5)
  globalThis.crypto.getRandomValues(random)
  const code = [...random].map((value) => REFERENCE_ALPHABET[value % REFERENCE_ALPHABET.length]).join('')
  return `VSH-${hospitalNow(now).date.replaceAll('-', '')}-${code}`
}

const submittedAt = (now) =>
  new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short', timeZone: HOSPITAL_TIME_ZONE }).format(now)

/** The variables available in the EmailJS templates (documented in docs/EMAILJS.md). */
export function buildTemplateParams(values, reference, now = new Date()) {
  return {
    reference,
    request_status: 'Awaiting confirmation: this request has NOT been confirmed yet',
    patient_name: values.fullName,
    patient_phone: values.phone,
    patient_email: values.email,
    patient_status: values.patientStatus ? patientStatusLabel(values.patientStatus) : 'Not specified',
    consultation_type: consultationLabel(values.consultationType),
    specialty: values.specialty ? specialtyLabel(values.specialty) : 'Not applicable',
    preferred_date: formatBookingDate(values.preferredDate),
    preferred_time: formatBookingTime(values.preferredTime),
    additional_info: values.notes || 'None provided',
    submitted_at: submittedAt(now),
    reply_to: values.email,
    hospital_name: hospital.name,
    hospital_phone: hospital.phone.display,
  }
}

// Development only: logs the HTTP status and EmailJS's reason (e.g. "The template ID not found"),
// never patient details. Status 0/unknown usually means a browser extension blocked the request.
const logFailure = (what, error) => {
  if (!import.meta.env.DEV) return
  const reason = typeof error?.text === 'string' ? error.text.slice(0, 200) : error?.message
  console.warn(`[booking] ${what} email failed (status ${error?.status ?? 'unknown'})${reason ? `: ${reason}` : ''}`)
}

/**
 * Sends the hospital notification (required) and, if configured, the patient acknowledgement.
 * Resolves to { ok: true, reference, patientEmailSent } only when EmailJS accepts the hospital
 * notification; otherwise { ok: false, kind } where kind is 'not_configured' or 'failed'.
 */
export async function sendAppointmentRequest(values, now = new Date()) {
  if (!emailConfigured) {
    if (import.meta.env.DEV) console.warn('[booking] EmailJS is not configured: set the VITE_EMAILJS_* variables.')
    return { ok: false, kind: 'not_configured' }
  }

  const reference = createRequestReference(now)
  const params = buildTemplateParams(values, reference, now)

  try {
    const response = await emailjs.send(config.serviceId, config.templateId, params, sendOptions)
    if (response?.status !== 200) throw response
  } catch (error) {
    logFailure('hospital notification', error)
    return { ok: false, kind: 'failed' }
  }

  let patientEmailSent = false
  if (config.patientTemplateId) {
    try {
      const response = await emailjs.send(config.serviceId, config.patientTemplateId, params, {
        ...sendOptions,
        limitRate: { id: 'appointment-acknowledgement', throttle: 10_000 },
      })
      patientEmailSent = response?.status === 200
    } catch (error) {
      // The hospital already has the request, so this is not shown as a failure to the patient.
      logFailure('patient acknowledgement', error)
    }
  }

  return { ok: true, reference, patientEmailSent }
}
