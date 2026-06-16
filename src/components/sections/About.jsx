import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  BookOpen,
  BarChart3,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Custom Tech Solutions",
    desc: "Tailored applications to streamline CRT workflows",
  },
  {
    icon: BookOpen,
    title: "Expert Training",
    desc: "Industry-ready content delivered by professionals",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    desc: "Real-time insights into student and trainer performance",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    desc: "Expand across campuses without compromising quality",
  },
];

const About = () => {
  return (
    <section
      id="About"
      className="py-28 bg-[#f3f3f4] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          {/* Small Label */}
          <span className="text-[#001dc1] text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Our Identity
          </span>

          {/* Heading */}
          <h2 className="text-[40px] leading-[48px] font-semibold text-[#1a1c1c] mb-6">
            We are{" "}
            <span className="text-[#001dc1]">
              The Expert Architects
            </span>{" "}
            of modern education.
          </h2>

          {/* Description */}
          <p className="text-[18px] leading-[30px] text-[#444656] mb-6">
            At AccelMinds Solutions Pvt. Ltd., we empower Campus
            Recruitment Training (CRT) companies by providing
            top-tier trainers across technical, aptitude, and
            verbal domains.
          </p>

          <p className="text-[16px] leading-[28px] text-[#444656] mb-8">
            Beyond training, we build intelligent applications
            that streamline CRT workflows — from automated
            assessments to real-time analytics and interactive
            learning tools.
          </p>

          {/* Quote Highlight */}
          <div className="border-l-4 border-[#001dc1] pl-6">
            <p className="text-[#444656] italic text-[16px] leading-[28px]">
              "We believe in quality over quantity,
              innovation over repetition, and lasting
              impact over temporary fixes."
            </p>
          </div>
        </motion.div>

        {/* RIGHT FEATURE GRID */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 grid grid-cols-2 gap-6"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white p-7 rounded-xl border border-[#eeeeee] shadow-sm hover:-translate-y-2 transition-all duration-300
                ${idx % 2 !== 0 ? "mt-6" : ""}
                `}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5
                  ${
                    idx % 2 === 0
                      ? "bg-[#001dc1]/10 text-[#001dc1]"
                      : "bg-[#fcd400]/15 text-[#705d00]"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h4 className="text-[22px] font-semibold text-[#1a1c1c] mb-2">
                  {feature.title}
                </h4>

                {/* Desc */}
                <p className="text-[#444656] text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;