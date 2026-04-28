import { MapPin, Home, Car, TreePine, Train, Maximize, Dumbbell, Waves, PartyPopper } from 'lucide-react';

export function FichaTecnica() {
  const features = [
    { icon: <Home className="w-8 h-8" />, title: '2 e 3 Dorms', desc: 'Com suíte e varanda gourmet' },
    { icon: <Maximize className="w-8 h-8" />, title: 'Até 92m²', desc: 'Plantas inteligentes e amplas' },
    { icon: <Train className="w-8 h-8" />, title: 'Metrô São Lucas', desc: 'A apenas 5 minutos de distância' },
    { icon: <Waves className="w-8 h-8" />, title: 'Piscina Adulto', desc: 'Com deck molhado e solário' },
    { icon: <Dumbbell className="w-8 h-8" />, title: 'Fitness', desc: 'Academia completa e equipada' },
    { icon: <PartyPopper className="w-8 h-8" />, title: 'Lazer de Clube', desc: 'Mais de 35 itens de lazer' },
  ];

  return (
    <section className="py-24 bg-white" id="ficha-tecnica">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Sobre o Empreendimento</span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 uppercase tracking-tighter font-outfit">
            O MELHOR DA VILA EMA
          </h2>
          <div className="w-20 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-brand-light hover:bg-white border border-transparent hover:border-brand-orange/20 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-brand-orange text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 uppercase tracking-wide font-outfit">{feature.title}</h3>
              <p className="text-brand-gray leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
