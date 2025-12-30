
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

export interface LocationData {
  name: string;
  slug: string;
  type: 'city' | 'neighborhood';
  parent?: string;
}
