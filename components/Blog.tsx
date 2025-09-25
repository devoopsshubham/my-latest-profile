
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { BLOG_POSTS_DATA } from '../constants';

const Blog: React.FC = () => {
  return (
    <SectionWrapper title="From the Blog">
      <div className="space-y-6 max-w-4xl mx-auto">
        {BLOG_POSTS_DATA.map((post, index) => (
          <a href="#" key={index} className="block p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02]">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-cyan-400 font-medium">{post.category}</span>
                <h3 className="text-xl font-bold text-white mt-1">{post.title}</h3>
              </div>
              <span className="text-cyan-400 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Blog;
