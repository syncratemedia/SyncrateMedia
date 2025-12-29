import React from 'react';
import { Users, UserCircle, Share2, TrendingUp, Search, Monitor, Megaphone, Bot } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  { id: 1, title: 'Influencer Marketing', description: 'Connect with creators who drive real buying decisions.', icon: Users },
  { id: 2, title: 'High-Performance Websites', description: 'Building high-performance, conversion-focused websites.', icon: Monitor },
  { id: 3, title: 'Meta & Google Ads', description: 'High-intent traffic and conversion-focused paid campaigns.', icon: Megaphone },
  { id: 4, title: 'WhatsApp Automation', description: 'WhatsApp automation for lead nurturing and customer support.', icon: Bot },
  { id: 5, title: 'AI SEO (GEO)', description: 'Optimize your brand to be found on ChatGPT, Gemini, and Google.', icon: Search },
  { id: 6, title: 'Sales Strategy', description: 'Data-driven sales strategies that help you scale.', icon: TrendingUp },
  { id: 7, title: 'Social Media Marketing', description: 'Content and campaigns designed for demand and trust.', icon: Share2 },
  { id: 8, title: 'Personal Branding', description: 'Position yourself as the go-to authority in your industry.', icon: UserCircle },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 relative scroll-mt-24">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-brand-purple/10 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-400">AI-driven solutions built for scale and revenue.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-card-gradient backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-brand-purple/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-hero-gradient transition-colors">
                <service.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;