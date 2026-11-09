import { useLayoutEffect, useRef } from 'react'
import { motionAllowed, observeOnce } from '../../hooks/useInViewOnce.js'

const easeOutQuart = (t) => 1 - (1 - t) ** 4

/**
 * Counts from `from` to `value` once, when the number first scrolls into view.
 * - The digits are written straight to the DOM inside requestAnimationFrame (no React re-renders).
 * - Width is reserved for the final value with tabular figures, so nothing shifts while counting.
 * - The text is a single number (no duplicate copy), so copying or reading it gives the real value;
 *   the count finishes within ~2 seconds and is not announced as a live region.
 * - With reduced motion (or no IntersectionObserver) the final value is shown immediately.
 */
export default function AnimatedCounter({ value, from = 0, duration = 1800, className = '' }) {
  const digitsRef = useRef(null)
  const final = String(value)

  useLayoutEffect(() => {
    const element = digitsRef.current
    if (!element) return undefined
    if (!motionAllowed()) {
      element.textContent = final
      return undefined
    }

    element.textContent = String(from)
    let frame = 0
    const stopObserving = observeOnce(element, () => {
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration)
        element.textContent = String(Math.round(from + (value - from) * easeOutQuart(progress)))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    })

    return () => {
      stopObserving()
      cancelAnimationFrame(frame)
      element.textContent = final
    }
  }, [value, from, duration, final])

  return (
    <span
      ref={digitsRef}
      data-counter={final}
      className={`inline-block text-center tabular-nums ${className}`}
      style={{ minWidth: `${final.length}ch` }}
    />
  )
}
