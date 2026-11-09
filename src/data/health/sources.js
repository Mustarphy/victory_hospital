/*
 * Shared source references for health articles.
 * `published` is the publication or last-updated date shown on the source page when it was read.
 * `accessed` is the date the page was consulted for this content.
 */
const accessed = '2026-11-09'

const source = (organisation, title, url, published) => ({ organisation, title, url, published, accessed })

export const sources = {
  medlineCheckup: source(
    'MedlinePlus, U.S. National Library of Medicine',
    'Health Checkup',
    'https://medlineplus.gov/healthcheckup.html',
    '2024-02-05',
  ),
  medlineEmergencies: source(
    'MedlinePlus, U.S. National Library of Medicine',
    'Recognizing medical emergencies',
    'https://medlineplus.gov/ency/article/001927.htm',
    '2025-01-08',
  ),
  nhsStroke: source('NHS', 'Stroke: Symptoms', 'https://www.nhs.uk/conditions/stroke/symptoms/', '2024-09-12'),
  nhsPreEclampsia: source('NHS', 'Pre-eclampsia', 'https://www.nhs.uk/conditions/pre-eclampsia/', '2026-03-23'),
  nhsPlanningPregnancy: source(
    'NHS',
    'Planning your pregnancy',
    'https://www.nhs.uk/pregnancy/trying-for-a-baby/planning-your-pregnancy/',
    '2026-06-02',
  ),
  nhsWater: source(
    'NHS',
    'Water, drinks and your health',
    'https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/water-drinks-nutrition/',
    '2023-05-17',
  ),
  cdcMaternalWarningSigns: source(
    'Centers for Disease Control and Prevention (CDC)',
    'Urgent Maternal Warning Signs (Hear Her)',
    'https://www.cdc.gov/hearher/maternal-warning-signs/index.html',
    '2024-05-15',
  ),
  cdcFolicAcid: source(
    'Centers for Disease Control and Prevention (CDC)',
    'About Folic Acid',
    'https://www.cdc.gov/folic-acid/about/index.html',
    '2026-09-18',
  ),
  cdcHighBloodPressure: source(
    'Centers for Disease Control and Prevention (CDC)',
    'About High Blood Pressure',
    'https://www.cdc.gov/high-blood-pressure/about/index.html',
    '2026-10-13',
  ),
  cdcCleanHands: source(
    'Centers for Disease Control and Prevention (CDC)',
    'About Handwashing',
    'https://www.cdc.gov/clean-hands/about/index.html',
    '2024-02-16',
  ),
  cdcSleep: source(
    'Centers for Disease Control and Prevention (CDC)',
    'About Sleep',
    'https://www.cdc.gov/sleep/about/index.html',
    '2024-05-15',
  ),
  cdcPhysicalActivity: source(
    'Centers for Disease Control and Prevention (CDC)',
    'Physical Activity Guidelines',
    'https://www.cdc.gov/physical-activity-basics/guidelines/index.html',
    '2025-12-04',
  ),
  whoAntenatal: source(
    'World Health Organization (WHO)',
    'Pregnant women must be able to access the right care at the right time, says WHO',
    'https://www.who.int/news/item/07-11-2016-pregnant-women-must-be-able-to-access-the-right-care-at-the-right-time-says-who',
    '2016-11-07',
  ),
  whoPostnatal: source(
    'World Health Organization (WHO)',
    'WHO urges quality care for women and newborns in critical first weeks after childbirth',
    'https://www.who.int/news/item/30-03-2022-who-urges-quality-care-for-women-and-newborns-in-critical-first-weeks-after-childbirth',
    '2022-03-30',
  ),
  whoMaternalMortality: source(
    'World Health Organization (WHO)',
    'Maternal mortality (fact sheet)',
    'https://www.who.int/news-room/fact-sheets/detail/maternal-mortality',
    '2025-04-07',
  ),
  whoNewbornMortality: source(
    'World Health Organization (WHO)',
    'Newborn mortality (fact sheet)',
    'https://www.who.int/news-room/fact-sheets/detail/newborn-mortality',
    '2024-03-14',
  ),
  whoInfantFeeding: source(
    'World Health Organization (WHO)',
    'Infant and young child feeding (fact sheet)',
    'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    '2026-08-04',
  ),
  whoVaccination: source(
    'World Health Organization (WHO)',
    'Vaccines and immunization: What is vaccination?',
    'https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-what-is-vaccination',
    '2025-10-22',
  ),
  whoVaccineSafety: source(
    'World Health Organization (WHO)',
    'Vaccines and immunization: Vaccine safety',
    'https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-vaccine-safety',
    '2025-09-23',
  ),
  nphcdaSchedule: source(
    'National Primary Health Care Development Agency (NPHCDA)',
    'Health Interventions and Recommendations, NPHCDA Immunization FHIR Implementation Guide (draft build, based on Nigeria’s National Immunization Schedule)',
    'https://build.fhir.org/ig/Nigeria-FHIR-Community/NPHCDA-ImmunizationIG/health-interventions-recommendations.html',
    '2026-10-07',
  ),
  whoHypertension: source(
    'World Health Organization (WHO)',
    'Hypertension (fact sheet)',
    'https://www.who.int/news-room/fact-sheets/detail/hypertension',
    '2025-09-25',
  ),
  whoDiabetes: source(
    'World Health Organization (WHO)',
    'Diabetes (fact sheet)',
    'https://www.who.int/news-room/fact-sheets/detail/diabetes',
    '2026-11-03',
  ),
  whoHealthyDiet: source(
    'World Health Organization (WHO)',
    'Healthy diet (fact sheet)',
    'https://www.who.int/news-room/fact-sheets/detail/healthy-diet',
    '2026-01-26',
  ),
  whoPhysicalActivity: source(
    'World Health Organization (WHO)',
    'Physical activity (fact sheet)',
    'https://www.who.int/news-room/fact-sheets/detail/physical-activity',
    '2026-11-04',
  ),
  whoMalaria: source(
    'World Health Organization (WHO)',
    'Malaria (fact sheet)',
    'https://www.who.int/news-room/fact-sheets/detail/malaria',
    '2025-12-04',
  ),
  whoLassa: source(
    'World Health Organization (WHO)',
    'Lassa fever (fact sheet)',
    'https://www.who.int/news-room/fact-sheets/detail/lassa-fever',
    '2024-12-05',
  ),
  whoCholera: source(
    'World Health Organization (WHO)',
    'Cholera (fact sheet)',
    'https://www.who.int/news-room/fact-sheets/detail/cholera',
    '2026-09-29',
  ),
  ncdcCholera: source(
    'Nigeria Centre for Disease Control and Prevention (NCDC)',
    'STOP CHOLERA: Public Health Advisory',
    'https://ncdc.gov.ng/news/513/stop-cholera:-public-health-advisory',
    '2024-06-12',
  ),
  ncdcLassa: source(
    'Nigeria Centre for Disease Control and Prevention (NCDC)',
    'NCDC Calls for Strengthened State-Level Action as Lassa Fever Cases Rise During Peak Season',
    'https://ncdc.gov.ng/news/534/2-march-2026-%7C-ncdc-calls-for-strengthened-state-level-action-as-lassa-fever-cases-rise-during-peak-season',
    '2026-03-02',
  ),
}
