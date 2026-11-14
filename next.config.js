/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/login',
        destination: 'https://app.coinmind-ai.com/auth/login',
        permanent: true,
      },
      {
        source: '/register',
        destination: 'https://app.coinmind-ai.com/auth/signup',
        permanent: true,
      },
      {
        source: '/auth/:path*',
        destination: 'https://app.coinmind-ai.com/auth/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
