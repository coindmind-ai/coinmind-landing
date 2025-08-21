import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - CoinMind',
    default: 'CoinMind - AI-Powered Personal Finance Assistant',
  },
  description:
    'Track expenses, analyze spending patterns, and get intelligent insights about your finances in any language. CoinMind uses advanced AI to help you make smarter financial decisions.',
  keywords: ['expense tracking', 'personal finance', 'AI assistant', 'budgeting', 'financial management'],
  authors: [{ name: 'CoinMind Team' }],
  openGraph: {
    title: 'CoinMind - AI-Powered Personal Finance Assistant',
    description: 'Track expenses, analyze spending patterns, and get intelligent insights about your finances in any language.',
    url: 'https://www.coinmind-ai.com',
    siteName: 'CoinMind',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoinMind - AI-Powered Personal Finance Assistant',
    description: 'Track expenses, analyze spending patterns, and get intelligent insights about your finances in any language.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
