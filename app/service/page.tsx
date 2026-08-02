"use client";

import { motion } from "framer-motion";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";

export default function ServicesPage() {
  return (
    <div className="pt-36">
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-6"
        >
          Our Capabilities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-sans font-normal leading-tight text-white mb-6 max-w-4xl"
        >
          End-to-End Digital Solutions Built for{" "}
          <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Scale</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-paragraph text-lg max-w-2xl leading-relaxed"
        >
          From strategic messaging to high-performance Next.js engineering and AI workflows, explore how BigToast transforms digital presences.
        </motion.p>
      </section>

      <ServicesSection singleColumn={true} />
      <FAQSection />
      <CTABanner />
    </div>
  );
}
