// lib/seo.ts — Funções reutilizáveis para geração de Metadata do Next.js App Router
// Baseado nas skills: seo-meta-optimizer, especialista-seo e nextjs-app-router-patterns

import { Metadata } from 'next';
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  OG_IMAGE_URL,
} from './constants';

/* ──────────────────── Tipos ───────────────────────────────────── */

interface PageSeoProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

/* ──────────────── generatePageMetadata ─────────────────────────── */

/**
 * Gera o objeto Metadata completo do Next.js para qualquer página.
 * Inclui: Title, Description, Canonical, Open Graph, Twitter Card, Robots.
 *
 * Uso:
 *   export const metadata = generatePageMetadata({ title: '...', description: '...', path: '/apartamentos' });
 *   ou dentro de generateMetadata() para páginas dinâmicas.
 */
export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex = false,
  type = 'website',
  publishedTime,
  modifiedTime,
}: PageSeoProps): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage || OG_IMAGE_URL;

  // Proteção contra indexação de staging/localhost
  const isStaging =
    process.env.NEXT_PUBLIC_SITE_URL?.includes('localhost') ||
    process.env.NEXT_PUBLIC_SITE_URL?.includes('staging') ||
    process.env.VERCEL_ENV === 'preview';

  const shouldNoIndex = noIndex || isStaging;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'pt_BR',
      type,
      ...(type === 'article' && publishedTime
        ? { publishedTime, modifiedTime: modifiedTime || publishedTime }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: shouldNoIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          'max-image-preview': 'large' as const,
          'max-snippet': -1,
          'max-video-preview': -1,
        },
  };
}

/* ──────────────── Title Template (usado no layout.tsx) ─────────── */

/**
 * Retorna o objeto de metadata base para o layout raiz.
 * Aplica o title template: "Página | Upside Vila Ema"
 */
export function getRootMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${SITE_NAME} – Apartamentos na Vila Ema SP`,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    openGraph: {
      title: {
        default: `${SITE_NAME} – Apartamentos na Vila Ema SP`,
        template: `%s | ${SITE_NAME}`,
      },
      description: SITE_DESCRIPTION,
      siteName: SITE_NAME,
      locale: 'pt_BR',
      type: 'website',
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: SITE_URL,
    },
  };
}
