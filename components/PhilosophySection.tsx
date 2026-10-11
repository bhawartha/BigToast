"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

const STATS = [
  { value: "01", label: "Finding the Core Idea" },
  { value: "02", label: "Shaping the Narrative" },
  { value: "03", label: "Keeping People Watching" },
  { value: "04", label: "Reaching the Right Audience" },
];

export default function PhilosophySection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 lg:py-14 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          {/* Left Column: Cards & Image Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden glass-card p-3.5 border border-zinc-800 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[4/3] max-h-[420px] rounded-xl lg:rounded-2xl overflow-hidden">
                <Image
                  src="/images/philosophy.jpg"
                  alt="BigToast Cinematic Storytelling Studio Suite"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Stats */}
          <div className="lg:col-span-6 flex flex-col items-start gap-4 lg:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300"
            >
              Our Philosophy
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-[40px] font-sans font-normal leading-[1.15] text-white"
            >
              We Create Stories That{" "}
              <br className="hidden sm:inline" />
              <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Captivate & Connect</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-xl font-normal"
            >
              At Big Toast, we believe great content starts with a great story. Through thoughtful storytelling, cinematic editing, and creative direction, we help founders and brands turn their ideas into content people want to watch, remember, and share.
            </motion.p>

            {/* Grid of Stats */}
            <div className="grid grid-cols-2 gap-4 w-full pt-1">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 + 0.2 }}
                  className="glass-card p-4 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all"
                >
                  <span className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent block">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm text-zinc-400 mt-1 block">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="pt-1.5"
            >
              <PrimaryButton text="Discover Our Approach" href="/about-us" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
