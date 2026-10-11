"use client";

import { motion } from "framer-motion";
import BlogSection from "@/components/BlogSection";
import CTABanner from "@/components/CTABanner";

export default function BlogPage() {
  return (
    <div className="pb-16">
      {/* ── SECTION 1: 1-SCREEN HERO & FEATURED INSIGHTS ── */}
      <section className="min-h-[calc(100vh/0.9)] lg:h-[calc(100vh/0.9)] flex flex-col justify-center pt-20 pb-6 max-w-7xl mx-auto px-6 w-full">
        {/* Centered Header */}
        <div className="text-center flex flex-col items-center mb-6 lg:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3"
          >
            Insights &amp; Articles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-[46px] font-sans font-normal leading-tight text-white max-w-4xl"
          >
            Perspectives on Design Architecture &amp;{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              AI Innovation
            </span>
          </motion.h1>
        </div>

        {/* 3 Featured Blog Cards (Screen 1) */}
        <div className="w-full">
          <BlogSection hideHeader={true} limit={3} />
        </div>
      </section>

      {/* ── SECTION 2: MORE ARTICLES & ARCHIVE ── */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16 border-t border-zinc-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-[10px] font-semibold uppercase tracking-wider text-zinc-300 mb-2">
              All Publications
            </div>
            <h2 className="text-2xl md:text-3xl font-sans font-normal text-white">
              More Insights &amp; Perspectives
            </h2>
          </div>
          <p className="text-xs md:text-sm text-zinc-400 max-w-md">
            Explore deep dives into brand storytelling, modern video editing craft, and AI creative workflows.
          </p>
        </div>

        <BlogSection hideHeader={true} offset={3} />
      </section>

      <CTABanner />
    </div>
  );
}
