export type Page = 'home' | 'services' | 'contact' | 'booking' | 'innovation' | 'treatment-plan' | 'service-private-gp' | 'service-home-visit' | 'service-drivers-medicals' | 'service-health-screening' | 'service-childrens-health' | 'service-accident-injury' | 'service-life-insurance' | 'service-chronic-care' | 'service-referrals' | 'privacy' | 'pgp-manchester' | 'pgp-preston' | 'pgp-blackburn' | 'hvd-manchester' | 'hvd-lancashire' | 'same-day-doctor-manchester' | 'doctor-home-visit-manchester';

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
  link?: Page;
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
    longDescription: 'Our secure video consultations use a state-of-the-art, encrypted platform to ensure your privacy and data security. You can speak with a private doctor from anywhere using your smartphone, tablet, or computer. Perfect for follow-ups, prescription reviews, or initial advice when travel is difficult.'
  },
  {
    id: 'face-to-face',
    title: 'Face-to-Face',
    description: 'In-person appointments at our modern clinics in Manchester and Lancashire.',
    price: '£100 per 30 min',
    icon: 'User',
    longDescription: 'Traditional in-person appointments at our modern clinics, featuring private consultation rooms, on-site diagnostic facilities, and a comfortable waiting area with complimentary refreshments. Ideal for comprehensive physical examinations and diagnostic tests.'
  },
  {
    id: 'home-visit',
    title: 'Home Visits',
    description: 'We come to you. Available across Lancashire and the Manchester area.',
    price: '£130',
    icon: 'Home',
    longDescription: 'The ultimate in convenience. To prepare, simply ensure a quiet, well-lit space is available for the consultation. Our doctor will arrive with all necessary medical equipment to perform a full clinical assessment in the comfort and privacy of your own residence.'
  }
];
