"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TeamSection from "@/components/TeamSection";
import CTABanner from "@/components/CTABanner";
import PrimaryButton from "@/components/PrimaryButton";

const VALUES = [
  {
    title: "Cinematic Precision",
    description: "Every cut, transition, and colour grade is intentional — crafted to evoke emotion and keep viewers watching till the final frame.",
  },
  {
    title: "AI-Accelerated Production",
    description: "We integrate AI video tools — Runway ML, HeyGen, ElevenLabs — to deliver broadcast-quality content at creator-friendly speed.",
  },
  {
    title: "Platform-First Thinking",
    description: "We don't just edit — we optimise for algorithm performance across Instagram, TikTok, YouTube, and beyond.",
  },
  {
    title: "Fast Turnaround",
    description: "Reels delivered in 2 - 4 days, long-form in 1 - 2 weeks. Our sprint-based workflow keeps you consistent without the wait.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-36 pb-20">
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-6"
        >
          About BigToast
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-sans font-normal leading-tight text-white mb-8 max-w-4xl"
        >
          We Are a Premier Video Editing &amp; Media Production Studio Driven by{" "}
          <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Creativity &amp; Precision</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-paragraph text-lg md:text-xl max-w-3xl leading-relaxed mb-10"
        >
          Founded on the belief that great video is the most powerful brand asset of our time, BigToast combines cinematic editing, AI-powered production, and strategic content thinking to help brands and creators dominate digital platforms.
        </motion.p>
      </section>

      {/* Main Image Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden glass-card p-2">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              alt="BigToast Studio Environment"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-white leading-tight">
              Where Storytelling Meets Post-Production Excellence
            </h2>
            <p className="text-paragraph text-base leading-relaxed">
              Our team of editors, motion graphic artists, sound designers, and AI specialists collaborate to transform raw footage into scroll-stopping, share-worthy content — every single time.
            </p>
            <PrimaryButton text="Work With Us" href="/contact-us" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#131317]/50 border-t border-b border-white/10 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-paragraph">The principles guiding every client project and frame we edit.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, idx) => (
              <div key={val.title} className="glass-card p-6 rounded-2xl border border-white/10">
                <span className="text-2xl font-extrabold text-sky-400 mb-3 block">0{idx + 1}</span>
                <h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
                <p className="text-paragraph text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
      <CTABanner />
    </div>
  );
}
