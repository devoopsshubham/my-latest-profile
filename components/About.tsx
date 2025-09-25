
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { WordpressIcon, ReactIcon, PythonIcon, OllamaIcon, NodeIcon, TailwindIcon, RestApiIcon, GutenbergIcon } from './icons/TechIcons';

const techStack = [
  { name: 'WordPress', icon: <WordpressIcon /> },
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'Ollama', icon: <OllamaIcon /> },
  { name: 'Node.js', icon: <NodeIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon /> },
  { name: 'REST API', icon: <RestApiIcon /> },
  { name: 'Gutenberg', icon: <GutenbergIcon /> },
];

const About: React.FC = () => {
  return (
    <SectionWrapper title="About Me">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
          Hi, I’m <span className="text-cyan-400 font-semibold">Shubham Sharma</span> – a Full Stack Developer with expertise in WordPress, React, Python, and Agentic AI (Ollama). I help businesses automate their daily workflows, build stunning websites, and integrate AI-driven solutions that save time and money.
        </p>
        <h3 className="text-2xl font-bold text-white mb-8">My Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 group-hover:text-cyan-400 group-hover:bg-gray-700 transition-all duration-300 transform group-hover:scale-110">
                {tech.icon}
              </div>
              <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors duration-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
