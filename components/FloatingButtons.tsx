
import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Left side actions */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
        <a
          href="https://wa.me/5541991623753?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <MessageCircle size={28} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-bold">
            WhatsApp
          </span>
        </a>
        <a
          href="tel:+5541991623753"
          className="bg-[#40E0D0] text-black p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <Phone size={28} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-bold">
            Ligar Agora
          </span>
        </a>
      </div>

      {/* Right side scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 bg-[#40E0D0] text-black p-4 rounded-full shadow-lg transition-all duration-300 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
};

export default FloatingButtons;
