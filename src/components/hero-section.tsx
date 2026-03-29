"use client";

import { motion } from "framer-motion";
import { ChevronDown, Phone, MessageCircle, Wrench, Printer, Shield } from "lucide-react";
import HeroBackground from "./hero-background";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.7 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[oklch(0.75_0.15_220_/_0.15)] border border-[oklch(0.75_0.15_220_/_0.3)] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4a90d9] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4a90d9]"></span>
              </span>
              <span className="text-sm font-medium text-[#4a90d9]">Trusted Local Service</span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-[#4a90d9] to-[#9b59b6] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Sky Printing
            </span>
            <br />
            <span className="text-white text-4xl md:text-5xl lg:text-6xl">
              + Repairs
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl md:text-2xl text-[#94a3b8] mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Custom phone covers with your design, plus expert repairs by a 
            <span className="text-[#4a90d9] font-semibold"> 25-year mobile technician </span>
            you can trust.
          </motion.p>

          {/* Service Icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {[
              { icon: Printer, label: "Custom Printing" },
              { icon: Wrench, label: "Expert Repairs" },
              { icon: Shield, label: "Screen Protection" },
              { icon: Phone, label: "Quality Accessories" },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[oklch(0.15_0.02_245_/_0.6)] border border-[oklch(0.75_0.15_220_/_0.2)] backdrop-blur-md"
              >
                <service.icon className="w-5 h-5 text-[#4a90d9]" />
                <span className="text-sm font-medium text-white">{service.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(74, 144, 217, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#4a90d9] to-[#9b59b6] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Printer className="w-5 h-5" />
                View Services
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-[oklch(0.15_0.02_245_/_0.6)] border border-[oklch(0.75_0.15_220_/_0.3)] text-white font-semibold rounded-xl hover:bg-[oklch(0.15_0.02_245_/_0.8)] transition-all duration-300 backdrop-blur-md"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              WhatsApp Jos
            </motion.a>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 w-full max-w-4xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-6 rounded-2xl bg-[oklch(0.15_0.02_245_/_0.5)] border border-[oklch(0.75_0.15_220_/_0.15)] backdrop-blur-md"
            style={{ backdropFilter: "blur(12px)" }}
          >
            {[
              { value: "25+", label: "Years Experience" },
              { value: "500+", label: "Covers Printed" },
              { value: "1000+", label: "Repairs Done" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4a90d9] to-[#9b59b6] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-[#94a3b8] mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#services"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-[#64748b] hover:text-[#4a90d9] transition-colors cursor-pointer"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
