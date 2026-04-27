// lib/constants.ts — Variáveis globais e constantes do projeto Upside Vila Ema

/** Domínio oficial que será indexado (NÃO usar o domínio de staging) */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://novo.upside-vila-ema.online';

/** Nome do empreendimento para uso em títulos e schemas */
export const SITE_NAME = 'Upside Vila Ema';

/** Descrição padrão do site para meta description e OG */
export const SITE_DESCRIPTION =
  'Apartamentos de 2 e 3 dormitórios na Vila Ema, São Paulo. Lazer completo, 5 min do Metrô São Lucas. Conheça o Upside Vila Ema.';

/** Telefone e WhatsApp do corretor */
export const WHATSAPP_NUMBER = '5511972121555'; // Matarazzo, Consultor de Imóveis
export const WHATSAPP_MESSAGE = 'Olá Matarazzo! Tenho interesse no Upside Vila Ema e gostaria de mais informações.';

/** Localização do empreendimento */
export const ADDRESS = {
  street: 'Rua da Vila Ema',
  neighborhood: 'Vila Ema',
  city: 'São Paulo',
  state: 'SP',
  postalCode: '03281-000',
  country: 'BR',
};

/** Coordenadas para Google Maps e Schema GeoCoordinates */
export const GEO = {
  latitude: -23.5768,
  longitude: -46.5630,
};

/** Logo padrão para schemas e OG */
export const LOGO_URL = `${SITE_URL}/logo-upside-vila-ema.png`;

/** Imagem padrão OG para compartilhamento */
export const OG_IMAGE_URL = `${SITE_URL}/og-upside-vila-ema.jpg`;

/** Lista de rotas públicas do site para sitemap e navegação */
export const PUBLIC_ROUTES = [
  { path: '/', label: 'Home', changeFrequency: 'weekly' as const, priority: 1.0 },
  { path: '/apartamentos', label: 'Apartamentos', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/plantas', label: 'Plantas', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/localizacao', label: 'Localização', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/financiamento', label: 'Financiamento', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/blog', label: 'Blog', changeFrequency: 'weekly' as const, priority: 0.7 },
  { path: '/politica-de-privacidade', label: 'Política de Privacidade', changeFrequency: 'yearly' as const, priority: 0.2 },
];

/** Rotas que NÃO devem aparecer no sitemap nem ser indexadas */
export const PRIVATE_ROUTES = ['/obrigado', '/api'];
