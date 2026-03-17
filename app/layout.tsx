import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { TranslationProvider } from '@/context/TranslationContext'

export const metadata: Metadata = {
  title: {
    default: 'Bankertimes.org — Global Banking & Finance Intelligence',
    template: '%s | Bankertimes.org',
  },
  description: 'Bankertimes.org is the leading source for global banking and finance news, analysis, research, and intelligence for financial professionals worldwide.',
  keywords: ['banking', 'finance', 'financial news', 'investment', 'global banking', 'ESG', 'fintech'],
  authors: [{ name: 'Bankertimes Editorial' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.bankertimes.org',
    siteName: 'Bankertimes.org',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <TranslationProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  )
}
