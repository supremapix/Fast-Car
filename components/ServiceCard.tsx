
import React, { useState } from 'react';
import { Sparkles, Waves, Hammer, ShieldCheck, Zap, Cog, Sun, Bell, ArrowUpRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const IconMap: Record<string, any> = {
  Sparkles, Waves, Hammer, ShieldCheck, Zap, Cog, Sun, Bell
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = IconMap[service.icon] || Sparkles;
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[#40E0D0]/40 transition-all duration-700 hover:shadow-[0_20px_80px_rgba(64,224,208,0.15)] flex flex-col h-full hover:-translate-y-2">
      {/* Accent Light - Follows mouse conceptually via hover area */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#40E0D0] opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-1000"></div>
      
      <div className="relative h-72 overflow-hidden bg-[#0d0d0d]">
        {!imgError ? (
          <img 
            src={service.image} 
            alt={service.title} 
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110 grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black to-[#111]">
             <IconComponent size={64} className="text-[#40E0D0]/10" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        
        {/* Floating Badge com efeito Glow */}
        <div className="absolute top-6 left-6 inline-flex p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 text-[#40E0D0] shadow-2xl group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(64,224,208,0.4)] transition-all duration-500">
          <IconComponent size={24} />
        </div>
      </div>

      <div className="p-10 flex flex-col flex-grow relative z-10">
        <h3 className="text-3xl font-black mb-4 text-white group-hover:text-[#40E0D0] transition-colors tracking-tighter uppercase leading-tight">{service.title}</h3>
        <p className="text-gray-500 text-base leading-relaxed mb-10 group-hover:text-gray-300 transition-colors font-medium">
          {service.description}
        </p>
        
        <div className="mt-auto pt-8 border-t border-white/5">
          <a 
            href="#contato"
            className="flex items-center justify-between w-full text-white/40 group-hover:text-[#40E0D0] transition-all font-black text-xs uppercase tracking-[0.3em] btn-neon"
          >
            <span>Obter Proposta</span>
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#40E0D0] group-hover:text-black transition-all shadow-xl group-hover:rotate-45">
              <ArrowUpRight size={22} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
