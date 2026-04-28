import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from '@/lib/wordpress';
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Blog Upside Vila Ema - Notícias e Dicas sobre a Região',
  description: 'Confira as últimas notícias sobre o empreendimento Upside Vila Ema, dicas de decoração e novidades sobre o bairro Vila Ema.',
  path: '/blog',
});

export default async function BlogPage() {
  const posts = await getPosts(12);

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-outfit">
            Blog <span className="text-brand-orange">Upside Vila Ema</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Acompanhe as atualizações da obra, dicas de investimento e tudo sobre a vida na Vila Ema.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder-blog.jpg';
            const date = new Date(post.date).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            });

            return (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                <div className="relative h-64 w-full">
                  <Image
                    src={featuredImage}
                    alt={post.title.rendered}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <time className="text-sm text-gray-500 mb-3">{date}</time>
                  <h2 
                    className="text-2xl font-bold text-gray-900 mb-4 font-outfit hover:text-brand-orange transition-colors"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div 
                    className="text-gray-600 mb-8 line-clamp-3 text-base"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  
                  <div className="mt-auto">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-brand-orange font-bold flex items-center hover:translate-x-1 transition-transform"
                    >
                      LER MAIS
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
