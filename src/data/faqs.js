import { hospital } from './site.js'

/*
 * Answer blocks:
 *  - string: a paragraph. "{phone}" becomes the hotline link, "{address}" the full address.
 *  - { list: [...] }: a bulleted list.
 *  - { link: { to, label } }: an internal link shown after the answer.
 * Keep wording consistent with hospital-approved information.
 */
export const faqs = [
  {
    id: 'appointments',
    question: 'Do I need to book an appointment before visiting the hospital?',
    answer: [
      'No appointment is required for general consultations. You can walk into Victory Specialist Hospital for general medical consultations and emergencies at any time.',
      'However, for elective minor surgeries or specific consultations with specialist consultants, we recommend calling our care line on {phone} in advance to arrange a suitable time.',
    ],
  },
  {
    id: 'opening-hours',
    question: 'Is the hospital open on weekends and public holidays?',
    answer: [
      'Yes. Victory Specialist Hospital operates 24 hours a day, 7 days a week, throughout the year.',
      'Our medical team and inpatient care services operate around the clock, including weekends and public holidays. Our onsite pharmacy and laboratory services are also available 24/7.',
    ],
  },
  {
    id: 'location',
    question: 'Where is Victory Specialist Hospital located?',
    answer: [
      'Victory Specialist Hospital is located at {address}.',
      'We currently operate from this location.',
      { link: { to: '/contact#location', label: 'Get directions to the hospital' } },
    ],
  },
  {
    id: 'health-insurance',
    question: 'Does the hospital accept Health Insurance (NHIS / HMOs)?',
    answer: [
      'Health insurance arrangements and accepted providers should be confirmed with our administrative team before treatment.',
      'Please contact us on {phone} or visit our reception to verify whether your insurance provider and specific coverage are accepted.',
    ],
  },
  {
    id: 'antenatal-registration',
    question: 'What should I bring for maternity or antenatal registration?',
    answer: [
      'For maternity or antenatal registration, we recommend bringing:',
      {
        list: [
          'A valid government-issued identification document.',
          'Previous medical records, if available.',
          'Previous ultrasound scans and relevant test results.',
          'Details of any medications you are currently taking.',
        ],
      },
      'Our nursing team will guide you through the registration process and explain the next steps.',
    ],
  },
  {
    id: 'tests-and-medication',
    question: 'Can I run diagnostic tests or purchase medication if I am not a registered patient?',
    answer: [
      'Victory Specialist Hospital has an onsite laboratory and pharmacy.',
      'For information about accessing laboratory investigations or purchasing medication without an existing hospital registration, please contact our team on {phone} or speak with our reception staff.',
    ],
  },
  {
    id: 'ambulance',
    question: 'Does the hospital provide emergency ambulance transit services?',
    answer: [
      'Victory Specialist Hospital provides 24-hour medical services and urgent care at its facility.',
      'However, the hospital does not currently operate a dedicated ambulance transport vehicle. Patients who require transportation to the hospital will need to arrange their own transport.',
    ],
  },
]

const fillTokens = (text) =>
  text.replaceAll('{phone}', hospital.phone.display).replaceAll('{address}', hospital.address.full)

// Plain-text answer for FAQPage structured data; mirrors the visible answer.
export const answerToText = (answer) =>
  answer
    .flatMap((block) => {
      if (typeof block === 'string') return fillTokens(block)
      if (block.list) return block.list
      return []
    })
    .join(' ')
