"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Smartphone, Tablet, CheckCircle, Search } from "lucide-react";

const phoneModels = [
  // iPhone 16 Series
  { brand: "iPhone", model: "16 Pro Max", width: 80, height: 165 },
  { brand: "iPhone", model: "16 Pro", width: 75, height: 152 },
  { brand: "iPhone", model: "16", width: 75, height: 150 },
  // iPhone 15 Series
  { brand: "iPhone", model: "15 Pro Max", width: 82, height: 163 },
  { brand: "iPhone", model: "15 Pro", width: 75, height: 150 },
  { brand: "iPhone", model: "15 Pro Plus", width: 82, height: 163 },
  { brand: "iPhone", model: "15", width: 76, height: 150 },
  // iPhone 14 Series
  { brand: "iPhone", model: "14 Pro Max", width: 83, height: 162 },
  { brand: "iPhone", model: "14 Plus", width: 83, height: 162 },
  { brand: "iPhone", model: "14 Pro", width: 75, height: 150 },
  { brand: "iPhone", model: "14", width: 75, height: 150 },
  // iPhone 13 Series
  { brand: "iPhone", model: "13 Pro Max", width: 75, height: 150 },
  { brand: "iPhone", model: "13 Pro", width: 75, height: 150 },
  { brand: "iPhone", model: "13", width: 75, height: 150 },
  // iPhone 12 Series
  { brand: "iPhone", model: "12 Pro Max", width: 83, height: 163 },
  { brand: "iPhone", model: "12 / 12 Pro", width: 75, height: 150 },
  // Samsung S25 Series
  { brand: "Samsung", model: "S25 Ultra", width: 80, height: 165 },
  { brand: "Samsung", model: "S25+", width: 78, height: 162 },
  { brand: "Samsung", model: "S25", width: 73, height: 150 },
  // Samsung S24 Series
  { brand: "Samsung", model: "S24 Ultra", width: 80, height: 164 },
  { brand: "Samsung", model: "S24+", width: 79, height: 160 },
  { brand: "Samsung", model: "S24", width: 73, height: 150 },
  // Samsung S23 Series
  { brand: "Samsung", model: "S23 Ultra", width: 80, height: 165 },
  { brand: "Samsung", model: "S23+", width: 78, height: 158 },
  { brand: "Samsung", model: "S23", width: 72, height: 142 },
  // Samsung A Series
  { brand: "Samsung", model: "A25 5G", width: 80, height: 162 },
  { brand: "Samsung", model: "A55 5G", width: 80, height: 162 },
  { brand: "Samsung", model: "A35 5G", width: 80, height: 162 },
];

const brands = ["All", "iPhone", "Samsung"];

export default function ModelsSection() {
  const [activeBrand, setActiveBrand] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = phoneModels.filter((p) => {
    const matchBrand = activeBrand === "All" || p.brand === activeBrand;
    const matchSearch =
      search === "" ||
      p.model.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase());
    return matchBrand && matchSearch;
  });

  return (
    <section id="models" className="relative py-24 px-6 bg-[oklch(0.12_0.015_240)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.75_0.15_220_/_0.1)] border border-[oklch(0.75_0.15_220_/_0.2)] mb-6">
            <Smartphone className="w-4 h-4 text-[#4a90d9]" />
            <span className="text-sm font-medium text-[#4a90d9]">Phone Model Guide</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Does Your Phone Fit?
          </h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            We print custom covers for a wide range of iPhone and Samsung models.
            Find yours below — if you don&apos;t see it, just ask Jos on WhatsApp.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10"
        >
          {/* Brand filter pills */}
          <div className="flex gap-2 p-1 rounded-xl bg-[oklch(0.15_0.02_245_/_0.6)] border border-[oklch(0.75_0.15_220_/_0.15)]">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setActiveBrand(brand)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeBrand === brand
                    ? "bg-gradient-to-r from-[#4a90d9] to-[#9b59b6] text-white shadow-lg"
                    : "text-[#94a3b8] hover:text-white"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b]" />
            <input
              type="text"
              placeholder="Search model..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-xl bg-[oklch(0.15_0.02_245_/_0.6)] border border-[oklch(0.75_0.15_220_/_0.15)] text-white placeholder-[#64748b] text-sm focus:outline-none focus:border-[#4a90d9] w-48 transition-all"
            />
          </div>
        </motion.div>

        {/* Models count */}
        <p className="text-center text-[#64748b] text-sm mb-8">
          Showing {filtered.length} of {phoneModels.length} supported models
        </p>

        {/* Models Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filtered.map((phone, index) => (
            <motion.div
              key={`${phone.brand}-${phone.model}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              className="group relative p-4 rounded-2xl bg-[oklch(0.15_0.02_245_/_0.6)] border border-[oklch(0.75_0.15_220_/_0.1)] hover:border-[#4a90d9]/40 transition-all duration-200 hover:-translate-y-1"
            >
              {/* Phone icon / visual */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="relative flex items-center justify-center rounded-xl border-2 transition-all duration-200 group-hover:border-[#4a90d9]/60"
                  style={{
                    width: Math.max(28, phone.width / 5),
                    height: Math.max(40, phone.height / 5),
                    backgroundColor: "oklch(0.2_0.02_250)",
                    borderColor: "oklch(0.75_0.15_220_/_0.2)",
                  }}
                >
                  <div className="w-1 h-1 rounded-full bg-[#4a90d9]/60" />
                </div>

                <div className="text-center">
                  <p className="text-white font-semibold text-xs leading-tight">
                    {phone.brand}
                  </p>
                  <p className="text-[#94a3b8] text-xs leading-tight">{phone.model}</p>
                  <p className="text-[#64748b] text-[10px] mt-1">
                    {phone.width}×{phone.height}mm
                  </p>
                </div>

                {/* Checkmark */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle className="w-3.5 h-3.5 text-[#2ecc71]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-[#64748b] text-sm mb-4">
            Don&apos;t see your phone? Jos can check if a cover is available.
          </p>
          <a
            href="https://wa.me/27813021320"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-xl transition-all duration-200 text-sm"
          >
            <Smartphone className="w-4 h-4" />
            Ask Jos on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
