import { sources } from '../sources.js'

export default {
  id: 'health-checkups',
  slug: 'importance-of-regular-health-checkups',
  title: 'Why Regular Health Check-ups Matter, Even When You Feel Well',
  category: 'general-health',
  alsoIn: ['preventive-healthcare'],
  excerpt:
    'Some of the most common long-term conditions cause no symptoms for years. Regular check-ups help find them early, when they are easier to manage.',
  keywords: ['check-up', 'checkup', 'screening', 'blood pressure', 'blood sugar', 'medical test', 'prevention'],
  featuredImage: { src: '/images/services/consultation.jpg', width: 1400, height: 933, position: '50% 40%' },
  altText: 'Representative image: a doctor showing a patient information on a tablet during a consultation',
  status: 'pending_review',
  featured: false,
  publicationDate: null,
  lastUpdated: '2026-11-09',
  intro: [
    'Many people only visit a hospital when they feel ill. Yet some of the most serious health problems develop quietly, without pain or obvious signs, until they have already caused damage.',
    'A regular health check-up is a planned visit to a health worker when you are not unwell. Its purpose is to look for early warning signs, prevent illness and give you the information you need to stay healthy.',
  ],
  sections: [
    {
      heading: 'Why check-ups matter',
      blocks: [
        'MedlinePlus, from the U.S. National Library of Medicine, explains that routine check-ups are different from visits for sickness or injury. They focus on prevention and on finding disease early, when treatment may be easier.',
        'High blood pressure is a clear example. The World Health Organization (WHO) estimates that about 1.4 billion adults aged 30 to 79 had high blood pressure in 2024, and that around 44% of them did not know they had it. Most people with high blood pressure have no symptoms, so measuring it is the only way to find out.',
        'Type 2 diabetes is similar. WHO notes that its symptoms can be mild and may go unnoticed for years, so some people are only diagnosed after complications have begun. A blood glucose test is a relatively simple way to detect it early.',
      ],
    },
    {
      heading: 'What a check-up may include',
      blocks: [
        'The checks you need depend on your age, sex, health, family history and other risks. A health worker may:',
        {
          list: [
            'Ask about your health, lifestyle, medicines and your family’s medical history.',
            'Measure your blood pressure, weight and other basic measurements.',
            'Recommend screening tests, such as a blood glucose test, where appropriate.',
            'Check whether you are up to date with recommended vaccines.',
            'Offer advice on diet, physical activity, alcohol, tobacco and other areas of your health.',
          ],
        },
        'Your health worker will tell you which tests are right for you and how often you should return.',
      ],
    },
    {
      heading: 'Who may benefit from more regular checks',
      blocks: [
        'Everyone benefits from staying on top of their health, but you should discuss regular checks with a health worker if you:',
        {
          list: [
            'Have a family history of high blood pressure, diabetes, stroke or heart disease.',
            'Are overweight, physically inactive, smoke or drink alcohol regularly.',
            'Have previously been told your blood pressure or blood sugar was raised.',
            'Are planning a pregnancy.',
            'Are older, as the risk of many long-term conditions rises with age.',
          ],
        },
      ],
    },
    {
      heading: 'How to prepare for your check-up',
      blocks: [
        {
          list: [
            'Find out what you can about your family’s health history.',
            'Make a list of every medicine, vitamin, herbal product and supplement you take.',
            'Write down any symptoms or concerns, even if they seem small.',
            'Bring results from any previous tests or hospital visits.',
            'Ask questions if you do not understand a result or recommendation.',
          ],
        },
      ],
    },
    {
      heading: 'A check-up is not a replacement for urgent care',
      blocks: [
        {
          callout: {
            tone: 'urgent',
            title: 'Do not wait for a routine check-up',
            text: 'If you have symptoms such as chest pain, difficulty breathing, sudden weakness on one side of the body, confusion or severe bleeding, seek emergency care immediately.',
          },
        },
      ],
    },
  ],
  keyTakeaways: [
    'Check-ups focus on prevention and on finding problems early, when they may be easier to treat.',
    'High blood pressure and type 2 diabetes often cause no early symptoms, so testing is the only way to know.',
    'Which tests you need depends on your age, health and family history; your health worker will advise you.',
    'Bring a list of your medicines and questions to make the most of your visit.',
  ],
  sources: [sources.medlineCheckup, sources.whoHypertension, sources.cdcHighBloodPressure, sources.whoDiabetes],
}
