"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film, Mic, Sparkles, Code2, Smartphone, Globe, Bot, CheckCircle2, Clock, Layers } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

export const SERVICES = [
  {
    id: "reels",
    number: "01",
    category: "Short-Form Video",
    title: "High-Impact Reels & Short-Form Content Editing",
    icon: Film,
    description:
      "We craft scroll-stopping Instagram Reels, TikTok videos, and YouTube Shorts with precision cuts, dynamic motion graphics, trending audio sync, and brand-consistent visual storytelling that drives massive engagement.",
    deliverableHighlight: "Viral-Optimized Reels & Short-Form Content Packages",
    timeline: "2 - 4 Days",
    features: [
      "Precision Cut Editing & Rhythm-Based Audio Sync",
      "Motion Graphics & Animated Text Overlays",
      "Color Grading & Visual Tone Consistency",
      "Platform-Optimized Exports (Instagram, TikTok, YouTube Shorts)",
    ],
    techStack: ["Premiere Pro", "After Effects", "CapCut Pro", "DaVinci Resolve", "Canva Pro"],
  },
  {
    id: "longform",
    number: "02",
    category: "Long-Form Video",
    title: "Cinematic Long-Form Video Production & Post-Production",
    icon: Film,
    description:
      "From documentary-style brand films to YouTube vlogs and corporate explainer videos — we handle full post-production with multi-track timeline editing, VFX, smooth transitions, and broadcast-grade audio mixing.",
    deliverableHighlight: "4K Broadcast-Ready Long-Form Video Deliverables",
    timeline: "1 - 2 Weeks",
    features: [
      "Multi-Camera Multi-Track Timeline Editing",
      "VFX, Motion Graphics & 3D Title Sequences",
      "Broadcast-Grade Color Grading (LUT & Manual)",
      "Noise Reduction, Audio Mastering & Sound Design",
    ],
    techStack: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Audition", "Cinema 4D"],
  },
  {
    id: "podcast",
    number: "03",
    category: "Podcast Production",
    title: "Professional Podcast Editing & Audiogram Creation",
    icon: Mic,
    description:
      "Complete podcast post-production including noise removal, EQ leveling, episode structuring, dynamic intro/outro music, and branded audiogram videos for social distribution — making every episode sound world-class.",
    deliverableHighlight: "Studio-Quality Podcast Episodes & Branded Audiograms",
    timeline: "3 - 5 Days",
    features: [
      "AI-Powered Noise Reduction & Voice Clarity Enhancement",
      "EQ, Compression & Broadcast Loudness Normalization",
      "Intro / Outro Music & Sound FX Integration",
      "Branded Animated Audiogram Videos for Social Media",
    ],
    techStack: ["Audition", "Descript", "Riverside.fm", "Auphonic", "Premiere Pro"],
  },
  {
    id: "ai",
    number: "04",
    category: "AI Video Generation",
    title: "AI-Generated Video Content & Automation Workflows",
    icon: Sparkles,
    description:
      "Leveraging cutting-edge AI tools to generate stunning video content, automate repetitive editing tasks, create realistic AI avatars, synthesize voiceovers, and produce personalized video at scale for modern brands.",
    deliverableHighlight: "AI-Generated Video Packages & Automated Editing Pipelines",
    timeline: "1 - 3 Days",
    features: [
      "AI Avatar & Talking Head Video Generation",
      "Text-to-Video & Image-to-Video AI Workflows",
      "Automated Subtitle & Caption Generation",
      "AI Voiceover Synthesis in Multiple Languages",
    ],
    techStack: ["Runway ML", "HeyGen", "ElevenLabs", "Kling AI", "Pika Labs"],
  },
  {
    id: "web",
    number: "05",
    category: "Website Development",
    title: "High-Converting Business Websites & Landing Pages",
    icon: Globe,
    description:
      "We design and develop blazing-fast, SEO-optimized business websites and landing pages using Next.js and modern CMS platforms — built to convert visitors into clients with premium aesthetics and seamless UX.",
    deliverableHighlight: "Live Production Website with CMS & SEO Optimization",
    timeline: "2 - 4 Weeks",
    features: [
      "Next.js / React Custom Website Development",
      "CMS Integration (Sanity, Contentful, WordPress)",
      "On-Page SEO, Sitemap & Performance Optimization",
      "Mobile-Responsive Design & Core Web Vitals Compliance",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel"],
  },
  {
    id: "webapp",
    number: "06",
    category: "Web Application",
    title: "Full-Stack Web Application Development",
    icon: Code2,
    description:
      "End-to-end web application engineering — from SaaS dashboards to media portals and client management platforms — with real-time data, secure authentication, and scalable cloud infrastructure.",
    deliverableHighlight: "Production-Ready Web App with Auth, DB & API Layer",
    timeline: "4 - 8 Weeks",
    features: [
      "Full-Stack Next.js App Router Architecture",
      "Database Design & API Development (REST / GraphQL)",
      "Authentication, Role-Based Access & Security",
      "Cloud Deployment, CI/CD Pipeline & Monitoring",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "AWS / Vercel"],
  },
  {
    id: "mobile",
    number: "07",
    category: "Mobile Application",
    title: "Cross-Platform Mobile App Development",
    icon: Smartphone,
    description:
      "Building polished, high-performance iOS and Android mobile applications using React Native — from media player apps and portfolio showcases to podcast platforms and client-facing content delivery apps.",
    deliverableHighlight: "Published iOS & Android App with Native Integrations",
    timeline: "6 - 10 Weeks",
    features: [
      "React Native Cross-Platform Development (iOS & Android)",
      "Native Media Playback, Camera & Audio Integration",
      "Push Notifications, Analytics & Crash Reporting",
      "App Store & Google Play Publishing & Submission",
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Firebase", "App Store Connect"],
  },
];

interface ServicesSectionProps {
  singleColumn?: boolean;
}

export default function ServicesSection({ singleColumn = false }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredServices =
    activeTab === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.id === activeTab);

  return (
    <section className="py-24 relative bg-transparent border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-4"
          >
            What We Do
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-normal leading-tight text-white mb-6"
          >
            Media Services Crafted for{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              Maximum Impact
            </span>
          </motion.h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {[
              { id: "all", label: "All Services" },
              { id: "reels", label: "Reels & Short-Form" },
              { id: "longform", label: "Long-Form Video" },
              { id: "podcast", label: "Podcast" },
              { id: "ai", label: "AI Video" },
              { id: "web", label: "Website" },
              { id: "webapp", label: "Web App" },
              { id: "mobile", label: "Mobile App" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 capitalize touch-manipulation ${
                  activeTab === tab.id
                    ? "bg-zinc-800 text-white font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-zinc-600"
                    : "bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800 hover:bg-zinc-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Layout */}
        {singleColumn ? (
          /* 1 SERVICE PER ROW DETAILED LAYOUT */
          <div className="flex flex-col gap-12">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="glass-card rounded-3xl p-10 md:p-14 border border-zinc-800 hover:border-zinc-600/80 transition-all duration-300 relative overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                      {/* Left Side: Category, Title, Description & Tech Badges */}
                      <div className="lg:col-span-7 flex flex-col gap-7">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-extrabold text-sky-400 bg-zinc-900 border border-zinc-700/80 px-4 py-1.5 rounded-full uppercase tracking-wider">
                            Service {service.number}
                          </span>
                          <span className="text-sm font-semibold text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-4 py-1.5 rounded-full">
                            {service.category}
                          </span>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-sky-300 shrink-0 group-hover:bg-zinc-800 transition-all">
                            <Icon className="w-10 h-10" />
                          </div>
                          <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-zinc-100 transition-colors leading-tight">
                              {service.title}
                            </h3>
                            <p className="text-sm text-sky-400 font-medium mt-2">
                              ✦ {service.deliverableHighlight}
                            </p>
                          </div>
                        </div>

                        <p className="text-zinc-300 text-base md:text-lg leading-relaxed mt-2">
                          {service.description}
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="pt-2 flex flex-wrap items-center gap-2">
                          <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mr-1">
                            Tools & Stack:
                          </span>
                          {service.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Side: Key Deliverables Checklist & Timeline */}
                      <div className="lg:col-span-5 glass-card-charcoal rounded-2xl p-8 border border-zinc-700/80 flex flex-col justify-between h-full gap-8">
                        <div>
                          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 mb-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                              <Layers className="w-3.5 h-3.5 text-sky-400" />
                              Key Deliverables
                            </span>
                            <span className="text-xs text-zinc-400 flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-sky-400" />
                              {service.timeline}
                            </span>
                          </div>

                          <div className="space-y-4">
                            {service.features.map((feat) => (
                              <div key={feat} className="flex items-start gap-3 text-sm md:text-base text-zinc-200">
                                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-4">
                          <span className="text-xs text-zinc-400 font-medium">Included in Custom Package</span>
                          <PrimaryButton text="Inquire Service" href="/contact-us" showArrow={true} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          /* 2 COLUMN GRID LAYOUT (FOR HOMEPAGE) */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="glass-card rounded-3xl p-8 flex flex-col justify-between group hover:border-zinc-600 relative overflow-hidden border border-zinc-800"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white group-hover:bg-zinc-800 transition-all duration-300">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zinc-200 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features checklist */}
                      <div className="space-y-2.5 mb-8">
                        {service.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2.5 text-xs md:text-sm text-zinc-300">
                            <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                      <span className="text-xs text-zinc-400 font-medium">Included in Custom Package</span>
                      <PrimaryButton text="Explore Service" href="/service" showArrow={true} />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
