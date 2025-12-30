
import React from 'react';
import { SERVICES, TESTIMONIALS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import BeforeAfter from '../components/BeforeAfter';
import LocationSelector from '../components/LocationSelector';
import ContactForm from '../components/ContactForm';
import { Star, Shield, Award, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/carhero/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase turquoise-glow">
            Seu Carro Merece <br /> <span className="text-[#40E0D0]">Brilhar Como Novo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
            Estética Automotiva Premium em Curitiba e Região. <br />
            Tecnologia de ponta e cuidado artesanal para o seu veículo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contato" 
              className="bg-[#40E0D0] text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-110 transition-transform btn-pulse"
            >
              SOLICITE UM ORÇAMENTO
            </a>
            <a 
              href="#servicos" 
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              CONHEÇA NOSSOS SERVIÇOS
            </a>
          </div>
        </div>

        {/* Floating elements effect */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce">
            <a href="#about" className="text-white/30 hover:text-[#40E0D0] transition-colors">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7 13 5 5 5-5M7 6l5 5 5-5"/></svg>
            </a>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-[#111] border-y border-white/5 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60">
            <div className="flex items-center gap-3">
               <MapPin className="text-[#40E0D0]" />
               <span className="font-bold">Atendemos toda Região de Curitiba</span>
            </div>
            <div className="flex items-center gap-3">
               <Shield className="text-[#40E0D0]" />
               <span className="font-bold">✓ 10+ Anos de Experiência</span>
            </div>
            <div className="flex items-center gap-3">
               <Award className="text-[#40E0D0]" />
               <span className="font-bold">✓ Produtos Importados Premium</span>
            </div>
            <div className="flex items-center gap-3">
               <Star className="text-[#40E0D0]" />
               <span className="font-bold">✓ 100% Garantia de Satisfação</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section id="servicos" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">Nossos Serviços <span className="text-[#40E0D0]">Premium</span></h2>
             <p className="text-gray-400 max-w-2xl mx-auto">Oferecemos soluções completas para proteção, personalização e embelezamento do seu patrimônio.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2">
                <img src="https://picsum.photos/seed/shop/800/600" className="rounded-3xl shadow-2xl grayscale" alt="Oficina" />
             </div>
             <div className="lg:w-1/2 space-y-8">
                <h2 className="text-4xl font-black uppercase">Por que escolher a <span className="text-[#40E0D0]">Fast Car</span>?</h2>
                <div className="space-y-6">
                   <div className="flex gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#40E0D0]/10 flex items-center justify-center text-[#40E0D0]">
                         <Star size={32} />
                      </div>
                      <div>
                         <h4 className="text-xl font-bold mb-2">Excelência Reconhecida</h4>
                         <p className="text-gray-400 leading-relaxed">Somos referência em Curitiba por entregar resultados impecáveis nos veículos mais exigentes.</p>
                      </div>
                   </div>
                   <div className="flex gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#40E0D0]/10 flex items-center justify-center text-[#40E0D0]">
                         <Shield size={32} />
                      </div>
                      <div>
                         <h4 className="text-xl font-bold mb-2">Proteção Garantida</h4>
                         <p className="text-gray-400 leading-relaxed">Utilizamos selantes e vitrificadores de alta tecnologia para manter o resultado por muito mais tempo.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Before After Slider */}
      <BeforeAfter />

      {/* Testimonials */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase mb-4">O que dizem nossos <span className="text-[#40E0D0]">Clientes</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="glass-card p-8 rounded-3xl relative">
                <div className="flex gap-1 text-[#40E0D0] mb-4">
                   {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} className="w-12 h-12 rounded-full border-2 border-[#40E0D0]" alt={t.name} />
                  <div>
                    <h5 className="font-bold">{t.name}</h5>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocationSelector />
      <ContactForm />

      {/* Map Section */}
      <section className="h-[500px] w-full relative">
        <iframe 
          title="Fast Car Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.51475753173!2d-49.35626214555823!3d-25.43207908996585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4119760ad31%3A0x53544d2d0598dca2!2sCuritiba%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1716298372641!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
          loading="lazy"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-black/20"></div>
      </section>
    </div>
  );
};

export default Home;
