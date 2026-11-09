import { sources } from '../sources.js'

export default {
  id: 'warning-signs',
  slug: 'signs-you-should-seek-medical-attention',
  title: 'Warning Signs That Mean You Should Seek Medical Care Promptly',
  category: 'general-health',
  alsoIn: ['family-health'],
  excerpt:
    'Knowing which symptoms need urgent attention can save a life. Learn the warning signs in adults, children, pregnant women and people who may be having a stroke.',
  keywords: ['emergency', 'warning signs', 'stroke', 'FAST', 'chest pain', 'urgent', 'danger signs', 'self-medication'],
  featuredImage: { src: '/images/about/care-team.jpg', width: 1400, height: 2100, position: '50% 28%' },
  altText: 'Representative image: two doctors in white coats discussing a patient’s care',
  status: 'pending_review',
  reviewNotes: [
    'The "What to do in an emergency" first-aid steps are general guidance. Please confirm, and consider adding a Nigerian emergency number if the hospital wishes to recommend one.',
  ],
  featured: false,
  publicationDate: null,
  lastUpdated: '2026-11-09',
  intro: [
    'Most everyday illnesses get better with rest and time. Some symptoms, however, are signs that something serious may be happening and that you need to be assessed by a health professional straight away.',
    'Delaying care, or treating serious symptoms at home with medicines bought without advice, can allow a treatable problem to become life-threatening. This guide lists warning signs that should never be ignored.',
  ],
  sections: [
    {
      heading: 'Warning signs in adults',
      blocks: [
        'MedlinePlus, from the U.S. National Library of Medicine, lists these among the warning signs of a medical emergency in adults:',
        {
          list: [
            'Difficulty breathing or shortness of breath.',
            'Chest pain or discomfort lasting two minutes or more.',
            'Bleeding that will not stop.',
            'Fainting, loss of consciousness, or sudden confusion or unusual behaviour.',
            'Sudden dizziness, weakness or change in vision.',
            'Sudden, severe pain anywhere in the body, including severe abdominal pain.',
            'Coughing up or vomiting blood.',
            'Severe or persistent vomiting or diarrhoea.',
            'Swelling of the face, eyes or tongue.',
            'A head or spine injury, a serious burn or other major injury.',
            'Swallowing a poisonous substance.',
            'Thoughts of harming yourself or others.',
          ],
        },
      ],
    },
    {
      heading: 'Recognising a stroke: think FAST',
      blocks: [
        'A stroke is a medical emergency, and fast treatment can reduce the damage it causes. The NHS uses the word FAST to help people remember the main signs:',
        {
          list: [
            'Face: the face may have dropped on one side, or the person may not be able to smile.',
            'Arms: the person may not be able to lift both arms and keep them there.',
            'Speech: their speech may be slurred or confused, or they may not be able to talk.',
            'Time: get emergency help immediately if you notice any of these signs.',
          ],
        },
        'Other possible signs include sudden numbness or weakness on one side of the body, sudden loss of vision, dizziness, and a sudden, severe headache. Seek help even if the symptoms go away.',
      ],
    },
    {
      heading: 'Warning signs in children',
      blocks: [
        'Children can become seriously ill quickly. MedlinePlus advises seeking emergency care if a child has:',
        {
          list: [
            'Trouble breathing or unusual breathing.',
            'Bluish or grey skin or lips.',
            'A seizure (fit), or unconsciousness.',
            'Fever together with a stiff neck, confusion or a change in behaviour.',
            'Unusual sleepiness, or reduced alertness and response.',
            'Difficulty feeding or eating.',
            'Severe headache or vomiting, especially after a head injury.',
            'Bleeding that cannot be stopped, or being unable to stand or walk.',
          ],
        },
        'The World Health Organization (WHO) notes that children under five are among the groups at highest risk of severe malaria. A child with fever should be assessed and tested promptly.',
      ],
    },
    {
      heading: 'Warning signs during and after pregnancy',
      blocks: [
        'The U.S. Centers for Disease Control and Prevention (CDC) lists urgent warning signs that apply during pregnancy and in the year after birth. They include a headache that will not go away or gets worse, changes in vision, dizziness or fainting, fever, extreme swelling of the hands or face, trouble breathing, chest pain or a fast heartbeat, severe belly pain, heavy bleeding or discharge, the baby moving less during pregnancy, and thoughts of harming yourself or your baby.',
      ],
    },
    {
      heading: 'What to do in an emergency',
      blocks: [
        {
          list: [
            'Go to the nearest hospital emergency unit immediately, or call for help to get there.',
            'Stay calm and stay with the person who is unwell.',
            'Do not give food, drink or medicines to someone who is drowsy, confused or unconscious.',
            'If you know how and it is needed, start first aid until help arrives.',
            'Bring any medicines the person takes and any recent medical records, if this will not cause delay.',
          ],
        },
        'It is helpful to plan ahead: know how you would get to the nearest hospital at any time of day or night, and keep important phone numbers saved in your phone.',
        {
          callout: {
            tone: 'note',
            title: 'Avoid self-medication',
            text: 'Treating serious symptoms with medicines bought without a proper assessment can hide warning signs and delay the right treatment. Nigerian public health authorities repeatedly advise people to visit a health facility for diagnosis rather than self-medicate.',
          },
        },
      ],
    },
  ],
  keyTakeaways: [
    'Difficulty breathing, chest pain, heavy bleeding, sudden confusion or collapse always need urgent care.',
    'Use FAST (Face, Arms, Speech, Time) to recognise a possible stroke, and act immediately.',
    'Children can deteriorate quickly; fever with drowsiness, a stiff neck, fits or breathing difficulty needs urgent assessment.',
    'Pregnant women and new mothers should know the maternal warning signs and act on them.',
  ],
  sources: [
    sources.medlineEmergencies,
    sources.nhsStroke,
    sources.cdcMaternalWarningSigns,
    sources.whoMalaria,
    sources.ncdcCholera,
    sources.ncdcLassa,
  ],
}
