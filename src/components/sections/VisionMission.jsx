import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Zap,
  CheckCircle,
} from "lucide-react";

const missionPoints = [
  "Deliver high-impact training through expert educators",
  "Develop scalable tech tools to optimize CRT workflows",
  "Continuously innovate for evolving educational needs",
  "Empower students with real-world, job-ready skills",
];

const VisionMission = () => {
  return (
    <section className="py-28 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-10">

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#001dc1] text-white p-14 rounded-[32px] relative overflow-hidden group"
        >
          {/* Giant Background Icon */}
          <div className="absolute -right-16 -top-16 opacity-10 group-hover:rotate-12 transition-transform duration-700">
            <Target className="w-56 h-56" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5 text-[#ffe16d]" />
              <span className="text-sm font-semibold uppercase tracking-widest">
                Our Vision
              </span>
            </div>

            <h3 className="text-[40px] leading-[48px] font-semibold mb-6">
              Building the Future of CRT &
              EdTech Ecosystems
            </h3>

            <p className="text-lg leading-[30px] opacity-90 mb-8">
              To become the most trusted partner for CRT
              and EdTech companies by delivering
              cutting-edge training and technology
              solutions that shape future-ready talent.
            </p>

            <p className="text-base leading-[28px] opacity-80 italic">
              We don’t just train students — we engineer
              scalable systems that redefine how
              institutions deliver impact at scale.
            </p>
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-14 rounded-[32px] border border-[#e8e8e8] relative overflow-hidden group"
        >
          {/* Giant Background Icon */}
          <div className="absolute -right-16 -top-16 text-[#eeeeee] group-hover:-rotate-12 transition-transform duration-700">
            <Zap className="w-56 h-56" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-5 h-5 text-[#705d00]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#705d00]">
                Our Mission
              </span>
            </div>

            <h3 className="text-[40px] leading-[48px] font-semibold text-[#001dc1] mb-8">
              Driving Measurable
              Excellence
            </h3>

            <div className="space-y-6">
              {missionPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.1,
                  }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-[#fcd400] mt-1 flex-shrink-0" />

                  <p className="text-[#444656] text-lg leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;