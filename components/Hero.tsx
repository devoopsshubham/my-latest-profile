import React, { useState, useEffect } from 'react';

// 1. Import your background image
// Adjust the path as needed
import backgroundImage from '../components/icons/background.png'; 

interface HeroProps {
  scrollToContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToContact }) => {
  // The full text we want to display
  const fullText = "I build next-gen websites & AI automation tools for businesses to scale with speed & precision.";
  
  // State for the text that is currently displayed (the 'typed' text)
  const [typedText, setTypedText] = useState('');
  
  // State for the cursor visibility
  const [cursorVisible, setCursorVisible] = useState(true);

  // 2. Typing Effect Logic
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
        // Once typing is done, stop the typing effect and only handle the cursor blink
        setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 500); // Cursor blink speed
      }
    }, 50); // Typing speed (50ms per character)

    return () => clearInterval(typingInterval);
  }, []); // Run only once on mount

  // 3. Background Image Styling (Inline)
  // We use an inline style here for the background image path
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // Optional: for a parallax-like scroll effect
  };

  return (
    // Apply the inline style to the section element
    <section 
      className="min-h-screen flex items-center justify-center text-center -mt-16 relative" 
      style={heroStyle}
    >
      {/* Optional: Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-70"></div> 
      
      {/* Main content div - everything inside needs to be relative to sit above the overlay */}
      <div className="max-w-4xl mx-auto px-4 z-10 relative">
        <div className="relative">
          {/* Keep the glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-20"></div>
          
          <h1 className="relative text-3xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 mb-6 min-h-[96px] sm:min-h-[128px] flex justify-center items-center">
            {/* Display the typed text */}
            {typedText}
            {/* Cursor element */}
            <span 
              className={`inline-block w-1 h-8 ml-1 bg-white transition-opacity duration-150 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ verticalAlign: 'middle' }}
            >
            </span>
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