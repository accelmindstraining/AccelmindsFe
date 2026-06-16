import React, { useRef } from 'react';

const testimonials = [
  { quote: "AccelMinds helped us scale our CRT programs across multiple campuses seamlessly. Their trainers are professional, punctual, and extremely effective.", name: "Director", company: "Pago Achievers", initials: "PA", accent: false },
  { quote: "The training feedback from students improved significantly. They also customized a test portal that saved hours every week.", name: "CRT Coordinator", company: "Talentio", initials: "CT", accent: true },
  { quote: "We finally found a training partner that delivers what they promise — quality trainers and tech that just works.", name: "Director", company: "ThinkOmega", initials: "TO", accent: false },
  { quote: "Customized training modules and a professional approach helped us scale efficiently. A reliable partner.", name: "Kavya", company: "Tech Projects Hub", initials: "K", accent: false },
];

const avatarColors = [
  'bg-blue-50 text-blue-800',
  'bg-purple-50 text-purple-800',
  'bg-teal-50 text-teal-800',
];

const TestimonialCard = ({ t, index }) => (
  <div className={`flex-shrink-0 w-72 rounded-2xl p-5 border transition-colors duration-200 hover:border-blue-500 cursor-default
    ${t.accent ? 'bg-[#1A34F0] border-[#1A34F0]' : 'bg-white border-black-200'}`}
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium
        ${t.accent ? 'bg-white/20 text-white' : avatarColors[index % avatarColors.length]}`}>
        {t.initials}
      </div>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-sm ${t.accent ? 'text-white/90' : 'text-yellow-400'}`}>★</span>
        ))}
      </div>
    </div>
    <p className={`text-sm leading-relaxed mb-3 ${t.accent ? 'text-white' : 'text-gray-700'}`}>
      "{t.quote}"
    </p>
    <hr className={t.accent ? 'border-white/20' : 'border-gray-100'} />
    <div className="mt-2.5">
      <p className={`text-sm font-medium ${t.accent ? 'text-white' : 'text-gray-900'}`}>{t.name}</p>
      <p className={`text-xs mt-0.5 ${t.accent ? 'text-white/60' : 'text-gray-500'}`}>{t.company}</p>
    </div>
  </div>
);

const MarqueeRow = ({ items, reverse = false }) => {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="flex gap-3 w-max" style={{
      animation: `${reverse ? 'scrollRight' : 'scrollLeft'} ${reverse ? '32s' : '28s'} linear infinite`,
    }}>
      {repeated.map((t, i) => <TestimonialCard key={i} t={t} index={i} />)}
    </div>
  );
};

const Testimonials = () => (
  <section id="Testimonials" className="py-16 overflow-hidden">
    {/* Header */}
    <div className="max-w-7xl mx-auto px-6 mb-10 flex items-end justify-between flex-wrap gap-6">
      <div>
        <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">Client testimonials</p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Trusted by training<br />partners <span className="text-[#1A34F0]">nationwide.</span>
        </h2>
      </div>
      <div className="flex gap-8">
        <div>
          <p className="text-2xl font-bold text-gray-900">50+</p>
          <p className="text-sm text-gray-500 mt-1">Institutions served</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">98%</p>
          <p className="text-sm text-gray-500 mt-1">Satisfaction rate</p>
        </div>
      </div>
    </div>

    {/* Marquee rows — pause on hover */}
    <div className="flex flex-col gap-3 group">
      <div className="overflow-hidden">
        <div className="group-hover:[animation-play-state:paused]">
          <MarqueeRow items={testimonials} />
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="group-hover:[animation-play-state:paused]">
          <MarqueeRow items={[...testimonials].reverse()} reverse />
        </div>
      </div>
    </div>

    {/* CSS animations */}
    <style>{`
      @keyframes scrollLeft {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      @keyframes scrollRight {
        from { transform: translateX(-50%); }
        to   { transform: translateX(0); }
      }
    `}</style>
  </section>
);

export default Testimonials;