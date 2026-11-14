'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Globe, Menu, ChevronUp } from 'lucide-react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { useLandingLanguage } from '@/components/LanguageProvider'
import { APP_LOGIN_URL, APP_SIGNUP_URL } from '@/lib/i18n/landing-copy'
import { trackLandingEvent } from '@/lib/analytics'

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof PopoverButton<typeof Link>>,
    'as' | 'className'
  >,
) {
  return (
    <PopoverButton
      as={Link}
      className="block rounded-lg py-1.5 text-base font-medium tracking-tight text-gray-800 transition-colors duration-200 hover:text-coinmind-primary"
      {...props}
    />
  )
}

export function Header() {
  const { copy, toggleLocale } = useLandingLanguage()

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-[#fbfbfb]/85 backdrop-blur-md">
      <nav aria-label="CoinMind AI">
        <Container className="relative z-50 flex items-center justify-between py-4">
          <div className="relative z-10 flex items-center gap-10 xl:gap-14">
            <Link href="/" aria-label="CoinMind AI" className="group">
              <Logo className="h-9 w-auto transition-transform duration-200 group-hover:scale-[1.02]" />
            </Link>
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              <NavLinks />
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={toggleLocale}
              aria-label={copy.nav.langSwitchAria}
              className="relative z-10 inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-800 transition-colors hover:border-coinmind-accent hover:bg-gray-50 sm:text-sm"
            >
              <Globe
                className="h-3.5 w-3.5 text-coinmind-primary"
                aria-hidden="true"
              />
              <span>{copy.nav.langSwitchLabel}</span>
            </button>

            <div className="hidden items-center gap-3 lg:flex">
              <Button
                href={APP_LOGIN_URL}
                variant="outline"
                color="primary"
                onClick={() => trackLandingEvent('header_login_click')}
              >
                {copy.nav.login}
              </Button>
              <Button
                href={APP_SIGNUP_URL}
                variant="solid"
                color="primary"
                onClick={() => trackLandingEvent('header_signup_click')}
              >
                {copy.nav.tryFree}
              </Button>
            </div>

            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="relative z-10 inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white p-2 text-gray-900 transition-colors hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-coinmind-primary focus:outline-none"
                    aria-label={copy.nav.mobileMenuAria}
                  >
                    {open ? (
                      <ChevronUp className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Menu className="h-5 w-5" aria-hidden="true" />
                    )}
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-900/25 backdrop-blur-xs"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -24 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -24,
                            transition: { duration: 0.18 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-3xl border-b border-gray-200 bg-[#fbfbfb] px-6 pt-24 pb-7 shadow-xl"
                        >
                          <div className="space-y-3">
                            <MobileNavLink href="/#demo">
                              {copy.nav.howItWorks}
                            </MobileNavLink>
                            <MobileNavLink href="/#features">
                              {copy.nav.features}
                            </MobileNavLink>
                            <MobileNavLink href="/#security">
                              {copy.nav.security}
                            </MobileNavLink>
                            <MobileNavLink href="/#pricing">
                              {copy.nav.pricing}
                            </MobileNavLink>
                            <MobileNavLink href="/#faqs">
                              {copy.nav.faqs}
                            </MobileNavLink>
                          </div>
                          <div className="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-5">
                            <Button
                              href={APP_LOGIN_URL}
                              variant="outline"
                              color="primary"
                              onClick={() => trackLandingEvent('header_login_click')}
                            >
                              {copy.nav.login}
                            </Button>
                            <Button
                              href={APP_SIGNUP_URL}
                              variant="solid"
                              color="primary"
                              onClick={() => trackLandingEvent('header_signup_click')}
                            >
                              {copy.nav.tryFree}
                            </Button>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
    </header>
  )
}
