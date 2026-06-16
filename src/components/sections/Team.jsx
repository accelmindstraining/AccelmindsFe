import React from "react";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <section
      id="Team"
      className="py-28 bg-[#f9f9f9] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="text-[#001dc1] text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Our Team
          </span>

          <h2 className="text-[40px] leading-[48px] font-semibold text-[#001dc1] mb-6">
            Powered By Industry Experts
          </h2>

          <p className="text-lg text-[#444656] leading-relaxed">
            AccelMinds brings together experienced trainers, technology
            specialists, project mentors, and industry professionals dedicated
            to helping individuals and organizations achieve measurable growth.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop"
            alt="AccelMinds Team"
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
            <div className="p-10 lg:p-14 text-white max-w-3xl">
              <h3 className="text-3xl lg:text-4xl font-semibold mb-4">
                Building Skills. Driving Innovation.
              </h3>

              <p className="text-lg text-gray-200 leading-relaxed">
                Our multidisciplinary team combines expertise in technology,
                corporate training, software development, and digital
                transformation to deliver impactful learning and business
                solutions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            {
              value: "50+",
              label: "Industry Experts",
            },
            {
              value: "100+",
              label: "Projects Delivered",
            },
            {
              value: "5000+",
              label: "Learners Trained",
            },
            {
              value: "95%",
              label: "Client Satisfaction",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
              }}
              className="text-center bg-white rounded-2xl p-8 shadow-sm"
            >
              <h4 className="text-4xl font-bold text-[#001dc1] mb-2">
                {item.value}
              </h4>
              <p className="text-[#444656]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;