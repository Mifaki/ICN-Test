import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import './fonts.css'

const poppins = Poppins({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coinvestasi',
  description: 'An ICN Frontend Developer Intership Assessment Test',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}