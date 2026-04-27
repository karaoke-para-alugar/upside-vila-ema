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
    return [
      {
        source: '/o-que-tem-na-vila-ema-sao-paulo-conheca-o-upside-vila-ema',
        destination: '/blog/o-que-tem-na-vila-ema-sao-paulo-conheca-o-upside-vila-ema',
        permanent: true,
      },
      {
        source: '/quanto-custa-o-metro-quadrado-na-vila-ema-sao-paulo',
        destination: '/blog/quanto-custa-o-metro-quadrado-na-vila-ema-sao-paulo',
        permanent: true,
      },
      {
        source: '/como-e-morar-na-vila-ema-descubra-o-melhor-de-sao-paulo-para-sua-familia',
        destination: '/blog/como-e-morar-na-vila-ema-descubra-o-melhor-de-sao-paulo-para-sua-familia',
        permanent: true,
      },
      {
        source: '/como-se-inscrever-no-minha-casa-minha-vida-em-sao-paulo-passo-a-passo-atualizado',
        destination: '/blog/como-se-inscrever-no-minha-casa-minha-vida-em-sao-paulo-passo-a-passo-atualizado',
        permanent: true,
      },
      {
        source: '/quem-pode-participar-do-minha-casa-minha-vida-em-sp-requisitos-e-faixas-de-renda',
        destination: '/blog/quem-pode-participar-do-minha-casa-minha-vida-em-sp-requisitos-e-faixas-de-renda',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
