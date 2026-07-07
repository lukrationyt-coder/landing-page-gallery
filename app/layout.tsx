import type { Metadata, Viewport } from 'next'
import { Fraunces, Geist } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz', 'SOFT', 'WONK'],
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

export const metadata: Metadata = {
  title: 'zcompany — estúdio digital',
  description:
    'Um atelier de páginas vivas. Landing pages, sites e dashboards desenhados como peças únicas — role e veja cada caso em tela cheia.',
}

export const viewport: Viewport = {
  themeColor: '#0b0a09',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`bg-background ${fraunces.variable} ${geist.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
