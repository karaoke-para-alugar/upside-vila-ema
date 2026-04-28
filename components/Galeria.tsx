'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Galeria() {
  const images = [
    { src: 'https://upside-vila-ema.online/wp-content/uploads/2025/09/UP_SIDE_VIEW_VILA_EMA.webp', alt: 'Fachada Principal' },
    { src: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/Up_side_View_Vila_Ema_piscina_infantil-1.webp', alt: 'Piscina Infantil' },
    { src: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/Up_side_Vila_Ema_churrasqueira-1.webp', alt: 'Churrasqueira Gourmet' },
    { src: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/Decorado_UP_SIDE_VIEW_VILA_EMA_SALA-scaled-2-2.webp', alt: 'Living Decorado' },
    { src: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/Upside_View_Vila_Ema_brinquedoteca-1.webp', alt: 'Brinquedoteca' },
    { src: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/Decorado_UP_SIDE_VIEW_VILA_EMA_QUARTO-scaled-1-1.webp', alt: 'Suíte Master' },
    { src: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/Up_Side_Vila_Ema_Fitness-1.webp', alt: 'Academia' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24 bg-brand-light overflow-hidden" id="galeria">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Experiência Real</span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 uppercase tracking-tighter font-outfit">
            GALERIA DE FOTOS
          </h2>
          <div className="w-20 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Main Slider Display */}
          <div className="relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl group">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-8 pt-20">
              <span className="text-white font-black uppercase tracking-widest text-lg md:text-xl">
                {images[currentIndex].alt}
              </span>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-brand-orange transition-all opacity-0 group-hover:opacity-100 shadow-lg"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-brand-orange transition-all opacity-0 group-hover:opacity-100 shadow-lg"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Thumbnails / Indicators */}
          <div className="mt-8 flex justify-center gap-3 overflow-x-auto py-4 scrollbar-hide">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-24 h-16 md:w-32 md:h-20 shrink-0 rounded-xl overflow-hidden border-4 transition-all ${
                  idx === currentIndex ? 'border-brand-orange scale-105 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'
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
    </section>
  );
}
