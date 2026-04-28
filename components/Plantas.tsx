import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export function Plantas() {
  const plantas = [
    {
      title: '42M²',
      dormitorios: '2 DORMITÓRIOS',
      image: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/Up_Side_View_Vila_Ema_Planta_2_Dormitorios_42m-scaled-1-1.webp',
      features: ['Planta Inteligente', 'Living Integrado', 'Cozinha Americana'],
    },
    {
      title: '47M²',
      dormitorios: '2 DORMITÓRIOS',
      image: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/UpSide_View_Vila_Ema_Planta_2_Dormitorios_47m-scaled-1-1.webp',
      features: ['Varanda Gourmet', 'Suíte Master', 'Opção de Escritório'],
    },
    {
      title: '48M²',
      dormitorios: '2 DORMITÓRIOS',
      image: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/UpSide_View_Vila_Ema_Planta_2_Dormitorios_48m-scaled-1-1.webp',
      features: ['Terraço Social', 'Ventilação Natural', 'Área de Serviço'],
    },
    {
      title: '68M²',
      dormitorios: '3 DORM. (1 SUÍTE)',
      image: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/UpSide_View_Vila_Ema_Planta_3_Dormitorios_68m-scaled-1.webp',
      features: ['Varanda Gourmet', 'Suíte com Closet', '2 Vagas demarcadas'],
    },
    {
      title: '92M²',
      dormitorios: '3 DORM. (1 SUÍTE)',
      image: 'https://upside-vila-ema.online/wp-content/uploads/2026/04/UpSide_View_Vila_Ema_Planta_3_Dormitorios_92m-scaled-1.webp',
      features: ['Amplo Terraço Gourmet', 'Sala 2 Ambientes', 'Opção Living Ampliado'],
    }
  ];

  return (
    <section className="py-24 bg-white" id="plantas">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Distribuição de Espaço</span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 uppercase tracking-tighter font-outfit">
            PLANTAS HUMANIZADAS
          </h2>
          <div className="w-20 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plantas.map((planta, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="bg-brand-orange p-6 text-white text-center">
                <h3 className="text-4xl font-black font-outfit">{planta.title}</h3>
                <p className="font-bold tracking-widest text-sm uppercase opacity-90">{planta.dormitorios}</p>
              </div>
              
              <div className="relative h-64 w-full bg-gray-50 p-4">
                <Image
                  src={planta.image}
                  alt={`Planta ${planta.title}`}
                  fill
                  className="object-contain p-4 hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <ul className="space-y-3 mb-8">
                  {planta.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-gray font-medium text-sm">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <a href="#contato" className="block w-full py-4 bg-brand-dark hover:bg-brand-orange text-white text-center font-bold rounded-xl uppercase tracking-widest text-sm transition-all shadow-md hover:shadow-orange-500/20">
                  Receber Tabela de Preços
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
