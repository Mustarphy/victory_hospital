import { sources } from '../sources.js'

export default {
  id: 'pregnancy-preparation',
  slug: 'preparing-for-a-healthy-pregnancy',
  title: 'Preparing for a Healthy Pregnancy: What to Know Before and During Pregnancy',
  category: 'maternal-health',
  alsoIn: ['family-health'],
  excerpt:
    'Good health before conception and good care during pregnancy both make a difference. From folic acid to malaria prevention, here are the steps worth knowing about.',
  keywords: ['pregnancy', 'planning', 'conception', 'folic acid', 'preconception', 'malaria', 'mosquito net', 'trying for a baby'],
  featuredImage: { src: '/images/specialists/obstetrics-gynaecology.jpg', width: 800, height: 1000, position: '50% 55%' },
  altText: 'Representative image: two pairs of hands resting gently on a pregnant belly',
  status: 'pending_review',
  featured: false,
  publicationDate: null,
  lastUpdated: '2026-11-09',
  intro: [
    'A healthy pregnancy starts before conception. Some of the most important steps, such as taking folic acid and getting long-term health conditions under control, work best when they begin before a woman becomes pregnant.',
    'This article covers practical steps for women and couples who are planning a pregnancy, and the habits that support a healthy pregnancy once it begins.',
  ],
  sections: [
    {
      heading: 'Before pregnancy',
      blocks: [
        { subheading: 'Talk to a health worker about folic acid' },
        'Folic acid is a B vitamin that helps the body make new cells. The U.S. Centers for Disease Control and Prevention (CDC) explains that it helps prevent serious birth defects of the baby’s brain and spine, known as neural tube defects. These defects can form in the first few weeks of pregnancy, often before a woman knows she is pregnant.',
        'For this reason, the CDC advises women who could become pregnant to get folic acid every day, and those planning a pregnancy to start at least one month before trying to conceive. Ask a health worker which supplement is right for you, especially if you have had a previous pregnancy affected by a neural tube defect, as a different amount may be advised.',
        { subheading: 'Review your health and medicines' },
        'The NHS advises speaking to a doctor before trying for a baby if you or your partner take any regular medicines or herbal remedies, or live with a long-term condition such as high blood pressure, diabetes, epilepsy or sickle cell disease. Some conditions and medicines need to be managed differently during pregnancy.',
        {
          callout: {
            tone: 'note',
            title: 'Do not stop prescribed medicines on your own',
            text: 'Stopping a prescribed medicine suddenly can be harmful. Speak with your doctor first; they can review whether any changes are needed.',
          },
        },
        { subheading: 'Other helpful steps' },
        {
          list: [
            'Aim for a healthy weight: being very underweight or overweight can make it harder to conceive.',
            'Stop smoking and avoid alcohol.',
            'Check that your vaccinations are up to date.',
            'Get tested for sexually transmitted infections if you or your partner may be at risk.',
            'Eat a varied diet that includes vegetables, fruits, beans and whole grains.',
          ],
        },
      ],
    },
    {
      heading: 'During pregnancy',
      blocks: [
        { subheading: 'Start antenatal care early' },
        'The World Health Organization (WHO) recommends that the first antenatal contact takes place within the first 12 weeks of pregnancy, with at least eight contacts in total. Antenatal care includes tests, supplements, vaccination and checks that can find problems such as high blood pressure before they become dangerous.',
        { subheading: 'Protect yourself from malaria' },
        'WHO lists pregnant women among the groups at higher risk of severe malaria. Sleep under an insecticide-treated mosquito net every night, and ask your antenatal team about preventive malaria treatment in pregnancy. If you develop a fever, go to a health facility to be tested rather than treating yourself at home.',
        { subheading: 'Be careful with medicines and remedies' },
        'Many medicines, including some herbal products, are not safe in pregnancy. Only take medicines that have been recommended by a qualified health worker who knows you are pregnant.',
      ],
    },
    {
      heading: 'Warning signs during pregnancy',
      blocks: [
        {
          callout: {
            tone: 'urgent',
            title: 'Seek care immediately if you notice',
            text: 'Vaginal bleeding or leaking fluid; a severe or persistent headache; changes in your vision; sudden swelling of the face or hands; severe belly pain; fever; trouble breathing; chest pain; or your baby moving less or stopping moving.',
          },
        },
        'These signs, listed by the CDC, can point to serious conditions such as pre-eclampsia or infection. Do not wait for your next antenatal appointment.',
      ],
    },
  ],
  keyTakeaways: [
    'Ask a health worker about folic acid; the CDC advises starting at least one month before trying to conceive.',
    'Review long-term conditions and regular medicines with a doctor before pregnancy, and do not stop medicines on your own.',
    'Book antenatal care early, ideally within the first 12 weeks.',
    'Sleep under an insecticide-treated net, and get any fever tested rather than self-treated.',
  ],
  sources: [sources.cdcFolicAcid, sources.nhsPlanningPregnancy, sources.whoAntenatal, sources.whoMalaria, sources.cdcMaternalWarningSigns],
}
