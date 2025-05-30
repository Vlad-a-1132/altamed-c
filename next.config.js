/** @type {import('next').NextConfig} */
const nextConfig = {
  // Статический экспорт только для продакшена
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
    distDir: 'out',
  }),
  
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