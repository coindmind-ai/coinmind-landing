'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

const plans = [
  {
    name: 'Free Tier',
    featured: false,
    price: { Monthly: '$0', Annually: '$0' },
    description:
      'Perfect for getting started with personal finance tracking. Forever free.',
    button: {
      label: 'Get started for free',
      href: 'https://www.coinmind-ai.com/auth/signup',
    },
    features: [
      '10 transactions per month (typing, voice)',
      'Basic receipt OCR (3 receipts/month)',
      'Single currency support (USD only)',
      'Basic dashboard (income/expenses only)',
      'CSV import (up to 5 transactions)',
      'Community support',
    ],
    logomarkClassName: 'fill-gray-300',
    badge: null,
  },
  {
    name: 'Pro Tier',
    featured: true,
    price: { Monthly: '$9.99', Annually: '$99' },
    description:
      'For serious users who want unlimited access and advanced features.',
    button: {
      label: 'Subscribe to Pro',
      href: 'https://www.coinmind-ai.com/auth/signup',
    },
    features: [
      'Unlimited transactions',
      'Advanced receipt OCR',
      'Multi-currency support (170+ currencies)',
      'Advanced analytics (trends, predictions, insights)',
      'Chat, voice, and charts',
      'CSV/Excel import (unlimited)',
      'Export capabilities (PDF reports, tax exports)',
      'Priority support',
    ],
    logomarkClassName: 'fill-white',
    badge: 'Most Popular',
  },
]

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  button,
  features,
  activePeriod,
  logomarkClassName,
  featured = false,
  badge,
}: {
  name: string
  price: {
    Monthly: string
    Annually: string
  }
  description: string
  button: {
    label: string
    href: string
  }
  features: Array<string>
  activePeriod: 'Monthly' | 'Annually'
  logomarkClassName?: string
  featured?: boolean
  badge?: string | null
}) {
  return (
    <section
      className={clsx(
        'relative flex flex-col overflow-hidden rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl',
        featured 
          ? 'order-first bg-gradient-to-br from-coinmind-primary to-coinmind-primary/90 lg:order-0 scale-105 border-2 border-coinmind-accent/20' 
          : 'bg-white border border-gray-200 hover:border-coinmind-accent/30 hover:scale-105'
      )}
    >
      {/* Badge */}
      {badge && (
        <div className="mb-4">
          <span className="inline-flex items-center justify-center w-full rounded-full bg-coinmind-income px-4 py-1 text-xs font-semibold text-white shadow-lg">
            {badge}
          </span>
        </div>
      )}
      
      <h3
        className={clsx(
          'flex items-center text-lg font-bold',
          featured ? 'text-white' : 'text-gray-900',
        )}
      >
        <Logomark className={clsx('h-8 w-8 flex-none', logomarkClassName)} />
        <span className="ml-4">{name}</span>
      </h3>
      
      <p
        className={clsx(
          'relative mt-6 flex text-4xl font-bold tracking-tight',
          featured ? 'text-white' : 'text-gray-900',
        )}
      >
        {price.Monthly === price.Annually ? (
          price.Monthly
        ) : (
          <>
            <span
              aria-hidden={activePeriod === 'Annually'}
              className={clsx(
                'transition duration-300',
                activePeriod === 'Annually' &&
                  'pointer-events-none translate-x-6 opacity-0 select-none',
              )}
            >
              {price.Monthly}
            </span>
            <span
              aria-hidden={activePeriod === 'Monthly'}
              className={clsx(
                'absolute top-0 left-0 transition duration-300',
                activePeriod === 'Monthly' &&
                  'pointer-events-none -translate-x-6 opacity-0 select-none',
              )}
            >
              {price.Annually}
            </span>
          </>
        )}
        {price.Monthly !== '$0' && (
          <span className={clsx(
            'text-lg font-normal ml-2',
            featured ? 'text-gray-300' : 'text-gray-600'
          )}>
            /{activePeriod === 'Monthly' ? 'mo' : 'year'}
          </span>
        )}
      </p>
      
      <p
        className={clsx(
          'mt-4 text-base leading-relaxed',
          featured ? 'text-gray-200' : 'text-gray-600',
        )}
      >
        {description}
      </p>
      
      <div className="order-last mt-8 flex-1">
        <ul
          role="list"
          className={clsx(
            '-my-3 divide-y text-sm',
            featured
              ? 'divide-gray-700 text-gray-200'
              : 'divide-gray-200 text-gray-700',
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-3">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none mt-0.5',
                  featured ? 'text-coinmind-income' : 'text-coinmind-income',
                )}
              />
              <span className="ml-4 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button
        href={button.href}
        color={featured ? 'gray' : 'gray'}
        className={clsx(
          'mt-8 w-full text-base font-semibold py-3 transition-all duration-300 transform hover:scale-105',
          featured 
            ? 'bg-white text-coinmind-primary hover:bg-gray-100 shadow-lg hover:shadow-xl' 
            : 'bg-gradient-to-r from-coinmind-primary to-coinmind-primary/90 text-white hover:from-coinmind-primary/90 hover:to-coinmind-primary shadow-lg hover:shadow-xl'
        )}
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        {button.label}
      </Button>
    </section>
  )
}

export function Pricing() {
  let [activePeriod, setActivePeriod] = useState<'Monthly' | 'Annually'>(
    'Monthly',
  )

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="py-20 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that fits your needs. Start free and upgrade when you're ready.
          </p>
        </div>
        
        <div className="mx-auto mt-16 flex max-w-2xl justify-center">
          <RadioGroup
            value={activePeriod}
            onChange={setActivePeriod}
            className="grid grid-cols-2 gap-x-1 rounded-full bg-white p-1 shadow-lg ring-1 ring-gray-200"
          >
            <Radio
              value="Monthly"
              className={({ checked }) =>
                clsx(
                  checked
                    ? 'bg-coinmind-primary text-white shadow-sm'
                    : 'text-gray-900',
                  'cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-coinmind-primary focus:ring-offset-2',
                )
              }
            >
              Monthly
            </Radio>
            <Radio
              value="Annually"
              className={({ checked }) =>
                clsx(
                  checked
                    ? 'bg-coinmind-primary text-white shadow-sm'
                    : 'text-gray-900',
                  'cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-coinmind-primary focus:ring-offset-2',
                )
              }
            >
              Annually
              <span className="ml-1 text-xs text-coinmind-income">Get 2 months free</span>
            </Radio>
          </RadioGroup>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {plans.map((plan) => (
            <div key={plan.name} className="relative pt-8">
              <Plan {...plan} activePeriod={activePeriod} />
            </div>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-sm text-gray-500">
            All plans include a 14-day free trial. No credit card required to start.
          </p>
          <div className="mt-6 flex justify-center space-x-8 text-sm text-gray-500">
            <span className="flex items-center">
              <span className="text-coinmind-income mr-2">✓</span>
              Cancel anytime
            </span>
            <span className="flex items-center">
              <span className="text-coinmind-income mr-2">✓</span>
              No setup fees
            </span>
            <span className="flex items-center">
              <span className="text-coinmind-income mr-2">✓</span>
              Secure & private
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}
