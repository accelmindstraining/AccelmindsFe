import React from "react";
import { motion } from "framer-motion";

const partners = [
  { src: "/p1.JPG", url: "#" },
  { src: "/orcade.JPG", url: "https://www.orcadehub.com" },
  { src: "/p2.JPG", url: "#" },
  { src: "/p3.JPG", url: "#" },
  { src: "/p4.JPG", url: "#" },
  { src: "/Fixityedx.JPG", url: "#" },
  { src: "/LogicWhilelogo.JPG", url: "#" },
  { src: "/DIGITALBILLIONAIRE.PNG", url: "#" },
  { src: "/TaleeoLearning.JPG", url: "#" },
  { src: "/TalentShine.JPG", url: "#" },
  { src: "/TechProjectsHub.JPG", url: "#" },

];

const duplicated = [...partners, ...partners];

const Partners = () => {
  return (
    <section
      id="clients"
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm uppercase tracking-[0.25em] text-[#444656] font-semibold mb-16"
        >
          Empowering Innovation At
        </motion.h2>

        {/* Scroll Container */}
        <div className="relative">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white to-transparent z-20" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white to-transparent z-20" />

          <motion.div
            className="flex gap-20 w-max items-center"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 22,
            }}
          >
            {duplicated.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:scale-105 transition-all duration-300"
              >
                <img
                  src={partner.src}
                  alt={`partner-${index}`}
                  className="h-16 object-contain"
                />
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Partners;