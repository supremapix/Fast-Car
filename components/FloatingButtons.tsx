
import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, CarFront } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isRacing, setIsRacing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (isRacing) return;
    
    setIsRacing(true);
    
    // Pequeno delay para a animação começar antes/durante o scroll
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    
    // Reset racing state after animation completes
    setTimeout(() => {
      setIsRacing(false);
    }, 1500);
  };

  return (
    <>
      {/* Racing Car Animation Element */}
      <div className={`car-racing ${isRacing ? 'active' : ''}`}>
        <div className="relative text-[#40E0D0] filter drop-shadow-[0_0_15px_rgba(64,224,208,1)]">
          <CarFront size={64} strokeWidth={2.5} />
          {/* Fumaça/Rastro da aceleração */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-12 bg-gradient-to-t from-[#40E0D0]/40 to-transparent blur-xl animate-pulse"></div>
        </div>
      </div>

      {/* Left side actions */}
      <div className="fixed bottom-6 left-6 z-[999] flex flex-col gap-4">
        <a
          href="https://wa.me/5541991623753?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group btn-neon"
        >
          <MessageCircle size={24} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-black uppercase text-[10px] tracking-widest">
            WhatsApp
          </span>
        </a>
        <a
          href="tel:+5541991623753"
          className="bg-[#40E0D0] text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group btn-neon"
        >
          <Phone size={24} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-black uppercase text-[10px] tracking-widest">
            Ligar Agora
          </span>
        </a>
      </div>

      {/* Right side scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-[998] bg-[#40E0D0] text-black p-5 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-90 border-2 border-white/20 ${
          showScrollTop && !isRacing ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={28} strokeWidth={3} />
      </button>
    </>
  );
};

export default FloatingButtons;
