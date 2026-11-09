import { sources } from '../sources.js'

export default {
  id: 'hydration-sleep-activity',
  slug: 'hydration-sleep-and-physical-activity',
  title: 'Water, Sleep and Movement: Three Everyday Foundations of Good Health',
  category: 'nutrition-wellness',
  alsoIn: ['preventive-healthcare'],
  excerpt:
    'How much should you drink, sleep and move each day? Evidence-based guidance on three simple habits that support your heart, mood and long-term health.',
  keywords: ['hydration', 'water', 'sleep', 'exercise', 'physical activity', 'walking', 'rest', 'wellness'],
  featuredImage: { src: '/images/health/physical-activity-jogging.jpg', width: 1400, height: 934, position: '45% 40%' },
  altText: 'Representative image: a woman in sportswear jogging on a running track',
  status: 'pending_review',
  featured: false,
  publicationDate: null,
  lastUpdated: '2026-11-09',
  intro: [
    'Drinking enough fluid, getting enough sleep and staying physically active are among the simplest things you can do for your health. They cost little, need no special equipment and benefit people of every age.',
  ],
  sections: [
    {
      heading: 'Staying hydrated',
      blocks: [
        'Your body needs fluid to work properly. The NHS advises most adults to drink about 6 to 8 cups or glasses of fluid a day, and suggests aiming to drink enough that your urine is a clear, pale yellow colour.',
        'You are likely to need more fluid:',
        {
          list: [
            'In hot weather, or when you are sweating heavily.',
            'During and after physical activity.',
            'When you are ill, especially with fever, vomiting or diarrhoea.',
            'If you are pregnant or breastfeeding.',
          ],
        },
        'Water is the best choice. Sugary soft drinks and sweetened juices add sugar to your diet; the NHS suggests limiting fruit juice and smoothies to one small glass (150 ml) a day. Make sure drinking water is safe: boil it and store it in a clean, covered container if you are not sure of its source.',
        {
          callout: {
            tone: 'note',
            title: 'Some people need different advice',
            text: 'People with certain heart or kidney conditions may be told to limit their fluids. Follow the advice of your health worker.',
          },
        },
      ],
    },
    {
      heading: 'Getting enough sleep',
      blocks: [
        'The U.S. Centers for Disease Control and Prevention (CDC) notes that enough sleep can help you get sick less often, stay at a healthy weight, lower stress and improve mood, and reduce the risk of type 2 diabetes, heart disease, high blood pressure and stroke.',
        'Recommended sleep each day, according to the CDC:',
        {
          list: [
            'Newborns (0 to 3 months): 14 to 17 hours.',
            'Infants (4 to 12 months): 12 to 16 hours, including naps.',
            'Toddlers (1 to 2 years): 11 to 14 hours, including naps.',
            'Pre-school children (3 to 5 years): 10 to 13 hours, including naps.',
            'School-age children (6 to 12 years): 9 to 12 hours.',
            'Teenagers (13 to 17 years): 8 to 10 hours.',
            'Adults: 7 or more hours.',
          ],
        },
        { subheading: 'Tips for better sleep' },
        {
          list: [
            'Go to bed and wake up at the same time each day.',
            'Keep your bedroom quiet, relaxing and cool.',
            'Switch off phones and screens at least 30 minutes before bed.',
            'Avoid large meals, alcohol and caffeine close to bedtime.',
            'Be physically active during the day.',
          ],
        },
        'If you regularly struggle to sleep, snore loudly, or feel very sleepy during the day despite enough time in bed, speak with a health worker.',
      ],
    },
    {
      heading: 'Moving more',
      blocks: [
        'The World Health Organization (WHO) describes physical inactivity as one of the leading risk factors for death from long-term diseases, and states that any amount of activity is better than none. Guidance from WHO and the CDC suggests:',
        {
          list: [
            'Adults: at least 150 minutes of moderate-intensity activity a week, such as brisk walking, or 75 minutes of vigorous activity, plus muscle-strengthening activities on at least 2 days a week.',
            'Older adults: the same targets where possible, plus activities that improve balance.',
            'Children and teenagers (6 to 17 years): at least 60 minutes of moderate to vigorous activity every day.',
            'Pregnant and postpartum women: at least 150 minutes of moderate activity a week, if advised it is safe by their health worker.',
          ],
        },
        'Activity does not have to mean a gym. Walking instead of taking a short ride, climbing stairs, dancing, playing with children, farming and household chores all count. Try to break up long periods of sitting.',
        {
          callout: {
            tone: 'note',
            title: 'Starting safely',
            text: 'If you have a heart condition, high blood pressure, diabetes, joint problems or are pregnant, ask a health worker which activities are suitable before starting something new, and build up gradually.',
          },
        },
      ],
    },
  ],
  keyTakeaways: [
    'Most adults need about 6 to 8 glasses of fluid a day, and more in hot weather or when active.',
    'Adults need at least 7 hours of sleep; children and teenagers need more.',
    'Aim for at least 150 minutes of moderate activity a week; children need 60 minutes a day.',
    'Choose safe drinking water and limit sugary drinks.',
  ],
  sources: [sources.nhsWater, sources.cdcSleep, sources.whoPhysicalActivity, sources.cdcPhysicalActivity, sources.whoHypertension],
}
