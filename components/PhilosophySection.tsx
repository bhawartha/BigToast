"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

const STATS = [
  { value: "5+", label: "Years in Content & Storytelling" },
  { value: "10+", label: "Brands Worked With" },
  { value: "4", label: "Service Verticals" },
  { value: "India & Global", label: "Client & Distribution Reach" },
];

export default function PhilosophySection() {
  return (
    <section className="py-28 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Atmospheric Visual */}
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
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop"
                  alt="Big Toast Company Storytelling Production"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-400 block mb-1">
                    Intentional Creation
                  </span>
                  <p className="text-white font-serif italic text-lg leading-snug">
                    "Great content isn't just output — it's a compounding system."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Stats */}
          <div className="lg:col-span-6 flex flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
              We don't start with content.{" "}
              <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                We start with the story.
              </span>
            </motion.h2>

            <div className="flex flex-col gap-4 text-zinc-300 text-base md:text-lg leading-relaxed">
              <p>
                At Big Toast Company, we believe great content isn't just output — it's a system.
              </p>
              <p>
                Most founders and brands have the knowledge, the expertise and the experiences. The problem is nobody sees it.
              </p>
              <p>
                We combine human storytelling with AI-powered execution to build content and distribution systems that compound over time — not just posts that disappear in 24 hours.
              </p>
              <p className="text-white font-semibold text-lg pt-1">
                Story first. Always.
              </p>
            </div>

            {/* Grid of Real Stats */}
            <div className="grid grid-cols-2 gap-5 w-full pt-4">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                  className="glass-card p-5 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-colors"
                >
                  <span className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-zinc-200 via-sky-300 to-cyan-300 bg-clip-text text-transparent block">
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
              className="pt-2"
            >
              <PrimaryButton text="Explore What We Do" href="/service" showArrow={true} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
