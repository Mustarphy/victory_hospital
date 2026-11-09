import { useRef } from 'react'
import { useInViewOnce } from '../../hooks/useInViewOnce.js'

/**
 * Reveals its content with a subtle entrance when it first scrolls into view.
 * Variants (styles in src/index.css): 'up' (default), 'fade', 'scale', 'left', 'right'.
 * 'left'/'right' slide sideways only on wide screens and fall back to 'up' on small ones.
 * Content is fully visible if JavaScript, IntersectionObserver or motion is unavailable.
 */
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className = '', style, children, ...rest }) {
  const ref = useRef(null)
  const revealed = useInViewOnce(ref)

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      className={`${className}${revealed ? ' is-revealed' : ''}`}
      style={delay ? { ...style, '--reveal-delay': `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
