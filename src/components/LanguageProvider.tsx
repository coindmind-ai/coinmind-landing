'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  LANDING_COPY,
  type LandingCopy,
  type Locale,
} from '@/lib/i18n/landing-copy'
import { trackLandingEvent } from '@/lib/analytics'

interface LanguageContextValue {
  locale: Locale
  dir: 'ltr' | 'rtl'
  copy: LandingCopy
  setLocale: (next: Locale) => void
  toggleLocale: () => void
}

const STORAGE_KEY = 'coinmind_landing_locale'

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'en',
  dir: 'ltr',
  copy: LANDING_COPY.en,
  setLocale: () => {},
  toggleLocale: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved === 'ar' || saved === 'en') {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLocaleState(saved)
      }
    } catch {
      // Ignore storage access errors in private browsing
    }
  }, [])

  useEffect(() => {
    const dir = locale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = locale
    document.documentElement.dir = dir
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Ignore storage errors
    }
    trackLandingEvent('locale_toggle', { locale: next })
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'ar' : 'en')
  }, [locale, setLocale])

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dir: locale === 'ar' ? 'rtl' : 'ltr',
      copy: LANDING_COPY[locale],
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLandingLanguage() {
  return useContext(LanguageContext)
}
