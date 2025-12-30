
import React from 'react';
import { Sparkles, Waves, Hammer, ShieldCheck, Zap, Cog, Sun, Bell, ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const IconMap: Record<string, any> = {
  Sparkles, Waves, Hammer, ShieldCheck, Zap, Cog, Sun, Bell
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = IconMap[service.icon];

  return (
    <div className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-[#40E0D0]/30 transition-all duration-500 hover:-translate-y-2 shadow-xl">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#40E0D0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      
      <div className="h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500"></div>
      </div>

      <div className="p-6">
        <div className="inline-flex p-3 rounded-lg bg-[#40E0D0]/10 text-[#40E0D0] mb-4 group-hover:rotate-[360deg] transition-transform duration-700">
          <IconComponent size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#40E0D0] transition-colors">{service.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {service.description}
        </p>
        <button className="flex items-center gap-2 text-white font-semibold text-sm hover:gap-4 transition-all group/btn">
          Saiba Mais <ArrowRight size={16} className="text-[#40E0D0]" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
