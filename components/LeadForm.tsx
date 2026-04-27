'use client';

import { useState } from 'react';
import { WHATSAPP_NUMBER } from '@/lib/constants';

export function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Constrói a mensagem personalizada
    const text = `Olá Matarazzo! Tenho interesse no Upside Vila Ema e gostaria de mais informações.\n\n*Meus dados:*\nNome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    // Redireciona para o WhatsApp após um breve delay visual
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setStatus('success');
    }, 800);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="contato">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-brand-blue mb-4 uppercase tracking-tighter">Receba a Tabela de Preços</h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 font-medium">Preencha o formulário abaixo para conversar com um especialista e receber as plantas e preços atualizados.</p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded shadow-xl border border-slate-100">
          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="text-[#25D366] text-6xl mb-4 font-black">✓</div>
              <h3 className="text-2xl font-bold text-brand-blue mb-2 uppercase">Redirecionando para o WhatsApp...</h3>
              <p className="text-slate-600 mb-6">Se a janela não abriu automaticamente, clique no botão abaixo para falar com o corretor Matarazzo.</p>
              
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá Matarazzo! Tenho interesse no Upside Vila Ema e gostaria de mais informações.\n\n*Meus dados:*\nNome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}`)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block py-4 px-8 bg-[#25D366] hover:bg-[#1da851] text-white font-black text-lg uppercase tracking-wider rounded transition-colors"
              >
                Abrir WhatsApp Agora
              </a>

              <div className="mt-8">
                <button onClick={() => setStatus('idle')} className="text-brand-orange font-bold uppercase hover:underline text-sm">
                  Voltar ao formulário
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-brand-blue mb-2 uppercase">Nome Completo</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none" 
                  placeholder="Seu nome" 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-blue mb-2 uppercase">E-mail</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none" 
                    placeholder="seu@email.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-blue mb-2 uppercase">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none" 
                    placeholder="(11) 90000-0000" 
                  />
                </div>
              </div>
              <button type="submit" disabled={status === 'submitting'} className="w-full py-4 bg-brand-orange hover:bg-brand-light text-white font-black text-lg uppercase tracking-wider rounded transition-colors disabled:opacity-70 flex items-center justify-center gap-3">
                {status === 'submitting' ? 'Processando...' : (
                  <>
                    Quero Receber Informações
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
