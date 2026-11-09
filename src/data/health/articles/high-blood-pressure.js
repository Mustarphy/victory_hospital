import { sources } from '../sources.js'

export default {
  id: 'high-blood-pressure',
  slug: 'understanding-high-blood-pressure',
  title: 'High Blood Pressure: Why Regular Monitoring Matters',
  category: 'common-conditions',
  alsoIn: ['preventive-healthcare'],
  excerpt:
    'High blood pressure rarely causes symptoms, yet it is a major cause of stroke, heart disease and kidney damage. Learn what the numbers mean and how to lower your risk.',
  keywords: ['hypertension', 'high blood pressure', 'BP', 'stroke', 'heart', 'kidney', 'salt', 'silent'],
  featuredImage: { src: '/images/hero/hero-consultation-1200.jpg', width: 1200, height: 800, position: '60% 30%' },
  altText: 'Representative image: a healthcare worker checking an older man’s blood pressure',
  status: 'pending_review',
  featured: false,
  publicationDate: null,
  lastUpdated: '2026-11-09',
  intro: [
    'High blood pressure, also called hypertension, is one of the most common long-term health conditions in the world. It is often described as a hidden condition, because most people who have it feel completely well.',
    'Left uncontrolled, high blood pressure can damage the heart, brain and kidneys. The good news is that it is easy to measure and, once found, can usually be managed.',
  ],
  sections: [
    {
      heading: 'What is blood pressure?',
      blocks: [
        'Blood pressure is the force of blood pushing against the walls of your arteries as your heart pumps. It is recorded as two numbers, for example 120/80 mmHg. The first number is the pressure when the heart beats; the second is the pressure when the heart rests between beats.',
        'The World Health Organization (WHO) defines hypertension as blood pressure of 140/90 mmHg or higher, measured on two different days. A health worker will interpret your readings and explain what they mean for you.',
      ],
    },
    {
      heading: 'Why it matters',
      blocks: [
        'WHO estimates that about 1.4 billion adults aged 30 to 79 had hypertension in 2024, and that two thirds of them live in low- and middle-income countries. Around 44% did not know they had it, and only about 23% had it under control.',
        'Over time, uncontrolled high blood pressure can lead to:',
        {
          list: [
            'Stroke, when an artery in the brain becomes blocked or bursts.',
            'Heart attack, heart failure and irregular heartbeat.',
            'Kidney damage, which can progress to kidney failure.',
          ],
        },
      ],
    },
    {
      heading: 'Why regular checks are important',
      blocks: [
        'Most people with high blood pressure have no symptoms. The U.S. Centers for Disease Control and Prevention (CDC) states that the only way to know whether you have high blood pressure is to have it measured. The test is quick and painless.',
        'A health worker may take several readings over more than one visit before making a diagnosis, and may suggest checking your blood pressure at home with a reliable, validated monitor between visits.',
      ],
    },
    {
      heading: 'Who is at higher risk?',
      blocks: [
        'WHO lists risk factors that can be changed and some that cannot.',
        {
          list: [
            'Risks you can change: eating too much salt or too few fruits and vegetables, physical inactivity, tobacco use, drinking alcohol, and being overweight.',
            'Risks you cannot change: a family history of high blood pressure, being over 65, and having conditions such as diabetes or kidney disease.',
          ],
        },
      ],
    },
    {
      heading: 'Steps that help keep blood pressure healthy',
      blocks: [
        {
          list: [
            'Reduce salt: cook with less salt and fewer stock cubes and salty seasonings, and avoid adding salt at the table. WHO advises adults to eat less than 5 grams of salt a day, about one level teaspoon.',
            'Eat more vegetables and fruit, and fewer fried and fatty foods.',
            'Be active: aim for at least 150 minutes of moderate activity, such as brisk walking, each week.',
            'Do not smoke, and limit or avoid alcohol.',
            'Work towards a healthy weight.',
            'Find healthy ways to manage stress.',
          ],
        },
      ],
    },
    {
      heading: 'If you have been diagnosed',
      blocks: [
        'High blood pressure is usually a long-term condition. If your health worker prescribes medicine, take it exactly as directed, even when you feel well. Do not stop, change or share your medicines without speaking to your health worker, and attend your follow-up visits so your treatment can be reviewed.',
        {
          callout: {
            tone: 'urgent',
            title: 'Seek urgent care',
            text: 'Very high blood pressure can cause a severe headache, chest pain, difficulty breathing, confusion, blurred vision, nausea or vomiting. If you have these symptoms, especially with signs of a stroke such as a drooping face or weakness on one side, seek emergency care immediately.',
          },
        },
      ],
    },
  ],
  keyTakeaways: [
    'Hypertension is blood pressure of 140/90 mmHg or higher on two different days.',
    'Most people with high blood pressure feel well, so regular measurement is the only way to know.',
    'Less salt, more vegetables, regular activity and no tobacco all help protect your blood pressure.',
    'If you are prescribed treatment, take it as directed and keep your follow-up appointments.',
  ],
  sources: [sources.whoHypertension, sources.cdcHighBloodPressure, sources.whoHealthyDiet],
}
