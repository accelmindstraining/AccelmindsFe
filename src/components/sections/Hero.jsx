import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Officebg from '/public/bgoffice.png';
// import contact from '../sections/Contact.jsx';

const Hero = () => {
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // const navigate = useNavigate();

const handleGetStarted = () => {
  console.log(document.getElementById('Contact'));

  const contactSection = document.getElementById('Contact');

  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

  const showNotImplementedToast = () => {
    toast({
      title: "Coming Soon",
      description: "🚀 Feature will be live soon!",
    });
  };

  return (
    // <section id="hero" className="relative pt-40 pb-32 px-6 bg-gradient-to-b from-[#1C18F5] via-[#0F0C8A] to-black ">

    <section
      id="hero"
      className="relative pt-40 pb-32 px-6 overflow-hidden bg-gradient-to-b from-[#1C18F5] via-[#0F0C8A] to-black"
    >

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={Officebg}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >

          {/* 🔥 Tagline Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-white text-[#1C18F5] text-sm font-medium backdrop-blur-md border border-[#1C18F5]/20">
            🚀 Empowering CRT Companies
          </div>

          {/* 🧠 Heading */}
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight text-white">
            Accelerate Minds.
            <br />
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFD700] bg-clip-text text-transparent">
              Shape Futures.
            </span>
          </h1>

          {/* 📄 Subtext */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white leading-relaxed">
            Empowering Campus Recruitment Training companies with elite trainers and intelligent tech solutions to deliver real impact.
          </p>

          {/* ⚡ CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >

            {/* Primary CTA */}
            <Button
              size="lg"
              onClick={handleGetStarted}
              className="relative bg-[#FFD700] hover:bg-[#FFD700] text-black px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />

              {/* Glow Effect */}
              <span className="absolute inset-0 rounded-full bg-[#1C18F5]/40 blur-xl opacity-0 hover:opacity-100 transition duration-300"></span>
            </Button>

            {/* Secondary CTA */}
            {/* <Button
              size="lg"
              variant="outline"
              onClick={showNotImplementedToast}
              className="border-white text-black hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105" >
              Learn More
            </Button> */}

          </motion.div>

          {/* 📊 Optional Trust Line */}
          <div className="pt-6 text-sm text-white">
            Trusted by CRT & EdTech companies
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
