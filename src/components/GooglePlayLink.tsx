'use client'

import Link from 'next/link'
import { useLandingLanguage } from '@/components/LanguageProvider'
import { GOOGLE_PLAY_URL } from '@/lib/i18n/landing-copy'
import { trackLandingEvent } from '@/lib/analytics'

export function GooglePlayLink({ className = '' }: { className?: string }) {
  const { copy } = useLandingLanguage()

  return (
    <Link
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLandingEvent('google_play_click')}
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-2xs transition-all duration-200 hover:border-coinmind-primary/50 hover:bg-gray-50 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 flex-none text-coinmind-primary"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
      </svg>
      <div className="text-start leading-tight">
        <div className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
          {copy.hero.googlePlayTop}
        </div>
        <div className="text-sm font-semibold text-coinmind-primary">
          {copy.hero.googlePlayBottom}
        </div>
      </div>
    </Link>
  )
}
