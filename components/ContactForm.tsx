
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    tel: '',
    email: '',
    servico: '',
    cidade: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Vim do site e gostaria de um orçamento:%0A%0ANome: ${formData.nome}%0ATelefone: ${formData.tel}%0AServiço: ${formData.servico}%0ACidade/Bairro: ${formData.cidade}%0AMensagem: ${formData.mensagem}`;
    window.open(`https://wa.me/5541991623753?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-[#111] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/5">
          <div className="p-12 md:w-1/2 bg-[#40E0D0] text-black">
            <h2 className="text-4xl font-extrabold mb-6">Solicite Seu Orçamento Gratuito</h2>
            <p className="mb-8 opacity-80 font-medium">Preencha os dados ao lado e nossa equipe entrará em contato via WhatsApp em poucos minutos para agendar seu serviço.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center">
                  <Send size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Atendimento Rápido</h4>
                  <p className="text-sm opacity-70">Sua resposta em até 30min</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4 className="font-bold">Toda Curitiba e RM</h4>
                  <p className="text-sm opacity-70">Atendimento a domicílio sob consulta</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-12 md:w-1/2 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Nome Completo *</label>
              <input 
                required
                type="text" 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#40E0D0] transition-colors"
                placeholder="Ex: João Silva"
                value={formData.nome}
                onChange={e => setFormData({...formData, nome: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Telefone *</label>
                <input 
                  required
                  type="tel" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#40E0D0] transition-colors"
                  placeholder="(41) 99999-9999"
                  value={formData.tel}
                  onChange={e => setFormData({...formData, tel: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Cidade/Bairro *</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#40E0D0] transition-colors"
                  placeholder="Ex: Batel"
                  value={formData.cidade}
                  onChange={e => setFormData({...formData, cidade: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Serviço Desejado *</label>
              <select 
                required
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#40E0D0] transition-colors appearance-none"
                value={formData.servico}
                onChange={e => setFormData({...formData, servico: e.target.value})}
              >
                <option value="">Selecione um serviço...</option>
                <option value="Polimento">Polimento Profissional</option>
                <option value="Lavagem">Lavagem Detalhada</option>
                <option value="Martelinho">Martelinho de Ouro</option>
                <option value="Envelopamento">Envelopamento</option>
                <option value="Eletrica">Auto Elétrica</option>
                <option value="Acessorios">Acessórios</option>
                <option value="Insulfilm">Insulfilm</option>
                <option value="Segurança">Alarmes e Segurança</option>
              </select>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#40E0D0] text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              ENVIAR PARA WHATSAPP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
