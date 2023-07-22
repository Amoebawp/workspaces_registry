/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Savati Registry',
    description: 'The app store for Kasm supported workspaces created by Savati.',
    icon: '/img/logo.svg',
    listUrl: 'https://amoebawp.github.io/workspaces_registry/1.0/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/workspaces_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
