import { type Metadata } from 'next'
import { Inter, IBM_Plex_Sans_Arabic } from 'next/font/google'
import clsx from 'clsx'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { LanguageProvider } from '@/components/LanguageProvider'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-arabic',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.coinmind-ai.com'),
  title: {
    template: '%s | CoinMind AI',
    default:
      'CoinMind AI | Voice, Chat & Multi-Currency Expense Tracker',
  },
  description:
    'Log expenses and income naturally by voice, chat, or receipt photo in English, Arabic, and dozens of languages. Supports 170+ currencies with automatic conversion across Web & Android.',
  keywords: [
    'AI expense tracker',
    'voice expense tracking',
    'multi-currency expense tracker',
    'AI personal finance assistant',
    'smart expense tracker',
    'AI receipt scanner for expenses',
    'expense tracker for expats',
    'multi-currency budget app for travelers',
    'track expenses by voice in any language',
    'Arabic AI expense tracker',
    'CoinMind AI',
  ],
  authors: [{ name: 'CoinMind AI Team' }],
  creator: 'CoinMind AI',
  publisher: 'CoinMind AI',
  applicationName: 'CoinMind AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title:
      'CoinMind AI | Voice, Chat & Multi-Currency Expense Tracker',
    description:
      'Say what you spent. CoinMind logs, converts across 170+ currencies, and categorizes your finances on Web & Android.',
    url: 'https://www.coinmind-ai.com',
    siteName: 'CoinMind AI',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'CoinMind AI | Voice, Chat & Multi-Currency Expense Tracker',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'CoinMind AI | Voice, Chat & Multi-Currency Expense Tracker',
    description:
      'Speak, chat, or scan receipts in any language with automatic conversion across 170+ currencies.',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.coinmind-ai.com',
  },
  category: 'finance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={clsx(
        'bg-[#fbfbfb] antialiased',
        inter.variable,
        ibmPlexArabic.variable,
      )}
    >
      <body className="flex min-h-screen flex-col font-sans text-gray-900">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
