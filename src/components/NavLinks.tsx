'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  let timeoutRef = useRef<number | null>(null)

  return [
    ['Features', '/#features'],
    ['Pricing', '/#pricing'],
    ['FAQs', '/#faqs'],
    ['Privacy', '/privacy'],
    ['Terms', '/terms'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 delay-150 hover:text-coinmind-primary hover:delay-0"
      onMouseEnter={() => {
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current)
        }
        setHoveredIndex(index)
      }}
      onMouseLeave={() => {
        timeoutRef.current = window.setTimeout(() => {
          setHoveredIndex(null)
        }, 200)
      }}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-coinmind-accent/10 to-coinmind-primary/10"
            layoutId="hoverBackground"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              transition: { duration: 0.15, ease: "easeIn" },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ))
}
