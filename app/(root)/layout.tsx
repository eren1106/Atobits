import Topbar from '@/components/Topbar'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '../providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atobits',
  description: 'Atomic Habits App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background min-h-screen`}>
        <Providers>
          <Topbar />
          <div className='container p-6'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
