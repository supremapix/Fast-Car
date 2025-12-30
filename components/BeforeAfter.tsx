
import React, { useState, useCallback } from 'react';

const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'touches' in e ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX;
    const pos = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 0), 100));
  }, []);

  return (
    <section className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2">
             <span className="text-[#40E0D0] font-black text-xs uppercase tracking-[0.5em] mb-4 block">Visual Results</span>
            <h2 className="text-4xl sm:text-6xl font-black mb-8 leading-none uppercase tracking-tighter">
              A <span className="text-[#40E0D0]">Magia</span> <br /> que Seu Carro <br /> Estava Esperando
            </h2>
            <p className="text-gray-500 mb-12 leading-relaxed text-lg font-medium">
              Não vendemos apenas polimento, vendemos a sensação de carro novo todos os dias. Arraste o cursor lateralmente e testemunhe a excelência do detalhamento Fast Car.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-[#40E0D0] mb-1">10+</span>
                <span className="text-[10px] text-gray-600 uppercase font-black tracking-widest">Anos de Histórico</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-[#40E0D0] mb-1">10k+</span>
                <span className="text-[10px] text-gray-600 uppercase font-black tracking-widest">Resultados Reais</span>
              </div>
            </div>
          </div>

          <div 
            className="w-full md:w-1/2 aspect-[16/10] rounded-[3rem] overflow-hidden relative cursor-col-resize select-none border-8 border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.6)] group"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
          >
            {/* After Image: High gloss, polished car */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1603584173870-7f340866037a?auto=format&fit=crop&q=80&w=1200)' }}
            />
            {/* Before Image: Scratched, dull paint */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200)',
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                filter: 'saturate(0.5) contrast(0.8) brightness(0.8)'
              }}
            />
            
            {/* Labels Flutuantes */}
            <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] pointer-events-none border border-white/10">Estado Original</div>
            <div className="absolute top-8 right-8 bg-[#40E0D0]/90 text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] pointer-events-none shadow-xl">Fast Car Finishing</div>
            
            {/* Handle Interativo */}
            <div 
              className={`absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] z-10 ${isDragging ? 'scale-x-150' : ''} transition-transform`}
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.5)] text-black group-hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="animate-pulse"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
            
            {/* Overlay de Brilho */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#40E0D0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
