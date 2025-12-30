
import React from 'react';
import { Sparkles, Waves, Hammer, ShieldCheck, Zap, Cog, Sun, Bell } from 'lucide-react';
import { Service, Testimonial } from './types';

export const COLORS = {
  TURQUOISE: '#40E0D0',
  TURQUOISE_DARK: '#008080',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
};

export const SERVICES: Service[] = [
  {
    id: 'polimento',
    title: 'Polimento Técnico',
    description: 'Restauração profunda do verniz, removendo riscos e hologramas para um reflexo de espelho absoluto.',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'lavagem',
    title: 'Lavagem Detalhada',
    description: 'Cuidado minucioso com shampoo neutro e pincéis em cada fresta, motor e caixa de rodas.',
    icon: 'Waves',
    image: 'https://images.unsplash.com/photo-1552933529-e359b2477262?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'martelinho',
    title: 'Martelinho de Ouro',
    description: 'Técnica artesanal para remover amassados sem necessidade de repintura, preservando a originalidade.',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1589133919133-728b7050352b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'envelopamento',
    title: 'Estética de Cor',
    description: 'Mudança de cor ou proteção PPF com os melhores materiais do mundo (3M, Avery, Orafol).',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1611859328053-3cbc9f9399f4?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'vitrificacao',
    title: 'Vitrificação 9H',
    description: 'Camada cerâmica ultra resistente que protege contra raios UV, fezes de pássaros e seiva de árvore.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'higienizacao',
    title: 'Higienização Interna',
    description: 'Limpeza profunda de bancos, carpetes e teto, eliminando 99% de fungos e bactérias com ozônio.',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'insulfilm',
    title: 'Película Térmica',
    description: 'Tecnologia de nanocerâmica para máxima rejeição de calor e proteção UV para sua pele.',
    icon: 'Sun',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'detalhe-motor',
    title: 'Detalhe de Motor',
    description: 'Limpeza técnica segura e verniz de motor para proteção e acabamento de carro novo.',
    icon: 'Cog',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800',
  }
];

export const CITIES: string[] = [
  "Curitiba", "Almirante Tamandaré", "Araucária", "Campo Largo", "Colombo", "Fazenda Rio Grande", 
  "Pinhais", "Piraquara", "Quatro Barras", "São José dos Pinhais"
];

export const NEIGHBORHOODS: string[] = [
  "Água Verde", "Batel", "Bigorrilho", "Cabral", "Centro", "Ecoville", "Jardim Social", "Juvevê", "Mercês", "Santa Felicidade"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ricardo Mendes",
    role: "BMW M3 Competition",
    text: "O polimento técnico da Fast Car superou minhas expectativas. O nível de reflexo é absurdo, o carro parece que saiu da fábrica hoje.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Ana Beatriz",
    role: "Porsche Macan",
    text: "Fiz a vitrificação e a lavagem detalhada. O cuidado com os pincéis em cada detalhe interno é o que diferencia o trabalho deles.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Marcos Oliveira",
    role: "Audi RS6 Avant",
    text: "Melhor atendimento de Curitiba. Honestos, rápidos e extremamente caprichosos. Meu carro só entra lá agora.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
  }
];
