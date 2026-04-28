'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Qual a Localização do Upside Vila Ema?',
      answer: 'O Upside Vila Ema está situado na Avenida Vila Ema, em um ponto estratégico da Zona Leste de São Paulo. A localização oferece fácil acesso a supermercados (Roldão Atacadista, Joanin), metrô (Estação Parque São Lucas), farmácias e comércio local.'
    },
    {
      question: 'Quais são as metragens e tipologias dos apartamentos?',
      answer: 'Oferecemos apartamentos de 2 e 3 dormitórios. As plantas de 2 dormitórios variam entre 42m² e 48,25m², com distribuição inteligente e aproveitamento ideal dos espaços.'
    },
    {
      question: 'Todas as unidades têm vagas de garagem?',
      answer: 'Sim, todos os apartamentos possuem vaga. Unidades de 2 dormitórios contam com 1 vaga e as de 3 dormitórios oferecem 2 vagas exclusivas.'
    },
    {
      question: 'Posso financiar o imóvel?',
      answer: 'Sim! O empreendimento pode ser financiado pelo programa Minha Casa Minha Vida (MCMV), via Caixa Econômica Federal ou Sistema Bancário (SBPE), com parcelas acessíveis e condições facilitadas.'
    },
    {
      question: 'O que o condomínio oferece de lazer?',
      answer: 'O condomínio conta com mais de 35 itens de lazer, incluindo piscinas adulto e infantil no 5º andar, espaço gourmet com churrasqueira e forno de pizza, academia e miniquadra poliesportiva.'
    }
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Dúvidas Comuns</span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 uppercase tracking-tighter font-outfit">
            PERGUNTAS FREQUENTES
          </h2>
          <div className="w-20 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            
            return (
              <div key={idx} className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'border-brand-orange shadow-lg' : 'border-gray-200 hover:border-brand-orange/30'}`}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold text-lg md:text-xl transition-colors font-outfit ${isOpen ? 'text-brand-orange' : 'text-brand-dark group-hover:text-brand-orange'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-brand-orange text-white rotate-180' : 'bg-gray-100 text-brand-gray group-hover:bg-orange-100 group-hover:text-brand-orange'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-8 text-brand-gray leading-relaxed text-base md:text-lg border-t border-gray-100 pt-4 mx-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
