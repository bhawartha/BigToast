"use client";

import { motion } from "framer-motion";
import ServicesSection from "@/components/ServicesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
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
          WHAT WE BUILD
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-sans font-normal leading-tight text-white mb-6 max-w-4xl"
        >
          Media services built around{" "}
          <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
            storytelling and distribution.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-300 text-lg max-w-2xl leading-relaxed"
        >
          We don't start with content. We start with the story. Explore our 4 dedicated media engines designed to turn ideas, expertise, and experiences into compounding attention and authority.
        </motion.p>
      </section>

      <ServicesSection singleColumn={true} />
      <HowWeWorkSection />
      <FAQSection />
      <CTABanner />
    </div>
  );
}
