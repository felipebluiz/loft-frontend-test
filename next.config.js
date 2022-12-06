/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      },
      {
        source: '/contact',
        destination: '/contato',
        permanent: true
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home'
      },
      {
        source: '/contato',
        destination: '/contact'
      }
    ]
  }
}

module.exports = nextConfig
