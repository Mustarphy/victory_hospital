import { sources } from '../sources.js'

export default {
  id: 'early-antenatal-care',
  slug: 'why-early-antenatal-care-matters',
  title: 'Why Early Antenatal Care Matters During Pregnancy',
  category: 'maternal-health',
  alsoIn: ['family-health'],
  excerpt:
    'Starting antenatal care in the first 12 weeks gives you and your baby the best chance to spot problems early. Here is what antenatal visits involve and why every contact counts.',
  keywords: ['antenatal', 'pregnancy', 'booking', 'ANC', 'clinic', 'pre-eclampsia', 'malaria in pregnancy', 'ultrasound'],
  featuredImage: { src: '/images/health/pregnancy-ultrasound-images.jpg', width: 1400, height: 934, position: '50% 30%' },
  altText: 'Representative image: a smiling pregnant woman holding a strip of ultrasound scan images',
  status: 'pending_review',
  featured: true,
  publicationDate: null,
  lastUpdated: '2026-11-09',
  intro: [
    'Antenatal care is the regular health care a woman receives from trained health workers while she is pregnant. Many women wait until late in pregnancy, or until something feels wrong, before booking their first visit. Health authorities advise the opposite: start early and keep every appointment.',
    'This article explains what antenatal care is, why the timing of your first visit matters, and what you can expect from your appointments.',
  ],
  sections: [
    {
      heading: 'Why antenatal care matters',
      blocks: [
        'The World Health Organization (WHO) estimates that around 260 000 women died during or after pregnancy and childbirth in 2023, and that sub-Saharan Africa accounted for about 70% of these deaths. WHO also states that most maternal deaths are preventable, because the care needed to prevent or manage complications is well known.',
        'Antenatal care is one of the main ways those complications are found early. Several serious conditions, such as high blood pressure in pregnancy, often cause no symptoms at first and are only picked up through routine checks.',
      ],
    },
    {
      heading: 'When should your first visit be?',
      blocks: [
        'WHO recommends that a pregnant woman has her first antenatal contact within the first 12 weeks of pregnancy, and at least eight contacts in total. After the first visit, contacts are recommended at around 20, 26, 30, 34, 36, 38 and 40 weeks.',
        'According to WHO, moving from four to at least eight contacts can reduce deaths around the time of birth by up to 8 per 1000 births, because more contacts give more opportunities to find and manage problems.',
        {
          callout: {
            tone: 'note',
            title: 'If you are already past 12 weeks',
            text: 'It is never too late to start. Book your first antenatal visit as soon as you can, wherever you are in your pregnancy.',
          },
        },
      ],
    },
    {
      heading: 'What happens during antenatal visits',
      blocks: [
        'WHO describes antenatal care as more than a series of check-ups. Depending on your stage of pregnancy and your health, your care may include:',
        {
          list: [
            'Checking your blood pressure, weight and general health, and asking about how you feel.',
            'Blood and urine tests, for example to check for anaemia and infections.',
            'Advice on diet, nutrition, physical activity, and avoiding tobacco, alcohol and other substances.',
            'Iron and folic acid supplements, as prescribed by your health worker.',
            'Tetanus vaccination where needed.',
            'Measures to prevent malaria and HIV.',
            'At least one ultrasound scan before 24 weeks, to check the pregnancy and estimate its age.',
            'Advice on common discomforts such as nausea, back pain and constipation.',
            'Counselling on family planning after birth, and support for women experiencing violence at home.',
          ],
        },
      ],
    },
    {
      heading: 'Protection against malaria in pregnancy',
      blocks: [
        'Pregnant women are among the groups at higher risk of severe malaria. WHO lists sleeping under insecticide-treated mosquito nets and preventive malaria treatment during pregnancy (known as IPTp) among the key ways to protect pregnant women. Your antenatal team will advise whether preventive treatment is right for you and when it should be given.',
        'Do not take medicines for malaria or any other illness during pregnancy without advice from a qualified health worker.',
      ],
    },
    {
      heading: 'Conditions that routine checks can find early',
      blocks: [
        'Pre-eclampsia is a pregnancy-related condition that causes high blood pressure. The NHS explains that it most often develops from around 20 weeks of pregnancy and that early signs, such as raised blood pressure and protein in the urine, are usually only found at routine antenatal appointments. Regular visits allow this and other conditions, such as anaemia, gestational diabetes and infections, to be detected and managed.',
      ],
    },
    {
      heading: 'When to seek help urgently',
      blocks: [
        {
          callout: {
            tone: 'urgent',
            title: 'Do not wait for your next appointment',
            text: 'Go to a hospital immediately if you have any of these during pregnancy: vaginal bleeding or leaking fluid; a severe headache that does not go away; blurred vision or flashing lights; sudden swelling of the face, hands or feet; severe pain in your belly or under your ribs; fever; difficulty breathing; or your baby moving less than usual or stopping moving.',
          },
        },
      ],
    },
    {
      heading: 'Making the most of your visits',
      blocks: [
        {
          list: [
            'Book your first visit as soon as you think you are pregnant.',
            'Bring any previous medical records, scan results and a list of the medicines you take.',
            'Write down your questions before each visit so you do not forget them.',
            'Keep your antenatal card or records safe and bring them every time.',
            'Tell your health worker about any previous pregnancies, including complications.',
          ],
        },
      ],
    },
  ],
  keyTakeaways: [
    'WHO recommends your first antenatal contact within the first 12 weeks, and at least eight contacts during pregnancy.',
    'Many serious pregnancy complications cause no early symptoms and are found through routine checks.',
    'Antenatal care includes tests, supplements, vaccination, malaria prevention and advice for a healthy pregnancy.',
    'Danger signs such as bleeding, severe headache or reduced baby movements need urgent care, not a wait for the next visit.',
  ],
  sources: [sources.whoAntenatal, sources.whoMaternalMortality, sources.whoMalaria, sources.nhsPreEclampsia, sources.cdcMaternalWarningSigns],
}
