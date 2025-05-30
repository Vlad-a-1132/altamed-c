/** @type {import('next').NextConfig} */
const nextConfig = {
  // Настройки для Cloudflare Pages
  output: 'standalone',
  
  // Настройки изображений
  images: {
    unoptimized: true,
  },
  
  // Настройки для оптимизации
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Поддержка TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint настройки
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Экспериментальные функции для Cloudflare
  experimental: {
    runtime: 'nodejs',
  },
}

module.exports = nextConfig 