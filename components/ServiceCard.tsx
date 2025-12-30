
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
    <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-[#40E0D0]/30 transition-all duration-700 hover:shadow-[0_20px_60px_rgba(64,224,208,0.1)] flex flex-col h-full">
      {/* Accent Light */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#40E0D0] opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-700"></div>
      
      <div className="relative h-60 overflow-hidden bg-[#111]">
        {!imgError ? (
          <img 
            src={service.image} 
            alt={service.title} 
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black to-[#111]">
             <IconComponent size={48} className="text-[#40E0D0]/20" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        
        {/* Floating Badge */}
        <div className="absolute top-4 left-4 inline-flex p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-[#40E0D0] shadow-xl group-hover:scale-110 transition-transform">
          <IconComponent size={20} />
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow relative z-10">
        <h3 className="text-2xl font-black mb-3 text-white group-hover:text-[#40E0D0] transition-colors tracking-tight uppercase leading-tight">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">
          {service.description}
        </p>
        
        <div className="mt-auto pt-6 border-t border-white/5">
          <a 
            href="#contato"
            className="flex items-center justify-between w-full text-white/50 group-hover:text-white transition-all font-bold text-[10px] uppercase tracking-[0.2em]"
          >
            <span>Solicitar Orçamento</span>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#40E0D0] group-hover:text-black transition-all shadow-lg">
              <ArrowUpRight size={18} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
