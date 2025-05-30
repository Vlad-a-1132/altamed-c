const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export only for production
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
    distDir: 'out',
  }),
  
  // Image settings
  images: {
    unoptimized: true,
  },
  
  // Webpack configuration for path aliases
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
  
  // TypeScript support
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint settings
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig 