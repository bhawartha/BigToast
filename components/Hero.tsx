"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import PrimaryButton from "./PrimaryButton";
import VideoModal from "./VideoModal";

export default function Hero() {
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-36 pb-20 overflow-hidden bg-gradient-to-b from-[#131317] via-[#1b1b23] to-[#131317]">
        {/* Background Grid Pattern Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-25 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px] z-0" />

        {/* Ambient Glowing Orbs - Rich Charcoal & Platinum Silver */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.35, 0.5, 0.35],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="w-[700px] h-[700px] rounded-full bg-zinc-500/25 blur-[120px] transform-gpu will-change-transform"
          />
          <motion.div
            animate={{
              scale: [1.05, 0.95, 1.05],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[550px] h-[550px] rounded-full bg-zinc-400/20 blur-[100px] -top-20 right-10 transform-gpu will-change-transform"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start gap-8">
              {/* Tag Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/80 border border-zinc-600 text-xs md:text-sm font-semibold tracking-wider uppercase text-zinc-200 shadow-md"
              >
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                STORYTELLING × DISTRIBUTION
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="text-4xl md:text-6xl lg:text-7xl font-sans font-normal leading-[1.08] tracking-tight text-white"
              >
                Turn what you know, build and believe into{" "}
                <span className="font-serif italic font-normal bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                  stories people remember.
                </span>
              </motion.h1>

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl"
              >
                Big Toast Company helps founders and brands turn ideas, expertise and experiences into stories, content and distribution systems that earn attention, build authority and create opportunities.
              </motion.p>

              {/* Action Buttons & Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col items-start gap-4 pt-2"
              >
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <PrimaryButton text="Start a Conversation" href="/contact-us" showArrow={true} />

                  <a
                    href="#how-we-work"
                    className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-600 text-white font-medium text-[15px] transition-all duration-300 group shadow-md"
                  >
                    <span>See How We Work</span>
                    <span className="text-zinc-400 group-hover:translate-y-0.5 transition-transform">↓</span>
                  </a>
                </div>

                <span className="text-xs text-zinc-400 font-medium tracking-wide pl-1">
                  ✦ Building Stories. Creating Distribution.
                </span>
              </motion.div>
            </div>

            {/* Right Graphic Metallic Abstract Element with Silver Light Stream */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center lg:justify-end relative"
            >
              {/* Vertical Platinum Silver Light Stream */}
              <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-44 h-[520px] pointer-events-none z-0">
                <div className="w-full h-full bg-gradient-to-b from-white/90 via-zinc-400/50 to-transparent blur-[35px] opacity-80" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-full bg-gradient-to-b from-white via-zinc-200/70 to-transparent blur-[15px]" />
              </div>

              {/* Smaller Graphic Container */}
              <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center z-10">
                {/* Intense Glowing Ring - Charcoal */}
                <div className="absolute inset-0 rounded-full bg-zinc-500/30 blur-[50px] animate-pulse" />

                {/* 3D Chrome Toast Hero Graphic with Fast Floating & Dynamic Rotation */}
                <motion.div
                  animate={{
                    y: [0, -22, 0],
                    rotate: [-6, 6, -6],
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    y: {
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotate: {
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    scale: {
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="relative z-10 w-full h-full"
                >
                  <Image
                    src="/hero-graphic.png"
                    alt="BigToast 3D chrome toast graphic"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-contain drop-shadow-[0_10px_40px_rgba(255,255,255,0.25)]"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showreel Video Modal */}
      <VideoModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        videoUrl="https://www.youtube.com/embed/E5WGzdnR2Gw"
      />
    </>
  );
}
