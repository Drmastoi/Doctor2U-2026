export type Page = 'home' | 'services' | 'contact' | 'booking' | 'innovation';

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
  longDescription: string;
}

export const SERVICES: Service[] = [
  {
    id: 'online',
    title: 'Online Consultation',
    description: 'Secure video consultation from the comfort of your home.',
    price: '£100 per 30 min',
    icon: 'Video',
    longDescription: 'Our secure video consultations allow you to speak with a private doctor from anywhere. Perfect for follow-ups, prescription reviews, or initial advice when travel is difficult.'
  },
  {
    id: 'face-to-face',
    title: 'Face-to-Face',
    description: 'In-person appointments at our modern clinics in Manchester and Lancashire.',
    price: '£100 per 30 min',
    icon: 'User',
    longDescription: 'Traditional in-person appointments for comprehensive examinations, diagnostic tests, and personalised care in a professional clinical setting.'
  },
  {
    id: 'home-visit',
    title: 'Home Visits',
    description: 'We come to you. Available across Lancashire and the Manchester area.',
    price: '£130',
    icon: 'Home',
    longDescription: 'For patients who prefer the convenience of their own home or have mobility issues. Our doctors provide full clinical assessments in your residence.'
  }
];
