"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative glass-card-charcoal rounded-3xl p-10 md:p-20 text-center overflow-hidden border border-zinc-700">
          {/* Ambient Charcoal/Silver Orbs */}
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-zinc-700/20 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-sky-950/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-600 text-xs font-semibold uppercase tracking-wider text-zinc-300"
            >
              Start a Conversation
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-sans font-normal leading-tight text-white"
            >
              You have the story. We can help you build{" "}
              <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                what happens next.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-300 text-base md:text-lg max-w-2xl font-normal leading-relaxed"
            >
              Whether you're building a company, a personal brand, a product or a movement — let's find the story worth telling and build the system that helps it travel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <PrimaryButton text="Start a Conversation" href="/contact-us" showArrow={true} />

              <a
                href="mailto:hello@bigtoastcompany.com"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white text-sm font-medium transition-all"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>hello@bigtoastcompany.com</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
