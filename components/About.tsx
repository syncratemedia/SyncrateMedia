import React from 'react';
import { Stat } from '../types';

const stats: Stat[] = [
  { value: '50+', label: 'Influencers' },
  { value: '100+', label: 'Campaigns' },
  { value: '98%', label: 'Satisfaction' },
  { value: '50M+', label: 'Reach' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0B0219] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">About Syncrate Media</h2>
          <div className="w-20 h-1 bg-hero-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Syncrate Media is an AI-driven digital marketing agency focused on helping businesses grow smarter and faster. We leverage advanced AI technology to streamline operations, boost visibility, and increase revenue.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            While we leverage cutting-edge tech, we remain grounded in human connection. With access to a network of 50+ influencers across multiple niches, we combine data-driven sales strategies with authentic storytelling to design campaigns that maximize engagement and ROI.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors group"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-hero-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </h3>
              <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;