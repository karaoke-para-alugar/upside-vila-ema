import { getPosts } from '@/lib/wordpress';
import { generatePageMetadata } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/schemas';
import { SchemaJsonLd } from '@/components/SchemaJsonLd';
import { BlogCard } from '@/components/BlogCard';
import { SITE_URL } from '@/lib/constants';

export const metadata = generatePageMetadata({
  title: 'Blog – Dicas e Novidades sobre a Vila Ema',
  description:
    'Acompanhe as novidades, dicas e informações sobre o mercado imobiliário e a região da Vila Ema em São Paulo.',
  path: '/blog',
});

export default async function BlogIndexPage() {
  const posts = await getPosts(10);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blog` },
  ]);

  return (
    <main className="min-h-screen bg-slate-50 py-20">
      <SchemaJsonLd schema={breadcrumbSchema} />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb visível */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
          <ol className="flex items-center gap-2">
            <li><a href="/" className="hover:text-blue-600 transition-colors">Home</a></li>
            <li>/</li>
            <li className="text-slate-800 font-medium">Blog</li>
          </ol>
        </nav>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Blog do Upside Vila Ema
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Descubra as vantagens de morar na Vila Ema, entenda como funciona o Minha Casa Minha Vida
            e fique por dentro do mercado imobiliário.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-700 mb-2">Nenhum artigo encontrado</h2>
            <p className="text-slate-500">Volte mais tarde para ler nossas novidades.</p>
          </div>
        )}
      </div>
    </main>
  );
}
