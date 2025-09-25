
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PROJECTS_DATA } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <SectionWrapper title="Portfolio">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden group border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag, i) => (
                  <span key={i} className="bg-gray-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Portfolio;
