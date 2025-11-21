
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav 
          className={`
            transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
            ${scrolled ? 'w-full max-w-2xl py-2 pl-6 pr-2 bg-[#09090b]/80 backdrop-blur-md border border-white/10 shadow-2xl' : 'w-full max-w-7xl py-6 bg-transparent border-transparent'}
            flex items-center justify-between rounded-full
          `}
        >
          {/* Logo Area */}
          <a href="#home" className="group flex items-center gap-2 relative z-50">
              <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center overflow-hidden border border-white/10 shadow-lg">
                <img 
                  src="/images/memoji.png" 
                  alt="Irfan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className={`font-semibold tracking-tight transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'}`}>
                Irfan
              </span>
          </a>

          {/* Desktop Links & Resume Button Combined */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center gap-1 pr-4">
                {NAV_LINKS.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-all rounded-full hover:bg-white/5"
                >
                    {link.name}
                </a>
                ))}
            </div>
            
            {/* Divider */}
            {scrolled && <div className="h-4 w-[1px] bg-white/10 mr-2"></div>}

            <a 
               href="/irfan-resume.pdf" 
               target="_blank"
               className="group px-4 py-2 text-xs font-semibold bg-white text-black rounded-full hover:bg-zinc-200 transition-all active:scale-95 flex items-center gap-1"
             >
               Resume
               <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
             </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white z-50 relative"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Full Screen Mobile Menu */}
      <div className={`
        fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500
        ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'}
      `}>
         {NAV_LINKS.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-bold text-zinc-400 hover:text-white transition-colors"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </a>
         ))}
          <a 
             href="/irfan-resume.pdf" 
             target="_blank"
             className="mt-8 px-8 py-4 text-sm font-bold bg-white text-black rounded-full"
           >
             Download Resume
           </a>
      </div>
    </>
  );
};

export default Navbar;
