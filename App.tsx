
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans w-full overflow-x-hidden selection:bg-white selection:text-black">
      <Navbar />
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <About />
        <BentoGrid />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
