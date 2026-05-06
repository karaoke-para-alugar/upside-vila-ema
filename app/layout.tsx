import type { Metadata } from "next";
import { Outfit, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { getRootMetadata } from "@/lib/seo";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { generateWebSiteSchema, generateLocalBusinessSchema } from "@/lib/schemas";
import Link from "next/link";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = getRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${inter.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white font-outfit">
        <SchemaJsonLd
          schema={[generateWebSiteSchema(), generateLocalBusinessSchema()]}
        />
        
        {/* Top Announcement Bar - Matching WordPress Orange Style */}
        <div className="bg-brand-orange text-white text-center py-2 px-4 text-sm font-bold tracking-wide uppercase">
          ÚLTIMAS UNIDADES DISPONÍVEIS!
        </div>
        
        {/* Sticky Header - White with Logo and CTA */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
          <div className="container flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <img 
                src="/assets/images/Logo_Upside_Vila-Ema-1.png" 
                alt="Upside View Vila Ema"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            
            <nav className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-brand-dark">
              <a href="#ficha-tecnica" className="hover:text-brand-orange transition-colors">Ficha Técnica</a>
              <a href="#galeria" className="hover:text-brand-orange transition-colors">Fotos</a>
              <a href="#plantas" className="hover:text-brand-orange transition-colors">Plantas</a>
              <a href="#localizacao" className="hover:text-brand-orange transition-colors">Localização</a>
              <Link href="/blog" className="hover:text-brand-orange transition-colors">Blog</Link>
            </nav>

            <a href="#contato" className="bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-3 rounded-full font-black text-xs md:text-sm uppercase tracking-widest transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Quero Visitar o Decorado
            </a>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
