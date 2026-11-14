'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { useLandingLanguage } from '@/components/LanguageProvider'
import {
  APP_LOGIN_URL,
  GOOGLE_PLAY_URL,
  SUPPORT_EMAIL,
} from '@/lib/i18n/landing-copy'
import { trackLandingEvent } from '@/lib/analytics'
import qrCode from '@/images/qr-code.svg'

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  const { copy } = useLandingLanguage()

  return (
    <footer className="border-t border-gray-200 bg-[#fbfbfb]">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-10 py-14 lg:flex-row lg:items-center">
          <div className="max-w-md">
            <div className="flex items-center gap-3 text-gray-900">
              <Logomark className="h-10 w-10 flex-none" />
              <div>
                <p dir="ltr" className="text-lg font-bold text-coinmind-primary">
                  CoinMind AI
                </p>
                <p className="text-xs font-medium text-gray-600">
                  {copy.footer.tagline}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              {copy.footer.description}
            </p>
            <nav
              aria-label={copy.footer.tagline}
              className="mt-6 flex flex-wrap gap-x-7 gap-y-2"
            >
              <NavLinks />
            </nav>
          </div>

          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLandingEvent('google_play_click')}
            className="group relative flex items-center gap-6 self-stretch rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-coinmind-accent hover:shadow-md sm:self-auto lg:p-7"
          >
            <div className="relative flex h-20 w-20 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-coinmind-accent transition-colors group-hover:stroke-coinmind-primary" />
              <Image
                src={qrCode}
                alt={copy.footer.qrAlt}
                width={68}
                height={68}
                className="h-[68px] w-[68px] rounded-sm"
                unoptimized
              />
            </div>
            <div className="max-w-xs">
              <p className="text-base font-bold text-coinmind-primary">
                {copy.footer.qrTitle}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                {copy.footer.qrDescription}
              </p>
              <p className="mt-2.5 text-xs font-semibold text-coinmind-primary group-hover:underline">
                {copy.footer.qrCta}
              </p>
            </div>
          </a>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 py-8 text-xs text-gray-500 sm:text-sm md:flex-row">
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {copy.footer.copyright}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="transition-colors hover:text-coinmind-primary"
            >
              {copy.footer.privacy}
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-coinmind-primary"
            >
              {copy.footer.terms}
            </Link>
            <Link
              href="/data-deletion-request"
              className="transition-colors hover:text-coinmind-primary"
            >
              {copy.footer.dataDeletion}
            </Link>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="transition-colors hover:text-coinmind-primary"
            >
              {copy.footer.contactSupport}
            </a>
            <Link
              href={APP_LOGIN_URL}
              className="font-medium text-coinmind-primary hover:underline"
            >
              {copy.footer.webAppLogin}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
