import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Influencers from './components/Influencers';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0219] text-white selection:bg-brand-purple selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Influencers />
        <About />
        <Services />
        <Pricing />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;