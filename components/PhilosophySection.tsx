"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

const STATS = [
  { value: "500+", label: "Videos Delivered" },
  { value: "98%", label: "Client Satisfaction Rate" },
  { value: "50M+", label: "Total Views Generated" },
  { value: "5+", label: "Years in Media Production" },
];

export default function PhilosophySection() {
  return (
    <section className="py-28 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Cards & Image Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card p-4 border border-zinc-800">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="BigToast Creative Studio Team"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Stats */}
          <div className="lg:col-span-6 flex flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300"
            >
              Our Philosophy
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-sans font-normal leading-tight text-white"
            >
              We Create Video Content That{" "}
              <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Captivates & Converts</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-400 text-base md:text-lg leading-relaxed"
            >
              At BigToast, we believe great video isn't just content — it's a growth engine. By combining cinematic editing, AI-powered production tools, and strategic storytelling, we help brands and creators dominate feeds, grow audiences, and drive real business results.
            </motion.p>

            {/* Grid of Stats */}
            <div className="grid grid-cols-2 gap-6 w-full pt-4">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                  className="glass-card p-5 rounded-2xl border border-zinc-800"
                >
                  <span className="text-3xl md:text-4xl font-bold text-white bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent block">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm text-zinc-400 mt-1 block">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4"
            >
              <PrimaryButton text="Learn More About Us" href="/about-us" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
