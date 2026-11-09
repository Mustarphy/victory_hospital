import { sources } from '../sources.js'

export default {
  id: 'childhood-immunisation',
  slug: 'why-childhood-immunisation-is-important',
  title: 'Why Childhood Immunisation Is Important',
  category: 'child-health',
  alsoIn: ['preventive-healthcare', 'family-health'],
  excerpt:
    'Vaccines protect children from serious diseases such as measles, polio and tetanus. Learn how vaccines work, when Nigerian children receive them and what to do if a dose is missed.',
  keywords: ['immunisation', 'immunization', 'vaccine', 'vaccination', 'measles', 'polio', 'BCG', 'schedule', 'side effects'],
  featuredImage: { src: '/images/specialists/paediatrics.jpg', width: 1000, height: 667, position: '50% 35%' },
  altText: 'Representative image: a nurse caring for a young child on a hospital ward',
  status: 'pending_review',
  reviewNotes: [
    'The schedule summary is based on the NPHCDA Immunization FHIR guide, which is a draft build. Please confirm it against the current official national schedule and the vaccines given at the hospital.',
  ],
  featured: false,
  publicationDate: null,
  lastUpdated: '2026-11-09',
  intro: [
    'Immunisation is one of the most effective ways to protect children from serious illness. The World Health Organization (WHO) estimates that childhood vaccines alone save more than 4 million lives every year.',
    'This article explains how vaccines work, why the timing of each dose matters and how parents can keep their child’s vaccinations on track.',
  ],
  sections: [
    {
      heading: 'How vaccines work',
      blocks: [
        'Vaccines train the body’s natural defences to recognise and fight specific infections before a child is exposed to them. WHO explains that vaccines contain killed or weakened germs, or parts of them, so they do not cause the disease or put a child at risk of its complications.',
        'Once the immune system has learned how to fight a germ, it remembers. Depending on the vaccine, protection can last for years, decades or a lifetime.',
      ],
    },
    {
      heading: 'Protecting your child and your community',
      blocks: [
        'Vaccines protect children from diseases that can cause death or lifelong disability, including measles, meningitis, pneumonia, tetanus and polio.',
        'Vaccination also protects people around your child. WHO notes that some people, such as very young babies and people who are seriously ill, cannot receive certain vaccines and depend on others being vaccinated to stay safe.',
      ],
    },
    {
      heading: 'When do children in Nigeria receive vaccines?',
      blocks: [
        'Nigeria’s routine immunisation schedule begins at birth and continues through infancy and early childhood. Based on the national schedule published by the National Primary Health Care Development Agency (NPHCDA):',
        {
          list: [
            'At birth: vaccines against tuberculosis (BCG), polio and hepatitis B.',
            'At 6, 10 and 14 weeks: a series of vaccines that includes protection against diphtheria, tetanus, whooping cough, hepatitis B, Haemophilus influenzae type b, pneumococcal disease, rotavirus and polio.',
            'At around 9 months: vaccines including the first dose of a measles-containing vaccine and yellow fever vaccine.',
            'Later in childhood: further doses, such as a second measles-containing dose, and other vaccines offered at specific ages.',
          ],
        },
        'The exact vaccines and timing can change as the national programme is updated. Your child’s immunisation card and health worker are the best guide to which vaccines are due and when.',
        {
          callout: {
            tone: 'note',
            title: 'Keep the immunisation card safe',
            text: 'Bring your child’s immunisation card to every clinic visit. It records which vaccines have been given and when the next ones are due.',
          },
        },
      ],
    },
    {
      heading: 'Are vaccines safe?',
      blocks: [
        'WHO states that every vaccine goes through laboratory testing and several phases of clinical trials before approval, and continues to be monitored for safety after it is in use.',
        'Side effects are usually minor and short-lived, such as a sore arm or a mild fever. More serious side effects are possible but extremely rare. If you are worried about how your child reacts after a vaccine, contact a health worker.',
      ],
    },
    {
      heading: 'What if a vaccine was missed?',
      blocks: [
        'Delaying vaccines leaves a child unprotected for longer. WHO advises that if a vaccine was missed, you should talk to a health worker about catching up. In many cases, a child can continue the schedule without starting again.',
        'Waiting until there is an outbreak is risky, because there may not be enough time for all doses to be given or for the vaccine to take effect.',
      ],
    },
    {
      heading: 'When to seek medical advice',
      blocks: [
        {
          callout: {
            tone: 'urgent',
            title: 'Seek urgent care',
            text: 'If your child has difficulty breathing, swelling of the face, lips or tongue, a seizure, or becomes unusually drowsy or floppy at any time, including after a vaccine, seek emergency care immediately.',
          },
        },
      ],
    },
  ],
  keyTakeaways: [
    'Vaccines teach the immune system to fight serious diseases without causing the disease itself.',
    'In Nigeria, vaccines start at birth and continue at 6, 10 and 14 weeks, around 9 months and later in childhood.',
    'Side effects are usually mild and short-lived; serious reactions are extremely rare.',
    'If a dose is missed, speak with a health worker about catching up rather than waiting.',
  ],
  sources: [sources.whoVaccination, sources.whoVaccineSafety, sources.nphcdaSchedule, sources.whoNewbornMortality, sources.medlineEmergencies],
}
