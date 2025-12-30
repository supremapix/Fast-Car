
import React, { useState } from 'react';

const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'touches' in e ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX;
    const pos = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 0), 100));
  };

  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-extrabold mb-6 leading-tight">
              Veja a <span className="text-[#40E0D0]">Transformação</span> <br /> Real em Cada Detalhe
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Nossos especialistas utilizam as melhores técnicas e produtos do mercado para restaurar a beleza do seu veículo. Arraste o slider para conferir a diferença que a Fast Car faz.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#40E0D0]">10+</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Anos de Exp.</span>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#40E0D0]">10k+</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Carros Atendidos</span>
              </div>
            </div>
          </div>

          <div 
            className="w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden relative cursor-col-resize select-none border-4 border-white/5"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* After Image: High gloss, polished car */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1603584173870-7f340866037a?auto=format&fit=crop&q=80&w=1200)' }}
            />
            {/* Before Image: Scratched, dull paint */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200)',
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                filter: 'saturate(0.5) contrast(0.8) brightness(0.8)'
              }}
            />
            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest pointer-events-none">Antes</div>
            <div className="absolute top-4 right-4 bg-[#40E0D0]/80 text-black px-3 py-1 rounded text-xs font-bold uppercase tracking-widest pointer-events-none">Depois</div>
            
            {/* Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl text-black">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
