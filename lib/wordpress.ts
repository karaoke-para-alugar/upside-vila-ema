// lib/wordpress.ts
import { Metadata } from 'next';

const WP_API_URL = process.env.WP_API_URL || 'https://upsidevilaema.online/wp-json';

/**
 * Interfaces para tipagem dos dados da REST API do WordPress
 */
export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  categories: number[];
  yoast_head_json?: YoastHeadJson;
  _embedded?: any;
}

export interface WPPage extends WPPost {}

export interface WPCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
  };
}

export interface YoastHeadJson {
  title: string;
  description: string;
  canonical: string;
  og_title?: string;
  og_description?: string;
  og_image?: Array<{ url: string; width: number; height: number }>;
  robots?: { index: string; follow: string };
  schema?: any;
}

/**
 * Função base segura para Fetch com tratamento de erro
 */
async function fetchWP<T>(endpoint: string, options: RequestInit = {}): Promise<T | null> {
  const url = `${WP_API_URL}${endpoint}`;
  
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 }, // Cache revalidation (1 hour)
      ...options,
    });

    if (!res.ok) {
      console.error(`Erro ao buscar dados do WordPress: ${res.status} ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Falha na conexão com o WordPress (${url}):`, error);
    return null;
  }
}

/**
 * Sanitiza o HTML para evitar scripts e estilos inline inseguros.
 * (Pode ser estendido para usar DOMPurify no server, mas por simplicidade limpamos tags obvias)
 */
export function sanitizeHtml(html: string): string {
  if (!html) return '';
  // Remove scripts inteiros
  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}

/**
 * Busca a lista de Posts (Blog)
 */
export async function getPosts(perPage: number = 10): Promise<WPPost[]> {
  const posts = await fetchWP<WPPost[]>(`/wp/v2/posts?_embed&per_page=${perPage}`);
  return posts || [];
}

/**
 * Busca um único Post por Slug
 */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await fetchWP<WPPost[]>(`/wp/v2/posts?slug=${slug}&_embed`);
  return posts && posts.length > 0 ? posts[0] : null;
}

/**
 * Busca a lista de Páginas
 */
export async function getPages(perPage: number = 10): Promise<WPPage[]> {
  const pages = await fetchWP<WPPage[]>(`/wp/v2/pages?_embed&per_page=${perPage}`);
  return pages || [];
}

/**
 * Busca uma única Página por Slug
 */
export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await fetchWP<WPPage[]>(`/wp/v2/pages?slug=${slug}&_embed`);
  return pages && pages.length > 0 ? pages[0] : null;
}

/**
 * Busca as categorias existentes
 */
export async function getCategories(): Promise<WPCategory[]> {
  const categories = await fetchWP<WPCategory[]>(`/wp/v2/categories?hide_empty=true`);
  return categories || [];
}

/**
 * Busca uma imagem destacada pelo ID
 */
export async function getFeaturedMedia(id: number): Promise<WPMedia | null> {
  if (!id) return null;
  const media = await fetchWP<WPMedia>(`/wp/v2/media/${id}`);
  return media;
}

/**
 * Gera os metadados SEO do Next.js baseados no Yoast Head JSON
 */
export async function getSeoMetadata(slug: string, isPage: boolean = false): Promise<Metadata> {
  const data = isPage ? await getPageBySlug(slug) : await getPostBySlug(slug);
  const yoast = data?.yoast_head_json;

  if (!yoast) {
    return {
      title: 'Upside Vila Ema',
      description: 'Lançamento de apartamentos na Vila Ema.',
    };
  }

  const defaultImage = yoast.og_image?.[0]?.url || '';

  return {
    title: yoast.title,
    description: yoast.description,
    alternates: {
      canonical: yoast.canonical,
    },
    openGraph: {
      title: yoast.og_title || yoast.title,
      description: yoast.og_description || yoast.description,
      url: yoast.canonical,
      siteName: 'Upside Vila Ema',
      images: defaultImage ? [{ url: defaultImage }] : [],
      locale: 'pt_BR',
      type: isPage ? 'website' : 'article',
    },
    robots: {
      index: yoast.robots?.index === 'index',
      follow: yoast.robots?.follow === 'follow',
    },
  };
}
