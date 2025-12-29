import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    whatsapp: '',
    service: 'Influencer Marketing'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead Captured:', formData);
    alert('Thank you! We will contact you shortly.');
  }

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col justify-center scroll-mt-20">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] -z-10 opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan/20 rounded-full blur-[120px] -z-10 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Left Column: Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Your Brand <span className="text-[#8c52ff]">Deserves</span> Fresh, Intelligent <span className="text-transparent bg-clip-text bg-hero-gradient">Marketing</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Syncrate Media is an AI-driven digital marketing agency focused on helping businesses grow smarter and faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-8 py-4 rounded-full bg-hero-gradient text-white font-bold hover:shadow-lg hover:shadow-brand-purple/40 transition-all hover:scale-105">
                Get Started
              </a>
              <a href="#services" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all">
                Our Services
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="w-full max-w-md mx-auto lg:ml-auto mt-8 lg:mt-0">
            <div className="bg-[#0B0219]/80 border border-white/20 rounded-2xl p-6 backdrop-blur-xl shadow-2xl shadow-brand-purple/20">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full bg-transparent border border-white/20 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#8c52ff] focus:bg-white/5 transition-all text-sm"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full bg-transparent border border-white/20 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#8c52ff] focus:bg-white/5 transition-all text-sm"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  className="w-full bg-transparent border border-white/20 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#8c52ff] focus:bg-white/5 transition-all text-sm"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="Whatsapp Number"
                  required
                  className="w-full bg-transparent border border-white/20 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#8c52ff] focus:bg-white/5 transition-all text-sm"
                  onChange={handleChange}
                />
                
                {/* Service Selection */}
                <div className="relative">
                  <select
                    name="service"
                    className="w-full bg-[#0B0219] border border-white/20 rounded-full px-6 py-3 text-white focus:outline-none focus:border-[#8c52ff] transition-all appearance-none cursor-pointer text-sm"
                    onChange={handleChange}
                    value={formData.service}
                  >
                    <option value="Influencer Marketing">Influencer Marketing</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Meta & Google Ads">Meta & Google Ads</option>
                    <option value="Personal Branding">Personal Branding</option>
                    <option value="AI SEO">AI SEO</option>
                    <option value="High-Performance Websites">High-Performance Websites</option>
                    <option value="WhatsApp Automation">WhatsApp Automation</option>
                    <option value="Sales Strategy">Sales Strategy</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#6a3bc2] hover:bg-[#5a2eb2] text-white font-medium py-3.5 rounded-full transition-all shadow-lg shadow-purple-900/40 mt-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book A Coffee
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Logos */}
        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-white text-sm mb-8 tracking-wide">
            Trusted by top <span className="italic text-[#8c52ff] font-medium">Global Platforms</span> for marketing excellence.
          </p>
          <div className="flex justify-center items-center gap-12 md:gap-16 flex-wrap">
            {/* Google Partner */}
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
              <span className="text-3xl font-display font-bold tracking-tight">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
              <span className="text-gray-400 font-medium text-lg ml-1">Partner</span>
            </div>
            
            {/* Meta Business Partner */}
            <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#0668E1]" fill="currentColor">
                 <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5.01 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
              </svg>
              <div className="flex flex-col items-start leading-none">
                <span className="text-white font-bold text-lg">Meta</span>
                <span className="text-[10px] text-gray-300 uppercase tracking-wider">Business Partner</span>
              </div>
            </div>

            {/* Shopify Partner */}
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
              <svg className="w-8 h-8 text-[#95BF47]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.57 14.5c.09-1.12-.19-2.25-.67-3.29-.44-.94-1.07-1.8-1.88-2.53l-2.79-2.45c-.88-.77-1.92-1.34-3.03-1.67-.97-.29-1.99-.39-3-.29-1.22.12-2.37.56-3.37 1.25L3.8 7.9c-.64.44-1.15 1.02-1.48 1.7-.33.68-.43 1.45-.29 2.2.14.75.52 1.44 1.08 1.98.56.54 1.25.92 2 1.06l.89.17c1.47.28 2.87.89 4.12 1.79l.56.4c1.22.88 2.59 1.53 4.04 1.91 1.06.28 2.16.32 3.23.12 1.07-.2 2.07-.64 2.94-1.29.87-.65 1.55-1.49 1.99-2.48.44-.99.6-2.08.47-3.17z"/>
              </svg>
               <span className="text-white font-bold text-xl font-display tracking-tight">Shopify <span className="font-normal text-gray-400 text-sm align-middle ml-0.5">Partner</span></span>
            </div>

             {/* YouTube Partner */}
             <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100">
               <svg className="w-8 h-8 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
               </svg>
               <span className="text-white font-bold text-lg">YouTube <span className="font-normal text-gray-400 text-sm">Shorts</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;