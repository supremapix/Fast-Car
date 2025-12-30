
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import LocationPage from './pages/LocationPage';
import FloatingButtons from './components/FloatingButtons';
import { Instagram, Facebook, Phone, Mail, Menu, X, Heart, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-2xl py-3 border-b border-white/10' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
           <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#40E0D0] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(64,224,208,0.2)] group-hover:rotate-12 transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
           </div>
           <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tighter leading-none italic">FAST CAR</span>
              <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.3em] text-[#40E0D0] uppercase">Estética Automotiva</span>
           </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/" className="text-xs font-black hover:text-[#40E0D0] transition-colors tracking-widest uppercase">Home</Link>
          <a href="#servicos" className="text-xs font-black hover:text-[#40E0D0] transition-colors tracking-widest uppercase">Serviços</a>
          <a href="#locations" className="text-xs font-black hover:text-[#40E0D0] transition-colors tracking-widest uppercase">Localidades</a>
          <a href="#contato" className="bg-white text-black px-8 py-3 rounded-full text-xs font-black hover:bg-[#40E0D0] transition-all uppercase tracking-widest">
            Orçamento
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
           {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Refined */}
      <div className={`lg:hidden fixed inset-0 bg-black z-[110] transition-all duration-700 ease-in-out ${
        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
         <div className="p-8 flex flex-col h-full bg-[#050505]">
            <div className="flex justify-between items-center mb-16">
               <span className="text-2xl font-black italic">FAST CAR</span>
               <button onClick={() => setIsOpen(false)} className="p-2 bg-white/5 rounded-full"><X size={32} /></button>
            </div>
            <div className="flex flex-col gap-6 text-4xl font-black uppercase tracking-tighter">
               <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#40E0D0] transition-colors">Home</Link>
               <a href="#servicos" onClick={() => setIsOpen(false)} className="hover:text-[#40E0D0] transition-colors">Serviços</a>
               <a href="#locations" onClick={() => setIsOpen(false)} className="hover:text-[#40E0D0] transition-colors">Localidades</a>
               <a href="#contato" onClick={() => setIsOpen(false)} className="text-[#40E0D0] flex items-center gap-4">
                 Orçamento <ArrowRight size={32} />
               </a>
            </div>
            <div className="mt-auto pt-10 border-t border-white/10 space-y-8">
               <div className="flex gap-6">
                  <Instagram size={28} className="text-gray-500 hover:text-white transition-colors" />
                  <Facebook size={28} className="text-gray-500 hover:text-white transition-colors" />
               </div>
               <div className="space-y-2">
                 <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">Fale Conosco</p>
                 <p className="text-xl font-black">(41) 99162-3753</p>
               </div>
            </div>
         </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-black italic">FAST CAR</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              O mais alto padrão em detalhamento automotivo de Curitiba. Materiais premium e mão de obra especializada.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#40E0D0] hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#40E0D0] hover:text-black transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-[10px] text-[#40E0D0]">Nossos Serviços</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li className="hover:text-[#40E0D0] cursor-pointer transition-colors">Polimento Cerâmico</li>
              <li className="hover:text-[#40E0D0] cursor-pointer transition-colors">Vitrificação 9H</li>
              <li className="hover:text-[#40E0D0] cursor-pointer transition-colors">Lavagem de Detalhe</li>
              <li className="hover:text-[#40E0D0] cursor-pointer transition-colors">Higienização</li>
              <li className="hover:text-[#40E0D0] cursor-pointer transition-colors">Martelinho VIP</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-[10px] text-[#40E0D0]">Localização</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li>Curitiba - PR</li>
              <li>Bairro Batel / Seminário</li>
              <li>Região Metropolitana</li>
              <li className="text-[#40E0D0]">Atendimento Delivery</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-[10px] text-[#40E0D0]">Direto ao Ponto</h4>
            <a href="#contato" className="block p-4 rounded-2xl bg-[#111] border border-white/5 hover:border-[#40E0D0]/50 transition-all group">
               <p className="text-[10px] uppercase font-bold text-gray-600 mb-1 group-hover:text-[#40E0D0]">WhatsApp</p>
               <p className="text-lg font-black text-white">(41) 99162-3753</p>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest text-center">
            © 2024 Fast Car Estética Automotiva. CNPJ: 33.131.915/0001-95.
          </p>
          <div className="flex items-center gap-2 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
            Made with <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" /> by 
            <a href="https://supremasite.com.br" className="text-white hover:text-[#40E0D0] transition-colors">Suprema Sites</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#40E0D0] selection:text-black antialiased">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estetica-automotiva-:slug" element={<LocationPage />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default App;
