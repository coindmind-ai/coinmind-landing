'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useLandingLanguage } from '@/components/LanguageProvider'

export function NavLinks() {
  const { copy } = useLandingLanguage()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const timeoutRef = useRef<number | null>(null)

  const links: Array<[string, string]> = [
    [copy.nav.howItWorks, '/#demo'],
    [copy.nav.features, '/#features'],
    [copy.nav.security, '/#security'],
    [copy.nav.pricing, '/#pricing'],
    [copy.nav.faqs, '/#faqs'],
  ]

  return links.map(([label, href], index) => (
    <Link
      key={href}
      href={href}
      className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-coinmind-primary"
      onMouseEnter={() => {
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current)
        }
        setHoveredIndex(index)
      }}
      onMouseLeave={() => {
        timeoutRef.current = window.setTimeout(() => {
          setHoveredIndex(null)
        }, 180)
      }}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-coinmind-accent/15"
            layoutId="hoverBackground"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.18, ease: 'easeOut' },
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              transition: { duration: 0.14, ease: 'easeIn' },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ))
}
