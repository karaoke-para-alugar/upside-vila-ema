'use client';

import { useState } from 'react';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: 'O Upside Vila Ema se enquadra no Minha Casa Minha Vida?',
      answer: 'Sim! Temos opções de unidades que se enquadram no programa, facilitando o seu financiamento com taxas reduzidas.'
    },
    {
      question: 'Qual é o prazo de entrega?',
      answer: 'O cronograma de obras está em ritmo acelerado. Consulte nossos corretores para a previsão exata de entrega.'
    },
    {
      question: 'Quais itens compõem a área de lazer?',
      answer: 'O condomínio é um verdadeiro clube. Contamos com piscina adulto e infantil, academia, salão de festas, espaço gourmet com churrasqueira e muito mais.'
    }
  ];

  return (
    <section className="py-20 bg-brand-dark" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-brand-orange mb-4 uppercase tracking-tighter">Perguntas Frequentes</h2>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            
            return (
              <div key={idx} className="bg-brand-blue border border-brand-blue rounded overflow-hidden">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center">
                    <span className="bg-brand-orange text-white text-xs font-bold px-2 py-1 mr-4 rounded">&gt;&gt;</span>
                    <span className="font-bold text-lg text-white uppercase">{faq.question}</span>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-6 pt-2 pl-16 text-brand-cream border-t border-brand-orange/20 mt-2">
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
