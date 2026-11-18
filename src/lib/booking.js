/*
 * Appointment request options and validation for the booking form (/book-appointment).
 * Plain JavaScript (no React), so the rules can also be unit-tested with `npm test`.
 */

export const HOSPITAL_TIME_ZONE = 'Africa/Lagos'

/** How far ahead a preferred date may be requested. */
export const MAX_DAYS_AHEAD = 180

export const CONSULTATION_TYPES = [
  {
    id: 'general',
    label: 'General Consultation',
    description: 'See a doctor about a new or ongoing health concern.',
  },
  {
    id: 'specialist',
    label: 'Specialist Consultation',
    description: 'Request a consultation in one of our specialties.',
  },
  {
    id: 'antenatal',
    label: 'Antenatal Care',
    description: 'Pregnancy check-ups and antenatal registration.',
  },
  {
    id: 'follow-up',
    label: 'Follow-up Appointment',
    description: 'A return visit after care you have received with us.',
  },
]

/** Confirmed specialties that can be requested for a specialist consultation. */
export const SPECIALTIES = [
  { id: 'family-medicine', label: 'Family Medicine' },
  { id: 'general-surgery', label: 'General Surgery' },
  { id: 'paediatrics', label: 'Paediatrics' },
  { id: 'obstetrics-gynaecology', label: 'Obstetrics and Gynaecology' },
  { id: 'fertility', label: 'Fertility Services' },
]

export const PATIENT_STATUSES = [
  { id: 'new', label: 'New patient' },
  { id: 'existing', label: 'Existing patient' },
]

export const LIMITS = { nameMin: 2, nameMax: 100, emailMax: 254, notesMax: 500 }

const byId = (list) => Object.fromEntries(list.map((item) => [item.id, item]))
const typeById = byId(CONSULTATION_TYPES)
const specialtyById = byId(SPECIALTIES)
const patientStatusById = byId(PATIENT_STATUSES)

export const consultationLabel = (id) => typeById[id]?.label ?? id
export const specialtyLabel = (id) => specialtyById[id]?.label ?? id
export const patientStatusLabel = (id) => patientStatusById[id]?.label ?? 'Not specified'

/** Accepts a specialty id or label in any case ("paediatrics", "Paediatrics"); returns the id or ''. */
export function resolveSpecialty(value) {
  if (!value) return ''
  const needle = String(value).trim().toLowerCase()
  const match = SPECIALTIES.find(({ id, label }) => id === needle || label.toLowerCase() === needle)
  return match?.id ?? ''
}

/* ---------- Dates and times in the hospital's time zone ---------- */

const datePartsIn = (date, timeZone) => {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)
  const get = (type) => parts.find((part) => part.type === type).value
  return { date: `${get('year')}-${get('month')}-${get('day')}`, time: `${get('hour')}:${get('minute')}`, year: get('year') }
}

/** Today's date (YYYY-MM-DD) and current time (HH:MM) at the hospital. */
export const hospitalNow = (now = new Date()) => datePartsIn(now, HOSPITAL_TIME_ZONE)

export function addDays(isoDate, days) {
  const date = new Date(`${isoDate}T00:00:00Z`)
  date.setUTCDate(date.getUTCDate() + days)
  return date.toISOString().slice(0, 10)
}

export const isRealDate = (value) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const date = new Date(`${value}T00:00:00Z`)
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
}

export const isTime = (value) => /^([01]\d|2[0-3]):[0-5]\d$/.test(value)

export const formatBookingDate = (isoDate) =>
  new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${isoDate}T00:00:00Z`),
  )

export function formatBookingTime(time) {
  const [hours, minutes] = time.split(':').map(Number)
  const suffix = hours < 12 ? 'am' : 'pm'
  return `${((hours + 11) % 12) + 1}:${String(minutes).padStart(2, '0')} ${suffix}`
}

/* ---------- Normalisation ---------- */

// Removes control characters; collapses whitespace unless multi-line text is allowed.
const clean = (value, { multiline = false } = {}) => {
  if (value === undefined || value === null) return ''
  let text = String(value).normalize('NFC')
  text = multiline
    ? text.replace(/\r\n?/g, '\n').replace(/[^\S\n]+/g, ' ').replace(/\n{3,}/g, '\n\n')
    : text.replace(/\s+/g, ' ')
  // eslint-disable-next-line no-control-regex
  return text.replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g, '').trim()
}

/**
 * Normalises a phone number to international format.
 * Nigerian numbers: 0XXXXXXXXXX (11 digits), 234XXXXXXXXXX or +234XXXXXXXXXX → +234XXXXXXXXXX.
 * Other countries: +<country code><number>, 8–15 digits in total.
 * Returns '' if the number is not valid.
 */
export function normalisePhone(value) {
  const compact = clean(value).replace(/[\s().-]/g, '')
  if (/^0[789][01]\d{8}$/.test(compact)) return `+234${compact.slice(1)}`
  if (/^(\+?234|00234)[789][01]\d{8}$/.test(compact)) return `+234${compact.slice(-10)}`
  if (/^(\+?234|00234)[1-9]\d{6,8}$/.test(compact)) return `+234${compact.replace(/^(\+?234|00234)/, '')}` // landlines
  const international = compact.replace(/^00/, '+')
  if (/^\+[1-9]\d{7,14}$/.test(international) && !international.startsWith('+234')) return international
  return ''
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M} .'’-]*$/u

/* ---------- Validation ---------- */

/**
 * Validates and normalises a booking request.
 * Returns { values, errors }: `errors` maps field names to messages; empty when valid.
 */
export function validateBooking(input = {}, now = new Date()) {
  const errors = {}
  const values = {
    fullName: clean(input.fullName),
    phone: clean(input.phone),
    email: clean(input.email).toLowerCase(),
    patientStatus: clean(input.patientStatus),
    consultationType: clean(input.consultationType),
    specialty: resolveSpecialty(input.specialty),
    preferredDate: clean(input.preferredDate),
    preferredTime: clean(input.preferredTime),
    notes: clean(input.notes, { multiline: true }),
    acknowledged: input.acknowledged === true,
  }

  if (!values.fullName) errors.fullName = 'Please enter your full name.'
  else if (values.fullName.length < LIMITS.nameMin || values.fullName.length > LIMITS.nameMax)
    errors.fullName = `Your name should be between ${LIMITS.nameMin} and ${LIMITS.nameMax} characters.`
  else if (!NAME_PATTERN.test(values.fullName)) errors.fullName = 'Please use letters only in your name.'

  if (!values.phone) errors.phone = 'Please enter a phone number we can call you on.'
  else {
    const phone = normalisePhone(values.phone)
    if (phone) values.phone = phone
    else errors.phone = 'Please enter a valid phone number, for example 0803 123 4567 or +234 803 123 4567.'
  }

  if (!values.email) errors.email = 'Please enter your email address.'
  else if (values.email.length > LIMITS.emailMax || !EMAIL_PATTERN.test(values.email))
    errors.email = 'Please enter a valid email address, for example name@example.com.'

  if (values.patientStatus && !patientStatusById[values.patientStatus]) errors.patientStatus = 'Please choose an option.'

  if (!typeById[values.consultationType]) errors.consultationType = 'Please choose the type of consultation you need.'

  if (values.consultationType === 'specialist') {
    if (!values.specialty) errors.specialty = 'Please choose the specialty you would like to see.'
  } else {
    values.specialty = ''
  }

  const { date: today, time: currentTime } = hospitalNow(now)
  if (!values.preferredDate) errors.preferredDate = 'Please choose your preferred date.'
  else if (!isRealDate(values.preferredDate)) errors.preferredDate = 'Please choose a valid date.'
  else if (values.preferredDate < today) errors.preferredDate = 'Please choose today or a future date.'
  else if (values.preferredDate > addDays(today, MAX_DAYS_AHEAD))
    errors.preferredDate = `Please choose a date within the next ${MAX_DAYS_AHEAD / 30} months.`

  if (!values.preferredTime) errors.preferredTime = 'Please choose your preferred time.'
  else if (!isTime(values.preferredTime)) errors.preferredTime = 'Please choose a valid time.'
  else if (!errors.preferredDate && values.preferredDate === today && values.preferredTime <= currentTime)
    errors.preferredTime = 'That time has already passed today. Please choose a later time.'

  if (values.notes.length > LIMITS.notesMax)
    errors.notes = `Please keep this to ${LIMITS.notesMax} characters or fewer.`

  if (!values.acknowledged)
    errors.acknowledged = 'Please confirm that you understand this is a request, not a confirmed appointment.'

  return { values, errors }
}
