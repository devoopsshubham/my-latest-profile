
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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
    </div>
  );
};

export default App;
