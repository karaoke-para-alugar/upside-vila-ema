import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from '@/lib/wordpress';

export default async function BlogSection() {
  const posts = await getPosts(3);

  if (!posts || posts.length === 0) return null;

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-outfit">
            Notícias e Novidades
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fique por dentro de tudo o que acontece no Upside Vila Ema e no bairro que mais cresce na Zona Leste.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => {
            const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder-blog.jpg';
            const date = new Date(post.date).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            });

            return (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
                <div className="relative h-56 w-full">
                  <Image
                    src={featuredImage}
                    alt={post.title.rendered}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Novidade
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <time className="text-sm text-gray-500 mb-2">{date}</time>
                  <h3 
                    className="text-xl font-bold text-gray-900 mb-3 font-outfit line-clamp-2 hover:text-brand-orange transition-colors"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div 
                    className="text-gray-600 text-sm mb-6 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  
                  <div className="mt-auto">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-brand-orange font-bold text-sm flex items-center hover:translate-x-1 transition-transform"
                    >
                      LER ARTIGO COMPLETO
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-block border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            VER TODAS AS NOTÍCIAS
          </Link>
        </div>
      </div>
    </section>
  );
}
