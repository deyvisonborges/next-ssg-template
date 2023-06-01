/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  distDir: 'build',
  images: { unoptimized: true },
  output: 'export',
  poweredByHeader: false,
  reactStrictMode: true
})
