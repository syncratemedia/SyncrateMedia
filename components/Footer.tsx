import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="font-display font-bold text-2xl tracking-tight text-white mb-6 block">
              Syncrate<span className="text-transparent bg-clip-text bg-hero-gradient">Media</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Performance-driven influencer marketing and digital growth solutions. We help brands scale through data and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-brand-cyan transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-brand-cyan transition-colors">About</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-brand-cyan transition-colors">Services</a></li>
              <li><a href="#pricing" onClick={(e) => handleLinkClick(e, '#pricing')} className="hover:text-brand-cyan transition-colors">Pricing</a></li>
              <li><a href="#team" onClick={(e) => handleLinkClick(e, '#team')} className="hover:text-brand-cyan transition-colors">Team</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-brand-cyan transition-colors">Contact</a></li>
            </ul>
          </div>

           {/* Services Links */}
           <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-brand-cyan transition-colors">Influencer Marketing</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-brand-cyan transition-colors">Social Media Marketing</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-brand-cyan transition-colors">AI SEO & GEO</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-brand-cyan transition-colors">Meta & Google Ads</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-brand-cyan transition-colors">Personal Branding</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-brand-cyan transition-colors">Website Development</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white font-bold mb-6">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.instagram.com/syncrate.co/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-hero-gradient transition-all text-white hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61584343004517" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-hero-gradient transition-all text-white hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/syncrateco/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-hero-gradient transition-all text-white hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-center gap-2"><span className="text-brand-cyan">📧</span> hello@syncrate.in</p>
              <p className="flex items-center gap-2"><span className="text-brand-cyan">📱</span> +91 82109 22107</p>
              <p className="flex items-center gap-2"><span className="text-brand-cyan">📍</span> Katihar, Bihar, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Syncrate Media. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;