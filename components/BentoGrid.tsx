
import React, { useRef, useState } from 'react';
import { SKILLS_DATA } from '../constants';

const BentoItem: React.FC<{ 
  title: string; 
  skills: string[]; 
  className?: string;
}> = ({ title, skills, className }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`${className} group relative rounded-2xl md:rounded-3xl bg-[#09090b] border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10`}
    >
      {/* Subtle Tech Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.05), transparent 40%)`,
        }}
      />
      
      <div className="relative h-full p-5 md:p-8 flex flex-col z-10">
        {/* Reverted font size to text-lg based on user feedback */}
        <h3 className="text-xs md:text-sm font-bold text-zinc-500 mb-4 md:mb-6 tracking-tight uppercase flex items-center gap-2">
          <span className="w-1 h-3 md:h-4 bg-zinc-700 rounded-full"></span>
            {title}
        </h3>
        
        <div className="flex flex-wrap gap-2 md:gap-3 content-start">
            {skills.map(skill => (
                <span key={skill} className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-zinc-400 bg-white/5 rounded-full border border-white/5 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/10 transition-all cursor-default">
                    {skill}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};

const BentoGrid: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-6 bg-black relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 md:mb-6">
                Technical <span className="text-zinc-500">Arsenal.</span>
            </h2>
            <p className="text-base md:text-lg font-medium text-zinc-400 max-w-4xl mx-1 md:mx-2 leading-relaxed">
                A comprehensive list of languages, frameworks, and tools I leverage to build scalable solutions.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {SKILLS_DATA.map((category, idx) => (
            <BentoItem 
                key={category.title}
                title={category.title}
                skills={category.skills}
                className={category.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
