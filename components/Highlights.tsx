import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Highlights: React.FC = () => {
  const highlights = [
    {
      title: "Influencer Campaigns",
      stat: "High Reach",
      desc: "Authentic storytelling that drove massive engagement.",
      image: "https://picsum.photos/600/400?random=2"
    },
    {
      title: "Social Media Growth",
      stat: "Scaling Leads",
      desc: "Organic strategies that multiplied audience size.",
      image: "https://picsum.photos/600/400?random=3"
    },
    {
      title: "Paid Ads Performance",
      stat: "High ROI",
      desc: "Precision targeting funnels that converted clicks to sales.",
      image: "https://picsum.photos/600/400?random=4"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">Campaign Highlights</h2>
            <p className="text-gray-400">Real results from our network.</p>
          </div>
          <a href="#contact" className="hidden md:flex items-center gap-2 text-brand-cyan hover:text-white transition-colors">
            Start your campaign <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity duration-300"></div>
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <div className="bg-brand-purple/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                  {item.stat}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;