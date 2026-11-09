// Footer navigation. Every destination is an existing route or an anchor on an existing page.
export const footerQuickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Our Specialists', to: '/#specialists' },
  { label: 'Health & Wellness', to: '/health-resources' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Contact Us', to: '/contact' },
]

// Each service links to its card on the Services page (ids from src/data/services.js).
export const footerServices = [
  { label: 'Family Medicine', id: 'family-medicine' },
  { label: 'General Surgery', id: 'general-surgery' },
  { label: 'Paediatrics', id: 'paediatrics' },
  { label: 'Antenatal Care', id: 'antenatal-care' },
  { label: 'Maternal and Newborn Care', id: 'maternal-newborn-care' },
  { label: 'Obstetrics and Gynaecology', id: 'obstetrics' },
  { label: 'Immunization', id: 'immunization' },
  { label: 'Family Planning', id: 'family-planning' },
  { label: 'Fertility Services', id: 'fertility' },
  { label: 'Non-Communicable Disease Management', id: 'ncd-management' },
].map((service) => ({ ...service, to: `/services#service-${service.id}` }))
