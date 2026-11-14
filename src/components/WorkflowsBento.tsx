'use client'

import {
  Mic,
  Globe2,
  ReceiptText,
  BarChart3,
  CheckCircle2,
} from 'lucide-react'
import { Container } from '@/components/Container'
import { useLandingLanguage } from '@/components/LanguageProvider'

export function WorkflowsBento() {
  const { copy } = useLandingLanguage()
  const { cards } = copy.workflows

  return (
    <section
      id="features"
      aria-labelledby="workflows-heading"
      className="relative overflow-hidden bg-[#181719] py-20 text-white sm:py-28"
    >
      {/* Subtle warm glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-1/4 h-80 w-80 rounded-full bg-coinmind-accent/12 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-coinmind-accent/35 bg-coinmind-accent/12 px-3.5 py-1 text-xs font-semibold text-coinmind-accent sm:text-sm">
            {copy.workflows.badge}
          </span>
          <h2
            id="workflows-heading"
            className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {copy.workflows.titleStart}{' '}
            <span className="text-coinmind-accent">
              {copy.workflows.titleHighlight}
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
            {copy.workflows.subtitle}
          </p>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Card 1: Voice & Natural Chat */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-8 lg:col-span-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-coinmind-accent/15 text-coinmind-accent">
                  <Mic className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-coinmind-accent uppercase">
                  {cards.voiceChat.eyebrow}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">
                {cards.voiceChat.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
                {cards.voiceChat.description}
              </p>
            </div>

            <div className="mt-7 space-y-2.5 rounded-2xl border border-white/10 bg-black/30 p-4">
              {cards.voiceChat.examples.map((ex) => (
                <div
                  key={ex.text}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white/[0.04] px-3.5 py-2.5 text-xs sm:text-sm"
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span className="inline-flex flex-none items-center justify-center rounded-md bg-coinmind-accent/20 px-2 py-0.5 text-[11px] font-bold text-coinmind-accent">
                      {ex.badge}
                    </span>
                    <span className="truncate text-gray-100">{ex.text}</span>
                  </div>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-coinmind-accent">
                    {ex.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: 170+ Currencies */}
          <div className="flex flex-col justify-between rounded-3xl border border-coinmind-accent/25 bg-linear-to-br from-white/[0.06] to-coinmind-accent/[0.08] p-7 sm:p-8 lg:col-span-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-coinmind-accent/20 text-coinmind-accent">
                  <Globe2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-coinmind-accent uppercase">
                  {cards.multiCurrency.eyebrow}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">
                {cards.multiCurrency.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
                {cards.multiCurrency.description}
              </p>
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-black/35 p-4">
              <div className="mb-3 flex items-center justify-between text-xs text-gray-400">
                <span>{cards.multiCurrency.homeCurrencyNote}</span>
                <span className="font-semibold text-coinmind-accent">
                  {cards.multiCurrency.autoFxBadge}
                </span>
              </div>
              <div className="divide-y divide-white/10">
                {cards.multiCurrency.ledger.map((row) => (
                  <div
                    key={row.item}
                    className="flex items-center justify-between gap-3 py-2.5 text-xs sm:text-sm"
                  >
                    <span className="truncate font-medium text-gray-200">
                      {row.item}
                    </span>
                    <div className="flex shrink-0 items-center gap-3 font-medium tabular-nums">
                      <span className="text-gray-400">{row.original}</span>
                      <span
                        className={`font-semibold ${
                          row.type === 'income'
                            ? 'text-green-400'
                            : 'text-[#e07a6b]'
                        }`}
                      >
                        {row.converted}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Receipt OCR & Bank Statement Import */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-8 lg:col-span-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-coinmind-accent/15 text-coinmind-accent">
                  <ReceiptText className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-coinmind-accent uppercase">
                  {cards.receiptAndCsv.eyebrow}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                {cards.receiptAndCsv.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
                {cards.receiptAndCsv.description}
              </p>
            </div>

            <ul role="list" className="mt-6 space-y-2.5">
              {cards.receiptAndCsv.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-2.5 text-sm text-gray-200"
                >
                  <CheckCircle2
                    className="h-4 w-4 flex-none text-coinmind-accent"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 4: AI Insights & Reports */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-8 lg:col-span-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-coinmind-accent/15 text-coinmind-accent">
                  <BarChart3 className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-coinmind-accent uppercase">
                  {cards.insightsExport.eyebrow}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                {cards.insightsExport.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
                {cards.insightsExport.description}
              </p>
            </div>

            <ul role="list" className="mt-6 space-y-2.5">
              {cards.insightsExport.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-2.5 text-sm text-gray-200"
                >
                  <CheckCircle2
                    className="h-4 w-4 flex-none text-coinmind-accent"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
