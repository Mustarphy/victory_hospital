import { useRef, useState } from 'react'
import QuickActions from '../components/QuickActions.jsx'
import ServiceSearch from '../components/services/ServiceSearch.jsx'
import ServicesGrid from '../components/services/ServicesGrid.jsx'
import ServicesHero from '../components/services/ServicesHero.jsx'

export default function Services() {
  const [query, setQuery] = useState('')
  const resultsHeadingRef = useRef(null)

  const handleSearch = (value) => {
    setQuery(value)
    requestAnimationFrame(() => resultsHeadingRef.current?.focus())
  }

  return (
    <>
      <title>Medical Services | Victory Specialist Hospital</title>
      <meta
        name="description"
        content="Explore the medical services at Victory Specialist Hospital, including family medicine, paediatrics, antenatal and maternal care, obstetrics, gynaecology, fertility care and general surgery."
      />
      <ServicesHero />
      <ServiceSearch onSearch={handleSearch} />
      <ServicesGrid query={query} onClear={() => setQuery('')} headingRef={resultsHeadingRef} />
      <QuickActions />
    </>
  )
}
