import { Baby, FlaskConical, Syringe } from 'lucide-react'

export const specialties = [
  {
    id: 'obstetrics-gynaecology',
    title: 'Obstetrics & Gynaecology',
    subtitle: "Women's and Maternal Health",
    description:
      'Antenatal, obstetric and gynaecological care, together with family planning services.',
    tag: 'Maternal Care',
    highlight: { icon: Baby, label: 'Fertility and assisted reproduction' },
    image: {
      src: '/images/specialists/obstetrics-gynaecology.jpg',
      alt: 'Representative image: two pairs of hands resting on a pregnant belly',
      position: '50% 45%',
    },
  },
  {
    id: 'paediatrics',
    title: 'Paediatrics',
    subtitle: 'Child Health',
    description:
      'Medical care for babies and children, from newborn care to routine childhood immunization.',
    tag: 'Child Care',
    highlight: { icon: Syringe, label: 'Immunization services' },
    image: {
      src: '/images/specialists/paediatrics.jpg',
      alt: 'Representative image: a nurse caring for a young child on a hospital ward',
      position: '30% 50%',
    },
  },
  {
    id: 'general-surgery',
    title: 'General Surgery',
    subtitle: 'Surgical Care',
    description:
      'Consultation, surgical assessment and operative care for general surgical conditions.',
    tag: 'Surgical Services',
    highlight: { icon: FlaskConical, label: 'Supported by our onsite laboratory' },
    image: {
      src: '/images/specialists/general-surgery.jpg',
      alt: 'Representative image: a surgeon in scrubs standing in an operating theatre',
      position: '50% 22%',
    },
  },
]
