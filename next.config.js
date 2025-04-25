/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/web-3d' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/web-3d/' : '',
}

module.exports = nextConfig 