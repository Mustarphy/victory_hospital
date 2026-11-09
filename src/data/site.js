// Single source of truth for hospital contact details. Update here only.
const fullAddress = 'No. 6 Ajegunlesi, Oke-Sopin, Ijebu Igbo, Ogun State, Nigeria'

export const hospital = {
  name: 'Victory Specialist Hospital',
  established: 1991,
  // Official establishment date (3 May 1991). Years of service are calculated from it.
  establishedOn: '1991-05-03',
  locality: 'Ijebu Igbo',
  shortAddress: 'Oke-Sopin, Ijebu Igbo, Ogun State',
  address: {
    full: fullAddress,
    lines: ['No. 6 Ajegunlesi, Oke-Sopin', 'Ijebu Igbo, Ogun State, Nigeria'],
  },
  // Confirmed official hotline. Do not substitute another number.
  phone: {
    display: '09118179778',
    href: 'tel:09118179778',
  },
  hours: 'Open 24 hours daily, 7 days a week',
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`,
  // Google Maps embed URL for the verified hospital pin. Leave null until hospital management
  // confirms the exact location; the map panel shows a placeholder until then.
  mapEmbedUrl: null,
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Health & Wellness', to: '/health-resources' },
  { label: 'Contact', to: '/contact' },
]

/** Completed years since a YYYY-MM-DD date (a year counts once its anniversary has passed). */
export const completedYearsSince = (isoDate, today = new Date()) => {
  const [year, month, day] = isoDate.split('-').map(Number)
  const anniversaryPassed =
    today.getMonth() + 1 > month || (today.getMonth() + 1 === month && today.getDate() >= day)
  return today.getFullYear() - year - (anniversaryPassed ? 0 : 1)
}

/** Completed years of service, always current (35 from 3 May 2026, 36 from 3 May 2027, ...). */
export const yearsOfService = () => completedYearsSince(hospital.establishedOn)
