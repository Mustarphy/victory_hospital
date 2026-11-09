import { useEffect, useState } from 'react'

/*
 * One shared IntersectionObserver for every scroll-triggered animation on the page.
 * Each element is observed until it first becomes visible, then unobserved, so animations
 * run once and never restart when the visitor scrolls back up.
 */
const callbacks = new WeakMap()
let observer = null

const getObserver = () => {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const callback = callbacks.get(entry.target)
        callbacks.delete(entry.target)
        observer.unobserve(entry.target)
        callback?.()
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  )
  return observer
}

/** Calls `callback` once, the first time `element` scrolls into view. Returns a cleanup function. */
export function observeOnce(element, callback) {
  if (typeof IntersectionObserver === 'undefined') {
    callback()
    return () => {}
  }
  callbacks.set(element, callback)
  getObserver().observe(element)
  return () => {
    callbacks.delete(element)
    observer?.unobserve(element)
  }
}

/** True once the referenced element has entered the viewport. */
export function useInViewOnce(ref) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined
    return observeOnce(element, () => setInView(true))
  }, [ref])

  return inView
}

/** Whether non-essential motion should run (motion-ready class set at startup, no reduced-motion preference). */
export const motionAllowed = () =>
  typeof window !== 'undefined' &&
  document.documentElement.classList.contains('motion-ready') &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Consistent stagger for card grids: short steps, capped so later cards never wait long. */
export const stagger = (index, step = 80, maxSteps = 4) => Math.min(index, maxSteps) * step
