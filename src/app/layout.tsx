import { type Metadata } from 'next'
import { Cairo } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const cairo = Cairo({
  subsets: ['latin', 'arabic'],
  display: 'swap',
  variable: '--font-cairo',
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
    url: 'https://coinmind.vercel.app',
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
    <html lang="en" className={clsx('bg-gray-50 antialiased', cairo.variable)}>
      <body className="font-cairo">{children}</body>
    </html>
  )
}
