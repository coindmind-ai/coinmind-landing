'use client'

import { Button } from '@/components/Button'
import { CirclesBackground } from '@/components/CirclesBackground'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { useLandingLanguage } from '@/components/LanguageProvider'

export default function NotFound() {
  const { copy } = useLandingLanguage()

  return (
    <Layout>
      <Container className="relative isolate flex h-full flex-col items-center justify-center py-20 text-center sm:py-32">
        <CirclesBackground className="absolute top-1/2 left-1/2 -z-10 mt-44 w-272.5 -translate-x-1/2 -translate-y-1/2 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/30" />
        <p className="text-sm font-semibold text-gray-900">
          {copy.notFound.code}
        </p>
        <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-900">
          {copy.notFound.title}
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          {copy.notFound.description}
        </p>
        <Button href="/" variant="outline" className="mt-8">
          {copy.notFound.cta}
        </Button>
      </Container>
    </Layout>
  )
}
