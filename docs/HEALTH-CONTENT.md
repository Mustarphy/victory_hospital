# Health & Wellness content guide

The Health & Wellness centre (`/health-resources`) is a static content library. There is no CMS;
articles are JavaScript data files that the site renders through a shared article template.

## Where things live

| Path | Purpose |
|---|---|
| `src/data/health/articles/*.js` | One file per article (content, image, sources, status) |
| `src/data/health/sources.js` | Shared reference list: organisation, title, URL, published/updated date, date accessed |
| `src/data/health/categories.js` | The seven topic categories |
| `src/data/health/index.js` | Article list and order, publication workflow, search, related articles, reading time |
| `src/pages/HealthResources.jsx`, `src/pages/HealthArticle.jsx` | Listing page and article template |
| `src/components/health/` | Hero/search, featured article, filters, cards, article body, references |

## Publication status

| Status | Live site | `npm run dev` / preview build |
|---|---|---|
| `draft` | Hidden | Hidden |
| `pending_review` | Hidden (article URLs show "Article not found") | Shown with a "Pending clinical review" banner, reviewer notes and `noindex` |
| `published` | Listed and indexable | Listed |

Build a review copy with pending articles visible:

```bash
VITE_PREVIEW_PENDING_ARTICLES=true npm run build
```

Do not deploy a preview build as the public site.

## Publishing an article after clinical approval

1. A qualified clinician at Victory Specialist Hospital reviews the article, its sources and any
   `reviewNotes`, and requests changes if needed.
2. In the article file set `status: 'published'` and `publicationDate: 'YYYY-MM-DD'`.
3. Optionally set `reviewedBy` to the reviewer's name and role, exactly as approved by the
   hospital. It is shown on the article page. Never add a reviewer who has not reviewed it.
4. Remove resolved `reviewNotes`, update `lastUpdated`, run `npm run lint && npm run build`.

When an article is revised, update `lastUpdated` and re-check every source. Sources should be
specific pages from public-health or medical authorities (WHO, NCDC, NPHCDA, Federal Ministry of
Health, MedlinePlus, CDC, NHS), not homepages, blogs or commercial sites.

## Current articles (all `pending_review`, prepared 2026-11-09)

Written by the Health Education Editorial Team from the cited sources. None has been clinically
reviewed yet.

| Article | Category | Reviewer notes |
|---|---|---|
| Why Early Antenatal Care Matters During Pregnancy (featured) | Maternal Health | – |
| Why Regular Health Check-ups Matter, Even When You Feel Well | General Health | – |
| Warning Signs That Mean You Should Seek Medical Care Promptly | General Health | Emergency steps; Nigerian emergency number |
| Preparing for a Healthy Pregnancy | Maternal Health | – |
| After the Birth: Understanding Postnatal Care for Mothers | Maternal Health | Emotional health wording |
| Why Childhood Immunisation Is Important | Child Health | Schedule from a draft NPHCDA source |
| Essential Care for Newborn Babies in the First Weeks of Life | Child Health | Danger-sign list; cord care |
| High Blood Pressure: Why Regular Monitoring Matters | Common Health Conditions | – |
| Diabetes Awareness: Risk Factors, Prevention and Living Well | Common Health Conditions | Gestational diabetes risk; emergency and foot-care advice |
| Practical Ways to Reduce the Risk of Malaria, Cholera, Lassa Fever and Other Infections | Preventive Healthcare | ORS advice |
| Building Healthy Eating Habits for the Whole Family | Nutrition & Wellness | – |
| Water, Sleep and Movement: Three Everyday Foundations of Good Health | Nutrition & Wellness | – |

Reviewers should check every article in full, not only the noted items.
