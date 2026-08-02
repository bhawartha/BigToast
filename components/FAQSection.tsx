"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "What types of video editing does BigToast specialize in?",
    answer: "BigToast specializes in short-form reels & TikToks, long-form YouTube and brand films, podcast audio and video editing, and AI-generated video content. We also build websites, web apps, and mobile apps for creators and businesses.",
  },
  {
    question: "How quickly can you deliver edited reels or short-form content?",
    answer: "Standard reels and short-form content are typically delivered within 2 - 4 business days. Turnaround can be expedited for urgent projects. Long-form videos and brand films take 1 - 2 weeks depending on complexity.",
  },
  {
    question: "What AI video tools do you use for content generation?",
    answer: "We use industry-leading tools including Runway ML for video generation, HeyGen for AI avatars and talking head videos, ElevenLabs for voiceover synthesis, Kling AI, and Pika Labs for text-to-video workflows — delivering AI content at speed and scale.",
  },
  {
    question: "Do you provide raw footage editing or do we need a full production package?",
    answer: "We work with your raw footage and handle everything from there. You simply deliver the footage (or recordings), and we take care of the full post-production — editing, color grading, sound design, graphics, and final export.",
  },
  {
    question: "What is your pricing model for video editing and web development?",
    answer: "We offer flexible pricing: per-video packages for content creators, monthly retainer packages for brands needing ongoing content, and project-based pricing for websites and apps. Contact us for a custom quote within 24 hours.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-28 relative bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-4"
          >
            Got Questions?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-normal leading-tight text-white"
          >
            Frequently Asked{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Questions</span>
          </motion.h2>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-2xl overflow-hidden border border-zinc-800"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors hover:bg-zinc-800/50 touch-manipulation"
                >
                  <span className="text-lg md:text-xl font-bold text-white font-sans">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                      isOpen
                        ? "bg-zinc-800 border-zinc-500 text-white rotate-180"
                        : "border-zinc-700 text-zinc-400"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-2 text-zinc-400 text-sm md:text-base leading-relaxed border-t border-zinc-800">
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
