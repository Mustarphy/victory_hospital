import { healthCategories } from '../../data/health/categories.js'

const options = [{ id: '', label: 'All topics' }, ...healthCategories]

export default function HealthCategoryFilter({ selected, counts, onSelect }) {
  return (
    <div className="relative -mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
      <ul aria-label="Filter articles by topic" className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
        {options.map(({ id, label }) => {
          const isActive = selected === id
          return (
            <li key={id || 'all'}>
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => onSelect(id)}
                className={`inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-semibold whitespace-nowrap transition active:scale-[0.98] ${
                  isActive
                    ? 'border-brand-900 bg-brand-900 text-white'
                    : 'border-line bg-white text-brand-900 hover:border-brand-500'
                }`}
              >
                {label}
                <span
                  className={`rounded-full px-1.5 text-xs ${isActive ? 'bg-white/20 text-white' : 'bg-brand-50 text-brand-700'}`}
                >
                  <span className="sr-only">(</span>
                  {counts[id] ?? 0}
                  <span className="sr-only"> articles)</span>
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
