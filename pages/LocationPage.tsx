
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { ChevronRight, Shield, Star, Clock, CheckCircle } from 'lucide-react';

const LocationPage: React.FC = () => {
  const { slug } = useParams();
  
  // Format slug back to name for display
  const locationName = slug?.replace(/-/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Região';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Estética Automotiva em ${locationName} - Fast Car Premium`;
  }, [locationName]);

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-[#111] py-4">
        <div className="container mx-auto px-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
           <Link to="/" className="hover:text-[#40E0D0]">Home</Link>
           <ChevronRight size={14} />
           <span className="text-[#40E0D0]">Estética Automotiva {locationName}</span>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Estética Automotiva Premium em <span className="text-[#40E0D0]">{locationName}</span>
            </h1>

            <div className="prose prose-invert max-w-none space-y-12">
              {/* Text 1: Introduction */}
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  A <strong>Fast Car Estética Automotiva</strong> orgulha-se de oferecer seus serviços especializados de alto padrão para todos os moradores de <strong>{locationName}</strong>. Com anos de experiência no mercado de Curitiba e Região Metropolitana, entendemos que o seu veículo não é apenas um meio de transporte, mas um investimento e uma paixão que merece o melhor cuidado possível.
                </p>
                <img src="https://picsum.photos/seed/detailing1/1200/500" className="rounded-3xl w-full h-80 object-cover grayscale" alt="Estética Automotiva" />
                <p className="text-gray-400">
                  Nossa presença em {locationName} visa trazer a conveniência e a qualidade de showroom para mais perto de você. Seja para um polimento técnico que remove riscos superficiais ou uma lavagem detalhada que renova cada canto do seu carro, nossa equipe está preparada para superar suas expectativas com produtos de marcas líderes mundiais.
                </p>
              </div>

              {/* Text 2: Services in the area */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Serviços Mais Procurados em {locationName}</h2>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                       <CheckCircle className="text-[#40E0D0] flex-shrink-0" />
                       <span className="text-gray-300"><strong>Polimento Técnico:</strong> Restauração profunda do brilho e remoção de hologramas.</span>
                    </li>
                    <li className="flex gap-3">
                       <CheckCircle className="text-[#40E0D0] flex-shrink-0" />
                       <span className="text-gray-300"><strong>Lavagem Detalhada:</strong> Limpeza minuciosa com foco nos detalhes internos e externos.</span>
                    </li>
                    <li className="flex gap-3">
                       <CheckCircle className="text-[#40E0D0] flex-shrink-0" />
                       <span className="text-gray-300"><strong>Vitrificação de Pintura:</strong> Proteção duradoura contra intempéries e raios UV.</span>
                    </li>
                  </ul>
                  <p className="text-gray-400">
                    Muitos clientes em {locationName} nos procuram buscando valorizar o veículo para revenda ou simplesmente para manter a estética impecável no dia a dia. Temos pacotes personalizados para cada necessidade.
                  </p>
                </div>
                <img src="https://picsum.photos/seed/polishing/600/600" className="rounded-3xl h-full object-cover" alt="Polimento" />
              </div>

              {/* Text 3: Why choose us */}
              <div className="bg-[#111] p-10 rounded-3xl border border-white/5 space-y-8">
                <h2 className="text-3xl font-bold text-center">O Diferencial Fast Car</h2>
                <div className="grid sm:grid-cols-3 gap-8">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-[#40E0D0]/10 rounded-full flex items-center justify-center mx-auto text-[#40E0D0]">
                      <Shield size={32} />
                    </div>
                    <h4 className="font-bold">Qualidade Certificada</h4>
                    <p className="text-sm text-gray-500">Técnicas avançadas e produtos premium em cada etapa.</p>
                  </div>
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-[#40E0D0]/10 rounded-full flex items-center justify-center mx-auto text-[#40E0D0]">
                      <Clock size={32} />
                    </div>
                    <h4 className="font-bold">Agilidade</h4>
                    <p className="text-sm text-gray-500">Respeitamos seu tempo com cronogramas rigorosos.</p>
                  </div>
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-[#40E0D0]/10 rounded-full flex items-center justify-center mx-auto text-[#40E0D0]">
                      <Star size={32} />
                    </div>
                    <h4 className="font-bold">Atendimento VIP</h4>
                    <p className="text-sm text-gray-500">Suporte personalizado do início ao fim do processo.</p>
                  </div>
                </div>
              </div>

              {/* Text 4: Conclusion & CTA */}
              <div className="text-center space-y-8 py-10">
                <h3 className="text-3xl font-bold">Pronto para transformar seu carro em {locationName}?</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Não perca mais tempo com lavagens comuns que podem danificar sua pintura. Escolha a excelência da <strong>Fast Car</strong> e sinta a diferença de um serviço verdadeiramente profissional.
                </p>
                <a 
                  href="#contato" 
                  className="inline-block bg-[#40E0D0] text-black px-12 py-5 rounded-full font-bold text-xl hover:scale-110 transition-transform btn-pulse"
                >
                  ORÇAMENTO GRÁTIS AGORA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default LocationPage;
