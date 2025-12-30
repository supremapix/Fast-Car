
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import LocationPage from './pages/LocationPage';
import FloatingButtons from './components/FloatingButtons';
import { Instagram, Facebook, Phone, Mail, Menu, X, Heart } from 'lucide-react';
import { COLORS } from './constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-lg py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
           <div className="w-12 h-12 bg-gradient-to-br from-[#40E0D0] to-[#008080] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(64,224,208,0.3)] group-hover:scale-110 transition-transform">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
           </div>
           <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter leading-none">FAST CAR</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#40E0D0]">ESTÉTICA AUTOMOTIVA</span>
           </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-sm font-bold hover:text-[#40E0D0] transition-colors">HOME</Link>
          <a href="#servicos" className="text-sm font-bold hover:text-[#40E0D0] transition-colors">SERVIÇOS</a>
          <a href="#locations" className="text-sm font-bold hover:text-[#40E0D0] transition-colors">LOCALIDADES</a>
          <a href="#contato" className="bg-[#40E0D0] text-black px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-all">ORÇAMENTO</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
           {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-black z-50 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="p-8 flex flex-col h-full">
            <div className="flex justify-between items-center mb-16">
               <span className="text-2xl font-black">FAST CAR</span>
               <button onClick={() => setIsOpen(false)}><X size={40} /></button>
            </div>
            <div className="flex flex-col gap-8 text-3xl font-black">
               <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
               <a href="#servicos" onClick={() => setIsOpen(false)}>SERVIÇOS</a>
               <a href="#locations" onClick={() => setIsOpen(false)}>LOCALIDADES</a>
               <a href="#contato" onClick={() => setIsOpen(false)} className="text-[#40E0D0]">ORÇAMENTO</a>
            </div>
            <div className="mt-auto flex gap-6">
               <Instagram size={32} />
               <Facebook size={32} />
               <Phone size={32} />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-black">FAST CAR</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Referência em estética automotiva premium em Curitiba e Região Metropolitana. Unindo tecnologia, paixão e artesania para cuidar do seu veículo como se fosse nosso.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/ffastcar" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#40E0D0] hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/FastCarEsteticaAutomotiva" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#40E0D0] hover:text-black transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-[#40E0D0]">Serviços</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Polimento Técnico</li>
              <li className="hover:text-white cursor-pointer transition-colors">Lavagem Detalhada</li>
              <li className="hover:text-white cursor-pointer transition-colors">Martelinho de Ouro</li>
              <li className="hover:text-white cursor-pointer transition-colors">Envelopamento</li>
              <li className="hover:text-white cursor-pointer transition-colors">Auto Elétrica</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-[#40E0D0]">Horários</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>Segunda a Sexta: 08h às 19h</li>
              <li>Sábado: 08h às 19h</li>
              <li className="text-red-500/50">Domingo: Fechado</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-[#40E0D0]">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#40E0D0]" />
                (41) 99162-3753
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#40E0D0]" />
                fastcarautomotivo821@gmail.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#40E0D0] mt-1" />
                Curitiba/PR - CEP 81070-100
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-600">
            © 2024 Fast Car Estética Automotiva. CNPJ: 33.131.915/0001-95. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-600 font-bold uppercase tracking-widest">
            Desenvolvido com <Heart size={14} className="text-red-500 animate-pulse fill-red-500" /> por 
            <a href="https://supremasite.com.br" className="text-white hover:text-[#40E0D0] transition-colors">Suprema Sites Express</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#40E0D0] selection:text-black">
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

// Simple icon wrapper for Footer
const MapPin = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

export default App;
