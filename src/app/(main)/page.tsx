import { type Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { WorkflowsBento } from '@/components/WorkflowsBento'
import { OriginAndSecurity } from '@/components/OriginAndSecurity'
import { Pricing } from '@/components/Pricing'
import { Faqs } from '@/components/Faqs'
import { CallToAction } from '@/components/CallToAction'
import {
  LANDING_COPY,
  GOOGLE_PLAY_URL,
  APP_SIGNUP_URL,
} from '@/lib/i18n/landing-copy'

export const metadata: Metadata = {
  title: {
    absolute:
      'CoinMind AI | Track Expenses by Voice, Chat & Receipt Across 170+ Currencies',
  },
  description:
    'Speak, chat, or snap a receipt in English, Arabic, or your preferred language. CoinMind logs expenses and income, categorizes automatically, and converts 170+ currencies on Web & Android.',
  keywords: [
    'AI expense tracker',
    'voice expense tracking',
    'multi-currency expense tracker',
    'AI personal finance assistant',
    'smart expense tracker',
    'expense tracker for expats',
    'AI receipt scanner for expenses',
    'free AI expense tracking app',
    'Arabic voice expense tracker',
  ],
  openGraph: {
    title:
      'CoinMind AI | Voice, Chat & Multi-Currency Expense Tracker',
    description:
      'Say what you spent. CoinMind logs, converts across 170+ currencies, and categorizes your finances on Web & Android.',
    url: 'https://www.coinmind-ai.com',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'CoinMind AI | Voice, Chat & Multi-Currency Expense Tracker',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.coinmind-ai.com',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'CoinMind AI',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web, Android',
      url: 'https://www.coinmind-ai.com',
      installUrl: [APP_SIGNUP_URL, GOOGLE_PLAY_URL],
      description:
        'AI-powered personal finance assistant with natural-language voice and chat logging, receipt OCR scanning, and automatic conversion across 170+ currencies.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Voice and natural-language chat expense tracking',
        '170+ currencies with automatic conversion',
        'AI receipt OCR scanning',
        'CSV and Excel statement import',
        'PDF, CSV, and Excel financial exports',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: LANDING_COPY.en.faqs.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <WorkflowsBento />
      <OriginAndSecurity />
      <Pricing />
      <Faqs />
      <CallToAction />
    </>
  )
}
