import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Handle background transparency
      setScrolled(window.scrollY > 20);

      // Handle active section highlighting
      const scrollPosition = window.scrollY + 150; // Offset for header height
      
      // Default to home if near top
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      // Check if at bottom of page to highlight last item (Contact)
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
         setActiveSection('contact');
         return;
      }

      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/shivamxanand2/30min'
      });
    } else {
      console.warn("Calendly script not loaded yet");
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      setIsOpen(false);
      // Fallback for browsers if scroll-behavior is not supported (though we set it in CSS)
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B0219]/80 backdrop-blur-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 relative z-50">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="font-display font-bold text-2xl tracking-tight text-white group flex items-center gap-1"
            >
              Syncrate<span className="text-transparent bg-clip-text bg-hero-gradient group-hover:brightness-110 transition-all">Media</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-white group ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute inset-0 bg-white/10 rounded-full -z-10 animate-fadeIn"></span>
                    )}
                    <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 bg-hero-gradient rounded-full transition-all duration-300 ${isActive ? 'w-5 opacity-100' : 'w-0 opacity-0 group-hover:w-2 group-hover:opacity-50'}`}></span>
                  </a>
                );
              })}
              <div className="pl-4 ml-2 border-l border-white/10">
                <button 
                  onClick={openCalendly}
                  className="bg-hero-gradient text-white px-6 py-2.5 rounded-full font-bold hover:scale-105 transition-all duration-300 text-sm"
                >
                  Book a Call
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0B0219]/95 backdrop-blur-xl z-40 md:hidden transition-all duration-300 ease-in-out flex flex-col justify-center items-center ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full max-w-sm px-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block text-center text-2xl font-bold py-3 transition-all duration-200 ${
                  isActive 
                    ? 'text-transparent bg-clip-text bg-hero-gradient' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-8 flex justify-center">
            <button 
              onClick={(e) => {
                setIsOpen(false);
                openCalendly(e);
              }}
              className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors w-full"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;