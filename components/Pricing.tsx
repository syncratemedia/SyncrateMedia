import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: "Founder Sync",
    price: "₹40,000",
    features: [
      { text: "5 Reels", included: true },
      { text: "1 Influencer", included: true },
      { text: "Carousels", included: true },
      { text: "Personalized Branding", included: true },
      { text: "Video Editing", included: true },
      { text: "Production", included: true },
      { text: "Script Writing", included: true },
      { text: "Content Research", included: true },
      { text: "Content Strategy", included: false },
      { text: "Graphic Designing", included: false },
      { text: "Account Manager", included: false },
      { text: "Dedicated Team", included: false },
      { text: "Meme Marketing", included: false },
      { text: "Daily Stories", included: false },
    ],
  },
  {
    name: "Business Sync",
    subtitle: "Best For Growing Brands",
    price: "₹80,000",
    highlight: true,
    features: [
      { text: "10 Reels", included: true },
      { text: "2 Influencers", included: true },
      { text: "Carousels", included: true },
      { text: "Personalized Branding", included: true },
      { text: "Video Editing", included: true },
      { text: "Production", included: true },
      { text: "Script Writing", included: true },
      { text: "Content Research", included: true },
      { text: "Content Strategy", included: true },
      { text: "Graphic Designing", included: true },
      { text: "Account Manager", included: true },
      { text: "Dedicated Team", included: true },
      { text: "Meme Marketing", included: false },
      { text: "Daily Stories", included: false },
    ],
  },
  {
    name: "Enterprise Sync",
    subtitle: "Best For Big Brands",
    price: "₹1,20,000",
    features: [
      { text: "20 Reels", included: true },
      { text: "2 Influencers", included: true },
      { text: "4 Carousels", included: true },
      { text: "Personalized Branding", included: true },
      { text: "Video Editing", included: true },
      { text: "Production", included: true },
      { text: "Script Writing", included: true },
      { text: "Content Research", included: true },
      { text: "Content Strategy", included: true },
      { text: "Graphic Designing", included: true },
      { text: "Account Manager", included: true },
      { text: "Dedicated Team", included: true },
      { text: "Meme Marketing", included: true },
      { text: "Daily Stories", included: true },
    ],
  },
];

const Pricing: React.FC = () => {
  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/shivamxanand2/30min'
      });
    }
  };

  return (
    <section id="pricing" className="py-20 relative bg-[#0B0219] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Select Your Package To Build A <span className="text-transparent bg-clip-text bg-hero-gradient">Viral Brand</span>
          </h2>
          <div className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 mt-4">
            <p className="text-brand-cyan font-semibold">Full Refund If We Don't Beat Your Current Views</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 border backdrop-blur-sm transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-white/10 border-brand-purple shadow-2xl shadow-brand-purple/20 scale-105 z-10' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-hero-gradient text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                {plan.subtitle && <p className="text-brand-cyan text-sm mb-4">{plan.subtitle}</p>}
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm">/mo</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="text-brand-cyan shrink-0 w-5 h-5" />
                    ) : (
                      <X className="text-gray-600 shrink-0 w-5 h-5" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-gray-200' : 'text-gray-500'}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={openCalendly}
                className={`w-full py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  plan.highlight 
                    ? 'bg-hero-gradient text-white hover:shadow-lg hover:shadow-brand-purple/40' 
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                Book a Call <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;