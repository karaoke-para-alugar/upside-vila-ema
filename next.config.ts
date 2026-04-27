import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upsidevilaema.online',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'upside-vila-ema.online',
      }
    ],
  },
  async redirects() {
    return [];
  },
};

export default nextConfig;
