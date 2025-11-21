
import React from 'react';
import { MapPin, GraduationCap, School } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
           <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Behind <span className="text-zinc-600">Code.</span>
           </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Profile Image - First on Mobile, Left on Desktop */}
          <div className="md:col-span-5 order-1 md:order-1">
             <div className="h-full min-h-[350px] md:min-h-[450px] w-full relative rounded-3xl overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-zinc-900">
                   <img 
                    src="assets/images/profile.jpg"
                    onError={(e) => {e.currentTarget.src = '/assets/images/memoji3.png';}}
                    alt="Irfan" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                   />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-3 left-6 right-6">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-white mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      Open to Work
                   </div>
                   {/* <p className="text-zinc-300 text-sm leading-relaxed">
                      Crafting scalable systems with a focus on performance and user experience.
                   </p> */}
                </div>
             </div>
          </div>

          {/* Card 2: Biography & Stats - Second on Mobile, Right on Desktop */}
          <div className="md:col-span-7 order-2 md:order-2 flex flex-col gap-6">
             
             {/* Bio Card */}
             <div className="flex-1 bg-[#09090b] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <h3 className="text-2xl font-bold text-zinc-200 mb-6 relative z-10">
                   {/* Curiosity <span className="text-zinc-400 font-bold text-3xl">→</span> Code */}
                   Curious Developer
                </h3>
                <div className="space-y-4 text-zinc-400 text-md font-medium leading-relaxed relative z-10">
                  {/* <p>
                     What started as childhood curiosity about how computers worked grew into a habit of understanding things deeply and rebuilding them better.
                  </p>
                  <p>
                     I wrote my first lines of code in high school, and that early spark still drives me, now with a sharper focus on building modern web applications with clean architecture and smooth user experiences.
                  </p>

                  <p>
                     I care about clarity, performance, and the small details that make software feel good to use. Each project is a chance to learn, improve, and push my skills a little further.
                  </p> */}

                  <p>
                     What started as childhood curiosity about how computers worked gradually became a habit of understanding things deeply and rebuilding them better. Writing my first bits of code in high school showed me how much I enjoyed creating things that functioned smoothly.
                  </p>

                  <p>
                     Today, I focus on building modern web applications with clean architecture, predictable behavior, and smooth user experiences. Whether it’s a responsive UI or a full-stack flow, I care about clarity, performance, and the details that make software feel good to use.
                  </p>

                  <p>
                     Always learning. Always improving. One iteration at a time.
                  </p>

                  {/* <p>
                    It started with endless questions to my uncle about how computers worked. That childhood spark evolved into a passion when I joined the High School Tech Club and wrote my first lines of code.
                  </p>
                  <p>
                    Today, I translate that curiosity into scalable software. Specializing in the modern Web Development stack, I build efficient, real-world applications with a focus on clean architecture and seamless user experiences.
                  </p> */}
                </div>
             </div>

             {/* Stats Row */}
             <div className="grid grid-cols-3 gap-4">
                 <div className="bg-[#09090b] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
                    <GraduationCap size={20} className="text-zinc-500 mb-2" />
                    <span className="text-white font-semibold text-sm">Computer Science</span>
                 </div>
                 <div className="bg-[#09090b] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
                    <School size={20} className="text-zinc-500 mb-2" />
                    <span className="text-white font-semibold text-sm">SDM Institute of Tech.</span>
                 </div>
                 <div className="bg-[#09090b] border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors">
                    <MapPin size={20} className="text-zinc-500 mb-2" />
                    <span className="text-white font-semibold text-sm">Dharwad</span>
                 </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
