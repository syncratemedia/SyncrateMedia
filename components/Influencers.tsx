import React from 'react';

const influencers = [
  {
    name: "Prince Kashyap",
    handle: "@pixelated_films",
    link: "https://www.instagram.com/pixelated_films/",
    image: "https://res.cloudinary.com/dbkmrbcox/image/upload/v1767024357/490380196_633245499523225_6854254718093141030_n_ragthw.jpg"
  },
  {
    name: "Katihar Meme",
    handle: "@katiharmeme",
    link: "https://www.instagram.com/katiharmeme/",
    image: "https://res.cloudinary.com/dbkmrbcox/image/upload/v1767024358/504011328_17867079132408484_8849537287053096701_n_jlncyi.jpg"
  },
  {
    name: "Katihar Beats",
    handle: "@katihar_beats",
    link: "https://www.instagram.com/katihar_beats/",
    image: "https://res.cloudinary.com/dbkmrbcox/image/upload/v1767024354/607585337_17888298450409279_8643814592020447031_n_gsd6bc.jpg"
  },
  {
    name: "Kaira",
    handle: "@influencer_kaira_",
    link: "https://www.instagram.com/influencer_kaira_/",
    image: "https://res.cloudinary.com/dbkmrbcox/image/upload/v1767024353/588331046_17842734420633380_7161252570909811370_n_ketsoa.jpg"
  }
];

const Influencers: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B0219]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Meet Our Influencers</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We work with a diverse network of creators who know how to engage audiences and drive real action.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {influencers.map((influencer, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-full aspect-square overflow-hidden rounded-2xl mb-4 border border-white/10 group-hover:border-brand-purple/50 transition-all relative">
                <img 
                  src={influencer.image} 
                  alt={influencer.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <h3 className="text-white font-bold text-lg text-center leading-tight">{influencer.name}</h3>
              <a 
                href={influencer.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-purple hover:text-brand-cyan text-sm font-medium mb-1 transition-colors"
              >
                {influencer.handle}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Influencers;