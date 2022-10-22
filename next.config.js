/** @type {import('next').NextConfig} */
const { mainModule } = require('process')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}
module.exports = nextConfig