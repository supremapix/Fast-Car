
import React, { useState, useEffect } from 'react';
import { SERVICES, TESTIMONIALS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import BeforeAfter from '../components/BeforeAfter';
import LocationSelector from '../components/LocationSelector';
import ContactForm from '../components/ContactForm';
import { Star, Shield, Award, MapPin, ChevronDown, CheckCircle } from 'lucide-react';

const Typewriter: React.FC = () => {
  const texts = [
    "Seu carro com brilho de showroom.",
    "Proteção premium para o seu investimento.",
    "O melhor detalhamento de Curitiba.",
    "Deixe seu veículo impecável hoje.",
    "Especialistas em marcas de luxo."
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = texts[currentTextIndex];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, speed]);

  return (
    <span className="typewriter-cursor text-[#40E0D0] drop-shadow-[0_0_10px_rgba(64,224,208,0.5)]">
      {currentText}
    </span>
  );
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_10s_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black"></div>
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-[#40E0D0] animate-pulse"></div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-300">Unidade Curitiba - Aberto Agora</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-none turquoise-glow">
            FAST CAR <br /> 
            <span className="text-2xl sm:text-4xl md:text-5xl block mt-2 min-h-[1.5em] lg:min-h-[auto]">
              <Typewriter />
            </span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed px-4">
            Transformamos veículos comuns em obras de arte. Referência em cuidado automotivo de alto padrão com tecnologia de ponta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <a 
              href="#contato" 
              className="w-full sm:w-auto bg-[#40E0D0] text-black px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all btn-pulse uppercase tracking-tight shadow-[0_0_30px_rgba(64,224,208,0.3)]"
            >
              Falar com um Especialista
            </a>
            <a 
              href="#servicos" 
              className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all uppercase tracking-tight"
            >
              Ver Portfólio
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
           <ChevronDown size={32} className="text-[#40E0D0]" />
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="py-12 bg-[#080808] border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <div className="text-center group cursor-default">
              <div className="text-2xl sm:text-4xl font-black text-[#40E0D0] group-hover:scale-110 transition-transform">+10.000</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-bold">Carros Detalhados</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-2xl sm:text-4xl font-black text-[#40E0D0] group-hover:scale-110 transition-transform">100%</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-bold">Satisfação</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-2xl sm:text-4xl font-black text-[#40E0D0] group-hover:scale-110 transition-transform">+12 Anos</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-bold">Experiência</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-2xl sm:text-4xl font-black text-[#40E0D0] group-hover:scale-110 transition-transform">TOP 1</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-bold">Avaliação Google</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicos" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div className="max-w-xl">
                <span className="text-[#40E0D0] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">O que fazemos de melhor</span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter">Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40E0D0] to-white">Serviços</span></h2>
             </div>
             <p className="text-gray-400 text-sm md:text-right max-w-sm">Soluções completas para proteger e valorizar seu veículo com o que há de mais moderno na engenharia estética.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before After Section */}
      <BeforeAfter />

      {/* Features Detail */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="relative">
                 <img 
                   src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800" 
                   className="rounded-3xl shadow-[0_0_50px_rgba(64,224,208,0.15)] grayscale hover:grayscale-0 transition-all duration-700" 
                   alt="Interior de Luxo"
                 />
                 <div className="absolute -bottom-10 -right-10 bg-[#40E0D0] p-8 rounded-3xl hidden lg:block">
                    <Award size={48} className="text-black" />
                 </div>
              </div>
              <div className="space-y-8">
                 <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter">Padrão <span className="text-[#40E0D0]">Fast Car</span> de Qualidade</h3>
                 <p className="text-gray-400 leading-relaxed text-lg">Não somos um lava-jato. Somos um estúdio de detalhamento. Cada veículo que entra em nossa unidade recebe um diagnóstico técnico exclusivo.</p>
                 <ul className="space-y-6">
                    {[
                      { title: "Produtos Biodegradáveis", desc: "Cuidamos do seu carro e do meio ambiente." },
                      { title: "Técnicos Certificados", desc: "Mão de obra treinada pelas melhores academias." },
                      { title: "Iluminação de Precisão", desc: "Estúdio com luzes frias para identificar cada detalhe." }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 group">
                         <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#40E0D0] group-hover:bg-[#40E0D0] group-hover:text-black transition-all">
                            <CheckCircle size={24} />
                         </div>
                         <div>
                            <h5 className="font-bold text-lg">{item.title}</h5>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                         </div>
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase mb-4">A Voz de quem <span className="text-[#40E0D0]">Confia</span></h2>
            <div className="w-20 h-1 bg-[#40E0D0] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="glass-card p-10 rounded-3xl hover:-translate-y-2 transition-all duration-500 group">
                <div className="flex gap-1 text-[#40E0D0] mb-6">
                   {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-10 leading-relaxed group-hover:text-white transition-colors">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} className="w-14 h-14 rounded-full border-2 border-[#40E0D0]/30 group-hover:border-[#40E0D0] transition-colors" alt={t.name} />
                  <div>
                    <h5 className="font-bold group-hover:text-[#40E0D0] transition-colors">{t.name}</h5>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocationSelector />
      <ContactForm />

      {/* Enhanced Map Section */}
      <section className="h-[450px] w-full relative">
        <iframe 
          title="Fast Car Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.51475753173!2d-49.35626214555823!3d-25.43207908996585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4119760ad31%3A0x53544d2d0598dca2!2sCuritiba%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1716298372641!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
          loading="lazy"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-black/40"></div>
        <div className="absolute bottom-10 left-10 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 hidden md:block">
           <h4 className="font-bold mb-2">Visite-nos</h4>
           <p className="text-sm text-gray-400">Rua Desembargador Motta, 1234 <br /> Batel, Curitiba - PR</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
