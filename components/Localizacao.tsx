import { MapPin, Navigation, ShoppingBag, Coffee, Train, Utensils, School } from 'lucide-react';
import { ADDRESS } from '@/lib/constants';

export function Localizacao() {
  const points = [
    { icon: <Train className="w-6 h-6" />, name: 'Estação São Lucas', time: '5 min' },
    { icon: <ShoppingBag className="w-6 h-6" />, name: 'Supermercado Joanin', time: '3 min' },
    { icon: <Utensils className="w-6 h-6" />, name: 'Restaurantes', time: 'Diversos' },
    { icon: <School className="w-6 h-6" />, name: 'Escolas', time: 'Região' },
  ];

  return (
    <section className="py-24 bg-brand-light" id="localizacao">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Mobilidade e Conveniência</span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 uppercase tracking-tighter font-outfit">
            LOCALIZAÇÃO EXCLUSIVA
          </h2>
          <div className="w-20 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="lg:w-1/2 w-full space-y-10 flex flex-col justify-center">
            <p className="text-xl text-brand-gray leading-relaxed font-medium">
              Morar no <span className="text-brand-orange font-bold">Upside Vila Ema</span> significa ter tudo ao seu alcance. Localizado em um dos pontos mais estratégicos da Zona Leste, você terá mobilidade total com a estação de Metrô a poucos passos.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {points.map((point, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 text-brand-orange rounded-xl flex items-center justify-center shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-sm uppercase leading-tight">{point.name}</h4>
                    <p className="text-brand-orange font-bold text-xs mt-1">{point.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center bg-brand-dark text-white p-6 rounded-2xl shadow-xl">
              <div className="w-12 h-12 bg-brand-orange text-white rounded-xl flex items-center justify-center shrink-0 mr-4">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase font-bold tracking-widest mb-1">Endereço do Empreendimento</p>
                <p className="font-bold text-sm md:text-base">R. Américo Vespucci, 123 - Vila Ema - São Paulo/SP</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full min-h-[450px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <iframe 
              src="https://maps.google.com/maps?q=Vila%20Ema%20-%20S%C3%A3o%20Paulo&t=m&z=14&output=embed&iwloc=near"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
