/** @type {import('next').NextConfig} */
const nextConfig = {
  // Статический экспорт для Cloudflare Pages
  output: 'export',
  trailingSlash: true,
  
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
}

module.exports = nextConfig 