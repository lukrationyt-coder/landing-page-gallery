'use client'

import { CaseChip } from './case-chip'
import { useParallax } from './use-parallax'

const BARRAS = [38, 52, 44, 68, 58, 82, 74, 96]

export function DashboardSlide({ active }: { active: boolean }) {
  const { ref, onMouseMove } = useParallax()

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex h-full w-full flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--color-das-bg)', color: '#e6ecea' }}
    >
      {/* Grade técnica ao fundo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(230,236,234,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(230,236,234,0.5) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-[-20%] right-[-15%] h-[60vh] w-[50vw] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(76,201,168,0.5) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col items-center gap-10 px-6 pt-24 pb-20 md:flex-row md:gap-16 md:px-16 md:pt-20 md:pb-16">
        {/* Texto */}
        <div className="flex max-w-lg flex-1 flex-col justify-center">
          <p
            data-reveal
            className="mb-5 font-mono text-[0.7rem] tracking-[0.3em] uppercase"
            style={{ color: 'var(--color-das-glow)' }}
          >
            Pulso — plataforma
          </p>
          <h2
            data-reveal
            className="font-serif text-4xl leading-[1.05] text-balance md:text-6xl"
          >
            Dados que viram{' '}
            <em style={{ color: 'var(--color-das-glow)' }}>decisão.</em>
          </h2>
          <p
            data-reveal
            className="mt-6 max-w-sm text-sm leading-relaxed text-pretty text-[#7d8a86]"
          >
            Painéis sob medida para a operação do seu negócio: vendas, agenda,
            faturamento e equipe em uma só tela — em tempo real.
          </p>

          <div data-reveal className="mt-9 flex flex-col gap-3">
            {[
              'Integração com seus sistemas atuais',
              'Relatórios automáticos por WhatsApp',
              'Acesso por perfil e permissão',
            ].map((item) => (
              <p key={item} className="flex items-center gap-3 text-sm text-[#aeb9b5]">
                <span
                  aria-hidden="true"
                  className="block h-px w-6"
                  style={{ backgroundColor: 'var(--color-das-glow)' }}
                />
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Painel construído em CSS, com leve inclinação 3D */}
        <div
          data-reveal
          className="flex flex-1 items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0c1117] p-5 shadow-2xl shadow-black/60"
            style={{
              transform:
                'rotateY(calc(-6deg + var(--px, 0) * 8deg)) rotateX(calc(3deg + var(--py, 0) * -6deg))',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Barra de título */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="block size-2 rounded-full bg-white/15" />
                <span className="block size-2 rounded-full bg-white/15" />
                <span className="block size-2 rounded-full bg-white/15" />
              </div>
              <span className="font-mono text-[0.6rem] tracking-widest text-[#7d8a86] uppercase">
                pulso.app/visão-geral
              </span>
            </div>

            {/* KPIs */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { label: 'Receita', valor: 'R$ 128k', delta: '+18%' },
                { label: 'Clientes', valor: '1.842', delta: '+7%' },
                { label: 'Ticket', valor: 'R$ 312', delta: '+4%' },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl border border-white/5 bg-white/[0.03] p-3"
                >
                  <p className="text-[0.6rem] tracking-wider text-[#7d8a86] uppercase">
                    {kpi.label}
                  </p>
                  <p className="mt-1 font-mono text-sm font-semibold">
                    {kpi.valor}
                  </p>
                  <p
                    className="mt-0.5 font-mono text-[0.6rem]"
                    style={{ color: 'var(--color-das-glow)' }}
                  >
                    {kpi.delta}
                  </p>
                </div>
              ))}
            </div>

            {/* Gráfico de barras */}
            <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.03] p-4">
              <div className="flex items-baseline justify-between">
                <p className="text-[0.6rem] tracking-wider text-[#7d8a86] uppercase">
                  Vendas / semana
                </p>
                <p className="font-mono text-[0.6rem] text-[#7d8a86]">últimos 60 dias</p>
              </div>
              <div className="mt-4 flex h-24 items-end gap-2">
                {BARRAS.map((h, i) => (
                  <span
                    key={i}
                    className={active ? 'zc-bar flex-1 rounded-t-sm' : 'flex-1 rounded-t-sm'}
                    style={{
                      height: `${h}%`,
                      animationDelay: `${i * 90}ms`,
                      background:
                        i === BARRAS.length - 1
                          ? 'var(--color-das-glow)'
                          : 'rgba(76,201,168,0.25)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Linhas de atividade */}
            <div className="mt-4 flex flex-col gap-2.5">
              {[
                { nome: 'Nova venda — plano anual', hora: 'agora' },
                { nome: 'Relatório semanal enviado', hora: '09:12' },
              ].map((row) => (
                <div
                  key={row.nome}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5"
                >
                  <span className="flex items-center gap-2.5 text-xs text-[#aeb9b5]">
                    <span
                      className="zc-pulse block size-1.5 rounded-full"
                      style={{ backgroundColor: 'var(--color-das-glow)' }}
                    />
                    {row.nome}
                  </span>
                  <span className="font-mono text-[0.6rem] text-[#7d8a86]">
                    {row.hora}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CaseChip
        numero="Caso 04"
        titulo="Dashboard"
        entrega="Painel operacional em tempo real"
      />
    </div>
  )
}
