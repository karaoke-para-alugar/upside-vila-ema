import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, sanitizeHtml } from '@/lib/wordpress';
import { generatePageMetadata } from '@/lib/seo';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schemas';
import { SchemaJsonLd } from '@/components/SchemaJsonLd';
import { SITE_URL } from '@/lib/constants';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
};

// Gera o Metadata dinâmico usando a lib/seo centralizada
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return generatePageMetadata({
      title: 'Post não encontrado',
      description: 'O artigo solicitado não foi encontrado.',
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  const yoast = post.yoast_head_json;
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];

  return generatePageMetadata({
    title: yoast?.title || post.title.rendered,
    description: yoast?.description || post.excerpt.rendered.replace(/<[^>]+>/g, '').trim(),
    path: `/blog/${slug}`,
    ogImage: featuredMedia?.source_url || yoast?.og_image?.[0]?.url,
    type: 'article',
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  const imageUrl = featuredMedia?.source_url;

  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  // Limpa possíveis scripts injetados no conteúdo HTML do WordPress
  const cleanContent = sanitizeHtml(post.content.rendered);

  // Schemas: BlogPosting + BreadcrumbList
  const articleSchema = generateArticleSchema({
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]+>/g, '').trim(),
    url: `${SITE_URL}/blog/${slug}`,
    imageUrl: imageUrl,
    datePublished: post.date,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blog` },
    { name: post.title.rendered.replace(/<[^>]+>/g, ''), url: `${SITE_URL}/blog/${slug}` },
  ]);

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      {/* Schema JSON-LD: BlogPosting + BreadcrumbList */}
      <SchemaJsonLd schema={[articleSchema, breadcrumbSchema]} />

      <article className="container mx-auto px-4 max-w-4xl">

        {/* Breadcrumbs visíveis (reflete o schema) */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
            <li>/</li>
            <li className="text-slate-800 font-medium truncate max-w-xs" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </ol>
        </nav>

        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para o Blog
          </Link>

          <h1
            className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          <div className="flex items-center text-slate-500 text-sm">
            <span>Publicado em {formattedDate}</span>
          </div>
        </div>

        {imageUrl && (
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-lg">
            <img
              src={imageUrl}
              alt={featuredMedia?.alt_text || post.title.rendered}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div
          className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 prose prose-lg prose-blue max-w-none
                     [&>p]:mb-6 [&>p]:text-slate-700 [&>p]:leading-relaxed
                     [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-10 [&>h2]:mb-4
                     [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:mt-8 [&>h3]:mb-3
                     [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-6 [&>ul]:text-slate-700
                     [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:mb-6 [&>ol]:text-slate-700
                     [&>img]:rounded-xl [&>img]:my-8 [&>img]:shadow-md
                     [&_a]:text-blue-600 [&_a]:underline hover:[&_a]:text-blue-800"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />

      </article>
    </main>
  );
}
