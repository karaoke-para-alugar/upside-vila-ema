import { MapPin, Navigation, ShoppingBag, Coffee, Train } from 'lucide-react';
import { ADDRESS } from '@/lib/constants';

export function Localizacao() {
  const points = [
    { icon: <Train className="w-6 h-6" />, name: 'Estação São Lucas', time: '5 min' },
    { icon: <ShoppingBag className="w-6 h-6" />, name: 'Supermercado Joanin', time: '3 min' },
    { icon: <Coffee className="w-6 h-6" />, name: 'Padaria Cepam', time: '8 min' },
    { icon: <Navigation className="w-6 h-6" />, name: 'Av. Anhaia Mello', time: 'Fácil Acesso' },
  ];

  return (
    <section className="py-20 bg-brand-dark text-white" id="localizacao">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-brand-orange mb-4 uppercase tracking-tighter">Localização Privilegiada</h2>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 w-full space-y-8">
            <p className="text-lg text-brand-cream leading-relaxed">
              Morar no Upside Vila Ema significa ter conveniência, mobilidade e tranquilidade. Você estará a passos da estação São Lucas.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {points.map((point, idx) => (
                <div key={idx} className="bg-brand-blue/50 border border-brand-orange/30 p-4 rounded flex flex-col items-center justify-center text-center">
                  <div className="text-brand-orange mb-2">
                    {point.icon}
                  </div>
                  <h4 className="font-bold text-sm uppercase">{point.name}</h4>
                  <p className="text-brand-cream text-xs">{point.time}</p>
                </div>
              ))}
            </div>
            
            <div className="flex items-center bg-brand-orange text-white p-4 rounded font-bold">
              <MapPin className="w-6 h-6 mr-3 flex-shrink-0" />
              <span>{ADDRESS.street}, {ADDRESS.neighborhood} - {ADDRESS.city}</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full h-[400px] bg-slate-200 rounded border-4 border-brand-orange overflow-hidden">
            <iframe 
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY_HERE&q=Vila+Ema,+São+Paulo`}
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
