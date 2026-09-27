"use client";

import { motion } from "framer-motion";

const BRANDS = [
  {
    name: "Scaler School of Business",
    subtitle: "Executive & Business Education",
    tag: "Education",
  },
  {
    name: "Scaler School of Technology",
    subtitle: "Next-Gen Tech Academy",
    tag: "EdTech",
  },
  {
    name: "Neurogum",
    subtitle: "Nootropic Energy & Focus",
    tag: "Consumer Brand",
  },
  {
    name: "Ruloans",
    subtitle: "India's Leading Financial Distributor",
    tag: "Fintech",
  },
  {
    name: "Desirable Podcast",
    subtitle: "Singapore Global Show",
    tag: "Podcast",
  },
  {
    name: "Fox RE LLP",
    subtitle: "Real Estate — Canada",
    tag: "Real Estate",
  },
  {
    name: "Dr. Karishma Ahuja",
    subtitle: "Mindset & Manifestation Coach",
    tag: "Personal Brand",
  },
  {
    name: "Divya Jain — Safexpress",
    subtitle: "Entrepreneur & Logistics Leader",
    tag: "Personal Brand",
  },
  {
    name: "Shobha Rana",
    subtitle: "Keynote Speaker & Host",
    tag: "Personal Brand",
  },
];

const TOOLS = [
  { name: "Final Cut Pro", category: "NLE Video Editing" },
  { name: "Adobe Premiere Pro", category: "Timeline Editing" },
  { name: "CapCut", category: "Short-Form Rhythm" },
  { name: "ChatGPT", category: "Story & Hooks" },
  { name: "Claude", category: "Narrative Strategy" },
  { name: "ElevenLabs", category: "AI Audio & Voice" },
  { name: "Higgsfield", category: "AI Visual FX" },
  { name: "HeyGen", category: "AI Video Production" },
  { name: "Runway", category: "Generative Video" },
  { name: "Kling", category: "AI Video Synthesis" },
  { name: "Seedance", category: "Creative Motion" },
  { name: "Notion", category: "Distribution Systems" },
  { name: "Canva", category: "Creative Layouts" },
  { name: "Adobe Photoshop", category: "Visual Assets" },
];

export default function ClientMarquee() {
  // Triple arrays for seamless infinite marquee loops
  const marqueeBrands = [...BRANDS, ...BRANDS, ...BRANDS];
  const marqueeTools = [...TOOLS, ...TOOLS, ...TOOLS];

  return (
    <section className="py-24 relative border-t border-b border-zinc-800/80 overflow-hidden bg-transparent flex flex-col gap-24 md:gap-28">
      {/* Side Ambient Gradient Fade Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-20 md:w-44 bg-gradient-to-r from-[#131317] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 md:w-44 bg-gradient-to-l from-[#131317] to-transparent z-10 pointer-events-none" />

      {/* ROW 1: BRANDS WE'VE BEEN PART OF */}
      <div>
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-4"
          >
            Track Record
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-sans font-normal tracking-tight text-white/90"
          >
            Brands We've Been{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              Part Of
            </span>
          </motion.h2>
        </div>

        {/* Left-Sliding Marquee */}
        <div className="flex overflow-hidden select-none">
          <motion.div
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              x: {
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex gap-6 shrink-0 items-center pr-6"
          >
            {marqueeBrands.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="w-72 md:w-80 h-28 md:h-32 shrink-0 glass-card rounded-2xl flex flex-col justify-center px-6 group cursor-pointer hover:-translate-y-1.5 transition-all duration-300 border border-zinc-800/90 hover:border-zinc-500/80 hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-sky-400 bg-zinc-900 border border-zinc-700 px-2.5 py-0.5 rounded-full">
                    {brand.tag}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-sky-400 transition-colors" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-zinc-100 transition-colors leading-snug line-clamp-1">
                  {brand.name}
                </h3>
                <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors line-clamp-1 mt-0.5">
                  {brand.subtitle}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Small note underneath */}
        <div className="text-center mt-6 px-6">
          <p className="text-xs md:text-sm text-zinc-400 font-normal">
            Work delivered across employment, collaboration and direct client relationships.
          </p>
        </div>
      </div>

      {/* ROW 2: TOOLS WE WORK WITH */}
      <div>
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-4"
          >
            Creative & AI Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-sans font-normal tracking-tight text-white/90"
          >
            Tools We{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              Work With
            </span>
          </motion.h2>
        </div>

        {/* Right-Sliding Marquee */}
        <div className="flex overflow-hidden select-none">
          <motion.div
            animate={{ x: ["-33.333%", "0%"] }}
            transition={{
              x: {
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex gap-5 shrink-0 items-center pr-5"
          >
            {marqueeTools.map((tool, idx) => (
              <div
                key={`${tool.name}-${idx}`}
                className="w-56 md:w-64 h-24 md:h-28 shrink-0 glass-card rounded-2xl flex flex-col justify-center px-6 group cursor-pointer hover:-translate-y-1.5 transition-all duration-300 border border-zinc-800/90 hover:border-zinc-500/80 hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
              >
                <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-1 block">
                  {tool.category}
                </span>
                <span className="text-base md:text-lg font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                  {tool.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
