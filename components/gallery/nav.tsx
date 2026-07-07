'use client'

const LINKS = [
  { label: 'Casos', slide: 1 },
  { label: 'Contato', slide: 5 },
]

export function GalleryNav({
  activeIndex,
  onNavigate,
}: {
  activeIndex: number
  onNavigate: (index: number) => void
}) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 mix-blend-difference">
      <div className="flex items-center justify-between px-6 py-5 md:px-10 md:py-7">
        <button
          type="button"
          onClick={() => onNavigate(0)}
          aria-label="zcompany — início"
          className="pointer-events-auto cursor-pointer border-none bg-transparent p-0"
        >
          <span className="font-serif text-xl italic tracking-tight text-white">
            zcompany
          </span>
        </button>

        <nav aria-label="Seções" className="pointer-events-auto">
          <div className="flex items-center gap-8">
            <span className="hidden items-center gap-2 md:flex">
              <span className="zc-pulse block size-1.5 rounded-full bg-white" />
              <span className="text-[0.7rem] uppercase tracking-[0.18em] text-white/60">
                Aceitando projetos
              </span>
            </span>
            {LINKS.map((link) => (
              <button
                key={link.label}
                type="button"
                className="zc-link text-white"
                style={{ color: activeIndex === link.slide ? '#fff' : 'rgba(255,255,255,0.55)' }}
                data-active={activeIndex === link.slide}
                onClick={() => onNavigate(link.slide)}
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
