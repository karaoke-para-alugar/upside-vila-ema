import Link from 'next/link';
import Image from 'next/image';
import { WPPost } from '@/lib/wordpress';

export function BlogCard({ post }: { post: WPPost }) {
  // Extrai a imagem destacada se disponível via _embed
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  const imageUrl = featuredMedia?.source_url || '/placeholder-image.webp'; // Imagem de fallback caso não tenha

  // Formata a data de publicação
  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col h-full">
      <Link href={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden">
        {imageUrl.startsWith('http') ? (
          <img 
            src={imageUrl} 
            alt={featuredMedia?.alt_text || post.title.rendered}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
            Sem Imagem
          </div>
        )}
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-sm text-slate-500 mb-2 font-medium">
          {formattedDate}
        </div>
        <Link href={`/blog/${post.slug}`} className="group">
          <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </Link>
        <div 
          className="text-slate-600 mb-6 line-clamp-3 text-sm flex-grow"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors mt-auto"
        >
          Ler artigo completo
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
