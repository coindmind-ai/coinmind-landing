import { type Metadata } from 'next'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { AutomaticCategorization } from '@/components/AutomaticCategorization'

export const metadata: Metadata = {
  title: 'AI Expense Tracker App - Voice & Chat Expense Tracking | CoinMind',
  description: 'Best AI expense tracker app 2025. Track expenses by voice or chat in 170+ languages. Free expense tracking with receipt OCR scanner, automatic categorization, and smart spending insights. Download now!',
  keywords: [
    'best expense tracker app 2025',
    'free AI expense tracker',
    'voice expense tracking app',
    'expense tracker with receipt scanner',
    'multi-language expense tracker',
    'automatic expense categorization app',
    'smart spending tracker',
    'AI powered expense manager',
    'voice activated money tracker',
    'expense tracker app free',
  ],
  openGraph: {
    title: 'CoinMind - #1 AI Expense Tracker App with Voice & Chat',
    description: 'Track expenses instantly by voice or chat. AI-powered with receipt OCR, auto-categorization, and 170+ languages. Start free!',
    images: [
      {
        url: '/api/og?title=AI%20Expense%20Tracker&description=Voice%20%26%20Chat%20Expense%20Tracking%20in%20170%2B%20Languages',
        width: 1200,
        height: 630,
        alt: 'CoinMind - AI Expense Tracker App',
      },
    ],
  },
  alternates: {
    canonical: 'https://coinmind-ai.com',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <PrimaryFeatures />
      <AutomaticCategorization />
      <SecondaryFeatures />
      <CallToAction />
      <Pricing />
      <Faqs />
    </>
  )
}
