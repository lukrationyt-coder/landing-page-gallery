'use client'

import Image from 'next/image'
import { CaseChip } from './case-chip'
import { useParallax } from './use-parallax'

export function GastroSlide() {
  const { ref, onMouseMove } = useParallax()

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex h-full w-full flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--color-gas-bg)', color: '#efe3d3' }}
    >
      {/* Brasa ao fundo */}
      <div
        aria-hidden="true"
        className="absolute bottom-[-30%] left-1/2 h-[70vh] w-[80vw] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(217,123,63,0.4) 0%, transparent 70%)',
        }}
      />

      {/* Mini nav da landing */}
      <div
        data-reveal
        className="relative z-10 flex items-center justify-between px-6 pt-20 md:px-16 md:pt-24"
      >
        <span className="font-serif text-lg italic tracking-wide">
          Casa Âmbar
        </span>
        <div className="hidden items-center gap-8 text-[0.7rem] tracking-[0.2em] uppercase text-[#9a7e63] md:flex">
          <span>Menu</span>
          <span>A casa</span>
          <span
            className="rounded-full border px-4 py-2"
            style={{
              borderColor: 'rgba(217,123,63,0.5)',
              color: 'var(--color-gas-ember)',
            }}
          >
            Reservar
          </span>
        </div>
      </div>

      {/* Composição central: palavra gigante + prato flutuando por cima */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-6">
        <span
          aria-hidden="true"
          data-reveal
          className="pointer-events-none absolute font-serif text-[34vw] leading-none tracking-[0.08em] select-none md:text-[26vw]"
          style={{
            color: 'var(--color-gas-ember)',
            opacity: 0.16,
            transform:
              'translate3d(calc(var(--px, 0) * -30px), calc(var(--py, 0) * -16px), 0)',
          }}
        >
          fogo
        </span>

        <div
          data-reveal
          className="zc-float-slow relative aspect-square w-[min(48vh,350px)]"
          style={{
            transform:
              'translate3d(calc(var(--px, 0) * 24px), calc(var(--py, 0) * 14px), 0)',
          }}
        >
          <Image
            src="/images/gastro.png"
            alt="Prato autoral sobre cerâmica escura com luz dramática"
            fill
            sizes="(max-width: 768px) 70vw, 380px"
            className="rounded-full object-cover shadow-2xl shadow-black/60"
          />
        </div>

        {/* Detalhes laterais */}
        <div
          data-reveal
          className="absolute left-6 bottom-24 hidden max-w-[200px] md:left-16 md:block"
        >
          <p className="text-[0.65rem] tracking-[0.28em] uppercase text-[#9a7e63]">
            Menu degustação
          </p>
          <p className="mt-2 font-serif text-2xl italic">9 tempos</p>
          <p className="mt-1 text-xs leading-relaxed text-[#9a7e63]">
            Cozinha de brasa, ingrediente brasileiro, técnica precisa.
          </p>
        </div>

        <div
          data-reveal
          className="absolute right-6 top-32 hidden text-right md:right-16 md:block"
        >
          <p className="text-[0.65rem] tracking-[0.28em] uppercase text-[#9a7e63]">
            Qua — Dom
          </p>
          <p className="mt-2 font-serif text-2xl italic">19h · 23h</p>
        </div>
      </div>

      <CaseChip
        numero="Caso 03"
        titulo="Gastronomia"
        entrega="Landing + reservas"
      />
    </div>
  )
}
