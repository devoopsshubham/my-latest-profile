import React from 'react';

interface PreloaderProps {
  loading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ loading }) => {
  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-gray-900 transition-opacity duration-500 ${!loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      aria-hidden={!loading}
      role="status"
    >
      <div className="relative flex items-center justify-center w-24 h-24">
        <div className="absolute w-full h-full border-4 border-cyan-500/20 rounded-full"></div>
        <div className="absolute w-full h-full border-t-4 border-t-cyan-500/80 rounded-full animate-loader"></div>
        <span className="text-cyan-400 font-black text-2xl">SS</span>
      </div>
    </div>
  );
};

export default Preloader;