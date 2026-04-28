import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/wordpress';
import { LeadForm } from '@/components/LeadForm';
import { generatePageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return generatePageMetadata({
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder-blog.jpg';
  const date = new Date(post.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          href="/blog" 
          className="text-brand-orange font-bold flex items-center mb-8 hover:-translate-x-1 transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="15 19l-7-7 7-7" />
          </svg>
          VOLTAR PARA O BLOG
        </Link>

        <header className="mb-12">
          <time className="text-gray-500 block mb-4">{date}</time>
          <h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-outfit leading-tight"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={featuredImage}
              alt={post.title.rendered}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        <div 
          className="blog-content text-gray-700 text-lg leading-relaxed mb-20"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        <div className="border-t border-gray-100 pt-20">
          <h2 className="text-3xl font-bold text-center mb-12 font-outfit">
            Gostou do conteúdo? <span className="text-brand-orange">Conheça o Upside Vila Ema</span>
          </h2>
          <LeadForm />
        </div>
      </div>
    </article>
  );
}
