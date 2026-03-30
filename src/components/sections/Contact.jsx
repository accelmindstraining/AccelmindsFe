import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5500';
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      // const res = await fetch('https://client3-be-git-main-orcadehubs-projects.vercel.app/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      const result = await res.json();

      if (result.success) {
        toast({
          title: "✅ Message Sent!",
          description: "We'll get back to you shortly.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || "Unknown error");
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "❌ Failed to send",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A34F0] mb-6">Contact Us</h2>
          <p className="text-xl text-gray-600">Ready to accelerate your training programs?</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-6">
              <div className="bg-[#1A34F0] w-16 h-16 rounded-2xl flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-xl mb-1">Phone</h3>
                <p className="text-gray-600 text-lg">+91-8639397741</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="bg-[#1A34F0] w-16 h-16 rounded-2xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-xl mb-1">Email</h3>
                <p className="text-gray-600 text-lg">accelmindsofficial@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="bg-[#1A34F0] w-16 h-16 rounded-2xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-xl mb-1">Location</h3>
                <p className="text-gray-600 text-lg">Hyderabad, India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50/70 rounded-3xl p-8 border border-gray-200"
          >
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1A34F0] focus:ring-1 focus:ring-[#1A34F0] transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1A34F0] focus:ring-1 focus:ring-[#1A34F0] transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#1A34F0] focus:ring-1 focus:ring-[#1A34F0] transition-colors resize-none"
                  placeholder="Tell us about your training needs..."
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#1A34F0] hover:bg-[#182fc4] text-white rounded-xl font-semibold transition-all duration-300"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
