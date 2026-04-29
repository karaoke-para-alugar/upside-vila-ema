import Image from 'next/image';
import { 
  Home, 
  Maximize, 
  Train, 
  Waves, 
  Dumbbell, 
  PartyPopper, 
  Dog, 
  UtensilsCrossed, 
  Baby, 
  FileText 
} from 'lucide-react';

export function FichaTecnica() {
  const features = [
    { icon: <Home className="w-6 h-6" />, title: '2 e 3 Dorms', desc: 'Com suíte e varanda gourmet' },
    { icon: <Maximize className="w-6 h-6" />, title: 'Até 92m²', desc: 'Plantas inteligentes e amplas' },
    { icon: <Train className="w-6 h-6" />, title: 'Metrô São Lucas', desc: 'A apenas 5 minutos' },
    { icon: <Dog className="w-6 h-6" />, title: 'Espaço Pet', desc: 'Área dedicada para seu melhor amigo' },
    { icon: <UtensilsCrossed className="w-6 h-6" />, title: 'Espaço Gourmet', desc: 'Perfeito para receber convidados' },
    { icon: <Baby className="w-6 h-6" />, title: 'Play Aventura', desc: 'Diversão garantida para as crianças' },
  ];

  return (
    <section className="py-24 bg-white" id="ficha-tecnica">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Sobre o Empreendimento</span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 uppercase tracking-tighter font-outfit">
            DIFERENCIAIS EXCLUSIVOS
          </h2>
          <div className="w-20 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Facade Image */}
          <div className="w-full lg:w-1/2 relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/images/Upside-Vila-Ema-Fachada-Principal-1024x576.webp"
              alt="Fachada Upside Vila Ema"
              fill
              className="object-cover"
            />
          </div>

          {/* Features Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="group p-6 rounded-2xl bg-brand-light hover:bg-white border border-transparent hover:border-brand-orange/20 transition-all duration-300 shadow-sm hover:shadow-lg">
                  <div className="w-12 h-12 bg-brand-orange text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2 uppercase tracking-wide font-outfit">{feature.title}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a 
                href="#contato" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-dark hover:bg-brand-orange text-white font-bold rounded-full uppercase tracking-widest text-sm transition-all shadow-xl hover:shadow-orange-500/20"
              >
                <FileText className="w-5 h-5" />
                Ver Ficha Técnica Completa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
