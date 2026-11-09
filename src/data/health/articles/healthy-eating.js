import { sources } from '../sources.js'

export default {
  id: 'healthy-eating',
  slug: 'healthy-eating-habits-for-families',
  title: 'Building Healthy Eating Habits for the Whole Family',
  category: 'nutrition-wellness',
  alsoIn: ['family-health', 'preventive-healthcare'],
  excerpt:
    'A healthy diet protects against diabetes, heart disease and stroke. Practical, evidence-based ways to eat better using everyday foods, with less salt, sugar and unhealthy fat.',
  keywords: ['diet', 'nutrition', 'healthy eating', 'vegetables', 'fruit', 'salt', 'sugar', 'fat', 'breastfeeding', 'family meals'],
  featuredImage: { src: '/images/health/fresh-produce-market.jpg', width: 1400, height: 954, position: '30% 60%' },
  altText: 'Representative image: a market trader arranging fresh tomatoes and peppers at a roadside stall in Lagos',
  status: 'pending_review',
  featured: false,
  publicationDate: null,
  lastUpdated: '2026-11-09',
  intro: [
    'What we eat every day has a direct effect on our health. According to the World Health Organization (WHO), a healthy diet helps protect against malnutrition and against long-term conditions such as diabetes, heart disease, stroke and some cancers.',
    'Healthy eating does not require expensive or imported foods. Many traditional meals already contain the building blocks of a healthy diet; the key is balance, variety and watching salt, sugar and fat.',
  ],
  sections: [
    {
      heading: 'What WHO recommends for adults',
      blocks: [
        {
          list: [
            'Eat plenty of fruits and vegetables: at least 400 grams a day, roughly five portions.',
            'Include beans, lentils, nuts and whole grains such as brown rice, millet, maize and oats.',
            'Keep free sugars, the sugars added to foods and drinks plus those in honey, syrups and fruit juice, to less than 10% of your daily energy. For an average adult, that is about 12 level teaspoons a day, and less is better.',
            'Keep total fat to no more than 30% of daily energy, and limit saturated fats.',
            'Keep salt to less than 5 grams a day, about one level teaspoon, including the salt in seasonings and processed foods.',
          ],
        },
      ],
    },
    {
      heading: 'Practical tips for everyday meals',
      blocks: [
        { subheading: 'More vegetables and fruit' },
        'Add leafy vegetables to soups and stews, include a vegetable side with rice or swallow, and choose fresh fruit instead of biscuits or sweets as a snack. Fresh, frozen and canned options all count; choose canned foods without added sugar or salt.',
        { subheading: 'Less salt' },
        'Much of the salt we eat comes from stock cubes, salty seasonings and processed foods, not just the salt shaker. Use less of these when cooking, taste food before adding salt, and do not keep salt on the table. Herbs, spices, onions, garlic and ginger add flavour without salt.',
        { subheading: 'Healthier fats' },
        'Steam, boil or grill food more often instead of deep frying. Use oils sparingly, trim visible fat from meat, and limit processed and fried snacks.',
        { subheading: 'Less sugar' },
        'Sugary soft drinks, energy drinks and sweetened juices are a major source of sugar. Choose water instead, and cut down on sweets, pastries and sugar added to tea, pap and cereals.',
      ],
    },
    {
      heading: 'Feeding babies and young children',
      blocks: [
        'WHO recommends that babies are breastfed within the first hour of birth, receive only breast milk for the first six months, and continue breastfeeding up to two years or beyond. From six months, children need safe, nutritious foods in addition to breast milk, starting with small amounts and increasing gradually as they grow.',
        'Avoid giving young children sugary drinks and salty snacks. Habits formed early often last a lifetime.',
      ],
    },
    {
      heading: 'Making healthy eating a family habit',
      blocks: [
        {
          list: [
            'Plan meals ahead and shop for fresh foods when possible.',
            'Eat together as a family and let children help prepare simple meals.',
            'Serve sensible portions and avoid eating late at night.',
            'Keep drinking water available instead of soft drinks.',
            'Make one change at a time: small, steady changes are easier to keep.',
          ],
        },
        {
          callout: {
            tone: 'note',
            title: 'Special dietary needs',
            text: 'People with diabetes, high blood pressure, kidney disease, pregnancy or other conditions may need specific dietary advice. Ask a health worker for guidance that fits your situation.',
          },
        },
      ],
    },
  ],
  keyTakeaways: [
    'Aim for at least five portions (400 g) of fruits and vegetables a day.',
    'Keep salt below 5 g a day, and remember that stock cubes and seasonings contain salt.',
    'Cut down on sugary drinks and added sugar, and choose water instead.',
    'Breastfeed exclusively for six months, then add healthy foods while continuing to breastfeed.',
  ],
  sources: [sources.whoHealthyDiet, sources.whoInfantFeeding, sources.whoHypertension],
}
