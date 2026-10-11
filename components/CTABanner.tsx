"use client";

import { motion } from "framer-motion";
import PrimaryButton from "./PrimaryButton";

interface CTABannerProps {
  badge?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  badge = "Start Your Project Today",
  headingPrefix = "Have a Story ",
  headingHighlight = "Worth Sharing?",
  description = "Let's turn your ideas, footage, and conversations into stories people want to watch. Start a conversation with Big Toast today.",
  buttonText = "Start a Conversation",
  buttonHref = "/contact-us",
}: CTABannerProps = {}) {
  return (
    <section className="min-h-screen flex flex-col justify-center py-16 relative overflow-hidden bg-transparent border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="relative glass-card-charcoal rounded-3xl p-8 md:p-14 text-center overflow-hidden border border-zinc-700">
          {/* Ambient Charcoal/Silver Orbs */}
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-zinc-700/20 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-zinc-600/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-5">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-600 text-xs font-semibold uppercase tracking-wider text-zinc-300"
            >
              {badge}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-sans font-normal leading-tight text-white"
            >
              {headingPrefix}
              <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                {headingHighlight}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-sm md:text-base max-w-xl font-normal leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-2"
            >
              <PrimaryButton text={buttonText} href={buttonHref} showArrow={true} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
