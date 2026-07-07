'use client'

import { useCallback, useRef } from 'react'

/**
 * Parallax sutil por mouse: expõe --px / --py (-0.5 a 0.5) como CSS vars
 * no container. Camadas internas usam calc(var(--px) * Npx) para profundidade.
 */
export function useParallax() {
  const ref = useRef<HTMLDivElement | null>(null)
  const raf = useRef<number | null>(null)

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const { clientX, clientY } = e
    if (raf.current) cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect()
      const x = (clientX - r.left) / r.width - 0.5
      const y = (clientY - r.top) / r.height - 0.5
      el.style.setProperty('--px', x.toFixed(3))
      el.style.setProperty('--py', y.toFixed(3))
    })
  }, [])

  return { ref, onMouseMove }
}
