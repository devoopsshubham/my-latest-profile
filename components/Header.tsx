
import React, { useState } from 'react';

interface HeaderProps {
  refs: { [key: string]: React.RefObject<HTMLDivElement> };
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
}

const navLinks = [
  { name: 'Home', key: 'home' },
  { name: 'About', key: 'about' },
  { name: 'Services', key: 'services' },
  { name: 'Portfolio', key: 'portfolio' },
  { name: 'Blog', key: 'blog' },
  { name: 'Contact', key: 'contact' },
];

const Header: React.FC<HeaderProps> = ({ refs, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (key: string) => {
    scrollToSection(refs[key]);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
          Shubham Sharma
        </a>
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => handleLinkClick(link.key)}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleLinkClick(link.key)}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
