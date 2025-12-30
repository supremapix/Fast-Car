
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Search } from 'lucide-react';
import { CITIES, NEIGHBORHOODS } from '../constants';

const LocationSelector: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const slugify = (text: string) => text.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');

  const filteredCities = CITIES.filter(c => c.toLowerCase().includes(search.toLowerCase()));
  const filteredNeighborhoods = NEIGHBORHOODS.filter(n => n.toLowerCase().includes(search.toLowerCase()));

  return (
    <section id="locations" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Atendemos Toda Região Metropolitana</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Qualidade premium onde você estiver. Selecione sua localização abaixo para ver o atendimento especializado em sua área.
          </p>
          <div className="mt-8 relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Digite sua cidade ou bairro..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#111] border border-white/10 rounded-full py-4 pl-12 pr-6 text-white focus:outline-none focus:border-[#40E0D0]/50 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filteredCities.map(city => (
            <button
              key={city}
              onClick={() => navigate(`/estetica-automotiva-${slugify(city)}`)}
              className="bg-gradient-to-r from-[#40E0D0]/10 to-transparent border border-[#40E0D0]/20 hover:from-[#40E0D0] hover:to-[#40E0D0]/80 hover:text-black rounded-full py-3 px-6 transition-all duration-300 text-sm font-semibold truncate hover:scale-105"
            >
              {city}
            </button>
          ))}
          {filteredNeighborhoods.map(neighborhood => (
            <button
              key={neighborhood}
              onClick={() => navigate(`/estetica-automotiva-curitiba-${slugify(neighborhood)}`)}
              className="bg-black border border-white/10 hover:border-[#40E0D0] hover:text-[#40E0D0] rounded-full py-3 px-6 transition-all duration-300 text-sm font-medium truncate"
            >
              <span className="text-xs opacity-50 block">Curitiba /</span>
              {neighborhood}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSelector;
