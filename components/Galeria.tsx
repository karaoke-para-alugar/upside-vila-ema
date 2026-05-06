'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CONDOMINIO_IMAGES = [
  'Lacamento_Up_side_View_Vila_Ema_Fachada-1.webp',
  'Upside_Vila_Ema_gourmet-1.webp',
  'Upside_Vila_Ema_-beauty-1.webp',
  'Upside_View_Vila_Ema_brinquedoteca-1.webp',
  'Upside_View_Vila_Ema_03-Hall-1.webp',
  'Upside_View_Vila_Ema_-coworking-1.webp',
  'Up_side_Vila_Ema_quadra-1.webp',
  'Up_side_Vila_Ema_playground-1.webp',
  'Up_side_Vila_Ema_gourmet-1.webp',
  'Up_side_Vila_Ema_fitness-1.webp',
  'Up_side_Vila_Ema_churrasqueira-1.webp',
  'Up_side_View_Vila_Ema_piscina_infantil-1.webp',
  'Upside_Vila_Ema_lavanderia-1.webp',
].map(img => ({
  src: `/assets/images/${img}`,
  alt: img.replace(/_/g, ' ').replace('-1.webp', '').replace('Upside Vila Ema ', '')
}));

const DECORADO_IMAGES = [
  'Decorado-View-71-scaled-1-1.webp',
  'UPSIDE_VILA_EMA_SALA-scaled-1-1.webp',
  'UP_SIDE_VILA_EMA_QUARTO_2-scaled-1-1.webp',
  'Decorado_UPSIDE_VILA_EMA_JANTAR-scaled-1-1.webp',
  'Decorado_UPSIDE_VIEW_VILA_EMA_QUARTO_2-scaled-1-1.webp',
  'Decorado_UPSIDE_VIEW_VILA_EMA_COZINHA-scaled-1-1.webp',
  'Decorado_UPSIDE_VIEW_VILA_EMA_bANHEIRO-scaled-1-1.webp',
  'Decorado_UP_SIDE_VIEW_VILA_EMA_QUARTO-scaled-1-1.webp',
  'Decorado_UP_SIDE_VIEW_VILA_EMA_SALA-scaled-2-2.webp',
].map(img => ({
  src: `/assets/images/${img}`,
  alt: img.replace(/_/g, ' ').replace('-scaled-1-1.webp', '').replace('-1.webp', '').replace('Upside Vila Ema Decorado ', '')
}));

const PLANTAS_IMAGES = [
  { src: '/assets/images/UpSide_View_Vila_Ema_Planta_2_Dormitorios_47m-scaled-1-1.webp', alt: 'Planta 47m² - 2 Dormitórios' },
  { src: '/assets/images/UpSide_View_Vila_Ema_Planta_2_Dormitorios_48m-scaled-1-1.webp', alt: 'Planta 48m² - 2 Dormitórios' },
  { src: '/assets/images/Up_Side_Vila_Ema_Planta_2_Dormitorios_805m-scaled-1-1.webp', alt: 'Planta 80,5m² - 2 Dorm. (1 Suíte)' },
  { src: '/assets/images/UpSide_Vila_Ema_Planta_3_Dormitorios_805m-scaled-1-1.webp', alt: 'Planta 80,5m² - 3 Dorm. (1 Suíte)' },
  { src: '/assets/images/UpSide_Vila_Ema_Planta_3_Dormitorios_92m-scaled-1-1.webp', alt: 'Planta 92m² - 3 Dorm. (1 Suíte)' },
];

export function Galeria() {
  const [activeTab, setActiveTab] = useState<'condominio' | 'decorado' | 'plantas'>('condominio');
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = activeTab === 'condominio' ? CONDOMINIO_IMAGES : activeTab === 'decorado' ? DECORADO_IMAGES : PLANTAS_IMAGES;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTabChange = (tab: 'condominio' | 'decorado' | 'plantas') => {
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
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => handleTabChange('condominio')}
            className={`px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm transition-all shadow-md ${
              activeTab === 'condominio' 
                ? 'bg-brand-orange text-white' 
                : 'bg-white text-brand-dark hover:bg-gray-100'
            }`}
          >
            Condomínio
          </button>
          <button
            onClick={() => handleTabChange('decorado')}
            className={`px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm transition-all shadow-md ${
              activeTab === 'decorado' 
                ? 'bg-brand-orange text-white' 
                : 'bg-white text-brand-dark hover:bg-gray-100'
            }`}
          >
            Decorado
          </button>
          <button
            onClick={() => handleTabChange('plantas')}
            className={`px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm transition-all shadow-md ${
              activeTab === 'plantas' 
                ? 'bg-brand-orange text-white' 
                : 'bg-white text-brand-dark hover:bg-gray-100'
            }`}
          >
            Plantas
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
