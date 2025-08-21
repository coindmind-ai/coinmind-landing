import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { GooglePlayLink } from '@/components/GooglePlayLink'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-gradient-to-br from-coinmind-primary via-coinmind-primary/95 to-coinmind-primary/90 py-20 sm:py-28"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#A3B1C6" className="animate-spin-slower opacity-20" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-coinmind-income/20 to-coinmind-expense/20 rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-coinmind-accent/30 to-white/30 rounded-full animate-float"></div>
      
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white mb-8">
            <span className="mr-2">🚀</span>
            Join 10,000+ Users Worldwide
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Start using your{' '}
            <span className="bg-gradient-to-r from-coinmind-accent to-white bg-clip-text text-transparent">
              AI assistant
            </span>{' '}
            today
          </h2>
          
          <p className="mt-6 text-xl text-gray-200 leading-relaxed">
            Join thousands of users who are already using CoinMind&apos;s AI assistant to track expenses with voice commands. 
            Get started in seconds with our{' '}
            <span className="font-semibold text-coinmind-income">free tier</span>.
          </p>
          
          {/* Key benefits */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="flex items-center justify-center">
              <span className="text-coinmind-income mr-2">✓</span>
              No credit card required
            </div>
            <div className="flex items-center justify-center">
              <span className="text-coinmind-income mr-2">✓</span>
              Setup in 2 minutes
            </div>
            <div className="flex items-center justify-center">
              <span className="text-coinmind-income mr-2">✓</span>
              Cancel anytime
            </div>
          </div>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              href="https://www.coinmind-ai.com/auth/signup"
              variant="solid"
              color="white"
              className="font-semibold px-8 py-3"
            >
              Try Web App Free
            </Button>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
              <AppStoreLink />
              <GooglePlayLink />
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-gray-300 mb-4">Trusted by users worldwide</p>
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <span className="text-coinmind-income mr-1">★</span>
                <span className="text-sm">4.8/5 Rating</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm">10K+ Downloads</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm">50+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
