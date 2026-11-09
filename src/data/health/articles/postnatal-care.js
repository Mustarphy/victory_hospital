import { sources } from '../sources.js'

export default {
  id: 'postnatal-care',
  slug: 'postnatal-care-for-mothers',
  title: 'After the Birth: Understanding Postnatal Care for Mothers',
  category: 'maternal-health',
  alsoIn: ['family-health'],
  excerpt:
    'The first six weeks after childbirth are a critical time for a mother’s recovery. Learn when postnatal check-ups are recommended and which warning signs need urgent attention.',
  keywords: ['postnatal', 'postpartum', 'after birth', 'recovery', 'bleeding', 'depression', 'breastfeeding', 'family planning'],
  featuredImage: { src: '/images/history/community-clinic.jpg', width: 1400, height: 1050, position: '50% 40%' },
  altText: 'Representative image: a mother holding her newborn baby while a health worker completes records at a clinic',
  status: 'pending_review',
  reviewNotes: [
    'The "Looking after your emotional health" paragraph is general guidance (WHO recommends screening for postnatal depression and anxiety but does not describe early low mood). Please confirm the wording.',
  ],
  featured: false,
  publicationDate: null,
  lastUpdated: '2026-11-09',
  intro: [
    'After a baby is born, attention naturally turns to the newborn. But the weeks after childbirth are also an important time for the mother’s own health. Her body is recovering, she may be learning to breastfeed, and she may be coping with tiredness and big emotional changes.',
    'Postnatal care is the care a mother and baby receive in the weeks after birth. This article explains why it matters and what it should include.',
  ],
  sections: [
    {
      heading: 'Why the weeks after birth matter',
      blocks: [
        'The World Health Organization (WHO) reports that most maternal and newborn deaths happen in the first days after birth, yet more than 3 in 10 women and babies worldwide do not receive postnatal care in those first days.',
        'WHO lists severe bleeding (mostly after childbirth), infections (usually after childbirth) and high blood pressure in pregnancy among the main causes of maternal death. Many of these complications can be managed if they are recognised early.',
      ],
    },
    {
      heading: 'Recommended postnatal check-ups',
      blocks: [
        'WHO guidance published in 2022 recommends:',
        {
          list: [
            'At least 24 hours of care in a health facility after a birth there.',
            'At least three more postnatal contacts in the first six weeks for healthy mothers and babies: at 48 to 72 hours, between 7 and 14 days, and during the sixth week after birth.',
            'For births at home, a first postnatal contact within 24 hours of birth.',
          ],
        },
        'More contacts may be needed if any risk or problem is found.',
      ],
    },
    {
      heading: 'What postnatal care should cover',
      blocks: [
        'According to WHO, good postnatal care supports both physical and mental recovery. It can include:',
        {
          list: [
            'Checking how the mother is recovering, including bleeding, wound healing and signs of infection.',
            'Help with common problems such as perineal pain and painful, swollen breasts.',
            'Support and counselling for exclusive breastfeeding.',
            'Screening for postnatal depression and anxiety, with support where needed.',
            'Advice and access to family planning.',
            'Checks on the baby, including feeding, growth, warning signs and vaccination.',
          ],
        },
      ],
    },
    {
      heading: 'Looking after your emotional health',
      blocks: [
        'Feeling tearful or overwhelmed in the first days after birth is common. If low mood, worry or hopelessness last, or make it hard to care for yourself or your baby, tell a health worker. Postnatal depression and anxiety are health conditions that can be treated, and asking for help is a sign of strength.',
      ],
    },
    {
      heading: 'Warning signs after birth',
      blocks: [
        {
          callout: {
            tone: 'urgent',
            title: 'Get medical help immediately if you have',
            text: 'Heavy vaginal bleeding or unusual discharge; fever; a headache that will not go away or gets worse; changes in your vision; dizziness or fainting; trouble breathing or chest pain; severe belly pain; painful swelling or redness of a leg or arm; or thoughts of harming yourself or your baby.',
          },
        },
        'The U.S. Centers for Disease Control and Prevention (CDC) notes that urgent warning signs like these can occur at any time in the year after birth, not only in the first few days. When you seek care, always say that you have recently had a baby.',
      ],
    },
    {
      heading: 'How family members can help',
      blocks: [
        {
          list: [
            'Help the mother attend every postnatal check-up.',
            'Share household tasks so she can rest and feed the baby.',
            'Learn the warning signs and act quickly if they appear.',
            'Encourage her to talk about how she is feeling.',
          ],
        },
      ],
    },
  ],
  keyTakeaways: [
    'The first days and weeks after birth are when most serious complications occur.',
    'WHO recommends at least three postnatal check-ups after discharge in the first six weeks.',
    'Postnatal care covers physical recovery, breastfeeding, mental health and family planning.',
    'Heavy bleeding, fever, severe headache or breathing problems after birth need urgent care.',
  ],
  sources: [sources.whoPostnatal, sources.whoMaternalMortality, sources.cdcMaternalWarningSigns, sources.whoInfantFeeding],
}
