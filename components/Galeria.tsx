import Image from 'next/image';

export function Galeria() {
  const images = [
    { src: 'https://upside-vila-ema.online/wp-content/uploads/2025/09/UP_SIDE_VIEW_VILA_EMA.webp', alt: 'Fachada Noturna' },
    { src: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/Up_side_View_Vila_Ema_Sala_de_jantar-1.webp', alt: 'Sala de Jantar' },
    { src: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/Lacamento_Up_side_View_Vila_Ema_Fachada-1.webp', alt: 'Fachada Dia' },
    { src: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/Up_side_View_Vila_Ema_Dormitorio-1.webp', alt: 'Suíte Master' },
    { src: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/Up_side_View_Vila_Ema_Sala_de_estar-1.webp', alt: 'Living Ampliado' },
    { src: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/Up_side_View_Vila_Ema_Banheiro-1.webp', alt: 'Banheiro Decorado' },
  ];

  return (
    <section className="py-24 bg-brand-light" id="galeria">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Experiência Real</span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 uppercase tracking-tighter font-outfit">
            GALERIA DE FOTOS
          </h2>
          <div className="w-20 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white font-bold uppercase tracking-widest text-sm">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
