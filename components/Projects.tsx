
import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-black text-white">
      <div className="max-w-[90rem] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                    Selected <span className="text-zinc-500">Work.</span>
                </h2>
                <p className="text-lg font-medium text-zinc-400 max-w-5xl mx-2 leading-relaxed">
                    A collection of high-impact projects demonstrating expertise in full-stack engineering, AI integration, and scalable system architecture.
                </p>
            </div>
            
            <a 
                href="https://github.com/irfan-rg" 
                target="_blank"
                className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all mb-2 md:mb-0"
            >
                <span className="font-semibold">View Github</span>
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Github size={18} />
                </div>
                
            </a>
        </div>

        <div className="space-y-32">
            {PROJECTS.map((project, index) => (
                <div key={index} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Project Visual - Cinematic Window Style */}
                    <div className={`
                        lg:col-span-7 relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 aspect-[16/9] flex flex-col
                        ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
                    `}>
                         {/* Window Header */}
                        <div className="h-8 bg-zinc-900/90 border-b border-white/5 flex items-center px-4 gap-2 z-20 backdrop-blur-sm shrink-0">
                             <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-[#ff5f56] transition-colors duration-300"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-[#ffbd2e] transition-colors duration-300"></div>
                             <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-[#27c93f] transition-colors duration-300"></div>
                        </div>

                        {/* Inner Content Container */}
                        <div className="relative w-full flex-1 overflow-hidden group-hover:scale-[1.01] transition-transform duration-700 ease-out origin-top">
                            
                            {/* Render Image or Fallback */}
                            {project.image ? (
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement?.classList.add('fallback-active');
                                    }}
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                                    {/* Fallback Abstract Letter */}
                                    <span className="text-[8rem] md:text-[12rem] font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500 tracking-tighter uppercase select-none">
                                        {project.title.charAt(0)}
                                    </span>
                                </div>
                            )}
                            
                            {/* Cinematic Bottom Fade - Blends image into card */}
                            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/10 to-transparent z-10 pointer-events-none" />
                        </div>

                        {/* Glass Flash Effect on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30 pointer-events-none" />
                        
                        {/* Action Buttons (Floating) */}
                        <div className="absolute bottom-8 left-8 z-40 flex gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                            {project.liveUrl && project.liveUrl !== "#" && (
                                <a href={project.liveUrl} target="_blank" className="px-6 py-3 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-xl">
                                    View Live <ExternalLink size={14} />
                                </a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" className="px-6 py-3 bg-black/60 backdrop-blur-xl border border-white/20 text-white rounded-full text-sm font-bold hover:bg-black/80 transition-colors flex items-center gap-2 shadow-xl">
                                    <Github size={16} /> Code
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Project Info */}
                    <div className={`lg:col-span-5 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-blue-400 tracking-wider uppercase">
                                {project.category}
                            </span>
                            {project.highlight && (
                                <span className="px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-mono text-purple-400 tracking-wider uppercase">
                                    Featured
                                </span>
                            )}
                        </div>
                        
                        <h3 className="text-4xl md:text-5xl font-bold text-white group-hover:text-white transition-colors duration-500">
                            {project.title}
                        </h3>
                        
                        <p className="text-md font-medium text-gray-400 max-w-5xl mx-2 leading-relaxed border-l-2 border-white/10 pl-6">
                            {project.description}
                        </p>

                        <div className="pt-4 flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-sm text-gray-500 font-semibold px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:bg-zinc-900 hover:border-zinc-900 hover:scale-105 transition-all cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
