"use client";

import { motion } from "framer-motion";
import { Printer, Phone, Clock, MessageCircle, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 bg-[oklch(0.10_0.01_240)] border-t border-[oklch(0.75_0.15_220_/_0.1)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4a90d9] to-[#9b59b6] flex items-center justify-center">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-lg">Sky Printing</div>
                <div className="text-xs text-[#64748b]">+ Repairs</div>
              </div>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
              Custom printing and trusted repairs for phones and tablets. Your design, our expertise.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-[oklch(0.15_0.02_245_/_0.5)] border border-[oklch(0.75_0.15_220_/_0.1)] flex items-center justify-center text-[#64748b] hover:text-[#4a90d9] transition-colors"
              >
                <Globe className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://wa.me/27813021320"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-[oklch(0.15_0.02_245_/_0.5)] border border-[oklch(0.75_0.15_220_/_0.1)] flex items-center justify-center text-[#64748b] hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "Why Sky Printing", href: "#why" },
                { label: "Contact", href: "#contact" },
                { label: "Custom Covers", href: "#" },
                { label: "Repairs", href: "#" },
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href}
                    className="text-[#94a3b8] hover:text-[#4a90d9] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Screen Repairs",
                "Battery Replacement",
                "Custom Printed Covers",
                "Screen Protectors",
                "Chargers & Cables",
              ].map((service, i) => (
                <li key={i}>
                  <span className="text-[#94a3b8] text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#4a90d9] mt-0.5" />
                <span className="text-[#94a3b8] text-sm">+27 81 302 1320</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] mt-0.5" />
                <span className="text-[#94a3b8] text-sm">+27 81 302 1320</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#9b59b6] mt-0.5" />
                <span className="text-[#94a3b8] text-sm">Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[oklch(0.75_0.15_220_/_0.1)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#64748b] text-sm">
            © {currentYear} Sky Printing. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-[oklch(0.15_0.02_245_/_0.5)] border border-[oklch(0.75_0.15_220_/_0.2)] text-[#94a3b8] hover:text-white transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm">Back to top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
