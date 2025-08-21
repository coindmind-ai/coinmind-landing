'use client'

import { useState } from 'react'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Redirect to the main app login page
    window.location.href = 'https://www.coinmind-ai.com/auth/login'
  }

  return (
    <AuthLayout
      title="Sign in to account"
      subtitle={
        <>
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-cyan-600">
            Sign up
          </Link>{' '}
          for a free trial.
        </>
      }
    >
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <TextField
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        <Button type="submit" color="cyan" className="mt-8 w-full" disabled={isLoading}>
          {isLoading ? 'Redirecting...' : 'Sign in to account'}
        </Button>
      </form>
    </AuthLayout>
  )
}
