'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import { Container } from '@/components/Container'
import { useLandingLanguage } from '@/components/LanguageProvider'
import { SUPPORT_EMAIL } from '@/lib/i18n/landing-copy'
import { trackLandingEvent } from '@/lib/analytics'

export function Faqs() {
  const { copy } = useLandingLanguage()

  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200/80 bg-white py-20 sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full border border-coinmind-accent/40 bg-coinmind-accent/12 px-3.5 py-1 text-xs font-semibold text-coinmind-primary sm:text-sm">
              {copy.faqs.badge}
            </span>
            <h2
              id="faqs-title"
              className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              {copy.faqs.title}
            </h2>
            <p className="mt-4 text-base text-gray-600">
              {copy.faqs.subtitlePrefix}{' '}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-semibold text-coinmind-primary underline decoration-coinmind-accent underline-offset-4 hover:opacity-80"
              >
                {copy.faqs.subtitleLinkLabel}
              </a>
              .
            </p>
          </div>

          <dl className="mt-12 space-y-3">
            {copy.faqs.items.map((faq, index) => (
              <Disclosure
                key={faq.question}
                as="div"
                defaultOpen={index === 0}
                className="rounded-2xl border border-gray-200 bg-[#fbfbfb] px-6 py-4 transition-colors data-open:border-coinmind-accent/60 data-open:bg-white"
              >
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton
                        onClick={() => {
                          if (!open) {
                            trackLandingEvent('faq_expand', { index })
                          }
                        }}
                        className="flex w-full items-center justify-between gap-4 rounded-lg py-1 text-start text-base font-semibold text-gray-900 focus-visible:ring-2 focus-visible:ring-coinmind-primary focus:outline-none"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`h-5 w-5 flex-none text-gray-500 transition-transform duration-200 ${
                            open ? 'rotate-180 text-coinmind-primary' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel
                      as="dd"
                      className="pt-3 pb-1 text-sm leading-relaxed text-gray-600 sm:text-base"
                    >
                      {faq.answer}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
