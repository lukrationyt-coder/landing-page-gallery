'use client'

export function GalleryProgress({
  labels,
  activeIndex,
  onNavigate,
}: {
  labels: string[]
  activeIndex: number
  onNavigate: (index: number) => void
}) {
  return (
    <nav
      aria-label="Progresso da galeria"
      className="fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 flex-col items-end gap-2 mix-blend-difference sm:flex md:right-8"
    >
      {labels.map((label, i) => (
        <button
          key={label}
          type="button"
          className="zc-dot"
          data-active={activeIndex === i}
          onClick={() => onNavigate(i)}
          aria-label={`Ir para ${label}`}
          aria-current={activeIndex === i ? 'true' : undefined}
        >
          <span className="font-mono text-[0.65rem] tracking-widest text-white/70">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="zc-dot-bar" aria-hidden="true" />
        </button>
      ))}
    </nav>
  )
}
