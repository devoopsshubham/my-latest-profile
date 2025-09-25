
import React from 'react';

interface HeroProps {
  scrollToContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToContact }) => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center -mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-20"></div>
            <h1 className="relative text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 mb-6">
              I build next-gen websites & AI automation tools for businesses to scale with speed & precision.
            </h1>
        </div>

        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Full Stack Developer | AI Agent Builder | WordPress + React + Python Expert
        </p>
        <button
          onClick={scrollToContact}
          className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg shadow-cyan-500/20"
        >
          Work with Me →
        </button>
      </div>
    </section>
  );
};

export default Hero;
