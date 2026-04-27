import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://upside-vila-ema.online/wp-content/uploads/2025/09/UP_SIDE_VIEW_VILA_EMA.webp"
          alt="Upside Vila Ema Fachada"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Fundo escuro pesado para dar destaque total ao texto, conforme o site original */}
        <div className="absolute inset-0 bg-brand-dark/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mt-10">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 uppercase tracking-tight">
          Viva com Estilo, Conforto e Liberdade!
        </h1>
        <p className="text-lg md:text-2xl text-brand-cream mb-10 font-medium max-w-2xl mx-auto">
          Apartamentos de 2 ou 3 dormitórios a venda c/ área de até 92m², lazer total, 5 min da Estação e Metrô São Lucas.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contato" className="w-full sm:w-auto px-10 py-4 bg-brand-orange hover:bg-brand-light text-white font-black rounded text-lg uppercase tracking-wider transition-colors shadow-xl">
            Saber Mais e Ver Preços
          </a>
        </div>
      </div>
    </section>
  );
}
