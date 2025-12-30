
import React from 'react';
import { Sparkles, Waves, Hammer, ShieldCheck, Zap, Cog, Sun, Bell } from 'lucide-react';
import { Service, Testimonial, LocationData } from './types';

export const COLORS = {
  TURQUOISE: '#40E0D0',
  TURQUOISE_DARK: '#008080',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
};

export const SERVICES: Service[] = [
  {
    id: 'polimento',
    title: 'Polimento Profissional',
    description: 'Devolva o brilho original do seu veículo com nosso polimento técnico. Removemos riscos, marcas de oxidação e imperfeições da pintura.',
    icon: 'Sparkles',
    image: 'https://picsum.photos/seed/polimento/800/600',
  },
  {
    id: 'lavagem',
    title: 'Lavagem Detalhada',
    description: 'Limpeza profunda de todos os compartimentos, aspiração completa, higienização de bancos, tratamento de plásticos e motor.',
    icon: 'Waves',
    image: 'https://picsum.photos/seed/lavagem/800/600',
  },
  {
    id: 'martelinho',
    title: 'Martelinho de Ouro',
    description: 'Remoção de amassados sem danificar a pintura original. Ideal para pequenos e médios danos causados por granizo ou batidas.',
    icon: 'Hammer',
    image: 'https://picsum.photos/seed/martelinho/800/600',
  },
  {
    id: 'envelopamento',
    title: 'Envelopamento',
    description: 'Transforme e proteja seu carro com películas de alta qualidade em diversas cores e acabamentos (fosco, brilhante, texturizado).',
    icon: 'ShieldCheck',
    image: 'https://picsum.photos/seed/envelopamento/800/600',
  },
  {
    id: 'eletrica',
    title: 'Auto Elétrica',
    description: 'Diagnóstico e reparo de sistemas elétricos. Instalação de acessórios, som, câmeras de ré e sensores de estacionamento.',
    icon: 'Zap',
    image: 'https://picsum.photos/seed/eletrica/800/600',
  },
  {
    id: 'acessorios',
    title: 'Acessórios Automotivos',
    description: 'Ampla linha de acessórios para personalização: tapetes, capas, iluminação LED, difusores e muito mais com instalação profissional.',
    icon: 'Cog',
    image: 'https://picsum.photos/seed/acessorios/800/600',
  },
  {
    id: 'insulfilm',
    title: 'Insulfilm de Qualidade',
    description: 'Películas certificadas com proteção UV, controle térmico e privacidade. Redução de calor interno e economia de combustível.',
    icon: 'Sun',
    image: 'https://picsum.photos/seed/insulfilm/800/600',
  },
  {
    id: 'alarmes',
    title: 'Alarmes e Segurança',
    description: 'Sistemas de alarme, rastreamento e bloqueio. Proteja seu patrimônio com tecnologia de ponta e instalação técnica certificada.',
    icon: 'Bell',
    image: 'https://picsum.photos/seed/alarmes/800/600',
  }
];

export const CITIES: string[] = [
  "Curitiba", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", 
  "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", "Campo Magro", 
  "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", "Fazenda Rio Grande", "Itaperuçu", 
  "Lapa", "Mandirituba", "Piên", "Pinhais", "Piraquara", "Quatro Barras", "Quitandinha", 
  "Rio Branco do Sul", "Rio Negro", "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná"
];

export const NEIGHBORHOODS: string[] = [
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão", "Tanguá", 
  "Abranches", "Batel", "CIC", "Água Verde", "Alto da XV", "Ecoville", "Centro", "Bacacheri",
  "Cabral", "Juvevê", "Portão", "Santa Felicidade", "Uberaba", "Xaxim", "Pinheirinho", "Hauer"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ricardo Mendes",
    role: "Proprietário de BMW M3",
    text: "O polimento técnico da Fast Car é simplesmente fenomenal. O carro voltou com cara de zero km. Recomendo fortemente!",
    rating: 5,
    image: "https://picsum.photos/seed/user1/100/100"
  },
  {
    name: "Ana Beatriz",
    role: "Entusiasta Automotiva",
    text: "Fiz a lavagem detalhada e higienização interna. O nível de detalhe é impressionante, limparam até onde eu nem sabia que sujava.",
    rating: 5,
    image: "https://picsum.photos/seed/user2/100/100"
  },
  {
    name: "Marcos Oliveira",
    role: "Cliente Premium",
    text: "O envelopamento ficou perfeito. Atendimento nota 10 e materiais de primeira linha. Vale cada centavo!",
    rating: 5,
    image: "https://picsum.photos/seed/user3/100/100"
  }
];
