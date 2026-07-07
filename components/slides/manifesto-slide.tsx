'use client'

const ESPECIALIDADES = [
  'Advocacia',
  'Odontologia',
  'Gastronomia',
  'Dashboards',
  'Clínicas',
  'Arquitetura',
  'Imobiliárias',
  'Estética',
]

export function ManifestoSlide({ onExplore }: { onExplore: () => void }) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-background text-foreground">
      {/* Aurora quente ao fundo */}
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="zc-mesh absolute -top-1/4 left-1/2 h-[80vh] w-[80vw] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(201,168,106,0.35) 0%, rgba(150,90,40,0.18) 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute right-[-10%] bottom-[-20%] h-[60vh] w-[50vw] rounded-full opacity-25 blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(76,120,110,0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p
          data-reveal
          className="mb-6 text-[0.7rem] uppercase tracking-[0.3em] text-muted"
        >
          Estúdio digital · Brasil
        </p>

        <h1
          data-reveal
          className="font-serif text-[13vw] leading-[0.95] tracking-tight text-balance md:text-[7.5vw]"
        >
          Páginas que
          <br />
          <em className="text-accent">valem o olhar.</em>
        </h1>

        <p
          data-reveal
          className="mt-8 max-w-md text-sm leading-relaxed text-pretty text-muted md:text-base"
        >
          Landing pages, sites e dashboards desenhados como peças únicas.
          Role — cada tela a seguir é um mundo completo.
        </p>

        <button
          type="button"
          data-reveal
          onClick={onExplore}
          className="zc-cta mt-12 text-sm tracking-[0.14em] uppercase"
        >
          Ver os casos
          <span aria-hidden="true">↓</span>
        </button>
      </div>

      {/* Ticker de especialidades */}
      <div
        data-reveal
        className="relative z-10 overflow-hidden border-t border-border py-4"
        aria-hidden="true"
      >
        <div className="zc-ticker flex w-max items-center gap-10">
          {[...ESPECIALIDADES, ...ESPECIALIDADES].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-10 text-xs tracking-[0.24em] uppercase whitespace-nowrap text-muted"
            >
              {item}
              <span className="text-accent">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
