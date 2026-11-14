'use client'

import { ShieldCheck, Lock, Download } from 'lucide-react'
import { Container } from '@/components/Container'
import { useLandingLanguage } from '@/components/LanguageProvider'

const PILLAR_ICONS = [ShieldCheck, Lock, Download]

export function OriginAndSecurity() {
  const { copy } = useLandingLanguage()

  return (
    <section
      id="security"
      aria-labelledby="trust-heading"
      className="border-b border-gray-200/80 bg-[#fbfbfb] py-20 sm:py-28"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Origin story column */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center rounded-full border border-coinmind-accent/40 bg-coinmind-accent/12 px-3.5 py-1 text-xs font-semibold text-coinmind-primary sm:text-sm">
              {copy.trust.badge}
            </span>
            <h2
              id="trust-heading"
              className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              {copy.trust.title}
            </h2>
            <p className="mt-5 text-base font-medium leading-relaxed text-gray-800">
              {copy.trust.storyLead}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              {copy.trust.storyBody}
            </p>
          </div>

          {/* Security & privacy pillars */}
          <div className="grid grid-cols-1 gap-5 lg:col-span-7">
            {copy.trust.pillars.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length]
              return (
                <div
                  key={pillar.title}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-2xs transition-colors hover:border-coinmind-accent/60"
                >
                  <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-coinmind-primary text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
