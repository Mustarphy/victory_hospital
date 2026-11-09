import {
  BadgeCheck,
  Building2,
  Clock,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  UserRound,
  UsersRound,
} from 'lucide-react'

export const aboutPages = [
  { label: 'Overview', to: '/about' },
  { label: 'Mission, Vision & Values', to: '/about/mission-vision-values' },
  { label: 'Leadership', to: '/about/leadership' },
]

export const relatedPages = [
  {
    title: 'About Victory',
    description: 'Who we are, what we do and how we have cared for families since 1991.',
    to: '/about',
    icon: Building2,
  },
  {
    title: 'Mission, Vision & Values',
    description: 'The purpose, aspirations and principles that guide our care.',
    to: '/about/mission-vision-values',
    icon: Compass,
  },
  {
    title: 'Our Leadership',
    description: 'Meet the Chairman and Chief Medical Officer of Victory Specialist Hospital.',
    to: '/about/leadership',
    icon: UserRound,
  },
  {
    title: 'Medical Services',
    description: 'Explore our family, maternal, children’s and surgical services.',
    to: '/services',
    icon: Stethoscope,
  },
]

export const relatedPagesExcept = (path) => relatedPages.filter(({ to }) => to !== path)

// Approved draft copy. Keep wording unchanged unless hospital management requests edits.
// The only change: the Excellence value's "35" is calculated so it never goes out of date.
export const vision =
  'To be the premier and most trusted provider of comprehensive secondary healthcare in Ijebu Igbo and the surrounding communities, recognized for our clinical excellence, compassionate care, and unwavering commitment to family wellness.'

export const mission =
  'Our mission is to provide accessible, high-quality, and continuous 24/7 medical services to individuals and families in the Ijebu North region. Through over three decades of clinical experience, a dedicated team of professionals, and a patient-first approach, we strive to promote healing, restore health, and enhance the overall quality of life for every patient we serve.'

export const coreValues = [
  {
    title: 'Compassion',
    icon: HeartHandshake,
    text: 'We treat every patient with the highest level of empathy, kindness, and respect, understanding that healing begins with a caring heart.',
  },
  {
    title: 'Integrity',
    icon: ShieldCheck,
    text: 'We uphold the strictest ethical standards, ensuring transparency, confidentiality, and honesty in all our medical and administrative practices.',
  },
  {
    title: 'Excellence',
    icon: BadgeCheck,
    // {years} is replaced with the live count of completed years of service (see yearsOfService in site.js).
    text: 'With over {years} years of medical service, we are committed to continuous improvement, maintaining high clinical standards, and delivering accurate diagnostics and treatments.',
  },
  {
    title: 'Reliability',
    icon: Clock,
    text: 'Operating 24 hours a day, 7 days a week, we are a dependable pillar of health that the Ijebu Igbo community can rely on at any hour of the day or night.',
  },
  {
    title: 'Community-Centric',
    icon: UsersRound,
    text: 'We view our patients not just as cases, but as our neighbors. Our healthcare strategies are built to meet the specific needs of our local community.',
  },
]

// Supplied draft profile and message: confirm details with hospital management before launch.
export const chairman = {
  name: 'Dr. Akindele Raheem A.',
  initials: 'AR',
  role: 'Chairman & Chief Medical Officer',
  // Set to an image path such as '/images/leadership/dr-akindele.jpg' once a genuine photograph is supplied.
  photo: null,
  bio: [
    "Dr. Akindele Raheem A. is the Chairman and Chief Medical Officer of Victory Specialist Hospital. Since steering the institution's clinical vision, he has been central to establishing the hospital as a trusted pillar of healthcare in the Ijebu North region.",
    "With decades of clinical experience in family medicine, maternal care, and general surgery, Dr. Akindele directs the hospital's day-to-day operations and secondary care delivery.",
    'Under his leadership, the facility has grown into a licensed 14-bed community hospital operating 24 hours a day, dedicated to delivering accessible, safe, and ethical medical care to the families of Ijebu Igbo.',
  ],
  message: {
    heading: 'A Message from Our Chief Medical Officer',
    paragraphs: [
      'For over three decades, Victory Specialist Hospital has stood as a beacon of health, safety, and comfort for the people of Ijebu Igbo. As Chief Medical Officer, my priority has always been to ensure that every patient who walks through our doors receives precise diagnostics, empathetic care, and reliable medical solutions—no matter the time of day or night.',
      "Our healthcare environment is built entirely on trust, experience, and community service. Whether we are welcoming a new life into the world, managing chronic conditions, or addressing late-night emergencies, our medical team remains unyieldingly committed to your family's health and wellness. Thank you for making us your lifetime partners in clinical excellence.",
    ],
    attribution: 'Chairman / Chief Medical Officer',
  },
}
