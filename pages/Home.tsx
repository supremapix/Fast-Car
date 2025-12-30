
import React, { useState, useEffect, useRef } from 'react';
import { SERVICES, TESTIMONIALS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import BeforeAfter from '../components/BeforeAfter';
import LocationSelector from '../components/LocationSelector';
import ContactForm from '../components/ContactForm';
import { Star, Shield, Award, MapPin, ChevronDown, CheckCircle, Zap, Car, ChevronLeft, ChevronRight } from 'lucide-react';

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
        setSpeed(120);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, speed]);

  return (
    <span className="typewriter-cursor text-[#40E0D0] drop-shadow-[0_0_15px_rgba(64,224,208,0.6)]">
      {currentText}
    </span>
  );
};

const InteractiveCar: React.FC = () => {
  const [isRacing, setIsRacing] = useState(false);

  const startRace = () => {
    if (isRacing) return;
    setIsRacing(true);
    setTimeout(() => setIsRacing(false), 2600);
  };

  return (
    <div className="relative h-24 w-full bg-[#050505] border-y border-white/5 overflow-hidden flex items-center cursor-pointer group" onClick={startRace}>
      <div className="container mx-auto px-6 relative flex items-center justify-between">
         <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-700 group-hover:text-[#40E0D0] transition-colors">Acelere seu sonho <span className="hidden sm:inline">| Clique no carro</span></span>
         <div className="flex gap-4 opacity-20">
            {[...Array(10)].map((_, i) => <div key={i} className="w-2 h-8 bg-gray-500 skew-x-12"></div>)}
         </div>
      </div>
      
      <div className={`car-horizontal-race z-20 ${isRacing ? 'active' : ''}`} style={{ top: '50%', transform: 'translateY(-50%)' }}>
        <div className="relative text-[#40E0D0] drop-shadow-[0_0_15px_rgba(64,224,208,0.8)]">
           <Car size={48} fill="currentColor" />
           <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex gap-1">
              <div className="w-4 h-1 bg-gradient-to-r from-transparent to-[#40E0D0] rounded-full animate-pulse"></div>
              <div className="w-6 h-1 bg-gradient-to-r from-transparent to-[#40E0D0] rounded-full animate-pulse delay-75"></div>
           </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="relative max-w-5xl mx-auto px-4 sm:px-12">
      {/* Testimonial Display Area */}
      <div className="relative min-h-[450px] sm:min-h-[350px] flex items-center justify-center">
        {TESTIMONIALS.map((t, idx) => (
          <div 
            key={idx} 
            className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center justify-center ${
              idx === currentIndex 
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
            }`}
          >
            <div className="glass-card p-8 sm:p-12 rounded-[2.5rem] bg-[#0a0a0a]/50 border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-[#40E0D0]/5 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V4H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H3.017C2.46472 8 2.017 8.44772 2.017 9V11C2.017 11.5523 1.56928 12 1.017 12H0.017V4H10.017V15C10.017 18.3137 7.33072 21 4.017 21H2.017Z"/></svg>
              </div>
              
              <div className="flex gap-1 text-[#40E0D0] mb-8 justify-center sm:justify-start">
                 {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" className="animate-pulse" />)}
              </div>
              
              <p className="text-gray-300 italic mb-12 leading-relaxed text-xl sm:text-2xl text-center sm:text-left font-medium">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-6 justify-center sm:justify-start">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#40E0D0] blur-xl opacity-20 animate-pulse"></div>
                  <img src={t.image} className="w-20 h-20 rounded-2xl border-2 border-[#40E0D0]/40 group-hover:border-[#40E0D0] transition-all duration-500 relative z-10" alt={t.name} />
                </div>
                <div>
                  <h5 className="font-black text-2xl group-hover:text-[#40E0D0] transition-colors tracking-tight">{t.name}</h5>
                  <p className="text-xs text-[#40E0D0] font-black uppercase tracking-[0.3em] mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-8 flex flex-col gap-4">
        <button 
          onClick={handlePrev}
          className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-[#40E0D0] hover:text-black transition-all group shadow-xl backdrop-blur-md"
        >
          <ChevronLeft size={24} strokeWidth={3} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-8 flex flex-col gap-4">
        <button 
          onClick={handleNext}
          className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-[#40E0D0] hover:text-black transition-all group shadow-xl backdrop-blur-md"
        >
          <ChevronRight size={24} strokeWidth={3} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-12">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentIndex(idx);
                setIsAnimating(false);
              }, 400);
            }}
            className={`h-2 rounded-full transition-all duration-500 ${
              idx === currentIndex ? 'w-12 bg-[#40E0D0] shadow-[0_0_15px_rgba(64,224,208,0.5)]' : 'w-2 bg-gray-800 hover:bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="flex flex-col bg-black">
      {/* Hero Section Refinada */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-25 scale-110 animate-[pulse_15s_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black"></div>
          <div className="absolute inset-0 hero-gradient opacity-60"></div>
          <div className="scanline"></div>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-xl animate-[bounce_3s_infinite] shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <Zap className="text-[#40E0D0] animate-pulse" size={14} />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#40E0D0]">Referência em Curitiba</span>
          </div>
          
          <h1 className="text-4xl sm:text-7xl md:text-9xl font-black mb-6 tracking-tighter uppercase leading-none turquoise-glow">
            FAST <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">CAR</span> <br /> 
            <div className="text-2xl sm:text-4xl md:text-5xl mt-4 min-h-[1.5em] lg:min-h-[auto] font-extrabold lowercase italic">
              <Typewriter />
            </div>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed px-4 opacity-0 animate-[fade-in_1s_ease-out_forwards_0.5s]">
            Transformamos veículos comuns em obras de arte automotiva. Tecnologia 9H e cuidado artesanal para quem exige o impossível.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4 opacity-0 animate-[fade-in_1s_ease-out_forwards_1s]">
            <a 
              href="#contato" 
              className="w-full sm:w-auto bg-[#40E0D0] text-black px-12 py-5 rounded-full font-black text-lg hover:scale-110 hover:-rotate-1 transition-all btn-pulse btn-neon uppercase tracking-tighter shadow-[0_0_40px_rgba(64,224,208,0.4)]"
            >
              Consultar Orçamento
            </a>
            <a 
              href="#servicos" 
              className="w-full sm:w-auto bg-white/5 backdrop-blur-xl text-white border border-white/20 px-12 py-5 rounded-full font-black text-lg hover:bg-white/10 hover:scale-105 transition-all uppercase tracking-tighter"
            >
              Portfólio 2024
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-[bounce_2s_infinite] opacity-30 hover:opacity-100 transition-opacity cursor-pointer">
           <ChevronDown size={40} className="text-[#40E0D0]" />
        </div>
      </section>

      {/* Carro Interativo Animado */}
      <InteractiveCar />

      {/* Trust Stats com Reveal */}
      <section className="py-16 bg-[#080808] border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { label: "Carros Detalhados", val: "+10.000" },
              { label: "Satisfação", val: "100%" },
              { label: "Experiência", val: "+12 Anos" },
              { label: "Avaliação Google", val: "TOP 1" }
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default reveal" ref={addToRefs}>
                <div className="text-3xl sm:text-5xl font-black text-[#40E0D0] group-hover:scale-110 transition-transform duration-500">{stat.val}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-600 font-bold mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid com animações de entrada escalonadas */}
      <section id="servicos" className="py-32 relative overflow-hidden bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal" ref={addToRefs}>
             <div className="max-w-2xl">
                <span className="text-[#40E0D0] font-black text-xs uppercase tracking-[0.5em] mb-4 block">Craftsmanship</span>
                <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter leading-none">
                  Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40E0D0] via-white to-gray-600">Serviços</span>
                </h2>
             </div>
             <p className="text-gray-500 text-sm md:text-right max-w-sm font-medium leading-relaxed">
               Engenharia estética focada em preservação de valor e estética absoluta. Utilizamos apenas as melhores químicas globais.
             </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className="reveal" ref={addToRefs} style={{ transitionDelay: `${idx * 150}ms` }}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before After com Reveal */}
      <div className="reveal" ref={addToRefs}>
        <BeforeAfter />
      </div>

      {/* Testimonials Carousel Section */}
      <section className="py-32 bg-black border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 reveal" ref={addToRefs}>
            <span className="text-[#40E0D0] font-black text-xs uppercase tracking-[0.5em] mb-4 block">Showroom Feedback</span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase mb-4 tracking-tighter">O Relato dos <span className="text-[#40E0D0]">Apaixonados</span></h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#40E0D0] to-transparent mx-auto"></div>
          </div>
          
          <div className="reveal" ref={addToRefs}>
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <div className="reveal" ref={addToRefs}><LocationSelector /></div>
      <div className="reveal" ref={addToRefs}><ContactForm /></div>

      {/* Enhanced Map Section */}
      <section className="h-[500px] w-full relative reveal" ref={addToRefs}>
        <iframe 
          title="Fast Car Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.51475753173!2d-49.35626214555823!3d-25.43207908996585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4119760ad31%3A0x53544d2d0598dca2!2sCuritiba%2C%20PR!5e0!3m2!1spt-BR!2sbr!4v1716298372641!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
          loading="lazy"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-black/60"></div>
        <div className="absolute bottom-10 left-10 bg-black/80 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 hidden md:block hover:border-[#40E0D0]/50 transition-colors group">
           <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-[#40E0D0] group-hover:animate-bounce" />
              <h4 className="font-black uppercase tracking-widest text-sm">Visite Nosso Estúdio</h4>
           </div>
           <p className="text-sm text-gray-500 font-medium leading-relaxed">Rua Desembargador Motta, 1234 <br /> Batel, Curitiba - PR</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
