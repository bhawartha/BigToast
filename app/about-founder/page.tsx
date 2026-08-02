"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, Sparkles, Target, Compass, Linkedin, Twitter, Mail } from "lucide-react";
import PrimaryButton from "@/components/PrimaryButton";
import CTABanner from "@/components/CTABanner";

const FOUNDER_MILESTONES = [
  {
    year: "2018",
    title: "Founded First Design Collective",
    description: "Pioneered human-centric UI/UX systems for high-growth tech startups in San Francisco.",
  },
  {
    year: "2021",
    title: "Scaled 100+ Enterprise Products",
    description: "Led digital transformation and brand repositioning for Fortune 500 partners and AI startups.",
  },
  {
    year: "2024",
    title: "Launched BigToast Studio",
    description: "Unified brand architecture, full-stack Next.js engineering, and predictive AI into a premier design powerhouse.",
  },
  {
    year: "2026",
    title: "Global AI & Design Leadership",
    description: "Driving the next wave of generative AI user experiences and intelligent brand systems worldwide.",
  },
];

const FOUNDER_PRINCIPLES = [
  {
    title: "Intentionality Over Noise",
    description: "Every pixel, layout choice, and micro-interaction must serve a clear business purpose—never filler, always impact.",
  },
  {
    title: "Human Touch Meets AI Intelligence",
    description: "Technology should amplify human intuition and storytelling, creating deeply emotional connections with users.",
  },
  {
    title: "Velocity Through Clarity",
    description: "Speed without strategy leads to debt. Clear alignment upfront enables frictionless execution and market dominance.",
  },
];

export default function AboutFounderPage() {
  return (
    <div className="pt-36 pb-20">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Founder Bio */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              Leadership & Vision
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-normal leading-[1.08] text-white"
            >
              Meet <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Marcus Leclerc</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              Founder & CEO of BigToast. Marcus is a visionary strategist, software architect, and creative director with over 12 years of experience building category-defining digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 pt-2"
            >
              <PrimaryButton text="Connect With Marcus" href="/contact-us" />
              
              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-500 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-11 h-11 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-500 transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Portrait Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card p-3 border border-zinc-800">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/founder.jpg"
                  alt="Founder & CEO of BigToast"
                  fill
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Story & Letter */}
      <section className="py-24 bg-zinc-900/40 border-t border-b border-zinc-800/80 mb-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest block mb-2">
              The Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-normal text-white">
              A Letter From the <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Founder</span>
            </h2>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-14 border border-zinc-800 flex flex-col gap-6 text-zinc-300 text-base md:text-lg leading-relaxed">
            <p>
              When I started BigToast, the digital landscape was cluttered with cookie-cutter templates and uninspired visual noise. Companies were spending months building products that felt generic and disconnected from their core mission.
            </p>
            <p>
              My goal was simple: create an elite design and engineering studio that merges strategic intent with cutting-edge visual craft. By uniting brand strategy, Next.js web engineering, and custom AI integration, we empower ambitious founders to turn vision into scalable market leadership.
            </p>
            <p>
              Every project we take on is backed by my personal commitment to quality, velocity, and clarity. Thank you for trusting us to shape your digital future.
            </p>
            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-white block text-lg">Marcus Leclerc</span>
                <span className="text-xs text-zinc-400">Founder & CEO, BigToast</span>
              </div>
              <span className="font-serif italic text-2xl text-sky-300 font-normal">Marcus L.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-7xl mx-auto px-6 mb-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest block mb-2">
            Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-normal text-white mb-4">
            Founder's Guiding <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Principles</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FOUNDER_PRINCIPLES.map((prin, idx) => (
            <motion.div
              key={prin.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold text-sky-400 mb-4 block">0{idx + 1}</span>
                <h3 className="text-xl font-bold text-white mb-3">{prin.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{prin.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Career Milestones Timeline */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest block mb-2">
            Track Record
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-normal text-white mb-4">
            Key <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Milestones</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUNDER_MILESTONES.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-zinc-800"
            >
              <span className="text-sm font-bold text-sky-400 bg-sky-950/60 border border-sky-500/30 px-3 py-1 rounded-full inline-block mb-4">
                {item.year}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
