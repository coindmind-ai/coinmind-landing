import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
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
  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-gray-50 border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div className="max-w-md">
            <div className="flex items-center text-gray-900">
              <Logomark className="h-12 w-12 flex-none fill-coinmind-primary" />
              <div className="ml-4">
                <p className="text-xl font-bold text-coinmind-primary">CoinMind</p>
                <p className="mt-1 text-sm text-gray-600">Your AI-Powered Personal Finance Assistant.</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Track expenses with voice commands, analyze spending patterns, and get intelligent insights about your finances in any language.
            </p>
            <nav className="mt-8 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          
          <div className="group relative -mx-4 flex items-center self-stretch p-6 transition-all duration-300 hover:bg-white hover:shadow-lg sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-8 border border-gray-200/50">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-coinmind-accent transition-colors group-hover:stroke-coinmind-primary" />
              <Image src={qrCode} alt="" unoptimized />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-lg font-semibold text-coinmind-primary">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Download the app
                </Link>
              </p>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Scan the QR code to download the CoinMind app from the App Store or Google Play.
              </p>
              <div className="mt-4 flex items-center text-xs text-gray-500">
                <span className="text-coinmind-income mr-1">★</span>
                <span>4.8/5 Rating • 10K+ Downloads</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <form className="flex w-full justify-center md:w-auto">
            <div className="flex items-center gap-2">
              <TextField
                type="email"
                aria-label="Email address"
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="w-72 min-w-0 shrink border-gray-300 focus:border-coinmind-primary focus:ring-coinmind-primary bg-white text-gray-900 placeholder-gray-500"
              />
              <Button 
                type="submit" 
                variant="solid"
                color="primary"
                className="text-sm px-4 py-2 whitespace-nowrap"
              >
                <span className="hidden lg:inline">Join newsletter</span>
                <span className="lg:hidden">Subscribe</span>
              </Button>
            </div>
          </form>
          
          <div className="mt-6 flex flex-col items-center gap-4 md:mt-0 md:flex-row md:gap-8">
            <p className="text-sm text-gray-500">
              &copy; Copyright {new Date().getFullYear()} CoinMind. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-coinmind-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-coinmind-primary transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        
        {/* Additional footer info */}
        <div className="border-t border-gray-200 pt-6 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-500">
            <div>
              <h4 className="font-semibold text-coinmind-primary mb-2">Features</h4>
              <ul className="space-y-1">
                <li>Voice Commands</li>
                <li>Multi-Language Support</li>
                <li>Smart Analytics</li>
                <li>Receipt OCR</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-coinmind-primary mb-2">Support</h4>
              <ul className="space-y-1">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Community</li>
                <li>Status</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-coinmind-primary mb-2">Company</h4>
              <ul className="space-y-1">
                <li>About Us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
