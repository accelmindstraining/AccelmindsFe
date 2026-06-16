import React from 'react';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Problems from '@/components/sections/Problems';
import About from '@/components/sections/About';
import VisionMission from '@/components/sections/VisionMission';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

import Footer from '@/components/sections/Footer';
import { Toaster } from '@/components/ui/toaster';
import Partners from './components/sections/Partners';

// Stagger children on section enter
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

function App() {
  return (


    <div className="min-h-screen text-slate-800">

    {/* <div
      className="min-h-screen text-white overflow-hidden
  bg-[radial-gradient(circle_at_top_left,#1a1aee_0%,transparent_45%),radial-gradient(circle_at_bottom_right,#1a1aee_0%,transparent_55%),#ffffff]"
    > */}

      {/* 🌌 Global Glow Layer */}
      {/* <div className="fixed inset-0 -z-10">

        {/* Top-left glow */}
        {/* <div className="absolute w-[700px] h-[700px] bg-[#1a1aee]/100 blur-[180px] rounded-full top-[-200px] left-[-150px]" /> */}

        {/* Bottom-right glow */}
        {/* <div className="absolute w-[600px] h-[600px] bg-[#1a1aee]/100 blur-[200px] rounded-full bottom-[-220px] right-[-180px]" /> */}

      {/* </div> */}

      <Header />
      <main>
        <Hero />
        <Problems />
        <About />
        <VisionMission />
        <Partners />
        <Team />
        <Testimonials />
        <Contact />

      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
