
import React from 'react';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-24">
      <div className="container mx-auto px-6 md:px-12 py-8 text-center text-gray-500">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-cyan-400 transition-colors"><TwitterIcon /></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><GithubIcon /></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><LinkedInIcon /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Shubham Sharma. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
