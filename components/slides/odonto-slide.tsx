'use client'

import Image from 'next/image'
import { CaseChip } from './case-chip'
import { useParallax } from './use-parallax'

export function OdontoSlide() {
  const { ref, onMouseMove } = useParallax()

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex h-full w-full flex-col overflow-hidden"
      style={{
        backgroundColor: 'var(--color-odo-bg)',
        color: 'var(--color-odo-ink)',
      }}
    >
      {/* Halo suave */}
      <div
        aria-hidden="true"
        className="absolute top-[-20%] right-[-10%] h-[70vh] w-[50vw] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(31,122,109,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Mini nav da landing */}
      <div
        data-reveal
        className="relative z-10 flex items-center justify-between px-6 pt-20 md:px-16 md:pt-24"
      >
        <span className="text-lg font-semibold tracking-tight">
          lumen<span style={{ color: 'var(--color-odo-teal)' }}>.</span>
        </span>
        <div className="hidden items-center gap-8 text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#5b6e6a] md:flex">
          <span>Tratamentos</span>
          <span>Equipe</span>
          <span
            className="rounded-full px-5 py-2.5 text-white"
            style={{ backgroundColor: 'var(--color-odo-teal)' }}
          >
            Agendar
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center gap-10 px-6 pb-20 md:flex-row md:gap-20 md:px-16 md:pb-16">
        {/* Texto */}
        <div className="flex max-w-xl flex-1 flex-col justify-center pt-8 md:pt-0">
          <p
            data-reveal
            className="mb-5 text-[0.7rem] font-semibold tracking-[0.3em] uppercase"
            style={{ color: 'var(--color-odo-teal)' }}
          >
            Odontologia estética
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl leading-[1.05] text-balance md:text-6xl"
          >
            Sorrisos desenhados com{' '}
            <em style={{ color: 'var(--color-odo-teal)' }}>precisão.</em>
          </h2>
          <p
            data-reveal
            className="mt-6 max-w-sm text-sm leading-relaxed text-pretty text-[#5b6e6a]"
          >
            Planejamento digital do sorriso, do primeiro scan à última lente.
            Tecnologia de ponta em um espaço que não parece consultório.
          </p>

          <div data-reveal className="mt-8 flex flex-wrap gap-2">
            {['Lentes de contato', 'Invisalign', 'Implantes', 'Harmonização'].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#16302c]/15 bg-white px-4 py-2 text-xs font-medium text-[#16302c]"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Imagem em arco + cards flutuantes */}
        <div
          data-reveal
          className="relative hidden flex-1 items-center justify-center sm:flex"
          style={{
            transform:
              'translate3d(calc(var(--px, 0) * 16px), calc(var(--py, 0) * 10px), 0)',
          }}
        >
          <div className="relative aspect-3/4 w-[min(46vh,340px)]">
            <div className="relative h-full w-full overflow-hidden rounded-t-[10rem] rounded-b-3xl shadow-xl shadow-[#16302c]/10">
              <Image
                src="/images/odonto.png"
                alt="Paciente sorrindo em clínica odontológica clara e minimalista"
                fill
                sizes="(max-width: 768px) 60vw, 340px"
                className="object-cover"
              />
            </div>

            <div className="zc-float absolute -left-16 top-14 hidden rounded-2xl bg-white px-5 py-4 shadow-lg shadow-[#16302c]/10 lg:block">
              <p
                className="font-serif text-2xl"
                style={{ color: 'var(--color-odo-teal)' }}
              >
                4,9 ★
              </p>
              <p className="mt-0.5 text-[0.65rem] tracking-wide text-[#5b6e6a]">
                1.200+ avaliações
              </p>
            </div>

            <div className="zc-float-slow absolute -right-12 bottom-16 hidden items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg shadow-[#16302c]/10 lg:flex">
              <span
                className="block size-2 rounded-full"
                style={{ backgroundColor: 'var(--color-odo-teal)' }}
              />
              <div>
                <p className="text-xs font-semibold text-[#16302c]">
                  Avaliação disponível
                </p>
                <p className="text-[0.65rem] text-[#5b6e6a]">hoje, 16h40</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CaseChip
        numero="Caso 02"
        titulo="Odontologia"
        entrega="Landing + agenda integrada"
      />
    </div>
  )
}
