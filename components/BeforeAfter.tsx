
import React, { useState, useCallback, useRef } from 'react';

const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX;
    const relativeX = x - rect.left;
    const pos = (relativeX / rect.width) * 100;
    
    // Suavização manual via RequestAnimationFrame não é estritamente necessária aqui, 
    // mas garantimos que o valor fique entre 0 e 100
    setSliderPos(Math.min(Math.max(pos, 0), 100));
  }, []);

  // O segredo para o "cross-fade elegante" é usar um linear-gradient no mask-image
  // Isso cria uma borda suave (feathered edge) em vez de um corte seco.
  const beforeMaskStyle: React.CSSProperties = {
    maskImage: `linear-gradient(to right, black ${sliderPos - 5}%, transparent ${sliderPos + 5}%)`,
    WebkitMaskImage: `linear-gradient(to right, black ${sliderPos - 5}%, transparent ${sliderPos + 5}%)`,
  };

  return (
    <section className="py-32 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-2/5 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#40E0D0]/10 border border-[#40E0D0]/20">
              <span className="w-2 h-2 rounded-full bg-[#40E0D0] animate-ping"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#40E0D0]">Tecnologia de Restauração</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-black mb-8 leading-none uppercase tracking-tighter">
              A Perfeição <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40E0D0] to-white">está nos detalhes</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              Utilizamos microscopia de verniz para garantir que cada etapa do polimento seja precisa. Nosso slider demonstra o <span className="text-white">blend perfeito</span> entre o desgaste do tempo e a renovação absoluta.
            </p>
            
            <div className="flex flex-wrap gap-10 pt-4">
              <div className="space-y-1">
                <p className="text-4xl font-black text-white">9H</p>
                <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest">Dureza Cerâmica</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-black text-white">100%</p>
                <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest">Remoção de Swirls</p>
              </div>
            </div>
          </div>

          <div 
            ref={containerRef}
            className="w-full lg:w-3/5 aspect-[16/10] rounded-[2.5rem] overflow-hidden relative cursor-col-resize select-none border border-white/10 shadow-[0_0_100px_rgba(64,224,208,0.1)] group"
            onMouseMove={(e) => isDragging && handleMove(e)}
            onTouchMove={(e) => isDragging && handleMove(e)}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* Imagem "DEPOIS" (Base) */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1603584173870-7f340866037a?auto=format&fit=crop&q=80&w=1200)' }}
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
            </div>

            {/* Imagem "ANTES" (Overlay com Máscara Suave) */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105 grayscale contrast-75 brightness-75"
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200)',
                ...beforeMaskStyle
              }}
            />
            
            {/* Labels Modernas */}
            <div className="absolute bottom-8 left-8 z-20">
              <div className="px-5 py-2 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl">
                Negligenciado
              </div>
            </div>
            <div className="absolute bottom-8 right-8 z-20">
              <div className="px-5 py-2 rounded-xl bg-[#40E0D0] text-black text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(64,224,208,0.5)]">
                Assinatura Fast Car
              </div>
            </div>
            
            {/* Handle Customizado com Efeito de Brilho Neon */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#40E0D0] to-transparent z-30 transition-shadow duration-300"
              style={{ 
                left: `${sliderPos}%`,
                boxShadow: isDragging ? '0 0 30px rgba(64,224,208,0.8)' : '0 0 15px rgba(64,224,208,0.4)'
              }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#40E0D0] rounded-2xl flex items-center justify-center shadow-2xl text-black transition-all group-hover:scale-110 active:scale-95 active:rotate-45">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className={isDragging ? 'animate-none' : 'animate-pulse'}>
                  <path d="m11 17-5-5 5-5M13 17l5-5-5-5"/>
                </svg>
              </div>
              
              {/* Linha de brilho horizontal que acompanha o centro */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#40E0D0]/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Shimmer Effect ao mover */}
            <div className={`absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent transition-opacity duration-500 ${isDragging ? 'opacity-100' : 'opacity-0'}`}
                 style={{ transform: `translateX(${sliderPos - 50}%)` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
