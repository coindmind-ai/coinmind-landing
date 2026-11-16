'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Radio, RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import { Check } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import { useLandingLanguage } from '@/components/LanguageProvider'
import { APP_SIGNUP_URL, SUPPORT_EMAIL } from '@/lib/i18n/landing-copy'
import { trackLandingEvent } from '@/lib/analytics'

export function Pricing() {
  const { copy } = useLandingLanguage()
  const [activePeriod, setActivePeriod] = useState<'Monthly' | 'Annually'>(
    'Monthly',
  )

  const freePlan = copy.pricing.plans.free
  const proPlan = copy.pricing.plans.pro

  const proDisplayPrice =
    activePeriod === 'Monthly' ? proPlan.priceMonthly : proPlan.priceAnnually
  const proPeriodSuffix =
    activePeriod === 'Monthly' ? copy.pricing.perMonth : copy.pricing.perYear

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="bg-[#fbfbfb] py-20 sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-coinmind-accent/40 bg-coinmind-accent/12 px-3.5 py-1 text-xs font-semibold text-coinmind-primary sm:text-sm">
            {copy.pricing.badge}
          </span>
          <h2
            id="pricing-title"
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {copy.pricing.title}
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            {copy.pricing.subtitle}
          </p>
        </div>

        {/* Billing period toggle */}
        <div className="mx-auto mt-10 flex max-w-md justify-center">
          <RadioGroup
            value={activePeriod}
            onChange={setActivePeriod}
            aria-label={copy.pricing.billingAria}
            className="grid grid-cols-2 gap-1 rounded-full border border-gray-200 bg-white p-1 shadow-xs"
          >
            <Radio
              value="Monthly"
              className={({ checked }) =>
                clsx(
                  checked
                    ? 'bg-coinmind-primary text-white shadow-2xs'
                    : 'text-gray-700 hover:text-gray-900',
                  'cursor-pointer rounded-full px-5 py-2 text-center text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-coinmind-primary focus:outline-none sm:text-sm',
                )
              }
            >
              {copy.pricing.monthly}
            </Radio>
            <Radio
              value="Annually"
              className={({ checked }) =>
                clsx(
                  checked
                    ? 'bg-coinmind-primary text-white shadow-2xs'
                    : 'text-gray-700 hover:text-gray-900',
                  'cursor-pointer rounded-full px-5 py-2 text-center text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-coinmind-primary focus:outline-none sm:text-sm',
                )
              }
            >
              <span>{copy.pricing.annually}</span>
              <span
                className={clsx(
                  'ms-1.5 text-[11px] font-semibold',
                  activePeriod === 'Annually'
                    ? 'text-coinmind-accent'
                    : 'text-coinmind-income',
                )}
              >
                ({copy.pricing.twoMonthsFree})
              </span>
            </Radio>
          </RadioGroup>
        </div>

        {/* Plan cards */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Free Tier Card */}
          <section className="relative flex flex-col justify-between rounded-3xl border-2 border-coinmind-primary bg-white p-8 shadow-lg">
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Logomark className="h-8 w-8 flex-none" />
                  <h3 className="text-lg font-bold text-gray-900">
                    {freePlan.name}
                  </h3>
                </div>
                <span className="rounded-full bg-coinmind-income/12 px-3 py-1 text-xs font-semibold text-coinmind-income">
                  {freePlan.badge}
                </span>
              </div>

              <p className="mt-6 flex items-baseline gap-1.5 text-4xl font-bold tracking-tight text-gray-900">
                <span>{freePlan.priceMonthly}</span>
              </p>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                {freePlan.description}
              </p>

              <ul
                role="list"
                className="mt-7 divide-y divide-gray-100 border-t border-gray-100 text-sm text-gray-700"
              >
                {freePlan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 py-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-coinmind-income/12 text-coinmind-income">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              href={APP_SIGNUP_URL}
              variant="solid"
              color="primary"
              aria-label={`${freePlan.cta} (${freePlan.name})`}
              onClick={() =>
                trackLandingEvent('pricing_cta_click', {
                  plan: 'free',
                  period: activePeriod,
                })
              }
              className="mt-8 w-full py-3.5 text-base"
            >
              {freePlan.cta}
            </Button>
          </section>

          {/* Pro Tier Card */}
          <section className="relative flex flex-col justify-between rounded-3xl border border-gray-800 bg-[#181719] p-8 text-white shadow-lg">
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/coinmind-white.svg"
                    alt="CoinMind AI"
                    width={32}
                    height={32}
                    className="h-8 w-8 flex-none"
                  />
                  <h3 className="text-lg font-bold text-white">
                    {proPlan.name}
                  </h3>
                </div>
                <span className="rounded-full border border-coinmind-accent/40 bg-coinmind-accent/15 px-3 py-1 text-xs font-semibold text-coinmind-accent">
                  {proPlan.badge}
                </span>
              </div>

              <p className="mt-6 flex items-baseline gap-1.5 text-4xl font-bold tracking-tight text-white">
                <span>{proDisplayPrice}</span>
                <span className="text-base font-normal text-gray-400">
                  {proPeriodSuffix}
                </span>
              </p>

              <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
                {proPlan.description}
              </p>

              <ul
                role="list"
                className="mt-7 divide-y divide-white/10 border-t border-white/10 text-sm text-gray-200"
              >
                {proPlan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 py-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-coinmind-accent/20 text-coinmind-accent">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(copy.pricing.waitlistSubject)}`}
              variant="outline"
              color="white"
              aria-label={`${proPlan.cta} (${proPlan.name})`}
              onClick={() =>
                trackLandingEvent('pricing_cta_click', {
                  plan: 'pro_waitlist',
                  period: activePeriod,
                })
              }
              className="mt-8 w-full py-3.5 text-base"
            >
              {proPlan.cta}
            </Button>
          </section>
        </div>

        {/* Honest beta note & reassurances */}
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm text-gray-600">{copy.pricing.honestNote}</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-gray-600 sm:text-sm">
            {copy.pricing.reassurances.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <Check
                  className="h-4 w-4 text-coinmind-income"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
