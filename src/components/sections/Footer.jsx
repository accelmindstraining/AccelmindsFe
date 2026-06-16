import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";
// import logo from "./logo.jpeg";
import Logo from 'C:/Users/riyaz/Downloads/slminds/slminds/fe/public/logo.jpeg';


const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-gray-200 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-[#1C18F5]/10 blur-[120px] rounded-full top-[-100px] left-[10%]" />
        <div className="absolute w-[400px] h-[400px] bg-[#4F46FF]/10 blur-[120px] rounded-full bottom-[-100px] right-[10%]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={Logo} alt="logo" className="h-14 rounded-md" />
            {/* <h3 className="text-xl font-bold bg-gradient-to-r from-[#1C18F5] to-[#4F46FF] bg-clip-text text-transparent">
              AccelMinds
            </h3> */}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Empowering Campus Recruitment Training with innovation, technology,
            and real-world impact.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-5">
            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
              <div
                key={i}
                className="p-2 rounded-lg bg-gray-100 hover:bg-[#1C18F5] hover:text-white transition cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-gray-600">
            {["About", "Services", "Team", "Testimonials", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="hover:text-[#1C18F5] transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
          <ul className="space-y-3 text-gray-600">
            <li>Campus Recruitment Training</li>
            <li>Aptitude & Coding Prep</li>
            <li>Mock Interviews</li>
            <li>Custom Test Platforms</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Contact</h4>

          <div className="space-y-4 text-gray-600 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={16} />
              <span>accelminds.contact@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={16} />
              <span>Hyderabad, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AccelMinds Solutions Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;