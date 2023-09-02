/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['default', 'en', 'pt'],
    defaultLocale: 'default',
    localeDetection: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
