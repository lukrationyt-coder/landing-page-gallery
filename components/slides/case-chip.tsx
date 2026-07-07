export function CaseChip({
  numero,
  titulo,
  entrega,
}: {
  numero: string
  titulo: string
  entrega: string
}) {
  return (
    <div
      data-reveal
      className="pointer-events-none absolute bottom-6 left-6 z-20 flex items-center gap-3 mix-blend-difference md:bottom-8 md:left-10"
    >
      <span className="font-mono text-[0.65rem] tracking-widest text-white/60">
        {numero}
      </span>
      <span className="h-px w-8 bg-white/30" aria-hidden="true" />
      <span className="text-[0.7rem] uppercase tracking-[0.18em] text-white/80">
        {titulo}
      </span>
      <span className="hidden text-[0.7rem] tracking-[0.06em] text-white/40 md:inline">
        {entrega}
      </span>
    </div>
  )
}
