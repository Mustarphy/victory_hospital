import { sources } from '../sources.js'

export default {
  id: 'newborn-care',
  slug: 'essential-care-for-newborn-babies',
  title: 'Essential Care for Newborn Babies in the First Weeks of Life',
  category: 'child-health',
  alsoIn: ['family-health'],
  excerpt:
    'The first month is the most vulnerable time in a child’s life. Learn the essential care practices every newborn needs and the danger signs that require urgent attention.',
  keywords: ['newborn', 'baby', 'breastfeeding', 'cord care', 'warmth', 'skin-to-skin', 'danger signs', 'neonatal'],
  featuredImage: { src: '/images/services/newborn-care.jpg', width: 1400, height: 933, position: '50% 45%' },
  altText: 'Representative image: a nurse caring for a newborn baby in a hospital nursery',
  status: 'pending_review',
  reviewNotes: [
    'The urgent danger-sign list adds fast breathing, chest in-drawing, low temperature, fits, bluish skin and jaundice signs from standard newborn danger-sign guidance; the cited WHO fact sheet names feeding problems, reduced activity and difficult breathing. Please confirm the list.',
    'Confirm the cord-care wording matches the advice given to mothers at the hospital (for example, use of chlorhexidine).',
  ],
  featured: false,
  publicationDate: null,
  lastUpdated: '2026-11-09',
  intro: [
    'The arrival of a new baby is a joyful time, and it can also feel overwhelming. Knowing the basics of newborn care, and the signs that mean a baby needs a health worker urgently, helps families give their baby the safest possible start.',
  ],
  sections: [
    {
      heading: 'Why the first month matters',
      blocks: [
        'The World Health Organization (WHO) describes the first month of life as the most vulnerable period for a child’s survival. WHO reports that 2.3 million newborns died in 2022, and that about three quarters of newborn deaths happen in the first week of life.',
        'The leading causes include complications of premature birth, problems during birth, infections and birth defects. Simple, consistent care at home, combined with timely health checks, helps protect babies from many of these risks.',
      ],
    },
    {
      heading: 'Essential newborn care',
      blocks: [
        { subheading: 'Breastfeeding' },
        'WHO and UNICEF recommend that babies start breastfeeding within one hour of birth, are fed only breast milk for the first six months, and continue breastfeeding up to two years of age or beyond, alongside other foods from six months. Breast milk protects babies against infections such as diarrhoea and pneumonia. During the first six months, babies do not need water or other drinks unless a health worker advises otherwise.',
        { subheading: 'Keeping warm' },
        'Newborns lose heat quickly. Skin-to-skin contact, where the baby is placed directly on the mother’s chest, helps keep the baby warm and supports breastfeeding. Keep the baby comfortably warm, but avoid overheating.',
        { subheading: 'Hygiene and cord care' },
        'WHO recommends hygienic care of the umbilical cord and skin. Wash your hands before handling the baby, keep the cord stump clean and dry, and follow the cord-care advice given by your health worker. Do not put any substances on the cord unless a health worker has advised it.',
        { subheading: 'Check-ups and vaccines' },
        'WHO recommends postnatal care contacts for the baby in the first six weeks, including checks for feeding, growth and danger signs. Vaccines are given from birth according to the national schedule, so bring your baby for every immunisation visit.',
      ],
    },
    {
      heading: 'Danger signs in newborns',
      blocks: [
        'WHO advises families to seek care promptly if a newborn shows danger signs such as feeding problems, reduced activity or difficult breathing.',
        {
          callout: {
            tone: 'urgent',
            title: 'Take your baby to a hospital immediately if they',
            text: 'Are not feeding well or refuse to feed; are breathing fast or with difficulty, or the chest pulls in with each breath; have a fever or feel unusually cold; have a fit (convulsion); are unusually sleepy, floppy or hard to wake; have skin or lips that look bluish or grey; or have yellow skin in the first day of life or yellowing that spreads to the palms and soles.',
          },
        },
        'Newborns can become seriously ill quickly. If you are unsure, it is always better to have your baby checked.',
      ],
    },
    {
      heading: 'Caring for the whole family',
      blocks: [
        {
          list: [
            'Support the mother to rest, eat well and attend her own postnatal check-ups.',
            'Keep the baby away from smoke, including cigarette smoke and smoky cooking fires.',
            'Ask visitors with coughs, colds or other infections to wait until they are well.',
            'Make sure everyone washes their hands before holding the baby.',
          ],
        },
      ],
    },
  ],
  keyTakeaways: [
    'Start breastfeeding within one hour of birth and give only breast milk for the first six months.',
    'Keep the baby warm, use skin-to-skin contact and keep the cord clean and dry.',
    'Attend every postnatal check and immunisation visit.',
    'Feeding problems, breathing difficulty, fever, fits or unusual sleepiness need urgent care.',
  ],
  sources: [sources.whoNewbornMortality, sources.whoInfantFeeding, sources.whoPostnatal, sources.medlineEmergencies],
}
