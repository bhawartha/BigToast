"use client";

import { motion } from "framer-motion";
import PrimaryButton from "./PrimaryButton";

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative glass-card-charcoal rounded-3xl p-10 md:p-20 text-center overflow-hidden border border-zinc-700">
          {/* Ambient Charcoal/Silver Orbs */}
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-zinc-700/20 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-zinc-600/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-600 text-xs font-semibold uppercase tracking-wider text-zinc-300"
            >
              Start Your Project Today
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-sans font-normal leading-tight text-white"
            >
              Ready to Create Content That{" "}
              <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Goes Viral?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-base md:text-xl max-w-2xl font-normal leading-relaxed"
            >
              Let's turn your raw footage into cinematic content that stops the scroll. Connect with our video production team today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <PrimaryButton text="Get Started Now" href="/contact-us" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
