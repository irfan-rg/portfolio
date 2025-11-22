
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

// --- Terminal Component ---
const Terminal: React.FC = () => {
  const [lines, setLines] = useState<Array<{ type: 'command' | 'output', text: string, id: number }>>([
    { type: 'command', text: '', id: 0 } // Start with empty command line
  ]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const commands = [
      { cmd: "npm start", output: "Initializing portfolio...", delay: 1000 },
      { cmd: "git status", output: "✓ Loading projects...", delay: 3000 },
      { cmd: "ls -la", output: "✓ Skills loaded.", delay: 5500 },
      { cmd: "echo 'Hello World'", output: "Welcome to my profile.", delay: 8000 }
    ];

    let currentCommandIndex = 0;
    let charIndex = 0;
    let isTyping = true;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeCharacter = () => {
      const currentCmd = commands[currentCommandIndex];

      if (isTyping) {
        if (charIndex < currentCmd.cmd.length) {
          // Type next character
          setLines(prev => {
            const newLines = [...prev];
            const lastLine = newLines[newLines.length - 1];
            if (lastLine.type === 'command') {
               lastLine.text = currentCmd.cmd.substring(0, charIndex + 1);
            }
            return newLines;
          });
          charIndex++;
          timeoutId = setTimeout(typeCharacter, 100 + Math.random() * 50); // Random typing speed
        } else {
          // Finished typing command
          isTyping = false;
          timeoutId = setTimeout(typeCharacter, 400); // Pause before output
        }
      } else {
        // Show output
        setLines(prev => [
          ...prev,
          { type: 'output', text: currentCmd.output, id: Date.now() }
        ]);
        
        // Determine if we should move to next command
        if (currentCommandIndex < commands.length - 1) {
           // Add next command line
           setLines(prev => [
             ...prev,
             { type: 'command', text: '', id: Date.now() + 1 }
           ]);
           currentCommandIndex++;
           charIndex = 0;
           isTyping = true;
           timeoutId = setTimeout(typeCharacter, 800); // Pause before next command
        } else {
           // Finished all commands
           setCompleted(true);
        }
      }
    };

    // Start animation
    timeoutId = setTimeout(typeCharacter, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full max-w-[340px] sm:max-w-md rounded-lg overflow-hidden bg-[#09090b] border border-white/10 shadow-2xl font-mono text-xs sm:text-sm relative z-20">
      {/* Terminal Header - Monochrome */}
      <div className="h-7 sm:h-8 bg-[#18181b] flex items-center px-3 sm:px-4 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
          <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
          <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
        </div>
        <div className="ml-4 text-zinc-500 text-xs">user@irfan-pro:~</div>
      </div>

      {/* Terminal Body */}
      <div className="p-3 sm:p-4 bg-black/80 backdrop-blur h-[260px] sm:h-[280px] overflow-y-auto text-zinc-300 font-mono custom-scrollbar">
        {lines.map((line, index) => (
          <div key={line.id} className="mb-2 min-h-[20px]">
            {line.type === 'command' ? (
              <div className="flex">
                <span className="text-zinc-500 mr-2">➜</span>
                <span className="text-white font-medium">{line.text}</span>
                {index === lines.length - 1 && !completed && (
                  <span className="w-2 h-4 bg-white ml-1 animate-pulse inline-block align-middle"></span>
                )}
              </div>
            ) : (
              <div className="text-zinc-400 ml-5 opacity-80">
                {line.text}
              </div>
            )}
          </div>
        ))}
        {completed && (
           <div className="flex">
             <span className="text-zinc-500 mr-2">➜</span>
             <span className="w-2 h-4 bg-white ml-1 animate-pulse inline-block align-middle"></span>
           </div>
        )}
      </div>

      {/* Status Bar */}
      <div className="h-5 sm:h-6 bg-[#18181b] border-t border-white/5 flex items-center justify-between px-2 sm:px-3 text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-wider">
        <span>bash</span>
        <div className="flex items-center gap-2">
           <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
           Online
        </div>
      </div>
      
    </div>
  );
};


// --- Hero Section ---
const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to parent section size
    const setCanvasSize = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };
    setCanvasSize();

    let width = canvas.width;
    let height = canvas.height;
    
    // Grid configuration
    const spacing = 30;
    const dots: { x: number; y: number; originX: number; originY: number; vx: number; vy: number }[] = [];

    const initDots = () => {
      dots.length = 0; // Clear array
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          dots.push({
            x, y,
            originX: x,
            originY: y,
            vx: 0,
            vy: 0
          });
        }
      }
    };
    initDots();

    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      dots.forEach(dot => {
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Interaction radius
        const maxDist = 150;
        
        if (dist < maxDist) {
          const angle = Math.atan2(dy, dx);
          const force = (maxDist - dist) / maxDist;
          const push = force * 8; // Push strength
          
          dot.vx -= Math.cos(angle) * push;
          dot.vy -= Math.sin(angle) * push;
        }

        // Return to origin (Spring physics)
        const dxOrigin = dot.originX - dot.x;
        const dyOrigin = dot.originY - dot.y;
        
        dot.vx += dxOrigin * 0.05; // Spring stiffness
        dot.vy += dyOrigin * 0.05;
        
        dot.vx *= 0.85; // Friction
        dot.vy *= 0.85;
        
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Draw dot
        const size = Math.max(1, 2.5 - (dist / 100)); // Dots get smaller when pushed
        const alpha = Math.max(0.1, 0.5 - (dist / 300)); // Dots get brighter when pushed

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
      width = canvas.width;
      height = canvas.height;
      initDots();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center pt-32 pb-20 md:py-32 px-4 md:px-12">
      
      {/* Interactive Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 cursor-crosshair"
      />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        
        {/* Left Content: Text */}
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[1.2] mb-4 md:mb-6">
            Turning Ideas <br/>
            <span className="text-zinc-500 mx-1 md:mx-3">Into Code.</span>
          </h1>
          <p className="text-base md:text-lg font-medium text-zinc-400 mx-1 md:mx-3 leading-relaxed max-w-lg mb-8 md:mb-10">
            Full-Stack Developer. <br />I build <span className="font-bold">clean, responsive,</span> and <span className="font-bold">modern</span> web applications.
          </p>

          <div className="flex flex-row sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
            <a href="#projects" className="px-3 sm:px-8 py-2 md:py-4 bg-white text-black text-xs md:text-base font-bold rounded-full hover:bg-zinc-200 transition-colors text-center">
              View Projects
            </a>
            <a href="#contact" className="px-3 sm:px-8 py-2 md:py-4 bg-transparent border border-white/20 text-white text-xs md:text-base font-medium rounded-full hover:bg-white/5 transition-colors text-center">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Content: Terminal & Status */}
        <div className={`flex flex-col items-center lg:items-end justify-center transition-all duration-1000 delay-300 transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
           <Terminal />
           
           {/* System Online Badge - Below Terminal */}
           {/* <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/50 border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">System Online</span>
          </div> */}
        </div>

      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-zinc-500 hidden md:block">
        <ArrowDown size={24} />
      </div>

    </section>
  );
};

export default Hero;
