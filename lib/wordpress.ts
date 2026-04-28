const BASE_URL = 'https://upside-vila-ema.online/wp-json/wp/v2';

export interface Post {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export async function getPosts(limit = 6): Promise<Post[]> {
  const res = await fetch(`${BASE_URL}/posts?_embed&per_page=${limit}`, {
    next: { revalidate: 3600 }, // Cache por 1 hora
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const res = await fetch(`${BASE_URL}/posts?_embed&slug=${slug}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return null;
  }

  const posts = await res.json();
  return posts[0] || null;
}
