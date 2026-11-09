import { UserRound } from 'lucide-react'

export default function LeaderPortrait({ leader, compact = false }) {
  if (leader.photo) {
    return (
      <img
        src={leader.photo}
        alt={compact ? '' : `Portrait of ${leader.name}`}
        loading="lazy"
        decoding="async"
        className="size-full object-cover object-top"
      />
    )
  }

  if (compact) {
    return (
      <span
        aria-hidden="true"
        className="flex size-full items-center justify-center bg-brand-900 font-display text-lg font-semibold text-white"
      >
        {leader.initials}
      </span>
    )
  }

  return (
    <div
      role="img"
      aria-label={`Photograph of ${leader.name} to be added`}
      className="relative flex size-full flex-col items-center justify-center overflow-hidden bg-brand-900 py-12 text-white"
    >
      <span
        aria-hidden="true"
        className="absolute -right-16 -bottom-16 size-64 rounded-full border-[2.5rem] border-white/5"
      />
      <span
        aria-hidden="true"
        className="absolute -top-10 -left-10 size-40 rounded-full border-[1.75rem] border-brand-500/15"
      />
      <span className="relative flex size-28 items-center justify-center rounded-full border border-white/25 bg-white/10 font-display text-4xl font-semibold tracking-wide sm:size-32">
        {leader.initials}
      </span>
      <span className="relative mt-4 flex items-center gap-1.5 text-sm text-white/75">
        <UserRound className="size-4" aria-hidden="true" />
        Photograph to follow
      </span>
    </div>
  )
}
