"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Zap } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

const CASE_STUDIES = [
  {
    title: "Every Reel Starts With a Story",
    metric: "01",
    metricLabel: "STORY-LED EDITING",
    category: "Short-Form Video",
    icon: TrendingUp,
    summary:
      "We shape raw footage into engaging short-form content through strong hooks, thoughtful pacing, and story-driven editing.",
  },
  {
    title: "Conversations Worth Watching",
    metric: "02",
    metricLabel: "PODCAST STORYTELLING",
    category: "Podcast Production",
    icon: ShieldCheck,
    summary:
      "We turn conversations into compelling podcast episodes, memorable moments, and short-form clips built around the strongest parts of the story.",
  },
  {
    title: "Creative Ideas, Clearly Told",
    metric: "03",
    metricLabel: "CREATIVE DIRECTION",
    category: "Creative Production",
    icon: Zap,
    summary:
      "From narrative development to final edits, we shape creative ideas into focused content designed for the intended audience.",
  },
];

export default function CaseStudySection() {
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
            Proven Results
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-sans font-normal leading-tight text-white"
          >
            Meaningful Stories Behind{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              Every Edit
            </span>
          </motion.h2>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {CASE_STUDIES.map((study, idx) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card rounded-2xl lg:rounded-3xl p-5 lg:p-6 flex flex-col justify-between group hover:border-zinc-600/80 relative overflow-hidden border border-zinc-800 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-zinc-300 bg-zinc-900/90 border border-zinc-700/80 px-2.5 py-1 rounded-full">
                      {study.category}
                    </span>
                  </div>

                  <div className="mb-3.5">
                    <span className="text-3xl lg:text-4xl font-extrabold text-white bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent block mb-0.5">
                      {study.metric}
                    </span>
                    <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
                      {study.metricLabel}
                    </span>
                  </div>

                  <h3 className="text-base lg:text-lg font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors leading-snug line-clamp-2">
                    {study.title}
                  </h3>

                  <p className="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-3">
                    {study.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400 font-medium">Core Capability</span>
                  <PrimaryButton text="Explore Project" href="/project" showArrow={true} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
