import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-6 md:py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
        <a href="#home" className="group flex items-center gap-2 relative z-50">
            <div className="w-6 h-6 md:w-7 md:h-7 bg-zinc-800 rounded-full flex items-center justify-center overflow-hidden border border-white/10 shadow-lg">
              <img 
                src="/images/memoji.png" 
                alt="Irfan" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-medium text-xs md:text-sm text-zinc-300 tracking-tight transition-colors duration-300">
              Irfan
            </span>
        </a>
        <div className="flex gap-6">
          <span className="text-gray-600 text-xs md:text-sm text-center">&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
