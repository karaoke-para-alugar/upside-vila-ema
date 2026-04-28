'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CONDOMINIO_IMAGES = [
  'Upside_Vila_Ema_sauna-e-spa-1.webp',
  'Upside_Vila_Ema_picnic-e-redario-1.webp',
  'Upside_Vila_Ema_pet_place-1.webp',
  'Upside_Vila_Ema_mini_quadra-1.webp',
  'Upside_Vila_Ema_lavanderia-1.webp',
  'Upside_Vila_Ema_fitness_externo-1.webp',
  'Upside_Vila_Ema_espaco_influencer-1.webp',
  'Upside_Vila_Ema_espaco_gourmet-1.webp',
  'Upside_Vila_Ema_coworking-1.webp',
  'Upside_Vila_Ema_churrasqueira-1.webp',
  'Upside_Vila_Ema_brinquedoteca-1.webp',
  'Upside_Vila_Ema_bicicletario-1.webp',
  'Upside_Vila_Ema_bercario-1.webp',
  'Upside_Vila_Ema_academia-1.webp',
  'Upside_Vila_Ema_Praca_Central-1.webp',
  'Upside_Vila_Ema_Piscina_Adulto-1.webp',
  'Upside_Vila_Ema_Lobby_Torre_B-1.webp',
  'Upside_Vila_Ema_Lobby_Torre_A-1.webp',
  'Upside_Vila_Ema_Jogos_Adulto-1.webp',
  'Upside_Vila_Ema_Horta-1.webp'
].map(img => ({
  src: `https://upside-vila-ema.online/wp-content/uploads/2026/04/${img}`,
  alt: img.replace(/_/g, ' ').replace('-1.webp', '').replace('Upside Vila Ema ', '')
}));

const DECORADO_IMAGES = [
  'Decorado-View-71-scaled-1-1.webp',
  'UPSIDE_VILA_EMA_SALA-scaled-1-1.webp',
  'UP_SIDE_VILA_EMA_QUARTO_2-scaled-1-1.webp',
  'UP_SIDE_VILA_EMA_QUARTO-scaled-1-1.webp',
  'UP_SIDE_VILA_EMA_HOME-scaled-1-1.webp',
  'UP_SIDE_VILA_EMA_COZINHA-scaled-1-1.webp',
  'UP_SIDE_VILA_EMA_CHURRASQUEIRA-scaled-1-1.webp',
  'UP_SIDE_VILA_EMA_BANHEIRO-scaled-1-1.webp',
  'Upside_Vila_Ema_Decorado_Sala-1.webp',
  'Upside_Vila_Ema_Decorado_Quarto_3-1.webp',
  'Upside_Vila_Ema_Decorado_Quarto_2-1.webp',
  'Upside_Vila_Ema_Decorado_Quarto_1-1.webp',
  'Upside_Vila_Ema_Decorado_Living-1.webp',
  'Upside_Vila_Ema_Decorado_Hobby-1.webp',
  'Upside_Vila_Ema_Decorado_Cozinha-1.webp',
  'Upside_Vila_Ema_Decorado_Banho-1.webp',
  'Upside_Vila_Ema_Decorado_Area_Servico-1.webp',
  'Upside_Vila_Ema_Decorado_Varanda_Gourmet-1.webp',
  'Upside_Vila_Ema_Decorado_Terraco-1.webp'
].map(img => ({
  src: `https://upside-vila-ema.online/wp-content/uploads/2026/04/${img}`,
  alt: img.replace(/_/g, ' ').replace('-scaled-1-1.webp', '').replace('-1.webp', '').replace('Upside Vila Ema Decorado ', '')
}));

export function Galeria() {
  const [activeTab, setActiveTab] = useState<'condominio' | 'decorado'>('condominio');
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = activeTab === 'condominio' ? CONDOMINIO_IMAGES : DECORADO_IMAGES;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTabChange = (tab: 'condominio' | 'decorado') => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <section className="py-24 bg-brand-light overflow-hidden" id="galeria">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Experiência Real</span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 uppercase tracking-tighter font-outfit">
            GALERIA DE FOTOS
          </h2>
          <div className="w-20 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => handleTabChange('condominio')}
            className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-md ${
              activeTab === 'condominio' 
                ? 'bg-brand-orange text-white' 
                : 'bg-white text-brand-dark hover:bg-gray-100'
            }`}
          >
            Condomínio
          </button>
          <button
            onClick={() => handleTabChange('decorado')}
            className={`px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-md ${
              activeTab === 'decorado' 
                ? 'bg-brand-orange text-white' 
                : 'bg-white text-brand-dark hover:bg-gray-100'
            }`}
          >
            Apartamento Decorado
          </button>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Main Slider Display */}
          <div className="relative h-[400px] md:h-[650px] rounded-[2rem] overflow-hidden shadow-2xl group bg-gray-200">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-8 pt-24">
              <span className="text-white font-black uppercase tracking-widest text-lg md:text-xl">
                {images[currentIndex].alt}
              </span>
              <p className="text-white/60 text-xs mt-2 uppercase tracking-widest font-bold">
                Foto {currentIndex + 1} de {images.length}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-brand-orange transition-all opacity-0 group-hover:opacity-100 shadow-lg z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-brand-orange transition-all opacity-0 group-hover:opacity-100 shadow-lg z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Thumbnails / Indicators */}
          <div className="mt-10 flex gap-4 overflow-x-auto py-6 scrollbar-hide snap-x px-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-28 h-20 md:w-40 md:h-28 shrink-0 rounded-2xl overflow-hidden border-4 transition-all snap-center ${
                  idx === currentIndex ? 'border-brand-orange scale-110 shadow-xl z-20' : 'border-transparent opacity-40 hover:opacity-100 hover:scale-105'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
