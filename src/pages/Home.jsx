import GreatCareSection from '../components/GreatCareSection.jsx'
import Hero from '../components/Hero.jsx'
import PageMeta from '../components/PageMeta.jsx'
import SpecialistDoctors from '../components/SpecialistDoctors.jsx'
import FAQSection from '../components/faq/FAQSection.jsx'

export default function Home() {
  return (
    <>
      <PageMeta
        title="Victory Specialist Hospital | Family, Maternal & Specialist Healthcare"
        description="Victory Specialist Hospital is a licensed private secondary healthcare facility in Ijebu Igbo, Ogun State, providing family medicine, maternal and newborn care, paediatrics, obstetrics, gynaecology and general surgery. Open 24 hours daily."
        path="/"
      />
      <Hero />
      <GreatCareSection />
      <SpecialistDoctors />
      <FAQSection />
    </>
  )
}
