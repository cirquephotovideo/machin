/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  env: {
    HOST: '0.0.0.0',
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
