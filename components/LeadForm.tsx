'use client';

import { useState } from 'react';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { Send, CheckCircle2 } from 'lucide-react';

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
    
    const text = `Olá! Tenho interesse no Upside Vila Ema e gostaria de mais informações.\n\n*Meus dados:*\nNome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setStatus('success');
    }, 800);
  };

  return (
    <section className="py-24 bg-brand-light" id="contato">
      <div className="container max-w-5xl">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          {/* Lado Esquerdo - Info */}
          <div className="lg:w-2/5 bg-brand-dark p-10 md:p-12 text-white flex flex-col justify-center">
            <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Atendimento Exclusivo</span>
            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight font-outfit uppercase">
              QUER SABER MAIS DETALHES?
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed">
              Fale agora com um de nossos consultores e receba a tabela de preços, plantas em PDF e agende sua visita ao decorado.
            </p>
            
            <div className="space-y-6">
              {[
                'Tabela de preços atualizada',
                'Plantas humanizadas em alta definição',
                'Simulação de financiamento imediata'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="text-sm font-medium text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito - Formulário */}
          <div className="lg:w-3/5 p-10 md:p-12 flex flex-col justify-center">
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-100 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 font-outfit uppercase">Mensagem Enviada!</h3>
                <p className="text-brand-gray mb-8">Estamos redirecionando você para o WhatsApp agora mesmo...</p>
                
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Tenho interesse no Upside Vila Ema e gostaria de mais informações.\n\n*Meus dados:*\nNome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block py-4 px-10 bg-[#25D366] hover:bg-[#1da851] text-white font-black text-sm uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-green-500/20"
                >
                  Falar no WhatsApp
                </a>

                <div className="mt-8">
                  <button onClick={() => setStatus('idle')} className="text-brand-orange font-bold uppercase tracking-widest text-xs hover:underline">
                    Voltar ao formulário
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-brand-dark uppercase tracking-widest ml-1">Nome Completo</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-orange-500/5 outline-none transition-all" 
                      placeholder="Ex: João Silva" 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-brand-dark uppercase tracking-widest ml-1">E-mail</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-orange-500/5 outline-none transition-all" 
                        placeholder="seu@email.com" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-brand-dark uppercase tracking-widest ml-1">WhatsApp</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-orange-500/5 outline-none transition-all" 
                        placeholder="(11) 99999-9999" 
                      />
                    </div>
                  </div>
                </div>
                
                <button type="submit" disabled={status === 'submitting'} className="w-full py-5 bg-brand-orange hover:bg-brand-orange-hover text-white font-black text-sm uppercase tracking-[0.2em] rounded-xl transition-all disabled:opacity-70 flex items-center justify-center gap-3 shadow-xl shadow-orange-500/20 group transform hover:-translate-y-1">
                  {status === 'submitting' ? 'Processando...' : (
                    <>
                      RECEBER INFORMAÇÕES
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-[10px] text-center text-brand-gray uppercase tracking-widest font-bold opacity-50">
                  Respeitamos sua privacidade. Seus dados estão seguros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
