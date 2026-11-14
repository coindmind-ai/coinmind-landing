'use client'

import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GooglePlayLink } from '@/components/GooglePlayLink'
import { AppStoreLink } from '@/components/AppStoreLink'
import { InteractiveAiDemo } from '@/components/InteractiveAiDemo'
import { useLandingLanguage } from '@/components/LanguageProvider'
import { APP_SIGNUP_URL } from '@/lib/i18n/landing-copy'
import { trackLandingEvent } from '@/lib/analytics'

export function Hero() {
  const { copy } = useLandingLanguage()

  return (
    <section className="relative overflow-hidden bg-[#fbfbfb] pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28">
      {/* Subtle warm sandstone radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-radial from-coinmind-accent/20 via-coinmind-accent/5 to-transparent blur-3xl"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Copy column */}
          <div className="mx-auto max-w-2xl lg:col-span-7 lg:mx-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-coinmind-accent/40 bg-coinmind-accent/12 px-3.5 py-1.5 text-xs font-semibold text-coinmind-primary sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-coinmind-income" />
              <span>{copy.hero.originBadge}</span>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl rtl:leading-[1.24]">
              <span className="block">{copy.hero.headlineStart}</span>
              <span className="bg-linear-to-r from-coinmind-primary via-gray-800 to-coinmind-accent bg-clip-text text-transparent">
                {copy.hero.headlineHighlight}
              </span>{' '}
              <span>{copy.hero.headlineEnd}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              {copy.hero.subheadline}
            </p>

            {/* Verified capability pills */}
            <ul
              role="list"
              className="mt-6 grid max-w-xl grid-cols-1 gap-2.5 sm:grid-cols-2"
            >
              {copy.hero.pills.map((pill) => (
                <li
                  key={pill.label}
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  <span className="inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-coinmind-income/12 text-coinmind-income">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span>{pill.label}</span>
                </li>
              ))}
            </ul>

            {/* Primary & Android CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button
                href={APP_SIGNUP_URL}
                variant="solid"
                color="primary"
                onClick={() => trackLandingEvent('hero_signup_click')}
                className="gap-2 px-6 py-3.5 text-sm sm:text-base"
              >
                <span>{copy.hero.primaryCta}</span>
                <ArrowRight
                  className="h-4 w-4 rtl:rotate-180"
                  aria-hidden="true"
                />
              </Button>
              <GooglePlayLink className="w-full sm:w-auto" />
            </div>

            <div className="mt-4">
              <AppStoreLink />
            </div>
          </div>

          {/* Interactive Mobile Device Simulation column */}
          <div className="lg:col-span-5">
            <InteractiveAiDemo />
          </div>
        </div>
      </Container>
    </section>
  )
}
