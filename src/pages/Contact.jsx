import { Building2, CircleHelp, Stethoscope } from 'lucide-react'
import RelatedLinks from '../components/about/RelatedLinks.jsx'
import HospitalLocation from '../components/location/HospitalLocation.jsx'
import PageHero from '../components/PageHero.jsx'
import { hospital } from '../data/site.js'

const moreLinks = [
  {
    title: 'Frequently Asked Questions',
    description: 'Appointments, opening hours, registration, insurance and more.',
    to: '/#faq',
    icon: CircleHelp,
  },
  {
    title: 'Medical Services',
    description: 'Explore our family, maternal, children’s and surgical services.',
    to: '/services',
    icon: Stethoscope,
  },
  {
    title: 'About Victory',
    description: 'Who we are and how we have cared for families since 1991.',
    to: '/about',
    icon: Building2,
  },
]

export default function Contact() {
  return (
    <>
      <title>Contact Us &amp; Directions | Victory Specialist Hospital</title>
      <meta
        name="description"
        content={`Contact Victory Specialist Hospital on ${hospital.phone.display}. Find our address in Oke-Sopin, Ijebu Igbo, Ogun State and get directions. Open 24 hours daily.`}
      />

      <PageHero
        title="Contact Us"
        intro="We are open 24 hours a day, every day. Call us or visit the hospital; no appointment is needed for general consultations."
        image={{
          src: '/images/hospital/victory-specialist-hospital-building.jpg',
          width: 986,
          height: 1080,
          position: '50% 45%',
          alt: 'The Victory Specialist Hospital building',
        }}
      />

      <HospitalLocation />

      <RelatedLinks heading="More information" items={moreLinks} />
    </>
  )
}
