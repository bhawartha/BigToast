"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Zap } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

const CASE_STUDIES = [
  {
    title: "How FitFuel's Reels Hit 12M Views in 60 Days",
    metric: "12M+",
    metricLabel: "Organic Reel Views",
    category: "Short-Form Video",
    icon: TrendingUp,
    summary: "A complete reel strategy overhaul with precision editing, trending audio sync, and dynamic motion overlays that turned a dormant account into a viral content engine.",
  },
  {
    title: "Elevate Podcast: From Amateur Audio to 50K Subscribers",
    metric: "50K+",
    metricLabel: "Podcast Subscribers",
    category: "Podcast Production",
    icon: ShieldCheck,
    summary: "Full audio post-production, branded audiograms, and platform distribution strategy that catapulted a startup podcast into the top 5% of its category.",
  },
  {
    title: "NovaBrand's AI Video Campaign: 3.8x ROI",
    metric: "3.8x",
    metricLabel: "Campaign Return on Investment",
    category: "AI Video Generation",
    icon: Zap,
    summary: "AI-generated personalized video ads and talking-head content produced at 10x speed, driving a massive boost in paid campaign performance and brand recall.",
  },
];

export default function CaseStudySection() {
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
            Proven Results
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-normal leading-tight text-white"
          >
            Measurable Impact Behind{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Every Edit</span>
          </motion.h2>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="glass-card rounded-3xl p-8 flex flex-col justify-between group hover:border-zinc-600 relative overflow-hidden border border-zinc-800"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl font-extrabold text-white bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent block mb-1">
                      {study.metric}
                    </span>
                    <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                      {study.metricLabel}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zinc-200 transition-colors leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    {study.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <PrimaryButton text="Explore Project" href="/project" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
