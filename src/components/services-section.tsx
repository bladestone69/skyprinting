"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Wrench, Printer, Shield, Zap, Phone, MessageCircle, Clock, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Phone & Tablet Repairs",
    description: "Cracked screens, battery replacements, charging issues, and all common device problems fixed fast.",
    color: "#4a90d9",
    features: ["Screen repairs", "Battery replacements", "Charging fixes", "All brands"]
  },
  {
    icon: Printer,
    title: "Custom Printed Covers",
    description: "Your photo, artwork, name, or design - professionally printed on quality phone covers.",
    color: "#9b59b6",
    features: ["Your design", "Any phone model", "Premium finish", "Unique gift idea"]
  },
  {
    icon: Shield,
    title: "Screen Protectors",
    description: "Glass, plastic, privacy, or standard protectors to keep devices looking brand new.",
    color: "#2ecc71",
    features: ["Tempered glass", "Privacy options", "Anti-glare", "Easy install"]
  },
  {
    icon: Zap,
    title: "Accessories",
    description: "Chargers, cables, cases, and more - all the extras you need in one place.",
    color: "#f39c12",
    features: ["Fast chargers", "Quality cables", "Protective cases", "Audio gear"]
  }
];

export default function ServicesSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="services" className="relative py-24 px-6 bg-[oklch(0.12_0.015_240)]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.12_0.015_240)] via-[oklch(0.15_0.02_245)] to-[oklch(0.12_0.015_240)]" />
      
      <motion.div 
        style={{ y }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.75_0.15_220_/_0.1)] border border-[oklch(0.75_0.15_220_/_0.2)] mb-6">
            <span className="text-sm font-medium text-[#4a90d9]">What We Offer</span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            From quick repairs to custom designs, Jos has you covered with friendly, professional service.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-3xl bg-[oklch(0.15_0.02_245_/_0.6)] border border-[oklch(0.75_0.15_220_/_0.1)] backdrop-blur-lg overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  background: `radial-gradient(circle at 50% 0%, ${service.color}20 0%, transparent 70%)` 
                }}
              />
              
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <service.icon className="w-8 h-8" style={{ color: service.color }} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{service.title}</h3>
              <p className="text-[#94a3b8] mb-6 relative z-10">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 relative z-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#64748b]">
                    <CheckCircle className="w-4 h-4" style={{ color: service.color }} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Arrow indicator */}
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                className="absolute bottom-8 right-8"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-[#94a3b8] mb-6">Need something specific? Just ask!</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4a90d9] to-[#9b59b6] text-white font-semibold rounded-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
