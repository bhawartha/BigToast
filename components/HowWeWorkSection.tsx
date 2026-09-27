"use client";

import { motion } from "framer-motion";
import { Compass, Lightbulb, Film, Share2 } from "lucide-react";

export const PILLARS = [
  {
    step: "01",
    title: "Discover & Position",
    category: "Foundation & Narrative",
    icon: Compass,
    description:
      "We learn the business, the founder, the audience and the ambition. Then we identify what you should actually be known for.",
  },
  {
    step: "02",
    title: "Extract & Develop",
    category: "Story Mining & Ideation",
    icon: Lightbulb,
    description:
      "We uncover the stories, experiences, ideas and insights already inside the business and turn them into narratives people want to consume.",
  },
  {
    step: "03",
    title: "Create & Produce",
    category: "Story-Led Production",
    icon: Film,
    description:
      "Storytelling-first production. Every piece of content is built to stop the scroll, hold attention and move people toward action.",
  },
  {
    step: "04",
    title: "Distribute & Learn",
    category: "Compounding System",
    icon: Share2,
    description:
      "We build a system for getting stories into the world — then study what works so the next story is sharper, stronger and more valuable.",
  },
];

export default function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="py-28 relative bg-transparent border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-4"
          >
            OUR METHODOLOGY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-normal leading-tight text-white mb-4"
          >
            The Four Pillars of{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              How We Work
            </span>
          </motion.h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl">
            A deliberate, compounding framework designed to extract authentic stories and turn them into multi-channel authority.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-3xl p-7 flex flex-col justify-between group hover:border-zinc-500/80 transition-all border border-zinc-800 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-extrabold text-sky-400 bg-zinc-900 border border-zinc-700/80 px-3 py-1 rounded-full uppercase tracking-wider">
                      PILLAR {pillar.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-sky-300 group-hover:scale-110 group-hover:bg-zinc-800 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-1">
                    {pillar.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-zinc-100 transition-colors mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-300 text-xs md:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>Phase {pillar.step} of 04</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Line Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 max-w-2xl mx-auto text-center glass-card-charcoal rounded-2xl p-6 border border-zinc-700/60"
        >
          <p className="text-sm md:text-base text-zinc-200 font-medium">
            ✦ We don't disappear after sending a content calendar. We build, watch, learn and build again.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
