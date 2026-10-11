"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "What types of video editing does BigToast specialize in?",
    answer: "Big Toast specializes in short-form Reels, TikToks, YouTube Shorts, long-form videos, brand storytelling, and podcast editing. We focus on shaping footage into compelling stories through thoughtful structure, pacing, and editing.",
  },
  {
    question: "How quickly can you deliver edited reels or short-form content?",
    answer: "Turnaround depends on the footage, project scope, and editing requirements. Once we understand your needs, we'll discuss a realistic timeline before starting the work.",
  },
  {
    question: "What AI video tools do you use for content generation?",
    answer: "We use AI-assisted creative workflows where they add value, including voice, avatar, and generative content tools. The choice of tools depends on the creative brief and the needs of each project.",
  },
  {
    question: "Do you provide raw footage editing or do we need a full production package?",
    answer: "You can bring your existing footage, recordings, or ideas. We shape the strongest story through editing and creative direction. The exact scope depends on your project and content needs.",
  },
  {
    question: "What is your pricing model for video editing and content production?",
    answer: "Pricing depends on the project scope, content format, editing requirements, and ongoing production needs. Contact us with your requirements, and we'll discuss a suitable approach.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative bg-transparent border-t border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-5 md:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2.5"
          >
            Got Questions?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-sans font-normal leading-tight text-white"
          >
            Frequently Asked{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
        </div>

        {/* Accordion Items */}
        <div className="space-y-2.5 w-full">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="glass-card rounded-xl lg:rounded-2xl overflow-hidden border border-zinc-800 transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 py-3.5 text-left flex items-center justify-between gap-4 transition-colors hover:bg-zinc-800/40 touch-manipulation cursor-pointer"
                >
                  <span className="text-sm md:text-base font-bold text-white font-sans">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all shrink-0 ${
                      isOpen
                        ? "bg-zinc-800 border-zinc-500 text-white rotate-180"
                        : "border-zinc-700 text-zinc-400"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-4 pt-1.5 text-zinc-400 text-xs md:text-sm leading-relaxed border-t border-zinc-800/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
