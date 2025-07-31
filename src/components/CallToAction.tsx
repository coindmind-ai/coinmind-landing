import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Start tracking your expenses today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join thousands of users who are already using CoinMind to track their expenses intelligently. 
            Get started in seconds with our free tier.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              href="https://coinmind.vercel.app/auth/signup"
              color="gray"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Try Web App
            </Button>
            <AppStoreLink color="white" />
          </div>
        </div>
      </Container>
    </section>
  )
}
