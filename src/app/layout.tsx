import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://coinmind-ai.com'),
  title: {
    template: '%s - CoinMind AI Expense Tracker',
    default: 'CoinMind - AI Expense Tracker with Voice & Chat | Track Spending in Any Language',
  },
  description:
    'AI expense tracker app with voice input, receipt OCR scanning, and multi-language support. Track spending by simply speaking or chatting. Automatic categorization, smart insights, and supports 170+ languages. Free expense tracking with AI.',
  keywords: [
    'AI expense tracker', 
    'expense tracking app', 
    'voice expense tracker',
    'receipt scanner app',
    'OCR receipt scanner',
    'spending tracker',
    'money tracking app',
    'budget tracker app',
    'personal finance tracker',
    'AI money manager',
    'voice to expense',
    'chat expense tracker',
    'multi-language expense tracker',
    'automatic expense categorization',
    'smart expense tracker',
    'expense manager app',
    'AI financial tracker',
    'voice activated expense tracker',
    'natural language expense tracking',
    'free expense tracker'
  ],
  authors: [{ name: 'CoinMind Team' }],
  creator: 'CoinMind',
  publisher: 'CoinMind',
  applicationName: 'CoinMind AI Expense Tracker',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'CoinMind - AI Expense Tracker with Voice & Chat',
    description: 'Track expenses instantly by speaking or chatting in any language. AI-powered expense tracker with receipt OCR, automatic categorization, and smart insights. Supports 170+ languages.',
    url: 'https://coinmind-ai.com',
    siteName: 'CoinMind',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'CoinMind AI Expense Tracker - Voice & Chat Expense Tracking',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoinMind - AI Expense Tracker with Voice & Chat',
    description: 'Track expenses instantly by speaking or chatting. AI-powered with receipt OCR & 170+ languages support.',
    images: ['/api/og'],
    creator: '@coinmind',
    site: '@coinmind',
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
    canonical: 'https://coinmind-ai.com',
  },
  category: 'finance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body className="font-sans">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
