"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Compass, Code2, Sparkles, TrendingUp } from "lucide-react";

const STRATEGY_PILLARS = [
  {
    step: "01",
    title: "Finding the Story Within",
    category: "EXTRACTION",
    description:
      "We uncover your experiences, expertise, ideas, and beliefs to find the stories that make your perspective unique.",
    icon: Compass,
    image: "/images/pillar_creative_direction.jpg",
  },
  {
    step: "02",
    title: "Defining What You Stand For",
    category: "POSITIONING",
    description:
      "We clarify what you should be known for, who you want to reach, and what makes your voice different.",
    icon: Code2,
    image: "/images/pillar_video_editing.jpg",
  },
  {
    step: "03",
    title: "Turning Ideas Into Stories",
    category: "STORYTELLING",
    description:
      "We transform your insights into compelling narratives, content concepts, hooks, and scripts that connect with your audience.",
    icon: Sparkles,
    image: "/images/pillar_ai_workflow.jpg",
  },
  {
    step: "04",
    title: "Bringing Your Stories to Life",
    category: "CONTENT CREATION",
    description:
      "We turn strategy and storytelling into engaging videos and creative assets, ready for you to publish across your platforms and build a recognizable, trusted brand.",
    icon: TrendingUp,
    image: "/images/pillar_content_distribution.jpg",
  },
];

export interface StrategyPillar {
  step: string;
  title: string;
  category: string;
  description: string;
  icon: any;
  image: string;
}

interface TeamSectionProps {
  badge?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  pillars?: StrategyPillar[];
}

export default function TeamSection({
  badge = "OUR CREATIVE APPROACH",
  headingPrefix = "The Four Pillars of ",
  headingHighlight = "Our Creative Process",
  pillars = STRATEGY_PILLARS,
}: TeamSectionProps = {}) {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative bg-transparent border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-6 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3"
          >
            {badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-sans font-normal leading-tight text-white"
          >
            {headingPrefix}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              {headingHighlight}
            </span>
          </motion.h2>
        </div>

        {/* Strategy Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card rounded-2xl lg:rounded-3xl p-4 flex flex-col justify-between group hover:border-zinc-500/80 transition-all border border-zinc-800 shadow-[0_12px_40px_rgba(0,0,0,0.4)] h-full"
              >
                <div>
                  {/* Visual Image Banner with Step Badge */}
                  <div className="relative aspect-[16/10] max-h-[160px] rounded-xl overflow-hidden mb-3.5">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                    {/* Step Number Pill */}
                    <div className="absolute top-2.5 left-2.5 bg-zinc-900/90 backdrop-blur-md border border-zinc-700 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-sky-400">
                      Pillar {pillar.step}
                    </div>

                    {/* Icon Floating Badge */}
                    <div className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-lg bg-zinc-900/90 border border-zinc-700 flex items-center justify-center text-sky-300 backdrop-blur-md">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-sky-400 block mb-1">
                    {pillar.category}
                  </span>
                  <h3 className="text-base lg:text-lg font-bold text-white group-hover:text-zinc-100 transition-colors mb-1.5 leading-snug line-clamp-2">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-4">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
