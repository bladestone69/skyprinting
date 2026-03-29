"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, MessageCircle, Phone, Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";

const serviceOptions = [
  "Phone/Tablet Repair",
  "Custom Printed Cover",
  "Screen Protector",
  "Accessories",
  "Other"
];

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate WhatsApp message generation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const whatsappMessage = `Hi Jos! I'm ${formState.name} and I'm interested in: ${formState.service}. ${formState.message} Please call me at ${formState.phone}.`;
    const whatsappUrl = `https://wa.me/27XXXXXXXXX?text=${encodeURIComponent(whatsappMessage)}`;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Open WhatsApp (in production, use actual number)
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-[oklch(0.12_0.015_240)]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.12_0.015_240)] via-[oklch(0.15_0.02_245)] to-[oklch(0.12_0.015_240)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.75_0.15_220_/_0.1)] border border-[oklch(0.75_0.15_220_/_0.2)] mb-6">
            <span className="text-sm font-medium text-[#4a90d9]">Get in Touch</span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Let's Chat
          </h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            Send an enquiry in under a minute. Jos will get back to you quickly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[oklch(0.15_0.02_245_/_0.6)] border border-[oklch(0.75_0.15_220_/_0.15)] backdrop-blur-lg"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-[#25D366]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Ready!</h3>
                <p className="text-[#94a3b8] mb-6">Your WhatsApp message has been prepared. Check your WhatsApp to send it to Jos!</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 rounded-xl bg-[oklch(0.75_0.15_220_/_0.2)] text-white font-medium"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-[oklch(0.12_0.015_240)] border border-[oklch(0.75_0.15_220_/_0.2)] text-white placeholder-[#64748b] focus:outline-none focus:border-[#4a90d9] focus:ring-2 focus:ring-[#4a90d9]/20 transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-[oklch(0.12_0.015_240)] border border-[oklch(0.75_0.15_220_/_0.2)] text-white placeholder-[#64748b] focus:outline-none focus:border-[#4a90d9] focus:ring-2 focus:ring-[#4a90d9]/20 transition-all"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">Service Needed</label>
                  <select
                    name="service"
                    required
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-[oklch(0.12_0.015_240)] border border-[oklch(0.75_0.15_220_/_0.2)] text-white focus:outline-none focus:border-[#4a90d9] focus:ring-2 focus:ring-[#4a90d9]/20 transition-all"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[oklch(0.15_0.02_245)]">{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">Your Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-[oklch(0.12_0.015_240)] border border-[oklch(0.75_0.15_220_/_0.2)] text-white placeholder-[#64748b] focus:outline-none focus:border-[#4a90d9] focus:ring-2 focus:ring-[#4a90d9]/20 transition-all resize-none"
                    placeholder="Tell Jos about your device or design idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#4a90d9] to-[#9b59b6] text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Preparing Message...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5" />
                      Send via WhatsApp
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              {[
                { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", color: "#25D366", href: "#" },
                { icon: Phone, label: "Call Jos", value: "Quick response", color: "#4a90d9", href: "#" },
                { icon: Mail, label: "Email", value: "jos@skyprinting.co.za", color: "#9b59b6", href: "#" },
              ].map((contact, i) => (
                <motion.a
                  key={i}
                  href={contact.href}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-[oklch(0.15_0.02_245_/_0.5)] border border-[oklch(0.75_0.15_220_/_0.1)] backdrop-blur-lg group"
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${contact.color}20` }}
                  >
                    <contact.icon className="w-6 h-6" style={{ color: contact.color }} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{contact.label}</div>
                    <div className="text-sm text-[#64748b]">{contact.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-[oklch(0.15_0.02_245_/_0.8)] to-[oklch(0.18_0.02_250_/_0.6)] border border-[oklch(0.75_0.15_220_/_0.15)] backdrop-blur-lg"
            >
              <h3 className="text-xl font-bold text-white mb-6">Availability</h3>
              <div className="space-y-4">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", hours: "By appointment" },
                ].map((schedule, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-[#94a3b8]">{schedule.day}</span>
                    <span className="text-white font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-[oklch(0.75_0.15_220_/_0.1)]">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ecc71] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2ecc71]"></span>
                  </span>
                  <span className="text-[#2ecc71] font-medium">Usually responds within 1 hour</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
