/** @type {import('next').NextConfig} */
const { mainModule } = require("process");
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    loader: "akamai",
    path: '/next/image',
  },
  // basePath: "/nextjs-pages",
  assetPrefix: "/nextjs-pages",
};
module.exports = nextConfig;
