import type { ReactNode } from 'react'

export type Vitrine = {
  id: string
  kicker: string
  name: string
  ambient: [string, string]
  accent: string
  render: ReactNode
}

/* Shared little primitives ------------------------------------------------ */

function Dot({ c }: { c: string }) {
  return <span className="h-1.5 w-1.5 rounded-full" style={{ background: c }} />
}

function Bar({ h, c, d = 0 }: { h: number; c: string; d?: number }) {
  return (
    <span
      className="zc-bar block w-full rounded-sm"
      style={{ height: `${h}%`, background: c, animationDelay: `${d}ms` }}
    />
  )
}

/* 1 — Produto / commerce -------------------------------------------------- */

function Produto() {
  return (
    <div
      className="flex h-full w-full flex-col justify-between p-[6%]"
      style={{ background: 'radial-gradient(120% 120% at 70% 20%, #ff2d6f 0%, #b3123f 42%, #4a0a1f 100%)' }}
    >
      <div className="flex items-center justify-between text-[clamp(9px,1.1vw,13px)] font-medium tracking-tight text-white">
        <span className="font-serif text-[1.4em] tracking-tight">plané</span>
        <div className="flex items-center gap-[1.6em] opacity-80">
          <span>Coleção</span>
          <span>Sobre</span>
          <span className="rounded-full bg-white px-[1.2em] py-[0.5em] text-[#b3123f]">Comprar</span>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <h2 className="pointer-events-none select-none font-serif text-[clamp(48px,13vw,150px)] font-semibold leading-none text-white/95">
          BOLD
        </h2>
        <div
          className="absolute h-[42%] w-[42%] -rotate-[18deg] rounded-2xl"
          style={{
            background: 'linear-gradient(150deg,#fff,#ffd9e4)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.45)',
          }}
        />
      </div>

      <div className="flex items-end justify-between text-white">
        <div className="max-w-[46%]">
          <p className="text-[clamp(9px,1vw,13px)] leading-relaxed text-white/75">
            Feito para quem não passa despercebido. Materiais premium, design ousado.
          </p>
        </div>
        <div className="flex items-center gap-[0.8em]">
          {['#3ddc97', '#ff7a1a', '#ff2d6f'].map((c) => (
            <span key={c} className="h-[1.6em] w-[1.6em] rounded-full ring-2 ring-white/60" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* 2 — Dashboard ----------------------------------------------------------- */

function Dashboard() {
  return (
    <div
      className="grid h-full w-full grid-cols-[26%_1fr] text-[clamp(8px,0.95vw,12px)]"
      style={{ background: '#070b12', color: '#dfe8f0' }}
    >
      <aside className="flex flex-col gap-[1.4em] border-r border-white/8 p-[7%]">
        <div className="flex items-center gap-[0.6em] font-semibold">
          <span className="h-[1.6em] w-[1.6em] rounded-md" style={{ background: '#4cc9a8' }} />
          Pulso
        </div>
        <div className="mt-[1em] flex flex-col gap-[1.1em] text-white/45">
          {['Visão geral', 'Receita', 'Clientes', 'Relatórios', 'Ajustes'].map((t, i) => (
            <span key={t} className={i === 1 ? 'font-medium text-white' : ''}>
              {t}
            </span>
          ))}
        </div>
      </aside>

      <main className="flex flex-col gap-[1.4em] p-[5%]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/45">Receita recorrente</p>
            <p className="font-serif text-[clamp(20px,3.4vw,40px)] font-semibold leading-none text-white">
              R$ 482.900
            </p>
          </div>
          <span className="rounded-full px-[1em] py-[0.5em] text-[#4cc9a8]" style={{ background: 'rgba(76,201,168,0.14)' }}>
            +18,4%
          </span>
        </div>

        <div className="grid flex-1 grid-cols-3 gap-[1em]">
          <div className="col-span-2 flex items-end gap-[0.55em] rounded-lg border border-white/8 bg-white/[0.03] p-[1.2em]">
            {[38, 52, 44, 66, 58, 80, 72, 92, 68, 84].map((h, i) => (
              <Bar key={i} h={h} c={i % 2 ? '#4cc9a8' : 'rgba(76,201,168,0.4)'} d={i * 60} />
            ))}
          </div>
          <div className="flex flex-col justify-between rounded-lg border border-white/8 bg-white/[0.03] p-[1.2em]">
            <p className="text-white/45">Conversão</p>
            <p className="font-serif text-[clamp(16px,2.6vw,30px)] text-white">7,9%</p>
            <div className="flex items-center gap-[0.5em] text-[#4cc9a8]">
              <Dot c="#4cc9a8" />
              <span>Meta batida</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

/* 3 — Clínica (light) ----------------------------------------------------- */

function Clinica() {
  return (
    <div
      className="flex h-full w-full flex-col justify-between p-[6%]"
      style={{ background: 'linear-gradient(160deg,#f3faf8 0%,#dcefe9 100%)', color: '#16302c' }}
    >
      <div className="flex items-center justify-between text-[clamp(9px,1.1vw,13px)]">
        <span className="font-serif text-[1.5em] font-semibold tracking-tight">lumen.</span>
        <div className="flex items-center gap-[1.4em] text-[#16302c]/60">
          <span>Tratamentos</span>
          <span>Equipe</span>
          <span
            className="rounded-full px-[1.2em] py-[0.5em] text-white"
            style={{ background: '#1f7a6d' }}
          >
            Agendar
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-[5%]">
        <div className="max-w-[52%]">
          <h2 className="font-serif text-[clamp(24px,5vw,56px)] font-semibold leading-[0.98]">
            Um sorriso que abre portas.
          </h2>
          <p className="mt-[1em] text-[clamp(9px,1vw,13px)] leading-relaxed text-[#16302c]/60">
            Odontologia estética com tecnologia e cuidado em cada detalhe.
          </p>
        </div>
        <div
          className="h-[9em] w-[9em] shrink-0 rounded-full"
          style={{ background: 'radial-gradient(circle at 35% 30%,#8fd8c8,#1f7a6d)', boxShadow: '0 30px 60px rgba(31,122,109,0.35)' }}
        />
      </div>

      <div className="grid grid-cols-3 gap-[1em] text-[clamp(8px,0.95vw,12px)]">
        {[
          ['+12 anos', 'de experiência'],
          ['4,9 ★', 'avaliação média'],
          ['+6 mil', 'sorrisos'],
        ].map(([a, b]) => (
          <div key={a} className="rounded-lg border border-[#16302c]/10 bg-white/50 p-[1.1em]">
            <p className="font-serif text-[1.9em] font-semibold leading-none">{a}</p>
            <p className="mt-[0.5em] text-[#16302c]/55">{b}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* 4 — Restaurante --------------------------------------------------------- */

function Restaurante() {
  return (
    <div
      className="relative flex h-full w-full flex-col justify-between overflow-hidden p-[6%]"
      style={{ background: 'radial-gradient(130% 120% at 50% 120%,#e08a3c 0%,#7a3d16 45%,#1c0f07 100%)', color: '#f6e9dc' }}
    >
      <h2 className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[clamp(70px,22vw,260px)] font-semibold leading-none text-white/10">
        fogo
      </h2>

      <div className="relative flex items-center justify-between text-[clamp(9px,1.1vw,13px)] text-white">
        <span className="font-serif text-[1.5em] tracking-tight">Casa Âmbar</span>
        <div className="flex items-center gap-[1.4em] text-white/70">
          <span>Menu</span>
          <span>Reservas</span>
          <span className="rounded-full border border-white/40 px-[1.2em] py-[0.5em]">Reservar</span>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div
          className="h-[9em] w-[9em] rounded-full"
          style={{ background: 'radial-gradient(circle at 40% 35%,#3a2416,#0e0803)', boxShadow: '0 40px 70px rgba(0,0,0,0.55), inset 0 2px 12px rgba(224,138,60,0.4)' }}
        />
      </div>

      <div className="relative flex items-end justify-between text-white">
        <p className="max-w-[52%] text-[clamp(9px,1vw,13px)] leading-relaxed text-white/75">
          Cozinha de fogo vivo. Ingredientes locais, técnica e uma noite que fica.
        </p>
        <span className="font-serif text-[clamp(11px,1.3vw,16px)] italic text-[#f4c58a]">São Paulo · 19h</span>
      </div>
    </div>
  )
}

/* 5 — Estúdio / editorial ------------------------------------------------- */

function Estudio() {
  return (
    <div
      className="relative flex h-full w-full flex-col justify-between overflow-hidden p-[6%]"
      style={{ background: 'radial-gradient(120% 120% at 20% 10%,#1a1712 0%,#0c0a08 60%)', color: '#f2ede4' }}
    >
      <div
        className="pointer-events-none absolute -right-[10%] top-[10%] h-[60%] w-[55%] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle,#c9a86a,transparent 70%)' }}
      />
      <div className="relative flex items-center justify-between text-[clamp(9px,1.1vw,13px)]">
        <span className="font-serif text-[1.5em] tracking-tight">Vega</span>
        <div className="flex items-center gap-[1.4em] text-white/55">
          <span>Trabalho</span>
          <span>Processo</span>
          <span className="rounded-full px-[1.2em] py-[0.5em]" style={{ background: '#c9a86a', color: '#161310' }}>
            Falar
          </span>
        </div>
      </div>

      <h2 className="relative max-w-[80%] font-serif text-[clamp(28px,6.4vw,74px)] font-semibold leading-[0.96]">
        Marcas que <span style={{ color: '#c9a86a' }}>merecem</span> ser lembradas.
      </h2>

      <div className="relative flex items-center justify-between text-[clamp(8px,0.95vw,12px)] text-white/50">
        <span>Identidade · Web · Movimento</span>
        <div className="flex items-center gap-[0.6em]">
          <Dot c="#c9a86a" />
          <span>Estúdio de design</span>
        </div>
      </div>
    </div>
  )
}

export const VITRINES: Vitrine[] = [
  { id: 'produto', kicker: 'Vitrine 01', name: 'Marca de produto', ambient: ['#ff2d6f', '#3a0817'], accent: '#ff5c8a', render: <Produto /> },
  { id: 'dashboard', kicker: 'Vitrine 02', name: 'Painel & dashboard', ambient: ['#4cc9a8', '#061a1f'], accent: '#4cc9a8', render: <Dashboard /> },
  { id: 'clinica', kicker: 'Vitrine 03', name: 'Clínica & saúde', ambient: ['#7fded0', '#123f39'], accent: '#37b8a0', render: <Clinica /> },
  { id: 'restaurante', kicker: 'Vitrine 04', name: 'Gastronomia', ambient: ['#e08a3c', '#2a1408'], accent: '#e8a35c', render: <Restaurante /> },
  { id: 'estudio', kicker: 'Vitrine 05', name: 'Estúdio criativo', ambient: ['#c9a86a', '#141109'], accent: '#c9a86a', render: <Estudio /> },
]
