// app/robots.ts — Configuração de Robots para o domínio público
// Bloqueia rotas privadas, API, admin e staging.

import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  // Bloqueia indexação total em ambientes de staging/preview
  const isStaging =
    process.env.NEXT_PUBLIC_SITE_URL?.includes('localhost') ||
    process.env.NEXT_PUBLIC_SITE_URL?.includes('staging') ||
    process.env.VERCEL_ENV === 'preview';

  if (isStaging) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/obrigado', '/api/', '/private/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
