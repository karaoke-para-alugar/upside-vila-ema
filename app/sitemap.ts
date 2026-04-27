// app/sitemap.ts — Sitemap dinâmico que inclui rotas públicas + posts do blog
// Regra: Nunca incluir rotas privadas (/obrigado, /api), páginas de staging ou admin.

import { MetadataRoute } from 'next';
import { SITE_URL, PUBLIC_ROUTES } from '@/lib/constants';
import { getPosts } from '@/lib/wordpress';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Rotas estáticas públicas
  const staticRoutes: MetadataRoute.Sitemap = PUBLIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // 2. Posts dinâmicos do blog (vindos do WordPress Headless)
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPosts(50);
    blogRoutes = posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error('Erro ao gerar sitemap dos posts:', error);
  }

  return [...staticRoutes, ...blogRoutes];
}
