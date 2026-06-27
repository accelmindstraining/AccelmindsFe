import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const API_BASE_URL =
        import.meta.env.VITE_API_BASE_URL ||
        "http://localhost:5500";

      const res = await fetch(
        `${API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await res.json();

      if (result.success) {
        toast({
          title: "✅ Message Sent!",
          description: "We'll get back to you shortly.",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
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
    <section
      id="Contact"
      className="py-28 bg-[#f9f9f9]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
        >
          <span className="text-[#001dc1] text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Contact Us
          </span>

          <h2 className="text-[40px] leading-[48px] font-semibold text-[#001dc1] mb-6">
            Ready to Scale?
          </h2>

          <p className="text-lg text-[#444656] leading-relaxed mb-12 max-w-lg">
            Have a project idea, training requirement,
            or technical partnership opportunity?
            Let’s discuss how AccelMinds can help
            accelerate measurable growth.
          </p>

          <div className="space-y-8">
            
            {/* Email */}
            <div className="flex gap-5">
              <div className="w-14 h-14 bg-[#001dc1]/5 rounded-full flex items-center justify-center text-[#001dc1]">
                <Mail size={22} />
              </div>

              <div>
                <h5 className="font-semibold text-[#1a1c1c] mb-1">
                  Email Us
                </h5>

                <p className="text-[#444656]">
                  accelminds.contact@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5">
              <div className="w-14 h-14 bg-[#001dc1]/5 rounded-full flex items-center justify-center text-[#001dc1]">
                <Phone size={22} />
              </div>

              <div>
                <h5 className="font-semibold text-[#1a1c1c] mb-1">
                  Call Us
                </h5>

                <p className="text-[#444656]">
                  +91-9392897741
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-5">
              <div className="w-14 h-14 bg-[#001dc1]/5 rounded-full flex items-center justify-center text-[#001dc1]">
                <MapPin size={22} />
              </div>

              <div>
                <h5 className="font-semibold text-[#1a1c1c] mb-1">
                  Office
                </h5>

                <p className="text-[#444656]">
                  Hyderabad, India
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-[32px] border border-[#e8e8e8] shadow-lg"
        >
          <h3 className="text-3xl font-semibold text-[#001dc1] mb-8">
            Send us a message
          </h3>

          <form
            onSubmit={handleFormSubmit}
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-[#f9f9f9] rounded-xl border border-[#c5c5d9] px-5 py-4 focus:border-[#001dc1] focus:ring-1 focus:ring-[#001dc1] outline-none transition"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-[#f9f9f9] rounded-xl border border-[#c5c5d9] px-5 py-4 focus:border-[#001dc1] focus:ring-1 focus:ring-[#001dc1] outline-none transition"
            />

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full bg-[#f9f9f9] rounded-xl border border-[#c5c5d9] px-5 py-4 focus:border-[#001dc1] focus:ring-1 focus:ring-[#001dc1] outline-none transition resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1a34f0] text-white py-4 rounded-xl font-semibold hover:brightness-110 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
