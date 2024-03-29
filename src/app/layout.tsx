import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/shared/Navbar'


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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
