import { MapPin, Home, Car, TreePine, Train, Maximize } from 'lucide-react';

export function FichaTecnica() {
  const features = [
    { icon: <Home className="w-10 h-10 text-white" />, title: '2 e 3 Dormitórios', desc: 'Com suíte e varanda gourmet' },
    { icon: <Maximize className="w-10 h-10 text-white" />, title: 'Até 92m²', desc: 'Plantas inteligentes e espaçosas' },
    { icon: <Train className="w-10 h-10 text-white" />, title: 'Metrô São Lucas', desc: 'Apenas 5 minutos de distância' },
    { icon: <TreePine className="w-10 h-10 text-white" />, title: 'Lazer Completo', desc: 'Piscina, academia e salão de festas' },
    { icon: <Car className="w-10 h-10 text-white" />, title: 'Vagas Livres', desc: 'Opções com 1 ou 2 vagas demarcadas' },
    { icon: <MapPin className="w-10 h-10 text-white" />, title: 'Vila Ema', desc: 'Bairro tradicional e super valorizado' },
  ];

  return (
    <section className="py-20 relative bg-brand-dark overflow-hidden" id="ficha-tecnica">
      {/* Background Elementor Style */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://upside-vila-ema.online/wp-content/uploads/2025/09/UP_SIDE_VIEW_VILA_EMA.webp')] bg-cover bg-fixed bg-center"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-brand-orange mb-4 uppercase tracking-tighter">O MELHOR DA VILA EMA</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-brand-orange/90 backdrop-blur-md p-8 rounded-xl border border-brand-light/30 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{feature.title}</h3>
              <p className="text-brand-cream">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
