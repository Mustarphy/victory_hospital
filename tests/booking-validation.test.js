import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { addDays, hospitalNow, normalisePhone, resolveSpecialty, validateBooking } from '../src/lib/booking.js'

const NOW = new Date('2026-11-18T10:00:00Z') // 11:00 in Lagos
const valid = (overrides = {}) => ({
  fullName: 'Adebayo Ogunleye',
  phone: '0803 123 4567',
  email: 'Adebayo@Example.com',
  consultationType: 'general',
  preferredDate: '2026-11-20',
  preferredTime: '10:30',
  acknowledged: true,
  ...overrides,
})

describe('phone numbers', () => {
  it('normalises Nigerian mobile numbers in common formats', () => {
    for (const input of ['08031234567', '0803 123 4567', '0803-123-4567', '+234 803 123 4567', '2348031234567', '002348031234567']) {
      assert.equal(normalisePhone(input), '+2348031234567', input)
    }
    assert.equal(normalisePhone('09118179778'), '+2349118179778')
  })
  it('accepts international numbers', () => {
    assert.equal(normalisePhone('+44 20 7946 0958'), '+442079460958')
  })
  it('rejects invalid numbers', () => {
    for (const input of ['12345', '0803123456', '080312345678', '06012345678', 'call me', '+0123456789']) {
      assert.equal(normalisePhone(input), '', input)
    }
  })
})

describe('validateBooking', () => {
  it('accepts a valid general consultation and normalises values', () => {
    const { values, errors } = validateBooking(valid(), NOW)
    assert.deepEqual(errors, {})
    assert.equal(values.phone, '+2348031234567')
    assert.equal(values.email, 'adebayo@example.com')
    assert.equal(values.specialty, '')
  })

  it('requires a valid email address', () => {
    assert.ok(validateBooking(valid({ email: '' }), NOW).errors.email)
    assert.ok(validateBooking(valid({ email: 'not-an-email' }), NOW).errors.email)
  })

  it('requires a confirmed specialty only for specialist consultations', () => {
    assert.ok(validateBooking(valid({ consultationType: 'specialist' }), NOW).errors.specialty)
    assert.ok(validateBooking(valid({ consultationType: 'specialist', specialty: 'dentistry' }), NOW).errors.specialty)
    const ok = validateBooking(valid({ consultationType: 'specialist', specialty: 'Paediatrics' }), NOW)
    assert.deepEqual(ok.errors, {})
    assert.equal(ok.values.specialty, 'paediatrics')
    // A specialty sent with a non-specialist consultation is discarded.
    assert.equal(validateBooking(valid({ specialty: 'paediatrics' }), NOW).values.specialty, '')
  })

  it('rejects unknown consultation types', () => {
    assert.ok(validateBooking(valid({ consultationType: 'dental' }), NOW).errors.consultationType)
  })

  it('rejects past dates, invalid dates and dates too far ahead', () => {
    assert.ok(validateBooking(valid({ preferredDate: '2026-11-17' }), NOW).errors.preferredDate)
    assert.ok(validateBooking(valid({ preferredDate: '2026-02-30' }), NOW).errors.preferredDate)
    assert.ok(validateBooking(valid({ preferredDate: addDays('2026-11-18', 200) }), NOW).errors.preferredDate)
    assert.deepEqual(validateBooking(valid({ preferredDate: '2026-11-18', preferredTime: '15:00' }), NOW).errors, {})
  })

  it('rejects a time that has already passed today (Lagos time)', () => {
    assert.ok(validateBooking(valid({ preferredDate: '2026-11-18', preferredTime: '10:30' }), NOW).errors.preferredTime)
  })

  it('uses the hospital time zone for "today"', () => {
    // 23:30 UTC on the 18th is already 00:30 on the 19th in Lagos.
    const lateNight = new Date('2026-11-18T23:30:00Z')
    assert.equal(hospitalNow(lateNight).date, '2026-11-19')
    assert.ok(validateBooking(valid({ preferredDate: '2026-11-18' }), lateNight).errors.preferredDate)
  })

  it('requires name, phone, date, time and the acknowledgement', () => {
    const { errors } = validateBooking({}, NOW)
    for (const field of ['fullName', 'phone', 'email', 'consultationType', 'preferredDate', 'preferredTime', 'acknowledged']) {
      assert.ok(errors[field], field)
    }
  })

  it('limits and cleans free text', () => {
    assert.ok(validateBooking(valid({ notes: 'x'.repeat(501) }), NOW).errors.notes)
    assert.equal(validateBooking(valid({ fullName: '  Adebayo   Ogunleye ' }), NOW).values.fullName, 'Adebayo Ogunleye')
    assert.ok(validateBooking(valid({ fullName: '<script>' }), NOW).errors.fullName)
  })

  it('resolves specialty ids and labels for URL preselection', () => {
    assert.equal(resolveSpecialty('Obstetrics and Gynaecology'), 'obstetrics-gynaecology')
    assert.equal(resolveSpecialty('GENERAL-SURGERY'), 'general-surgery')
    assert.equal(resolveSpecialty('cardiology'), '')
  })
})
