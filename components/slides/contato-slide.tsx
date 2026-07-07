'use client'

export function ContatoSlide() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-background text-foreground">
      {/* Brilho final */}
      <div
        aria-hidden="true"
        className="absolute top-[-30%] left-1/2 h-[70vh] w-[90vw] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(201,168,106,0.3) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p
          data-reveal
          className="mb-6 text-[0.7rem] uppercase tracking-[0.3em] text-muted"
        >
          O próximo caso pode ser o seu
        </p>

        <h2
          data-reveal
          className="font-serif text-[12vw] leading-[0.98] tracking-tight text-balance md:text-[6.5vw]"
        >
          Vamos fazer algo <em className="text-accent">raro.</em>
        </h2>

        <div
          data-reveal
          className="mt-14 flex flex-col items-center gap-8 md:flex-row md:gap-16"
        >
          <a
            href="mailto:contato@zcompany.com.br"
            className="zc-cta font-serif text-xl italic md:text-2xl"
          >
            contato@zcompany.com.br
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="zc-cta font-serif text-xl italic md:text-2xl"
          >
            WhatsApp
            <span aria-hidden="true" className="text-accent">
              ↗
            </span>
          </a>
        </div>

        <p
          data-reveal
          className="mt-16 max-w-xs text-xs leading-relaxed text-muted"
        >
          Sem formulários, sem espera. Uma conversa direta sobre o que a sua
          marca merece parecer.
        </p>
      </div>

      {/* Rodapé */}
      <div
        data-reveal
        className="relative z-10 flex items-center justify-between border-t border-border px-6 py-5 text-[0.65rem] uppercase tracking-[0.2em] text-muted md:px-10"
      >
        <span>zcompany — estúdio digital</span>
        <span className="hidden md:inline">São Paulo · Brasil</span>
        <span>© 2026</span>
      </div>
    </div>
  )
}
