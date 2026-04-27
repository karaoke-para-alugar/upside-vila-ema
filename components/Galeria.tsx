import Image from 'next/image';

export function Galeria() {
  const images = [
    { src: 'https://upside-vila-ema.online/wp-content/uploads/2025/09/UP_SIDE_VIEW_VILA_EMA.webp', alt: 'Fachada Noturna' },
    { src: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/Up_side_View_Vila_Ema_Sala_de_jantar-1.webp', alt: 'Sala de Jantar' },
    { src: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/Lacamento_Up_side_View_Vila_Ema_Fachada-1.webp', alt: 'Fachada Dia' },
  ];

  return (
    <section className="py-20 bg-brand-blue" id="galeria">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Galeria de Imagens</h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto"></div>
        </div>

        {/* Simples Grid para simular o Coverflow Slider do site antigo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="relative h-64 md:h-80 rounded shadow-2xl overflow-hidden border-2 border-brand-orange/50 group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-brand-dark/80 text-white text-center py-2 font-bold uppercase tracking-wider text-sm transform translate-y-full group-hover:translate-y-0 transition-transform">
                {img.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
