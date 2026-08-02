"use client";

import { motion } from "framer-motion";

const BRANDS = [
  {
    name: "Epicurus",
    logo: (
      <svg width="180" height="48" viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <rect x="2" y="8" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M11 19H23M11 24H20M11 29H23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <text x="46" y="31" fill="currentColor" fontSize="22" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">EPICURUS</text>
      </svg>
    ),
  },
  {
    name: "Euraf",
    logo: (
      <svg width="155" height="48" viewBox="0 0 155 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <circle cx="18" cy="24" r="14" stroke="currentColor" strokeWidth="3" fill="none" />
        <circle cx="26" cy="24" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <text x="48" y="31" fill="currentColor" fontSize="22" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">EURAF</text>
      </svg>
    ),
  },
  {
    name: "Foraf",
    logo: (
      <svg width="155" height="48" viewBox="0 0 155 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <path d="M6 36L20 8L34 36H6Z" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M14 27H26" stroke="currentColor" strokeWidth="2.5" />
        <text x="46" y="31" fill="currentColor" fontSize="22" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">FORAF</text>
      </svg>
    ),
  },
  {
    name: "Vortex",
    logo: (
      <svg width="165" height="48" viewBox="0 0 165 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <path d="M4 10L20 38L36 10" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 10L20 23L27 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="46" y="31" fill="currentColor" fontSize="22" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">VORTEX</text>
      </svg>
    ),
  },
  {
    name: "Nexus",
    logo: (
      <svg width="155" height="48" viewBox="0 0 155 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <path d="M6 36V12L30 36V12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="44" y="31" fill="currentColor" fontSize="22" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">NEXUS</text>
      </svg>
    ),
  },
  {
    name: "Luminary",
    logo: (
      <svg width="185" height="48" viewBox="0 0 185 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <path d="M20 8C20 16 28 24 36 24C28 24 20 32 20 40C20 32 12 24 4 24C12 24 20 16 20 8Z" fill="currentColor" />
        <text x="46" y="31" fill="currentColor" fontSize="21" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">LUMINARY</text>
      </svg>
    ),
  },
  {
    name: "Aether",
    logo: (
      <svg width="165" height="48" viewBox="0 0 165 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <path d="M20 8L34 24L20 40L6 24L20 8Z" stroke="currentColor" strokeWidth="3" fill="none" />
        <circle cx="20" cy="24" r="4" fill="currentColor" />
        <text x="46" y="31" fill="currentColor" fontSize="22" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">AETHER</text>
      </svg>
    ),
  },
  {
    name: "Pulse",
    logo: (
      <svg width="145" height="48" viewBox="0 0 145 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <path d="M4 24H12L18 12L24 36L30 18L36 30H42" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="50" y="31" fill="currentColor" fontSize="22" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">PULSE</text>
      </svg>
    ),
  },
  {
    name: "Hyperion",
    logo: (
      <svg width="185" height="48" viewBox="0 0 185 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <path d="M6 14L20 6L34 14V30L20 38L6 30V14Z" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M20 6V38M6 14L34 30M34 14L6 30" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <text x="46" y="31" fill="currentColor" fontSize="21" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">HYPERION</text>
      </svg>
    ),
  },
];

const TOOLS = [
  {
    name: "Next.js",
    logo: (
      <svg width="155" height="48" viewBox="0 0 155 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <circle cx="20" cy="24" r="14" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M14 16V32M14 16L26 32M26 16V32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="46" y="31" fill="currentColor" fontSize="21" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">NEXT.JS</text>
      </svg>
    ),
  },
  {
    name: "React",
    logo: (
      <svg width="145" height="48" viewBox="0 0 145 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <ellipse cx="20" cy="24" rx="14" ry="6" stroke="currentColor" strokeWidth="2.5" fill="none" transform="rotate(30 20 24)" />
        <ellipse cx="20" cy="24" rx="14" ry="6" stroke="currentColor" strokeWidth="2.5" fill="none" transform="rotate(90 20 24)" />
        <ellipse cx="20" cy="24" rx="14" ry="6" stroke="currentColor" strokeWidth="2.5" fill="none" transform="rotate(150 20 24)" />
        <circle cx="20" cy="24" r="3" fill="currentColor" />
        <text x="46" y="31" fill="currentColor" fontSize="22" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">REACT</text>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    logo: (
      <svg width="165" height="48" viewBox="0 0 165 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <path d="M6 22C9 14 15 14 18 18C21 22 25 24 30 20C27 28 21 28 18 24C15 20 11 18 6 22Z" fill="currentColor" />
        <text x="44" y="31" fill="currentColor" fontSize="21" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">TAILWIND</text>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    logo: (
      <svg width="185" height="48" viewBox="0 0 185 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <rect x="4" y="8" width="32" height="32" rx="6" stroke="currentColor" strokeWidth="3" fill="none" />
        <text x="11" y="30" fill="currentColor" fontSize="16" fontWeight="800" fontFamily="sans-serif">TS</text>
        <text x="46" y="31" fill="currentColor" fontSize="20" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">TYPESCRIPT</text>
      </svg>
    ),
  },
  {
    name: "OpenAI",
    logo: (
      <svg width="155" height="48" viewBox="0 0 155 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <circle cx="20" cy="24" r="12" stroke="currentColor" strokeWidth="3" strokeDasharray="4 2" fill="none" />
        <circle cx="20" cy="24" r="5" fill="currentColor" />
        <text x="46" y="31" fill="currentColor" fontSize="21" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">OPENAI</text>
      </svg>
    ),
  },
  {
    name: "Figma",
    logo: (
      <svg width="145" height="48" viewBox="0 0 145 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <circle cx="12" cy="14" r="6" fill="currentColor" />
        <circle cx="24" cy="14" r="6" fill="currentColor" opacity="0.7" />
        <circle cx="12" cy="24" r="6" fill="currentColor" opacity="0.8" />
        <circle cx="24" cy="24" r="6" fill="currentColor" />
        <circle cx="12" cy="34" r="6" fill="currentColor" opacity="0.6" />
        <text x="44" y="31" fill="currentColor" fontSize="22" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">FIGMA</text>
      </svg>
    ),
  },
  {
    name: "Webflow",
    logo: (
      <svg width="165" height="48" viewBox="0 0 165 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <path d="M6 34L14 14L22 34L30 14L34 34" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="46" y="31" fill="currentColor" fontSize="21" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">WEBFLOW</text>
      </svg>
    ),
  },
  {
    name: "Framer",
    logo: (
      <svg width="155" height="48" viewBox="0 0 155 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <path d="M6 8H30L18 20H30L6 36V20H18L6 8Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <text x="44" y="31" fill="currentColor" fontSize="22" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">FRAMER</text>
      </svg>
    ),
  },
  {
    name: "Vercel",
    logo: (
      <svg width="145" height="48" viewBox="0 0 145 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-12 md:h-14 text-zinc-300 group-hover:text-white transition-colors">
        <path d="M20 10L34 34H6L20 10Z" fill="currentColor" />
        <text x="46" y="31" fill="currentColor" fontSize="21" fontWeight="700" fontFamily="sans-serif" letterSpacing="1.5">VERCEL</text>
      </svg>
    ),
  },
];

export default function ClientMarquee() {
  // Triple arrays for seamless infinite marquee loops
  const marqueeBrands = [...BRANDS, ...BRANDS, ...BRANDS];
  const marqueeTools = [...TOOLS, ...TOOLS, ...TOOLS];

  return (
    <section className="py-28 relative border-t border-b border-zinc-800/80 overflow-hidden bg-transparent flex flex-col gap-28 md:gap-36">
      {/* Side Ambient Gradient Fade Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-20 md:w-44 bg-gradient-to-r from-[#131317] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 md:w-44 bg-gradient-to-l from-[#131317] to-transparent z-10 pointer-events-none" />

      {/* ROW 1: TRUSTED BY COMPANIES (SLIDE LEFT) */}
      <div>
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-sans font-normal tracking-tight text-white/90"
          >
            Trusted By More Than 500{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              Companies.
            </span>
          </motion.h2>
        </div>

        {/* Left-Sliding Marquee */}
        <div className="flex overflow-hidden select-none">
          <motion.div
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex gap-6 shrink-0 items-center pr-6"
          >
            {marqueeBrands.map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="w-56 md:w-64 h-28 md:h-32 shrink-0 glass-card rounded-2xl flex items-center justify-center group cursor-pointer hover:-translate-y-1.5 transition-all duration-300 border border-zinc-800/90 hover:border-zinc-500/80 hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)] p-5"
              >
                {brand.logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ROW 2: OUR PROFICIENCY IN TOOLS & TECH (SLIDE RIGHT) */}
      <div>
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-sans font-normal tracking-tight text-white/90"
          >
            Our Proficiency in{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              Tools & Tech.
            </span>
          </motion.h2>
        </div>

        {/* Right-Sliding Marquee */}
        <div className="flex overflow-hidden select-none">
          <motion.div
            animate={{ x: ["-33.333%", "0%"] }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            className="flex gap-6 shrink-0 items-center pr-6"
          >
            {marqueeTools.map((tool, idx) => (
              <div
                key={`${tool.name}-${idx}`}
                className="w-56 md:w-64 h-28 md:h-32 shrink-0 glass-card rounded-2xl flex items-center justify-center group cursor-pointer hover:-translate-y-1.5 transition-all duration-300 border border-zinc-800/90 hover:border-zinc-500/80 hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)] p-5"
              >
                {tool.logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
