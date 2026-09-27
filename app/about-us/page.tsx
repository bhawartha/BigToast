"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ClientMarquee from "@/components/ClientMarquee";
import CTABanner from "@/components/CTABanner";
import PrimaryButton from "@/components/PrimaryButton";

const STATS = [
  { value: "5+", label: "Years in Content & Storytelling" },
  { value: "10+", label: "Brands Worked With" },
  { value: "4", label: "Service Verticals" },
  { value: "Delhi & Global", label: "Remote Global Execution" },
];

const BELIEFS = [
  {
    title: "Story First. Always.",
    description:
      "We don't start with content or random formats. We start with what you know, build, and believe — finding the narrative core that connects emotionally with people.",
  },
  {
    title: "A System That Compounds",
    description:
      "Social media posts that disappear in 24 hours create burn-out. We build compounding content and distribution systems that establish lasting authority over time.",
  },
  {
    title: "Human Core, AI Leverage",
    description:
      "AI is part of our toolkit, but it isn't the story. We use human discernment for positioning and story extraction, accelerated by state-of-the-art AI for speed and scale.",
  },
  {
    title: "End-to-End Ownership",
    description:
      "We don't disappear after sending a calendar. From positioning and extraction to production, publishing, and review — we build, watch, learn, and build again.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-36 pb-20">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-6"
        >
          ABOUT BIG TOAST COMPANY
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-sans font-normal leading-tight text-white mb-8 max-w-4xl"
        >
          We don't start with content.{" "}
          <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
            We start with the story.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-300 text-lg md:text-xl max-w-3xl leading-relaxed mb-10"
        >
          Big Toast Company helps founders and brands turn ideas, expertise and experiences into stories, content and distribution systems that earn attention, build authority and create opportunities.
        </motion.p>
      </section>

      {/* Main Philosophy Visual & Context */}
      <section className="max-w-7xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden glass-card p-2 border border-zinc-800">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              alt="Big Toast Company Storytelling Room"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase font-bold tracking-widest text-sky-400 block mb-1">
                Based in Delhi, India · Working Globally
              </span>
              <p className="text-white font-medium text-base">
                Building stories and creating multi-platform distribution for international brands and visionaries.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-white leading-tight">
              Great Content Isn't Just Output — It's a System.
            </h2>
            <div className="text-zinc-300 text-sm md:text-base leading-relaxed flex flex-col gap-4">
              <p>
                Most founders and brands have the knowledge, the expertise and the experiences. The problem is nobody sees it.
              </p>
              <p>
                We combine human storytelling with AI-powered execution to build content and distribution systems that compound over time — not just posts that disappear in 24 hours.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {STATS.map((stat) => (
                <div key={stat.label} className="glass-card p-4 rounded-xl border border-zinc-800">
                  <span className="text-2xl font-bold text-white bg-gradient-to-r from-zinc-200 via-sky-300 to-cyan-300 bg-clip-text text-transparent block">
                    {stat.value}
                  </span>
                  <span className="text-xs text-zinc-400 mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <PrimaryButton text="Start a Conversation" href="/contact-us" showArrow={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-24 bg-[#131317]/50 border-t border-b border-zinc-800 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest block mb-2">
              Our Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Drives Every{" "}
              <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                System We Build
              </span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              The operational philosophy behind our storytelling and distribution frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BELIEFS.map((belief, idx) => (
              <div key={belief.title} className="glass-card p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold text-sky-400 mb-4 block uppercase tracking-wider">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{belief.title}</h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{belief.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientMarquee />
      <HowWeWorkSection />
      <CTABanner />
    </div>
  );
}
