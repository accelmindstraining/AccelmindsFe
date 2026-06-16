import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Zap,
  BarChart3,
  TrendingUp,
} from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Shortage of Skilled Trainers",
    description:
      "Access rigorously screened professionals across technical, aptitude, and verbal domains with proven delivery expertise.",
  },
  {
    icon: Target,
    title: "Inconsistent Training Quality",
    description:
      "Standardized curriculum frameworks ensure uniform excellence across every batch and campus engagement.",
  },
  {
    icon: Zap,
    title: "Manual Assessment & Feedback",
    description:
      "Automated evaluation pipelines reduce operational overhead while improving reporting precision.",
  },
  {
    icon: TrendingUp,
    title: "Limited Scalability",
    description:
      "Expand across multiple campuses seamlessly without sacrificing delivery quality or trainer oversight.",
  },
  {
    icon: BarChart3,
    title: "Lack of Performance Insights",
    description:
      "Real-time dashboards surface deep analytics into learner growth and trainer effectiveness.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Problems = () => {
  return (
    <section
      id="Services"
      className="py-28 px-6 bg-[#f9f9f9] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#001dc1]/5 border border-[#001dc1]/10 text-[#001dc1] text-sm font-semibold tracking-wide mb-5">
            Challenges We Solve
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1c1c] mb-5">
            Problems We Address
          </h2>

          <p className="text-lg text-[#757688] max-w-3xl mx-auto leading-relaxed">
            Transforming operational bottlenecks into scalable,
            intelligence-driven systems for modern campus training excellence.
          </p>
        </motion.div>

        {/* Bento Enterprise Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-7"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`group bg-white rounded-3xl border border-[#e5e7eb] p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2
              
              ${
                index === 2
                  ? "md:col-span-6 lg:col-span-4"
                  : index > 2
                  ? "md:col-span-3 lg:col-span-6"
                  : "md:col-span-3 lg:col-span-4"
              }
              `}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                ${
                  index % 2 === 0
                    ? "bg-[#001dc1]/10 text-[#001dc1] group-hover:bg-[#001dc1] group-hover:text-white"
                    : "bg-[#fcd400]/15 text-[#705d00] group-hover:bg-[#fcd400] group-hover:text-[#1a1c1c]"
                }`}
              >
                <problem.icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#1a1c1c] mb-3">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-[#757688] leading-relaxed text-[15px]">
                {problem.description}
              </p>

              {/* Accent Line */}
              <div className="w-0 group-hover:w-20 h-[3px] bg-[#001dc1] rounded-full mt-6 transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Problems;