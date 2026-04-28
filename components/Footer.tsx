import Link from 'next/link';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2 space-y-6">
            <img 
              src="https://upside-vila-ema.online/wp-content/uploads/2025/09/Logo_Upside_view_vila_ema.png" 
              alt="Upside View Vila Ema"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-white/60 max-w-md leading-relaxed">
              O Upside Vila Ema é o empreendimento que une modernidade, lazer completo e uma localização estratégica na Vila Ema. Viva a 5 minutos do Metrô São Lucas com todo o conforto que sua família merece.
            </p>
            <div className="flex items-center gap-4">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest font-outfit">Navegação</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li><a href="#ficha-tecnica" className="hover:text-brand-orange transition-colors">Ficha Técnica</a></li>
              <li><a href="#galeria" className="hover:text-brand-orange transition-colors">Galeria de Fotos</a></li>
              <li><a href="#plantas" className="hover:text-brand-orange transition-colors">Plantas Humanizadas</a></li>
              <li><a href="#localizacao" className="hover:text-brand-orange transition-colors">Localização</a></li>
              <li><Link href="/blog" className="hover:text-brand-orange transition-colors">Blog & Notícias</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest font-outfit">Contato</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <span className="text-brand-orange shrink-0 mt-0.5">📍</span>
                <span>Rua Américo Vespucci, 123 - Vila Ema, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-orange shrink-0">📞</span>
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-orange shrink-0">✉️</span>
                <span>contato@upsidevilaema.online</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
          <p>© {new Date().getFullYear()} Upside Vila Ema. Todos os direitos reservados.</p>
          <p>Desenvolvido com foco em Performance & SEO</p>
        </div>
      </div>
    </footer>
  );
}
