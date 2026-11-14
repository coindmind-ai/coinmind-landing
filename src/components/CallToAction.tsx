'use client'

import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GooglePlayLink } from '@/components/GooglePlayLink'
import { useLandingLanguage } from '@/components/LanguageProvider'
import { APP_SIGNUP_URL } from '@/lib/i18n/landing-copy'
import { trackLandingEvent } from '@/lib/analytics'

export function CallToAction() {
  const { copy } = useLandingLanguage()

  return (
    <section
      id="get-started-today"
      className="bg-white pb-20 sm:pb-28"
    >
      <Container>
        <div className="relative overflow-hidden rounded-4xl bg-[#181719] px-6 py-16 text-center text-white shadow-2xl sm:px-14 sm:py-20">
          {/* Warm sandstone ambient accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-coinmind-accent/20 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-coinmind-accent/40 bg-coinmind-accent/15 px-3.5 py-1 text-xs font-semibold text-coinmind-accent sm:text-sm">
              {copy.cta.badge}
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {copy.cta.titleStart}{' '}
              <span className="text-coinmind-accent">
                {copy.cta.titleHighlight}
              </span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
              {copy.cta.subtitle}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                href={APP_SIGNUP_URL}
                variant="solid"
                color="accent"
                onClick={() => trackLandingEvent('cta_banner_signup_click')}
                className="w-full gap-2 px-7 py-3.5 text-base sm:w-auto"
              >
                <span>{copy.cta.primaryCta}</span>
                <ArrowRight
                  className="h-4 w-4 rtl:rotate-180"
                  aria-hidden="true"
                />
              </Button>
              <GooglePlayLink className="w-full sm:w-auto" />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-gray-300 sm:text-sm">
              {copy.cta.reassurances.map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Check
                    className="h-4 w-4 text-coinmind-accent"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
