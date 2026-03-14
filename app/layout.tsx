import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aayu — Premium South Asian Lifestyle Coaching',
  description:
    'Aayu brings together South Asian culture and modern longevity science into a coaching experience built uniquely for every member.',
  keywords: ['South Asian health', 'lifestyle coaching', 'longevity', 'wellness'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-warm-white font-body text-earth">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
