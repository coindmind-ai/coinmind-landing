'use client'

import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import {
  type MotionProps,
  type Variant,
  type Variants,
  AnimatePresence,
  motion,
} from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import {
  DiageoLogo,
  LaravelLogo,
  MirageLogo,
  ReversableLogo,
  StatamicLogo,
  StaticKitLogo,
  TransistorLogo,
  TupleLogo,
} from '@/components/StockLogos'

const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

interface CustomAnimationProps {
  isForwards: boolean
  changeCount: number
}

const features = [
  {
    name: 'AI-Powered Voice & Chat',
    description:
      'Simply speak or type to CoinMind about your expenses in any language. Our AI understands natural language and automatically categorizes your transactions with intelligent insights.',
    icon: DeviceUserIcon,
    screen: ChatScreen,
    benefits: ['Natural language processing', 'Multi-language support', 'Automatic categorization'],
  },
  {
    name: 'Multi-Language Support',
    description:
      'Track expenses in English, Arabic, Spanish, French, German, and 170+ languages. CoinMind understands and responds in your preferred language with perfect accuracy.',
    icon: DeviceNotificationIcon,
    screen: LanguageScreen,
    benefits: ['170+ languages', 'Perfect accuracy', 'Local context'],
  },
  {
    name: 'Smart Receipt OCR',
    description:
      'Take a photo of your receipt and let our AI extract all the details automatically. No more manual data entry - just snap and track instantly.',
    icon: DeviceTouchIcon,
    screen: ReceiptScreen,
    benefits: ['Instant extraction', 'High accuracy', 'No manual entry'],
  },
]

function DeviceUserIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

function DeviceNotificationIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#A3A3A3"
      />
      <path
        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
        fill="#737373"
      />
    </svg>
  )
}

function DeviceTouchIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

const headerAnimation: Variants = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards: Variant = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  transition: { duration: 0.4 },
}

const bodyVariantForwards: Variant = (custom: CustomAnimationProps) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation: MotionProps = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom: CustomAnimationProps, ...props) =>
      custom.isForwards
        ? bodyVariantForwards(custom, ...props)
        : bodyVariantBackwards,
    animate: (custom: CustomAnimationProps) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom: CustomAnimationProps, ...props) =>
      custom.isForwards
        ? bodyVariantBackwards
        : bodyVariantForwards(custom, ...props),
  },
}

type ScreenProps =
  | {
      animated: true
      custom: CustomAnimationProps
    }
  | { animated?: false }

function ChatScreen(props: ScreenProps) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Transactions</AppScreen.Title>
        <AppScreen.Subtitle>
          Track your spending
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="flex flex-col h-full">
          {/* Header with Balance */}
          <div className="px-4 py-6 text-center">
            <div className="text-2xl font-bold text-gray-900">USD 700.47</div>
            <div className="text-sm text-gray-600">Cash Flow</div>
          </div>

          {/* Search Bar */}
          <div className="px-4 pb-4">
            <div className="flex items-center space-x-3">
              <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 flex items-center">
                <svg className="w-4 h-4 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="flex-1 text-sm bg-transparent outline-none"
                  readOnly
                />
              </div>
              <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Month Navigation */}
          <div className="px-4 pb-4">
            <div className="flex items-center justify-between">
              <button className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1">
                <span className="text-sm text-gray-700">By Month</span>
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-900">July 2025</span>
                <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Spending Overview Button */}
          <div className="px-4 pb-4">
            <button className="w-full bg-gray-100 rounded-full px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-900">Spending Overview</span>
              </div>
              <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Transaction List Header */}
          <div className="border-t border-gray-200 px-4 py-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-900">Thursday, July 31, 2025</span>
              <span className="text-sm font-medium text-gray-900">USD 711.72</span>
            </div>
          </div>

          {/* Transaction List */}
          <div className="flex-1 px-4 space-y-3">
            {/* Transaction 1 - Food & Dining */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Food & Dining</div>
                <div className="text-xs text-gray-500">Unknown • spent on groceries</div>
              </div>
              <div className="text-sm font-medium text-red-600">-USD 50.00</div>
            </div>

            {/* Transaction 2 - Food & Dining */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Food & Dining</div>
                <div className="text-xs text-gray-500">Unknown • groceries</div>
              </div>
              <div className="text-sm font-medium text-red-600">-USD 50.00</div>
            </div>

            {/* Transaction 3 - Salary */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Salary</div>
                <div className="text-xs text-gray-500">Unknown • my salary</div>
              </div>
              <div className="text-sm font-medium text-green-600">+USD 1,000.00</div>
            </div>

            {/* Transaction 4 - Gift */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Gift</div>
                <div className="text-xs text-gray-500">my dad • my dad take from me 30$</div>
              </div>
              <div className="text-sm font-medium text-red-600">-USD 30.00</div>
            </div>

            {/* Transaction 5 - Gift Income */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">Gift</div>
                <div className="text-xs text-gray-500">dad • my dad give me 100 EGP</div>
              </div>
              <div className="text-sm font-medium text-green-600">EGP 100.00</div>
            </div>
          </div>

          {/* Floating Action Button */}
          <div className="absolute bottom-4 right-4">
            <button className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function LanguageScreen(props: ScreenProps) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Multi-Language</AppScreen.Title>
        <AppScreen.Subtitle>Support for 170+ languages</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="divide-y divide-gray-100">
          {[
            {
              language: 'English',
              example: 'I spent $50 on groceries',
              color: '#F9322C',
            },
            {
              language: 'Arabic',
              example: 'دفعت 200 ريال على الطعام',
              color: '#5A67D8',
            },
            {
              language: 'Spanish',
              example: 'Gasté 25 euros en gasolina',
              color: '#2A5B94',
            },
            {
              language: 'French',
              example: 'J\'ai dépensé 30 euros pour le transport',
              color: '#3320A7',
            },
            {
              language: 'German',
              example: 'Ich habe 40 Euro für Lebensmittel ausgegeben',
              color: '#2A3034',
            },
          ].map((lang) => (
            <div key={lang.language} className="flex items-center gap-4 px-4 py-3">
              <div
                className="flex-none rounded-full w-8 h-8 flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: lang.color }}
              >
                {lang.language.charAt(0)}
              </div>
              <div className="flex-auto text-sm text-gray-900">
                {lang.language}
              </div>
              <div className="flex-none text-right">
                <div className="text-xs text-gray-500 max-w-32 truncate">
                  {lang.example}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function ReceiptScreen(props: ScreenProps) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(props.animated ? headerAnimation : {})}>
        <AppScreen.Title>Receipt OCR</AppScreen.Title>
        <AppScreen.Subtitle>
          Smart receipt scanning
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        {...(props.animated ? { ...bodyAnimation, custom: props.custom } : {})}
      >
        <div className="px-4 py-6">
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="text-gray-500 text-sm">📷 Take photo of receipt</div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Store:</span>
                <span className="text-gray-900">Walmart</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Date:</span>
                <span className="text-gray-900">Dec 15, 2024</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Category:</span>
                <span className="text-gray-900">Groceries</span>
              </div>
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-gray-500">Total:</span>
                <span className="text-gray-900">$67.89</span>
              </div>
            </div>
            <div className="rounded-lg bg-gray-900 px-3 py-2 text-center text-sm font-semibold text-white">
              Add Transaction
            </div>
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function usePrevious<T>(value: T) {
  let ref = useRef<T | undefined>(undefined)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true },
  )

  return (
    <TabGroup
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <TabList className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-all duration-300 hover:bg-gray-800/30 hover:scale-105"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 border border-coinmind-accent/20"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-coinmind-primary/10 border border-coinmind-accent/20">
                  <feature.icon className="h-8 w-8 text-coinmind-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">
                    <Tab className="text-left data-selected:not-data-focus:outline-hidden">
                      <span className="absolute inset-0 rounded-2xl" />
                      {feature.name}
                    </Tab>
                  </h3>
                  <p className="mt-3 text-base text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Benefits */}
                  {feature.benefits && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {feature.benefits.map((benefit, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-coinmind-accent/10 text-coinmind-accent border border-coinmind-accent/20"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </TabList>
      <div className="relative col-span-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#18181b" className="animate-spin-slower" />
        </div>
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <TabPanels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <TabPanel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-32 data-selected:not-data-focus:outline-hidden"
                  >
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </TabPanel>
                ) : null,
              )}
            </AnimatePresence>
          </TabPanels>
        </PhoneFrame>
      </div>
    </TabGroup>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef<React.ElementRef<'div'>>(null)
  let slideRefs = useRef<Array<React.ElementRef<'div'>>>([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLDivElement) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      },
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => {
              if (ref) {
                slideRefs.current[featureIndex] = ref
              }
            }}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 px-5 py-6 border border-gray-700/50 shadow-2xl">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#18181b"
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                />
              </div>
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900/95 to-gray-800/80 p-6 backdrop-blur-sm sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-coinmind-primary/10">
                    <feature.icon className="h-6 w-6 text-coinmind-accent" />
                  </div>
                  <h3 className="text-sm font-bold text-white sm:text-lg">
                    {feature.name}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Benefits */}
                {feature.benefits && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {feature.benefits.map((benefit, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-coinmind-accent/10 text-coinmind-accent border border-coinmind-accent/20"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-1 w-6 rounded-full transition-all duration-300',
              featureIndex === activeIndex ? 'bg-coinmind-accent' : 'bg-gray-600 hover:bg-gray-500',
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for AI-powered expense tracking"
      className="bg-gradient-to-br from-gray-900 via-gray-900 to-coinmind-primary/20 py-20 sm:py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-coinmind-primary/5 to-transparent"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-coinmind-accent/20 to-coinmind-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-coinmind-income/20 to-coinmind-expense/20 rounded-full blur-2xl"></div>
      
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-coinmind-accent/10 px-4 py-2 text-sm font-medium text-coinmind-accent mb-6">
            <span className="mr-2">✨</span>
            Powerful AI Features
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Every feature you need for{' '}
            <span className="bg-gradient-to-r from-coinmind-accent to-white bg-clip-text text-transparent">
              smart expense tracking
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-300 leading-relaxed">
            CoinMind was built for people who want to track their finances intelligently. 
            Our AI understands natural language, supports multiple languages, and makes expense tracking effortless.
          </p>
          
          {/* Key stats */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-coinmind-income">170+</div>
              <div className="text-sm text-gray-400">Languages Supported</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-coinmind-accent">99%</div>
              <div className="text-sm text-gray-400">OCR Accuracy</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-coinmind-expense">Instant</div>
              <div className="text-sm text-gray-400">Processing Speed</div>
            </div>
          </div>
        </div>
      </Container>
      
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
