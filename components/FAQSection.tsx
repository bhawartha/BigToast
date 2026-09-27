"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

const FAQS = [
  {
    question: "Do you work as a video editing agency?",
    answer:
      "No. Editing is one of our capabilities. Our work starts much earlier — with positioning, ideas, stories and strategy — and extends into production and distribution.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Founders, coaches, consultants, brands, podcasts and companies who have something worth saying and want a system to say it consistently.",
  },
  {
    question: "Do you use AI?",
    answer:
      "Yes — where it genuinely improves research, ideation, production, repurposing or scale. AI is a tool inside the system. Not the reason the system exists.",
  },
  {
    question: "Where are you based?",
    answer:
      "Delhi, India. We work with clients remotely across India and internationally.",
  },
  {
    question: "Do you guarantee viral content?",
    answer:
      "No. Nobody honestly can. We control the strategy, story, creative, production, distribution and learning process. The audience decides what travels.",
  },
  {
    question: "How do we get started?",
    answer:
      "Hit the button below, tell us about your project and we'll set up a call to see if we're the right fit.",
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
            Clarity & Transparency
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-normal leading-tight text-white"
          >
            Frequently Asked{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
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
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="glass-card rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors hover:bg-zinc-800/40 touch-manipulation cursor-pointer"
                >
                  <span className="text-base md:text-xl font-bold text-white font-sans">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${
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
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-2 text-zinc-300 text-sm md:text-base leading-relaxed border-t border-zinc-800/80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <PrimaryButton text="Have a Question? Start a Conversation" href="/contact-us" showArrow={true} />
        </div>
      </div>
    </section>
  );
}
