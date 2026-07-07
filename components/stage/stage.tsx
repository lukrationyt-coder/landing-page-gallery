'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { VITRINES } from './mockups'

const EMAIL = 'ola@zcompany.co'
const WHATS = '5511999990000'

export function Stage() {
  const [active, setActive] = useState(0)
  const stageRef = useRef<HTMLDivElement | null>(null)
  const deviceRef = useRef<HTMLDivElement | null>(null)
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const target = useRef({ rx: 0, ry: 0 })
  const current = useRef({ rx: 0, ry: 0 })
  const raf = useRef<number | null>(null)

  // 3D tilt following the pointer
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const onMove = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5
      const ny = e.clientY / window.innerHeight - 0.5
      target.current = { ry: nx * 16, rx: -ny * 12 }
    }
    const onLeave = () => {
      target.current = { rx: 0, ry: 0 }
    }

    const tick = () => {
      current.current.rx += (target.current.rx - current.current.rx) * 0.08
      current.current.ry += (target.current.ry - current.current.ry) * 0.08
      if (deviceRef.current) {
        deviceRef.current.style.transform = `rotateX(${current.current.rx.toFixed(2)}deg) rotateY(${current.current.ry.toFixed(2)}deg)`
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  // Track which vitrine is centered inside the device
  const onScroll = useCallback(() => {
    const vp = viewportRef.current
    if (!vp) return
    const idx = Math.round(vp.scrollTop / vp.clientHeight)
    setActive((prev) => (prev === idx ? prev : Math.min(idx, VITRINES.length - 1)))
  }, [])

  const goTo = useCallback((i: number) => {
    const vp = viewportRef.current
    if (!vp) return
    vp.scrollTo({ top: i * vp.clientHeight, behavior: 'smooth' })
  }, [])

  const vit = VITRINES[active]

  return (
    <main
      ref={stageRef}
      className="relative h-dvh w-screen overflow-hidden"
      style={{ background: 'var(--color-background)' }}
    >
      {/* Ambient crossfade layers */}
      {VITRINES.map((v, i) => (
        <div
          key={v.id}
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-700 ease-out"
          style={{
            opacity: i === active ? 1 : 0,
            background: `radial-gradient(80% 70% at 50% 42%, ${v.ambient[0]}2e 0%, ${v.ambient[1]}00 55%), radial-gradient(60% 60% at 50% 120%, ${v.ambient[0]}22 0%, transparent 60%)`,
          }}
        />
      ))}
      {/* subtle grain/vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(120% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)' }}
      />

      {/* Top chrome */}
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-[clamp(20px,4vw,56px)] py-[clamp(16px,2.4vw,30px)]">
        <span className="font-serif text-[clamp(16px,1.5vw,20px)] font-semibold tracking-tight">zcompany</span>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-muted)]">
          <span className="zc-live h-1.5 w-1.5 rounded-full" style={{ background: vit.accent }} />
          <span>aceitando projetos</span>
        </div>
      </header>

      {/* Headline */}
      <div className="absolute inset-x-0 top-[clamp(72px,10vh,120px)] z-10 flex flex-col items-center px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-[color:var(--color-muted)]">
          Design que parece caro — porque é
        </p>
        <h1 className="mt-3 max-w-[20ch] text-balance font-serif text-[clamp(22px,3.6vw,44px)] font-semibold leading-[1.04]">
          A sua próxima página, viva na sua frente.
        </h1>
      </div>

      {/* Center device */}
      <div
        className="absolute inset-0 z-10 flex items-center justify-center pt-[16vh] pb-[6vh]"
        style={{ perspective: '1600px' }}
      >
        <div
          ref={deviceRef}
          className="relative w-[min(80vw,780px)] will-change-transform"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            className="overflow-hidden rounded-[18px] border border-white/10"
            style={{
              boxShadow: `0 50px 120px -20px ${vit.ambient[0]}55, 0 30px 60px rgba(0,0,0,0.6)`,
              transition: 'box-shadow 700ms ease',
            }}
          >
            {/* browser bar */}
            <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.04] px-4 py-2.5 backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <div className="mx-auto flex items-center gap-2 rounded-md bg-black/25 px-3 py-1 text-[11px] text-white/45">
                <span>{vit.id}.zcompany.co</span>
              </div>
            </div>

            {/* scroll viewport */}
            <div
              ref={viewportRef}
              onScroll={onScroll}
              className="zc-viewport h-[clamp(320px,52vh,520px)] snap-y snap-mandatory overflow-y-auto overscroll-contain"
            >
              {VITRINES.map((v) => (
                <div key={v.id} className="h-full w-full snap-start">
                  {v.render}
                </div>
              ))}
            </div>
          </div>

          {/* floating caption */}
          <div
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center"
            style={{ transform: 'translateZ(40px) translateX(-50%)' }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-muted)]">{vit.kicker}</p>
            <p className="mt-1 font-serif text-[clamp(14px,1.6vw,20px)]" style={{ color: vit.accent }}>
              {vit.name}
            </p>
          </div>
        </div>
      </div>

      {/* Right rail — jump between vitrines */}
      <nav
        aria-label="Selecionar vitrine"
        className="absolute right-[clamp(16px,3vw,40px)] top-1/2 z-20 flex -translate-y-1/2 flex-col items-end gap-3"
      >
        {VITRINES.map((v, i) => (
          <button
            key={v.id}
            onClick={() => goTo(i)}
            aria-label={v.name}
            aria-current={i === active}
            className="group flex items-center gap-2"
          >
            <span
              className="text-[10px] uppercase tracking-[0.2em] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ color: 'var(--color-muted)' }}
            >
              {v.name}
            </span>
            <span
              className="h-px transition-all duration-300"
              style={{
                width: i === active ? 34 : 16,
                background: i === active ? v.accent : 'rgba(242,237,228,0.3)',
              }}
            />
          </button>
        ))}
      </nav>

      {/* Bottom bar */}
      <footer className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-[clamp(20px,4vw,56px)] py-[clamp(16px,2.4vw,30px)] text-[13px]">
        <div className="hidden items-center gap-2 text-[color:var(--color-muted)] sm:flex">
          <span className="zc-hint">↕</span>
          <span className="uppercase tracking-[0.2em]">role para explorar</span>
        </div>
        <div className="flex items-center gap-[clamp(16px,3vw,40px)]">
          <a href={`mailto:${EMAIL}`} className="zc-contact transition-colors hover:text-[color:var(--color-foreground)] text-[color:var(--color-muted)]">
            {EMAIL}
          </a>
          <a
            href={`https://wa.me/${WHATS}`}
            target="_blank"
            rel="noopener noreferrer"
            className="zc-contact transition-colors hover:text-[color:var(--color-foreground)] text-[color:var(--color-muted)]"
          >
            WhatsApp
          </a>
        </div>
      </footer>
    </main>
  )
}
