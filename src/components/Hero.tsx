import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { AppDemo } from '@/components/AppDemo'
import { AppStoreLink } from '@/components/AppStoreLink'
import { GooglePlayLink } from '@/components/GooglePlayLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="oklch(0.205 0 0)" />
            <stop offset="1" stopColor="oklch(0.708 0.05 60)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="oklch(0.708 0.05 60)" />
            <stop offset="1" stopColor="oklch(0.205 0 0)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden py-12 sm:py-20 lg:py-32 lg:pb-32 xl:pb-36 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-coinmind-accent/10 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-coinmind-primary mb-4 sm:mb-6">
              <span className="mr-2">🚀</span>
              AI-Powered Personal Finance
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl xl:text-6xl">
              Your AI{' '}
              <span className="bg-gradient-to-r from-coinmind-primary to-coinmind-accent bg-clip-text text-transparent">
                Personal Finance
              </span>{' '}
              Assistant
            </h1>
            
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              Simply <span className="font-bold text-coinmind-primary">speak and chat</span> with CoinMind to add and track your income & expenses in any language. 
              <span className="font-semibold text-coinmind-primary"> Our advanced AI understands natural language</span> and <span className="font-semibold text-coinmind-primary">automatically categorizes your transactions</span>, giving you intelligent insights to make smarter financial decisions.
            </p>
            
            {/* Key Benefits */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center text-gray-600 font-semibold">
                <span className="text-coinmind-income mr-1 sm:mr-2">🎤</span>
                <span className="hidden sm:inline">Voice & Chat</span>
                <span className="sm:hidden">Voice</span>
              </div>
              <div className="flex items-center text-gray-600 font-semibold">
                <span className="text-coinmind-income mr-1 sm:mr-2">🌍</span>
                <span className="hidden sm:inline">Multi-Currency</span>
                <span className="sm:hidden">Currency</span>
              </div>
              <div className="flex items-center text-gray-600 font-semibold">
                <span className="text-coinmind-income mr-1 sm:mr-2">🗣️</span>
                <span className="hidden sm:inline">Multi-Language</span>
                <span className="sm:hidden">Language</span>
              </div>
              <div className="flex items-center text-gray-600 font-semibold">
                <span className="text-coinmind-income mr-1 sm:mr-2">🏷️</span>
                <span className="hidden sm:inline">Auto-Categorize</span>
                <span className="sm:hidden">Auto-Tag</span>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:gap-6">
              <Button
                href="https://www.coinmind-ai.com/auth/login"
                variant="solid"
                color="primary"
                className="w-full sm:w-auto text-sm px-6 sm:px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Try Web App Free
              </Button>
              <div className="w-full sm:w-auto">
                <AppStoreLink />
              </div>
              <div className="w-full sm:w-auto">
                <GooglePlayLink />
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2 sm:mb-3">Trusted by users worldwide</p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-400">
                <div className="flex items-center">
                  <span className="text-coinmind-income mr-1">★</span>
                  <span className="text-xs sm:text-sm">4.8/5</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs sm:text-sm">10K+ Downloads</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs sm:text-sm">50+ Countries</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative mt-8 sm:mt-10 lg:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/70 sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[320px] sm:h-[448px] mask-[linear-gradient(to_bottom,white_60%,transparent)] px-4 sm:px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[280px] sm:max-w-[366px] animate-float" priority>
                <AppDemo />
              </PhoneFrame>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-br from-coinmind-income/20 to-coinmind-expense/20 rounded-full animate-pulse-glow hidden lg:block"></div>
            <div className="absolute bottom-20 left-10 w-12 h-12 bg-gradient-to-br from-coinmind-accent/30 to-coinmind-primary/30 rounded-full animate-float hidden lg:block"></div>
          </div>
        </div>
      </Container>
    </div>
  )
}
