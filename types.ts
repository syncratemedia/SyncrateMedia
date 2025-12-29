import { LucideIcon } from 'lucide-react';

declare global {
  interface Window {
    Calendly: any;
  }
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  subtitle?: string;
  price: string;
  features: PricingFeature[];
  highlight?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  pinterestEmbedSrc?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Stat {
  value: string;
  label: string;
}