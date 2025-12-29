import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    role: "Political Campaign",
    author: "Campaign Manager",
    company: "Political Leader",
    quote: "Working with Syncrate Media during our campaign was a game-changer. They didn't just run ads—they understood what our voters cared about and helped us communicate authentically. The reach and engagement we saw were beyond our expectations."
  },
  {
    role: "Topline Infra",
    author: "Director",
    company: "Topline Infra",
    quote: "Most agencies talk big but don't understand infrastructure businesses. Syncrate took time to learn our industry, our buyers, and built a strategy that actually brought qualified leads to our door. Our pipeline hasn't looked this healthy in years."
  },
  {
    role: "PC Jewellers",
    author: "PC Jewellers Katihar",
    company: "",
    quote: "We've been in business for decades, but our online presence wasn't reflecting our legacy. Syncrate helped us tell our story in a way that resonated with younger buyers while honoring our craftsmanship. The social media transformation has been remarkable."
  },
  {
    role: "Shyam Vatika",
    author: "Owner",
    company: "Shyam Vatika",
    quote: "Running a traditional sweet shop, we never thought much about online marketing. Syncrate changed that. They helped us showcase our sweets beautifully on social media, and now we're getting orders from all over the city—even for festivals and corporate gifting."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">What Clients Say</h2>
          <div className="w-20 h-1 bg-hero-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-2xl relative hover:bg-white/10 transition-colors">
              <Quote className="text-brand-purple/30 w-12 h-12 absolute top-6 right-6" />
              <div className="mb-6">
                 <h4 className="text-xl font-bold text-white mb-1">{t.role}</h4>
                 <p className="text-brand-cyan text-sm uppercase tracking-wider">"{t.quote.slice(0, 30)}..."</p>
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold">{t.author}</p>
                {t.company && <p className="text-gray-500 text-sm">{t.company}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;