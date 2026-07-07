'use client'

import Image from 'next/image'
import { CaseChip } from './case-chip'
import { useParallax } from './use-parallax'

export function AdvocaciaSlide() {
  const { ref, onMouseMove } = useParallax()

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex h-full w-full flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--color-adv-bg)', color: '#ece5d8' }}
    >
      {/* Palavra gigante ao fundo (camada mais profunda) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{
          transform:
            'translate3d(calc(var(--px, 0) * -24px), calc(var(--py, 0) * -14px), 0)',
        }}
      >
        <span className="font-serif text-[30vw] leading-none tracking-tight whitespace-nowrap text-[#c9a86a] opacity-[0.07] select-none md:text-[22vw]">
          Êxito
        </span>
      </div>

      {/* Mini nav da landing */}
      <div
        data-reveal
        className="relative z-10 flex items-center justify-between px-6 pt-20 md:px-16 md:pt-24"
      >
        <span className="font-serif text-lg tracking-wide">
          Vega<span className="text-[#c9a86a]">·</span>Prado
        </span>
        <div className="hidden items-center gap-8 text-[0.7rem] tracking-[0.2em] uppercase text-[#8a8272] md:flex">
          <span>Atuação</span>
          <span>Escritório</span>
          <span className="rounded-full border border-[#c9a86a]/40 px-4 py-2 text-[#c9a86a]">
            Consulta
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center gap-10 px-6 pb-20 md:flex-row md:gap-16 md:px-16 md:pb-16">
        {/* Texto */}
        <div className="flex max-w-xl flex-1 flex-col justify-center pt-8 md:pt-0">
          <p
            data-reveal
            className="mb-5 text-[0.7rem] tracking-[0.3em] uppercase text-[#c9a86a]"
          >
            Advocacia empresarial
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl leading-[1.05] text-balance md:text-6xl"
          >
            A defesa que o seu <em className="text-[#c9a86a]">patrimônio</em>{' '}
            exige.
          </h2>
          <p
            data-reveal
            className="mt-6 max-w-sm text-sm leading-relaxed text-pretty text-[#8a8272]"
          >
            Estratégia jurídica sob medida para empresas que não podem errar.
            Duas décadas de banca, uma única obsessão: o resultado.
          </p>

          <div data-reveal className="mt-10 flex items-center gap-10">
            <div>
              <p className="font-serif text-3xl text-[#c9a86a]">98%</p>
              <p className="mt-1 text-[0.65rem] tracking-[0.18em] uppercase text-[#8a8272]">
                Êxito em acordos
              </p>
            </div>
            <div className="h-10 w-px bg-[#ece5d8]/10" aria-hidden="true" />
            <div>
              <p className="font-serif text-3xl text-[#c9a86a]">22</p>
              <p className="mt-1 text-[0.65rem] tracking-[0.18em] uppercase text-[#8a8272]">
                Anos de banca
              </p>
            </div>
            <div className="h-10 w-px bg-[#ece5d8]/10" aria-hidden="true" />
            <div>
              <p className="font-serif text-3xl text-[#c9a86a]">4</p>
              <p className="mt-1 text-[0.65rem] tracking-[0.18em] uppercase text-[#8a8272]">
                Áreas de atuação
              </p>
            </div>
          </div>
        </div>

        {/* Retrato com moldura dourada deslocada */}
        <div
          data-reveal
          className="relative hidden flex-1 items-center justify-center sm:flex"
          style={{
            transform:
              'translate3d(calc(var(--px, 0) * 18px), calc(var(--py, 0) * 10px), 0)',
          }}
        >
          <div className="relative aspect-3/4 w-[min(46vh,340px)]">
            <div
              aria-hidden="true"
              className="absolute -top-4 -right-4 h-full w-full border border-[#c9a86a]/50"
            />
            <Image
              src="/images/advocacia.png"
              alt="Advogado em escritório de mármore escuro, iluminação dramática"
              fill
              sizes="(max-width: 768px) 60vw, 340px"
              className="object-cover"
              priority
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(14,13,11,0.55) 0%, transparent 40%)',
              }}
            />
            <p className="absolute bottom-4 left-4 font-serif text-sm italic text-[#ece5d8]/90">
              &ldquo;O detalhe é a diferença.&rdquo;
            </p>
          </div>
        </div>
      </div>

      <CaseChip
        numero="Caso 01"
        titulo="Advocacia"
        entrega="Landing + identidade tipográfica"
      />
    </div>
  )
}
