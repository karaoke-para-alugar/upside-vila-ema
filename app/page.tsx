import { generatePageMetadata } from '@/lib/seo';
import { generateApartmentComplexSchema } from '@/lib/schemas';
import { SchemaJsonLd } from '@/components/SchemaJsonLd';

import { Hero } from '@/components/Hero';
import { FichaTecnica } from '@/components/FichaTecnica';
import { Plantas } from '@/components/Plantas';
import { Galeria } from '@/components/Galeria';
import { Localizacao } from '@/components/Localizacao';
import { FAQ } from '@/components/FAQ';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata = generatePageMetadata({
  title: 'Viva com Estilo, Conforto e Liberdade!',
  description: 'Apartamentos de 2 ou 3 dormitórios na Vila Ema. Até 92m², lazer total de clube e a 5 minutos do Metrô São Lucas. Conheça o Upside Vila Ema e garanta a sua unidade.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <SchemaJsonLd schema={generateApartmentComplexSchema()} />
      <main>
        <Hero />
        <FichaTecnica />
        <Plantas />
        <Galeria />
        <Localizacao />
        <FAQ />
        <WhatsAppButton />
      </main>
    </>
  );
}
