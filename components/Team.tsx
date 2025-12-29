import React from 'react';
import { TeamMember } from '../types';

const members: TeamMember[] = [
  {
    name: "Sumit Bhagat",
    role: "Founder & Growth Strategist",
    description: "Turning data into decisions and strategy into scale.",
    image: "https://res.cloudinary.com/dbkmrbcox/image/upload/v1767025261/Screenshot_2025-12-29_215050_gftzob.png"
  },
  {
    name: "Lakhara Mohit",
    role: "Creative Strategist",
    description: "Crafting campaigns that capture attention and drive action.",
    image: "https://res.cloudinary.com/dbkmrbcox/image/upload/v1767023617/Screenshot_2025-12-29_211003_pcgzsx.png"
  },
  {
    name: "Sneh Parmanik",
    role: "Marketing Lead",
    description: "Building marketing systems that generate consistent results.",
    image: "https://res.cloudinary.com/dbkmrbcox/image/upload/v1767023695/IMG_5508_vprgl6.jpg"
  },
  {
    name: "Shivam Anand",
    role: "Automation & AI Specialist",
    description: "Building websites, AI agents, and automation that work while you sleep.",
    image: "https://res.cloudinary.com/dbkmrbcox/image/upload/v1767023617/Screenshot_2025-12-29_211049_d3xnhy.png"
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Meet The Team</h2>
          <p className="text-gray-400">The minds behind the magic.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-brand-purple transition-colors bg-white/5">
                {member.pinterestEmbedSrc ? (
                  <div className="w-full h-full relative">
                    <iframe 
                      src={member.pinterestEmbedSrc}
                      className="absolute top-0 left-0 w-full h-full pointer-events-none transform scale-150 origin-top"
                      frameBorder="0" 
                      scrolling="no"
                      title={member.name}
                    ></iframe>
                  </div>
                ) : (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-brand-cyan text-sm font-medium mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm px-4">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;