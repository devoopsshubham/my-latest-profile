
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  return (
    <SectionWrapper title="What I Offer">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES_DATA.map((service, index) => (
          <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-12 h-12 mb-4 bg-gray-700 rounded-full text-cyan-400">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
