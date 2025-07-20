import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { SearchProvider } from '@/context/SearchContext'
import { ThemeProvider } from '@/context/ThemeContext'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'STEM October Biology Club',
  description: 'The club vision is to immerse high school students in a challenging environment that pushes their creativity and curiosity to discover research interests around them.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider>
          <SearchProvider>
            <Navbar />
            <main className="min-h-screen pt-16">
              {children}
            </main>
            <Footer />
            <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#333',
                color: '#fff',
              },
              success: {
                iconTheme: {
                  primary: '#4ade80',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
            />
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
