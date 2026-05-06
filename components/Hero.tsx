'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const HERO_IMAGES = [
  '/assets/images/Decorado_UP_SIDE_VIEW_VILA_EMA_SALA-scaled-2-2.webp',
  '/assets/images/Decorado_UP_SIDE_VIEW_VILA_EMA_QUARTO-scaled-1-1.webp',
  '/assets/images/Decorado_UPSIDE_VIEW_VILA_EMA_COZINHA-scaled-1-1.webp',
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`Upside Vila Ema Decorado ${index + 1}`}
              fill
              className={`object-cover object-center transition-transform duration-[8000ms] ease-out ${
                index === currentIndex ? 'scale-110' : 'scale-100'
              }`}
              priority={index === 0}
            />
          </div>
        ))}
        {/* Darker overlay for better contrast as requested */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 bg-brand-orange/20 z-10"></div>
      </div>

      <div className="container relative z-20 text-center max-w-5xl">
        {/* Banner ÚLTIMAS UNIDADES */}
        <div className="inline-block bg-brand-orange text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-[0.3em] mb-8 animate-pulse shadow-xl">
          Últimas Unidades Disponíveis
        </div>

        <h1 className="text-[58px] font-bold text-[#FFF8E1] leading-[1.1] mb-8 drop-shadow-[4px_4px_15px_rgba(0,0,0,0.9)] font-lato">
          Upside Vila Ema: viva melhor com conforto, estilo e praticidade!
        </h1>
        <p className="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)] font-outfit font-medium">
          O Upside Vila Ema foi pensado para quem deseja morar em um apartamento moderno, bem localizado e com estrutura completa para o dia a dia. Uma excelente opção para quem busca qualidade de vida, lazer e facilidade na Zona Leste de São Paulo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#contato" className="w-full sm:w-auto px-12 py-5 bg-brand-orange hover:bg-brand-orange-hover text-white font-black rounded-full text-lg uppercase tracking-widest transition-all shadow-2xl hover:shadow-orange-500/20 transform hover:-translate-y-1 font-outfit">
            Quero Agendar uma Visita
          </a>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-brand-orange w-16' : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
