import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://upside-vila-ema.online/wp-content/uploads/2026/04/Upside_View_Vila_Ema_Baner-1.webp"
          alt="Upside Vila Ema Fachada"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay subtle to maintain text readability without obscuring the image too much */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container relative z-10 text-center max-w-5xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 drop-shadow-lg font-outfit">
          Upside Vila Ema: viva melhor com conforto, estilo e praticidade!
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          O Upside Vila Ema foi pensado para quem deseja morar em um apartamento moderno, bem localizado e com estrutura completa para o dia a dia. Uma excelente opção para quem busca qualidade de vida, lazer e facilidade na Zona Leste de São Paulo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#contato" className="w-full sm:w-auto px-12 py-5 bg-brand-orange hover:bg-brand-orange-hover text-white font-black rounded-full text-lg uppercase tracking-widest transition-all shadow-2xl hover:shadow-orange-500/20 transform hover:-translate-y-1">
            Quero Visitar o Decorado
          </a>
        </div>
      </div>
    </section>
  );
}
