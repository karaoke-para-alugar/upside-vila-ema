'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const HERO_IMAGES = [
  'https://upside-vila-ema.online/wp-content/uploads/2026/04/Decorado_UP_SIDE_VIEW_VILA_EMA_SALA-scaled-2-2.webp',
  'https://upside-vila-ema.online/wp-content/uploads/2026/04/Decorado_UP_SIDE_VIEW_VILA_EMA_QUARTO-scaled-1-1.webp',
  'https://upside-vila-ema.online/wp-content/uploads/2026/04/Upside_View_Vila_Ema_Baner-1.webp'
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
        {/* Overlay subtle to maintain text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      <div className="container relative z-20 text-center max-w-5xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 drop-shadow-lg font-outfit uppercase tracking-tighter">
          Upside Vila Ema: viva com estilo e conforto!
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium">
          Descubra o privilégio de morar em um projeto moderno, com lazer completo e a apenas 5 minutos do Metrô São Lucas. O seu novo capítulo começa aqui.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#contato" className="w-full sm:w-auto px-12 py-5 bg-brand-orange hover:bg-brand-orange-hover text-white font-black rounded-full text-lg uppercase tracking-widest transition-all shadow-2xl hover:shadow-orange-500/20 transform hover:-translate-y-1">
            Quero Visitar o Decorado
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
