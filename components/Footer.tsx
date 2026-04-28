import Link from 'next/link';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
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
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Mail className="w-5 h-5" />
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
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span>Rua Américo Vespucci, 123 - Vila Ema, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
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
