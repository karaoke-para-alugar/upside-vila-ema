import { generatePageMetadata } from '@/lib/seo';
import { generateApartmentComplexSchema } from '@/lib/schemas';
import { SchemaJsonLd } from '@/components/SchemaJsonLd';

import { Hero } from '@/components/Hero';
import { FichaTecnica } from '@/components/FichaTecnica';
import { Plantas } from '@/components/Plantas';
import { Galeria } from '@/components/Galeria';
import { Localizacao } from '@/components/Localizacao';
import { FAQ } from '@/components/FAQ';
import BlogSection from '@/components/BlogSection';
import { LeadForm } from '@/components/LeadForm';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata = generatePageMetadata({
  title: 'Upside Vila Ema Apartamentos 2 e 3 Dormitórios a Venda',
  description: 'Upside View Vila Ema - Apartamentos de 2 ou 3 dormitórios a venda c/ área de até 92m², lazer total, 5 min da Estação e Metrô São Lucas. Conheça e agende sua visita.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <SchemaJsonLd schema={generateApartmentComplexSchema()} />
      <main>
        <Hero />
        <FichaTecnica />
        <Galeria />
        <Plantas />
        <Localizacao />
        <FAQ />
        <BlogSection />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
