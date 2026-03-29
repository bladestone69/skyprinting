"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Users, MessageCircle, TrendingUp, Award, Clock, Heart } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "25 Years Experience",
    description: "A mobile technician with a quarter-century of hands-on experience. You get expertise you can trust.",
    color: "#4a90d9"
  },
  {
    icon: MessageCircle,
    title: "Personal Communication",
    description: "Not sure what's wrong? Call or message Jos directly. He'll talk you through the problem before you commit.",
    color: "#9b59b6"
  },
  {
    icon: TrendingUp,
    title: "Built for Referrals",
    description: "Designed to make it easy to share with friends and family who need reliable repairs or custom covers.",
    color: "#2ecc71"
  },
  {
    icon: Award,
    title: "Quality Parts",
    description: "Reliable replacement parts with professional fitting. No shortcuts, no compromises on quality.",
    color: "#f39c12"
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Most repairs done same-day. You won't be without your device for long.",
    color: "#e74c3c"
  },
  {
    icon: Heart,
    title: "Friendly Service",
    description: "Practical advice, honest pricing, and a smile. Old-school service values in a modern world.",
    color: "#1abc9c"
  }
];

export default function WhySection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.5, 1, 0.5]);

  return (
    <section id="why" className="relative py-24 px-6 overflow-hidden">
      {/* Parallax background elements */}
      <motion.div style={{ y, opacity }} className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#4a90d9]/10 blur-[100px]" />
      <motion.div style={{ y, opacity, x: useTransform(scrollYProgress, [0, 1], [0, 100]) }} className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#9b59b6]/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.75_0.15_220_/_0.1)] border border-[oklch(0.75_0.15_220_/_0.2)] mb-6">
            <span className="text-sm font-medium text-[#4a90d9]">Why Sky Printing</span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            More Than Just Fixes
          </h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            A small business feel with dependable hands behind the work.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group relative p-8 rounded-3xl bg-[oklch(0.15_0.02_245_/_0.5)] border border-[oklch(0.75_0.15_220_/_0.1)] backdrop-blur-lg"
            >
              {/* Gradient border on hover */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{ 
                  background: `linear-gradient(135deg, ${reason.color}40, transparent 50%)`,
                  filter: 'blur(20px)'
                }}
              />

              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${reason.color}20` }}
              >
                <reason.icon className="w-7 h-7" style={{ color: reason.color }} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-[#94a3b8] leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial/Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-3xl bg-gradient-to-r from-[oklch(0.15_0.02_245_/_0.8)] to-[oklch(0.18_0.02_250_/_0.6)] border border-[oklch(0.75_0.15_220_/_0.15)] backdrop-blur-lg text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
            "Not sure what is wrong with your device? Call or message and talk through the problem before deciding what to do."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#4a90d9] to-[#9b59b6] flex items-center justify-center text-white font-bold text-lg">
              J
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">Jos</div>
              <div className="text-sm text-[#64748b]">Sky Printing Owner</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
