export const healthCategories = [
  { id: 'general-health', label: 'General Health' },
  { id: 'maternal-health', label: 'Maternal Health' },
  { id: 'child-health', label: 'Child Health' },
  { id: 'preventive-healthcare', label: 'Preventive Healthcare' },
  { id: 'nutrition-wellness', label: 'Nutrition & Wellness' },
  { id: 'common-conditions', label: 'Common Health Conditions' },
  { id: 'family-health', label: 'Family Health' },
]

export const categoryLabel = (id) => healthCategories.find((category) => category.id === id)?.label ?? id
