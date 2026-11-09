import { sources } from '../sources.js'

export default {
  id: 'infectious-disease-prevention',
  slug: 'reducing-the-risk-of-infectious-diseases',
  title: 'Practical Ways to Reduce the Risk of Malaria, Cholera, Lassa Fever and Other Infections',
  category: 'preventive-healthcare',
  alsoIn: ['family-health', 'common-conditions'],
  excerpt:
    'Handwashing, safe water, mosquito nets and keeping rats out of the home are simple habits that protect families. Here is what Nigerian and international health authorities advise.',
  keywords: ['infection', 'malaria', 'cholera', 'lassa fever', 'handwashing', 'hygiene', 'mosquito net', 'safe water', 'rats'],
  featuredImage: { src: '/images/health/handwashing-water-pump.jpg', width: 1400, height: 934, position: '50% 50%' },
  altText: 'Representative image: a person washing their hands under running water from an outdoor water pump',
  status: 'pending_review',
  reviewNotes: [
    'The suggestion to start oral rehydration solution on the way to a facility is based on WHO’s statement that most cholera cases are treated with prompt ORS. Please confirm this is the advice the hospital wants to give.',
  ],
  featured: false,
  publicationDate: null,
  lastUpdated: '2026-11-09',
  intro: [
    'Infectious diseases such as malaria, cholera and Lassa fever remain important health concerns in Nigeria. Many of these infections can be prevented, or their spread reduced, through everyday habits at home and in the community.',
    'This article brings together practical guidance from the Nigeria Centre for Disease Control and Prevention (NCDC), the World Health Organization (WHO) and other public health bodies.',
  ],
  sections: [
    {
      heading: 'Handwashing: one of the simplest protections',
      blocks: [
        'The U.S. Centers for Disease Control and Prevention (CDC) explains that handwashing can help prevent the spread of respiratory and diarrhoeal infections. Wash your hands with soap and clean running water:',
        {
          list: [
            'Before, during and after preparing food, and before eating.',
            'After using the toilet or changing a baby’s nappy.',
            'Before and after caring for someone who is sick.',
            'After blowing your nose, coughing or sneezing.',
            'After touching animals, animal waste or rubbish.',
          ],
        },
        'Wet your hands, apply soap, and scrub all surfaces, including the backs of your hands, between your fingers and under your nails, for at least 20 seconds. Rinse well and dry with a clean cloth or let them air-dry. If soap and water are not available, an alcohol-based hand sanitiser with at least 60% alcohol can be used.',
      ],
    },
    {
      heading: 'Malaria',
      blocks: [
        'Malaria is spread through the bites of infected mosquitoes. WHO lists fever, headache and chills as the most common early symptoms. Young children and pregnant women are among those at highest risk of severe illness.',
        {
          list: [
            'Sleep under an insecticide-treated mosquito net every night, especially children and pregnant women.',
            'Use window and door screens and insect repellents where possible.',
            'If you or your child has a fever, go to a health facility to be tested. WHO recommends that suspected malaria is confirmed with a test before treatment.',
          ],
        },
      ],
    },
    {
      heading: 'Cholera and other diarrhoeal diseases',
      blocks: [
        'Cholera is caused by eating food or drinking water contaminated with cholera bacteria. WHO warns that severe cholera can cause dehydration and death within hours if it is not treated. NCDC advises:',
        {
          list: [
            'Boil drinking water and store it in a clean, covered container.',
            'Cook food thoroughly and reheat leftovers well before eating.',
            'Wash raw fruits and vegetables with safe water, and protect food from flies.',
            'Avoid open defecation and dispose of refuse and sewage properly.',
            'People with diarrhoea should not prepare or serve food or fetch water for others.',
          ],
        },
        {
          callout: {
            tone: 'urgent',
            title: 'Sudden watery diarrhoea needs prompt care',
            text: 'NCDC advises anyone with sudden, heavy, watery diarrhoea not to self-medicate but to visit a health facility immediately. Start drinking oral rehydration solution (ORS) on the way if it is available.',
          },
        },
      ],
    },
    {
      heading: 'Lassa fever',
      blocks: [
        'Lassa fever is mainly spread through contact with food or household items contaminated by the urine or droppings of infected rats. WHO notes that about 80% of infections cause mild or no symptoms, but severe cases can be life-threatening. NCDC reports that the dry season, from about November to April, is the peak period. NCDC advises:',
        {
          list: [
            'Store foods such as rice, garri, beans and maize in tightly sealed containers.',
            'Do not dry food on the ground or by the roadside.',
            'Keep homes and surroundings clean, cover dustbins and dispose of rubbish away from the house.',
            'Block holes and gaps that rats could use to enter the home.',
            'Wash hands often with soap and running water.',
          ],
        },
        'Early symptoms, such as fever, weakness and headache, can look like other illnesses. NCDC advises people not to self-medicate but to seek diagnosis and early treatment at a health facility. Family members caring for someone who is ill should avoid contact with their blood and body fluids.',
      ],
    },
    {
      heading: 'Vaccination',
      blocks: [
        'Vaccines protect against many serious infections, including measles, polio, tetanus and yellow fever. Keeping children’s routine vaccinations up to date, and asking a health worker about vaccines recommended for adults, is an important part of preventing infectious disease.',
      ],
    },
  ],
  keyTakeaways: [
    'Wash hands with soap and running water for at least 20 seconds at key times.',
    'Sleep under an insecticide-treated net and get any fever tested before treatment.',
    'Boil and safely store drinking water, cook food thoroughly and protect it from flies.',
    'Store food in sealed containers and keep rats out of the home to reduce the risk of Lassa fever.',
    'Do not self-medicate for fever or severe diarrhoea; visit a health facility promptly.',
  ],
  sources: [
    sources.cdcCleanHands,
    sources.whoMalaria,
    sources.whoCholera,
    sources.ncdcCholera,
    sources.whoLassa,
    sources.ncdcLassa,
    sources.whoVaccination,
  ],
}
