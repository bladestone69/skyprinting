"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Smartphone, Search, CheckCircle } from "lucide-react";

const phoneModels = [
  // Page 1: iPhone 16 / 15 series
  { brand: "iPhone", model: "16 Pro Max", width: 80, height: 165, image: "/images/covers/cover-p1-i1.png" },
  { brand: "iPhone", model: "16 Pro", width: 75, height: 152, image: "/images/covers/cover-p1-i2.png" },
  { brand: "iPhone", model: "16", width: 75, height: 150, image: "/images/covers/cover-p1-i3.png" },
  { brand: "iPhone", model: "15 Pro Max", width: 82, height: 163, image: "/images/covers/cover-p1-i8.png" },
  { brand: "iPhone", model: "15 Pro", width: 75, height: 150, image: "/images/covers/cover-p1-i9.png" },
  { brand: "iPhone", model: "15 Pro Plus", width: 82, height: 163, image: "/images/covers/cover-p1-i10.png" },
  { brand: "iPhone", model: "15", width: 76, height: 150, image: "/images/covers/cover-p1-i5.png" },
  // Page 2: iPhone 14 / 15 series continued
  { brand: "iPhone", model: "14 Pro Max", width: 83, height: 162, image: "/images/covers/cover-p2-i12.png" },
  { brand: "iPhone", model: "14 Plus", width: 83, height: 162, image: "/images/covers/cover-p2-i13.png" },
  { brand: "iPhone", model: "14 Pro", width: 75, height: 150, image: "/images/covers/cover-p2-i15.png" },
  { brand: "iPhone", model: "14", width: 75, height: 150, image: "/images/covers/cover-p2-i17.png" },
  // Page 3: iPhone 13 / 12 + Samsung S25
  { brand: "iPhone", model: "13 Pro Max", width: 75, height: 150, image: "/images/covers/cover-p3-i24.png" },
  { brand: "iPhone", model: "13 Pro", width: 75, height: 150, image: "/images/covers/cover-p3-i26.png" },
  { brand: "iPhone", model: "13", width: 75, height: 150, image: "/images/covers/cover-p3-i28.png" },
  { brand: "iPhone", model: "12 Pro Max", width: 83, height: 163, image: "/images/covers/cover-p3-i30.png" },
  { brand: "iPhone", model: "12 / 12 Pro", width: 75, height: 150, image: "/images/covers/cover-p3-i32.png" },
  { brand: "Samsung", model: "S25 Ultra", width: 80, height: 165, image: "/images/covers/cover-p3-i34.png" },
  // Page 4: Samsung S24 series
  { brand: "Samsung", model: "S24 Ultra", width: 80, height: 164, image: "/images/covers/cover-p4-i40.png" },
  { brand: "Samsung", model: "S24+", width: 79, height: 160, image: "/images/covers/cover-p4-i36.png" },
  { brand: "Samsung", model: "S24", width: 73, height: 150, image: "/images/covers/cover-p4-i42.png" },
  { brand: "Samsung", model: "S23 Ultra", width: 80, height: 165, image: "/images/covers/cover-p4-i46.png" },
  // Page 5: Samsung S23+ / A series
  { brand: "Samsung", model: "S23+", width: 78, height: 158, image: "/images/covers/cover-p5-i54.png" },
  { brand: "Samsung", model: "S23", width: 72, height: 142, image: "/images/covers/cover-p5-i52.png" },
  { brand: "Samsung", model: "A25 5G", width: 80, height: 162, image: "/images/covers/cover-p5-i49.png" },
  { brand: "Samsung", model: "A55 5G", width: 80, height: 162, image: "/images/covers/cover-p5-i50.png" },
  { brand: "Samsung", model: "A35 5G", width: 80, height: 162, image: "/images/covers/cover-p5-i56.png" },
];

const brands = ["All", "iPhone", "Samsung"];

// Fallback placeholder gradient for missing images
const fallbackGradients = [
  "from-[#4a90d9]/20 to-[#9b59b6]/20",
  "from-[#2ecc71]/20 to-[#4a90d9]/20",
  "from-[#9b59b6]/20 to-[#f39c12]/20",
  "from-[#e74c3c]/20 to-[#9b59b6]/20",
];

function ModelCard({ phone, index }: { phone: typeof phoneModels[0]; index: number }) {
  const [imgError, setImgError] = useState(false);
  const gradient = fallbackGradients[index % fallbackGradients.length];

  return (
    <motion.div
      key={`${phone.brand}-${phone.model}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.04 }}
      className="group relative flex flex-col items-center p-4 rounded-2xl bg-[oklch(0.15_0.02_245_/_0.6)] border border-[oklch(0.75_0.15_220_/_0.1)] hover:border-[#4a90d9]/50 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#4a90d9]/10"
    >
      {/* Cover image */}
      <div className="relative w-full aspect-[3/4] mb-3 rounded-xl overflow-hidden bg-[oklch(0.12_0.015_240)] flex items-center justify-center">
        {!imgError ? (
          <img
            src={phone.image}
            alt={`${phone.brand} ${phone.model} printed cover`}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradient} border border-[oklch(0.75_0.15_220_/_0.1)]`}>
            <Smartphone className="w-12 h-12 text-white/20" />
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        
        {/* Dimensions badge */}
        <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-sm border border-white/10">
          <span className="text-[10px] text-white/80 font-mono">
            {phone.width}×{phone.height}mm
          </span>
        </div>
        
        {/* Checkmark */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-6 h-6 rounded-full bg-[#2ecc71] flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Model name */}
      <div className="text-center w-full">
        <p className="text-white font-semibold text-sm">{phone.brand}</p>
        <p className="text-[#94a3b8] text-sm">{phone.model}</p>
      </div>
    </motion.div>
  );
}

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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.12_0.015_240)] via-[oklch(0.15_0.02_245)] to-[oklch(0.12_0.015_240)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.75_0.15_220_/_0.1)] border border-[oklch(0.75_0.15_220_/_0.2)] mb-6">
            <Smartphone className="w-4 h-4 text-[#9b59b6]" />
            <span className="text-sm font-medium text-[#9b59b6]">Cover Gallery</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Your Cover Looks Like
          </h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            Real sublimation-ready phone covers from our template catalog.
            Find your phone — Jos prints your design on the real thing.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10"
        >
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

        <p className="text-center text-[#64748b] text-sm mb-8">
          Showing {filtered.length} of {phoneModels.length} supported models
          {filtered.length === 0 && " — no match found"}
        </p>

        {/* Models Grid with Images */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((phone, index) => (
              <ModelCard key={`${phone.brand}-${phone.model}`} phone={phone} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <Smartphone className="w-16 h-16 text-[#64748b] mb-4" />
            <p className="text-[#94a3b8] text-lg mb-2">No models match your search</p>
            <p className="text-[#64748b] text-sm">Try a different search or browse all models</p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
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
