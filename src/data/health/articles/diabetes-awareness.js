import { sources } from '../sources.js'

export default {
  id: 'diabetes-awareness',
  slug: 'diabetes-awareness-risk-factors-prevention',
  title: 'Diabetes Awareness: Risk Factors, Prevention and Living Well',
  category: 'common-conditions',
  alsoIn: ['preventive-healthcare'],
  excerpt:
    'Type 2 diabetes can develop quietly for years. Learn the warning signs, who is at risk, how it is detected and the everyday steps that lower your risk.',
  keywords: ['diabetes', 'blood sugar', 'glucose', 'type 2', 'insulin', 'thirst', 'urination', 'prevention'],
  featuredImage: { src: '/images/health/diabetes-glucose-test.jpg', width: 1400, height: 933, position: '45% 50%' },
  altText: 'Representative image: a person testing their blood glucose with a finger-prick glucose meter',
  status: 'pending_review',
  featured: false,
  publicationDate: null,
  lastUpdated: '2026-11-09',
  intro: [
    'Diabetes is a long-term condition in which the level of sugar (glucose) in the blood is too high. Over time, high blood glucose can damage the eyes, kidneys, nerves, heart and blood vessels.',
    'Many people live with diabetes for years without knowing it. Understanding the risk factors and getting tested can lead to earlier diagnosis and better long-term health.',
  ],
  sections: [
    {
      heading: 'Why diabetes matters',
      blocks: [
        'The World Health Organization (WHO) reports that the number of people living with diabetes rose from 200 million in 1990 to 830 million in 2022, and that 14% of adults were living with diabetes in 2022. WHO also notes that more than half of adults with diabetes aged 30 and over were not taking medication for it.',
      ],
    },
    {
      heading: 'Types of diabetes',
      blocks: [
        {
          list: [
            'Type 2 diabetes: the most common type, accounting for more than 95% of cases. The body does not use insulin properly. It is often linked to excess weight and physical inactivity and can often be prevented.',
            'Type 1 diabetes: the body produces little or no insulin, so daily insulin is needed. Its cause is not known and it cannot currently be prevented.',
            'Gestational diabetes: raised blood glucose that develops during pregnancy. It is usually found through screening during antenatal care rather than through symptoms.',
          ],
        },
      ],
    },
    {
      heading: 'Signs to look out for',
      blocks: [
        'WHO lists these common symptoms of diabetes:',
        {
          list: ['Feeling very thirsty.', 'Passing urine often.', 'Blurred vision.', 'Tiredness.', 'Losing weight without trying.'],
        },
        'In type 2 diabetes, symptoms can be mild or absent for years. This is why testing matters, especially if you have risk factors.',
      ],
    },
    {
      heading: 'Who is at higher risk of type 2 diabetes?',
      blocks: [
        {
          list: [
            'People who are overweight.',
            'People who are not physically active.',
            'People with a family history of diabetes.',
            'Women who had diabetes during a previous pregnancy.',
          ],
        },
        'If any of these apply to you, ask a health worker whether you should have your blood glucose checked. WHO describes blood glucose testing as a relatively inexpensive way to detect diabetes early.',
      ],
    },
    {
      heading: 'Reducing your risk',
      blocks: [
        'WHO advises these steps to help prevent type 2 diabetes:',
        {
          list: [
            'Work towards and maintain a healthy body weight.',
            'Be physically active for at least 150 minutes a week at moderate intensity, such as brisk walking.',
            'Eat a healthy diet with plenty of vegetables, fruits, beans and whole grains, and limit sugar, sugary drinks and saturated fat.',
            'Avoid tobacco.',
          ],
        },
      ],
    },
    {
      heading: 'Living well with diabetes',
      blocks: [
        'Diabetes can be managed. Treatment depends on the type of diabetes and the person, and may include healthy eating, physical activity, medicines or insulin. Only a qualified health worker can decide which treatment is right for you.',
        'WHO highlights regular checks of the feet, kidneys and eyes to find complications early. People with diabetes may also need treatment to control blood pressure and cholesterol.',
        {
          list: [
            'Take medicines exactly as prescribed and attend follow-up visits.',
            'Check your feet daily for cuts, blisters or sores, and seek care for any that do not heal.',
            'Learn the signs of very low and very high blood sugar from your health worker.',
            'Do not stop or change your treatment because of advice from friends or adverts.',
          ],
        },
        {
          callout: {
            tone: 'urgent',
            title: 'Seek urgent care',
            text: 'If someone with diabetes becomes confused, very drowsy or unconscious, has difficulty breathing, is vomiting repeatedly, or has a foot wound that is red, swollen or smells, seek medical care immediately.',
          },
        },
      ],
    },
  ],
  keyTakeaways: [
    'Type 2 diabetes is the most common form and can often be prevented.',
    'Thirst, frequent urination, blurred vision, tiredness and weight loss can be signs, but many people have no symptoms.',
    'A blood glucose test is a simple way to detect diabetes early.',
    'Healthy weight, regular activity, a balanced diet and no tobacco lower your risk.',
  ],
  reviewNotes: [
    'Previous gestational diabetes is listed as a risk factor from general clinical knowledge; the cited WHO fact sheet names overweight, inactivity and genetics. Please confirm.',
    'The "Seek urgent care" signs for diabetes emergencies and the foot-care advice are general guidance not stated in the cited WHO fact sheet. Please confirm.',
  ],
  sources: [sources.whoDiabetes, sources.whoHealthyDiet, sources.cdcPhysicalActivity],
}
