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
  title: 'zcompany',
  description:
    'Design que parece caro — porque é. Páginas, sites e dashboards vivos, desenhados como peças únicas.',
}

export const viewport: Viewport = {
  themeColor: '#08080a',
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
