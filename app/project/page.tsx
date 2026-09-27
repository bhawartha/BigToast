"use client";

import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Play,
  ArrowUpRight,
  Film,
  Sparkles,
  Maximize2,
  Video,
  X,
  Mic,
  Share2,
  Wrench,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";
import PrimaryButton from "@/components/PrimaryButton";

// ─── 6 Official Client Projects From Document ───────────────────────────────

const CLIENT_PROJECTS = [
  {
    id: "scaler",
    client: "Scaler School of Business & Technology",
    category: "Content Strategy & Video Production",
    summary:
      "Content strategy and video production for one of India's leading education platforms — working across multiple content formats to build authority and reach across platforms.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    tags: ["Education", "Content Strategy", "Video Production"],
  },
  {
    id: "ruloans",
    client: "Ruloans",
    category: "Corporate Video",
    summary:
      "Corporate video production — building brand credibility through structured, story-driven video content.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    tags: ["Fintech", "Corporate Storytelling", "Brand Credibility"],
  },
  {
    id: "desirable-podcast",
    client: "Desirable Podcast — Singapore",
    category: "Podcast Production & Distribution",
    summary:
      "End-to-end podcast production and distribution system for an international podcast based in Singapore — editing, content extraction and platform distribution.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1200&auto=format&fit=crop",
    tags: ["International", "Podcast Engine", "Social Distribution"],
  },
  {
    id: "karishma-ahuja",
    client: "Dr. Karishma Ahuja",
    category: "Brand Content & Podcast",
    summary:
      "Personal brand content, podcast production and distribution strategy for a manifestation coach — building authority through consistent storytelling.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    tags: ["Personal Branding", "Podcast Production", "Authority Building"],
  },
  {
    id: "divya-jain",
    client: "Divya Jain — Safexpress",
    category: "Personal Branding & Podcast",
    summary:
      "Personal branding and podcast content for an entrepreneur — turning expertise into a consistent content presence.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    tags: ["Founder Presence", "Thought Leadership", "Content Engine"],
  },
  {
    id: "yanisa",
    client: "Yanisa Execution — AI Projects",
    category: "AI Ad Films & Founder Content",
    summary:
      "AI-driven content projects including AI ad films, short-form ads, founder personal brand content and modernised production workflows.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    tags: ["AI Storytelling", "Ad Films", "Workflow Automation"],
  },
];

// ─── Video Deliverables (Real assets in public folder) ────────────────────────

const VIDEO_DELIVERABLES = [
  {
    id: "v-01",
    category: "reels",
    title: "Why People Feel They Are Not Successful",
    subtitle: "Mindset & Growth Story",
    file: "/why people feel they are not successful.mp4",
  },
  {
    id: "v-02",
    category: "reels",
    title: "Fox RE — Canada Story",
    subtitle: "Fox RE LLP Property Narrative",
    file: "/fox 1 fin.mp4",
  },
  {
    id: "v-03",
    category: "reels",
    title: "Intelligent Decision",
    subtitle: "Strategic Executive Thought",
    file: "/Intelligent Decision.mp4",
  },
  {
    id: "v-04",
    category: "reels",
    title: "Talking to Strangers",
    subtitle: "Street Storytelling Interview Cut",
    file: "/Talking to strangers (1).mp4",
  },
  {
    id: "v-05",
    category: "reels",
    title: "Connect With Yourself",
    subtitle: "Reflective Narrative Short",
    file: "/connect-with-yourself.mp4",
  },
  {
    id: "v-06",
    category: "reels",
    title: "Rat Race",
    subtitle: "Modern Career Hustle Commentary",
    file: "/rat race.mp4",
  },
  {
    id: "v-07",
    category: "podcast",
    title: "Yanisa — Podcast & Brand Trailer",
    subtitle: "Multi-Cam Long Form & Sound Design",
    file: "/Copy of TRAILER 1 tiptop.mp4",
  },
  {
    id: "v-08",
    category: "podcast",
    title: "Event & Launch Documentary",
    subtitle: "Keynote & Corporate Film",
    file: "/Copy of event promo final.mp4",
  },
  {
    id: "v-09",
    category: "ai",
    title: "Yanisa — AI Ad Final",
    subtitle: "Synthetic Voiceover & AI Avatar Ad",
    file: "/yanisa AI ad final.mp4",
  },
  {
    id: "v-10",
    category: "ai",
    title: "AI Generative Content Film",
    subtitle: "Generative AI Visual Extensions",
    file: "/AI content film.mp4",
  },
  {
    id: "v-11",
    category: "ai",
    title: "AI Agents Visual Showcase",
    subtitle: "Futuristic Motion & AI Video",
    file: "/AI AGENTS.mp4",
  },
  {
    id: "v-12",
    category: "reels",
    title: "Brihas Story Reel",
    subtitle: "Rhythm Cut & Audio Beat Sync",
    file: "/brihas-qoutient-wc.mp4",
  },
];

// ─── Tools Stack from Document ───────────────────────────────────────────────

const TOOLS_STACK = [
  { name: "Final Cut Pro", category: "NLE Video Editing", tag: "Editing" },
  { name: "Adobe Premiere Pro", category: "Timeline & Post-Production", tag: "Editing" },
  { name: "CapCut", category: "Vertical Reel Rhythm", tag: "Short-Form" },
  { name: "ChatGPT", category: "Story & Hook Extraction", tag: "Ideation" },
  { name: "Claude", category: "Narrative & Long-Form Strategy", tag: "Strategy" },
  { name: "ElevenLabs", category: "AI Audio & Voice Synthesis", tag: "Audio" },
  { name: "Higgsfield", category: "AI Visual FX & Video", tag: "AI Video" },
  { name: "HeyGen", category: "AI Video Production & Avatars", tag: "AI Video" },
  { name: "Runway", category: "Generative AI Video", tag: "AI Video" },
  { name: "Kling", category: "AI Video Synthesis", tag: "AI Video" },
  { name: "Seedance", category: "Creative Motion & Rhythm", tag: "Motion" },
  { name: "Notion", category: "Distribution Systems & Story Bank", tag: "Distribution" },
  { name: "Canva", category: "Branded Social Assets", tag: "Graphics" },
  { name: "Adobe Photoshop", category: "Keyframes & Thumbnails", tag: "Visuals" },
];

export default function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [modalVideo, setModalVideo] = useState<{ file: string; title: string; subtitle: string } | null>(null);

  const filteredVideos =
    activeFilter === "all"
      ? VIDEO_DELIVERABLES
      : activeFilter === "clients"
      ? []
      : VIDEO_DELIVERABLES.filter((v) => v.category === activeFilter);

  return (
    <div className="pt-36 pb-20">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-6"
        >
          OUR PORTFOLIO
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-sans font-normal leading-tight text-white mb-6 max-w-4xl"
        >
          Stories that command attention.{" "}
          <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
            Systems that compound.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-300 text-lg max-w-2xl leading-relaxed"
        >
          Explore work delivered across education platforms, podcasts, executive personal brands, and AI storytelling systems.
        </motion.p>
      </section>

      {/* ── SECTION 1: 6 REAL CLIENT CASE STUDIES ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-1">
              Featured Partnerships
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Brands & Clients We've Worked With
            </h2>
          </div>
          <span className="text-xs text-zinc-400 hidden sm:block">
            6 Core Relationships
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLIENT_PROJECTS.map((client, idx) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card rounded-3xl p-6 border border-zinc-800 hover:border-zinc-600 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={client.image}
                    alt={client.client}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[11px] font-semibold text-white bg-zinc-900/90 border border-zinc-700 px-3 py-1 rounded-full">
                      {client.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {client.client}
                </h3>
                <p className="text-xs md:text-sm text-zinc-300 leading-relaxed mb-4">
                  {client.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
                {client.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote required by document */}
        <div className="mt-8 text-center bg-zinc-900/50 rounded-2xl p-4 border border-zinc-800/80">
          <p className="text-xs md:text-sm text-zinc-400">
            ✦ Work delivered across employment, collaboration and direct client relationships. Case studies available on request.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: VIDEO DELIVERABLES & MEDIA VAULT ──────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-4 border-b border-zinc-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-1">
              Media Vault
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Watch Real Cuts & Production Work
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Cuts" },
              { id: "reels", label: "Reels & Short-Form" },
              { id: "podcast", label: "Podcasts & Long-Form" },
              { id: "ai", label: "AI Ad Films" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFilter === f.id
                    ? "bg-zinc-800 text-white font-bold border border-zinc-600 shadow-sm"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              onClick={() => setModalVideo(video)}
              className="glass-card rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative aspect-[9/14] bg-zinc-950 overflow-hidden flex items-center justify-center">
                <video
                  src={video.file}
                  preload="metadata"
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                {/* Center Play Button */}
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/30 transition-all z-10">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-zinc-900/90 border border-zinc-700 flex items-center justify-center text-zinc-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-4">
                <span className="text-[10px] uppercase font-bold text-sky-400 block mb-1">
                  {video.category === "ai"
                    ? "AI Storytelling"
                    : video.category === "podcast"
                    ? "Podcast / Long-Form"
                    : "Short-Form Reel"}
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-zinc-200 transition-colors leading-snug line-clamp-1">
                  {video.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                  {video.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: TOOLS WE WORK WITH ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest block mb-2">
            Production & AI Technology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Tools We{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
          <p className="text-zinc-400 text-sm">
            Story first. Powered by industry-leading editing suites and frontier generative AI models.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {TOOLS_STACK.map((tool) => (
            <div
              key={tool.name}
              className="glass-card rounded-2xl p-5 border border-zinc-800 hover:border-zinc-600 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block mb-1">
                  {tool.tag}
                </span>
                <h3 className="text-base font-bold text-white mb-1">
                  {tool.name}
                </h3>
              </div>
              <span className="text-xs text-zinc-400 pt-2 border-t border-zinc-800/80">
                {tool.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── VIDEO PLAYER MODAL ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {modalVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <div
              className="absolute inset-0"
              onClick={() => setModalVideo(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-2xl bg-zinc-950 border border-zinc-700 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/60">
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {modalVideo.title}
                  </h3>
                  <p className="text-xs text-zinc-400">{modalVideo.subtitle}</p>
                </div>
                <button
                  onClick={() => setModalVideo(null)}
                  className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative aspect-[9/16] max-h-[75vh] mx-auto bg-black flex items-center justify-center">
                <video
                  src={modalVideo.file}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CTABanner />
    </div>
  );
}
