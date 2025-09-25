
import React from 'react';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children }) => {
  return (
    <section className="py-20 md:py-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 inline-block">
          {title}
        </h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4 rounded"></div>
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;
