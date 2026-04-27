import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getRootMetadata } from "@/lib/seo";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { generateWebSiteSchema, generateLocalBusinessSchema } from "@/lib/schemas";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50">
        <SchemaJsonLd
          schema={[generateWebSiteSchema(), generateLocalBusinessSchema()]}
        />
        
        {/* Top Announcement Bar */}
        <div className="bg-brand-blue text-white text-center py-2 px-4 text-xs font-bold tracking-widest uppercase">
          Lançamento na Vila Ema com condições exclusivas
        </div>
        
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-brand-orange/30 transition-all duration-300">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              {/* Logo Placeholder - Will use real logo when available */}
              <div className="w-40 h-10 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: "url('https://upside-vila-ema.online/wp-content/uploads/elementor/thumbs/Logo_Upside_view_vila_ema-1-rmkmuchjpm3zlxwmghxior9vsx4t4q73ekiimy3lhw.png')" }} />
            </Link>
            
            <a href="#contato" className="bg-brand-orange hover:bg-brand-light text-white px-4 md:px-6 py-2 rounded font-bold text-sm md:text-base uppercase tracking-wider transition-colors">
              Quero Visitar
            </a>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
