/** @type {import('next').NextConfig} */
const { mainModule } = require('process')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/nextjs-pages",
  assetPrefix: "/nextjs-pages",
}
module.exports = nextConfig