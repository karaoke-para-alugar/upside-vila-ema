import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export function Plantas() {
  const plantas = [
    {
      title: '68M²',
      dormitorios: '2 DORM. (1 SUÍTE)',
      image: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/Up_side_View_Vila_Ema_Sala_de_jantar-1.webp',
      features: ['Varanda Gourmet', 'Sala ampla', '1 Vaga de garagem'],
    },
    {
      title: '92M²',
      dormitorios: '3 DORM. (1 SUÍTE)',
      image: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/Lacamento_Up_side_View_Vila_Ema_Fachada-1.webp',
      features: ['Terraço Gourmet', 'Lavabo', '2 Vagas demarcadas'],
    }
  ];

  return (
    <section className="py-20 bg-slate-100" id="plantas">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-brand-blue mb-4 uppercase tracking-tighter">Conheça as Plantas</h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plantas.map((planta, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200">
              {/* Header Laranja */}
              <div className="bg-brand-orange text-center py-4 text-white">
                <h3 className="text-3xl font-black">{planta.title}</h3>
                <p className="font-bold tracking-widest">{planta.dormitorios}</p>
              </div>
              
              <div className="relative h-64 sm:h-80 w-full bg-slate-100">
                <Image
                  src={planta.image}
                  alt={planta.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <div className="p-6 text-center">
                <ul className="space-y-2 mb-6">
                  {planta.features.map((feat, i) => (
                    <li key={i} className="text-slate-700 font-medium">
                      {feat}
                    </li>
                  ))}
                </ul>
                <a href="#contato" className="inline-block px-8 py-3 bg-brand-blue text-white font-bold rounded uppercase tracking-wider hover:bg-brand-orange transition-colors">
                  Receber Tabela
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
