import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import WhatsAppWidget from './components/WhatsAppWidget';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('overflow-hidden');
    }, 2000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  const refs = {
    home: homeRef,
    about: aboutRef,
    services: servicesRef,
    portfolio: portfolioRef,
    blog: blogRef,
    contact: contactRef,
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Preloader loading={loading} />
      <Header refs={refs} scrollToSection={scrollToSection} />
      <main className="container mx-auto px-6 md:px-12">
        <div ref={homeRef}><Hero scrollToContact={() => scrollToSection(contactRef)} /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={servicesRef}><Services /></div>
        <div ref={portfolioRef}><Portfolio /></div>
        <div ref={blogRef}><Blog /></div>
        <div ref={contactRef}><Contact /></div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default App;