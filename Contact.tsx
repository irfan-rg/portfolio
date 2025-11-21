
import React from 'react';
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-16 text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                Let's Work <span className="text-zinc-500">Together.</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Main Email Card - Large */}
            <a 
                href="mailto:irfanrgulagundi@gmail.com"
                className="md:col-span-8 group relative h-64 bg-white rounded-3xl p-8 flex flex-col justify-between overflow-hidden transition-transform hover:scale-[1.02] duration-300"
            >
                <div className="absolute top-4 right-4 p-2 bg-black/5 rounded-full group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight className="text-black" />
                </div>
                <div>
                    <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-4 text-black">
                        <Mail size={24} />
                    </div>
                    <h3 className="text-black text-3xl font-bold tracking-tight">Send me an email</h3>
                </div>
                <p className="text-zinc-600 font-medium text-lg">irfanrgulagundi@gmail.com</p>
            </a>

            {/* Social Stack - Vertical */}
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
                <a 
                    href="https://github.com/irfan-rg" 
                    target="_blank"
                    className="bg-[#09090b] border border-white/10 rounded-3xl p-6 flex items-center justify-between group hover:bg-white/5 transition-colors"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/5 rounded-full text-white"><Github size={20} /></div>
                        <span className="text-lg font-bold text-white">GitHub</span>
                    </div>
                    <ArrowUpRight className="text-zinc-500 group-hover:text-white group-hover:rotate-45 transition-all" />
                </a>

                <a 
                    href="https://www.linkedin.com/in/irfanrg" 
                    target="_blank"
                    className="bg-[#0077b5] rounded-3xl p-6 flex items-center justify-between group hover:brightness-110 transition-all"
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-full text-white"><Linkedin size={20} /></div>
                        <span className="text-lg font-bold text-white">LinkedIn</span>
                    </div>
                    <ArrowUpRight className="text-white/70 group-hover:text-white group-hover:rotate-45 transition-all" />
                </a>
            </div>

            {/* Location Card - Wide Bottom */}
            <div className="md:col-span-12 bg-[#09090b] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative group">
                {/* Background Map Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center pointer-events-none">
                   {/* Bangalore Location Dot - Corrected Coordinates */}
                   <div className="absolute top-[18.5%] left-[68%] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute opacity-100 "></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full border border-black/50 shadow-[0_0_15px_rgba(32,197,94,0.8)] relative z-10"></div>
                   </div>
                </div>
                
                <div className="relative z-10 flex items-center gap-6">
                    <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-white">
                        <MapPin size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">Based in India</h3>
                        <p className="text-zinc-400">Available for remote work worldwide.</p>
                    </div>
                </div>

                <div className="relative z-10 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Online now
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
