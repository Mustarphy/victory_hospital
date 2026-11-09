import {
  Activity,
  Baby,
  CalendarHeart,
  FlaskConical,
  HeartHandshake,
  HeartPulse,
  Pill,
  Scissors,
  ShieldPlus,
  Smile,
  Sparkles,
  Stethoscope,
  UsersRound,
} from 'lucide-react'

export const services = [
  {
    id: 'antenatal-care',
    name: 'Antenatal Care',
    description: 'Regular check-ups and support for mothers throughout pregnancy.',
    icon: CalendarHeart,
  },
  {
    id: 'family-medicine',
    name: 'Family Medicine',
    description: 'Everyday healthcare for adults and children, from check-ups to common illnesses.',
    icon: UsersRound,
  },
  {
    id: 'family-planning',
    name: 'Family Planning',
    description: 'Advice and services to help you plan if and when to have children.',
    icon: HeartHandshake,
  },
  {
    id: 'fertility',
    name: 'Fertility & Assisted Reproduction',
    description:
      'Care for couples having difficulty conceiving, including assisted reproductive techniques.',
    icon: Sparkles,
  },
  {
    id: 'general-surgery',
    name: 'General Surgery',
    description: 'Consultation, surgical assessment and operative care for general surgical conditions.',
    icon: Scissors,
  },
  {
    id: 'gynaecology',
    name: 'Gynaecology',
    description: "Care for conditions affecting women's reproductive health.",
    icon: HeartPulse,
  },
  {
    id: 'immunization',
    name: 'Immunization',
    description: 'Routine immunization, including vaccines for babies and children.',
    icon: ShieldPlus,
  },
  {
    id: 'laboratory',
    name: 'Laboratory',
    description: 'Onsite laboratory for the tests your care team requests.',
    icon: FlaskConical,
    support: true,
  },
  {
    id: 'maternal-newborn-care',
    name: 'Maternal & Newborn Care',
    description: 'Care for mothers and babies around birth and in the early weeks of life.',
    icon: Baby,
  },
  {
    id: 'ncd-management',
    name: 'Non-Communicable Disease Management',
    description: 'Ongoing care for long-term conditions such as high blood pressure and diabetes.',
    icon: Activity,
  },
  {
    id: 'obstetrics',
    name: 'Obstetrics',
    description: 'Care for mothers during pregnancy, labour and delivery.',
    icon: Stethoscope,
  },
  {
    id: 'paediatrics',
    name: 'Paediatrics',
    description: 'Medical care for babies, children and young people.',
    icon: Smile,
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    description: 'Onsite pharmacy, so you can collect prescribed medicines before you leave.',
    icon: Pill,
    support: true,
  },
]
