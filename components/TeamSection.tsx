"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Compass, Code2, Sparkles, TrendingUp } from "lucide-react";

const STRATEGY_PILLARS = [
  {
    step: "01",
    title: "Story-Driven Creative Direction",
    category: "Concept & Strategy",
    description: "Every great video starts with a strong concept. We craft compelling narratives and shot plans that emotionally connect with your target audience from frame one.",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "02",
    title: "Cinematic Edit & Post-Production",
    category: "Editing & Colour",
    description: "Precision cut editing, broadcast-grade colour grading, motion graphics, and immersive sound design that elevate raw footage into a cinematic experience.",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "03",
    title: "AI-Enhanced Video & Automation",
    category: "AI & Efficiency",
    description: "Integrating Runway ML, HeyGen, and ElevenLabs to automate captions, generate AI avatars, synthesize voiceovers, and dramatically speed up production timelines.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "04",
    title: "Multi-Platform Distribution",
    category: "Growth & Reach",
    description: "Optimising and reformatting every deliverable for Instagram, TikTok, YouTube, and LinkedIn — with analytics-driven feedback loops to maximise reach and ROI.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TeamSection() {
  return (
    <section className="py-28 relative bg-transparent border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-4"
          >
            Our Success Strategy
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-normal leading-tight text-white"
          >
            The Four Pillars of Our{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              Production Workflow
            </span>
          </motion.h2>
        </div>

        {/* Strategy Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STRATEGY_PILLARS.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card rounded-3xl p-5 flex flex-col group hover:border-zinc-500/80 transition-all border border-zinc-800"
              >
                {/* Visual Image Banner with Step Badge */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  
                  {/* Step Number Pill */}
                  <div className="absolute top-3 left-3 bg-zinc-900/90 backdrop-blur-md border border-zinc-700 px-3 py-1 rounded-full text-xs font-bold text-sky-400">
                    Pillar {pillar.step}
                  </div>

                  {/* Icon Floating Badge */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-zinc-900/90 border border-zinc-700 flex items-center justify-center text-sky-300 backdrop-blur-md">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-400 block mb-1">
                      {pillar.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-zinc-100 transition-colors mb-2 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
