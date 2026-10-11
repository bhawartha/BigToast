"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film, Mic, Sparkles, Code2, Smartphone, Globe, Bot, CheckCircle2, Clock, Layers } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

export const SERVICES = [
  {
    id: "reels",
    tabId: "reels",
    number: "01",
    category: "Short-Form Video",
    title: "Story-Driven Reels & Short-Form Content",
    icon: Film,
    description:
      "We turn raw footage and ideas into engaging Reels, TikToks, and YouTube Shorts with strong hooks, thoughtful pacing, and story-led editing.",
    deliverableHighlight: "Story-Driven Reels & Short-Form Content Packages",
    timeline: "2 - 4 Days",
    features: [
      "Hook-Driven Editing & Audience Retention",
      "Rhythm-Based Cuts & Audio Sync",
      "Motion Graphics & Visual Storytelling",
    ],
    techStack: ["Premiere Pro", "After Effects", "CapCut Pro", "DaVinci Resolve"],
  },
  {
    id: "longform",
    tabId: "longform",
    number: "02",
    category: "Long-Form Video",
    title: "Cinematic Long-Form Video Editing",
    icon: Film,
    description:
      "From founder stories and brand films to YouTube videos, we shape footage into compelling narratives through thoughtful structure, pacing, and cinematic editing.",
    deliverableHighlight: "Cinematic Narrative & Broadcast-Grade Edits",
    timeline: "1 - 2 Weeks",
    features: [
      "Narrative Structure & Pacing",
      "Multi-Camera Editing & Audio Cleanup",
      "Color Grading & Visual Enhancement",
    ],
    techStack: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Audition"],
  },
  {
    id: "podcast",
    tabId: "podcast",
    number: "03",
    category: "Podcast Production",
    title: "Podcast Editing & Storytelling",
    icon: Mic,
    description:
      "We shape conversations into engaging podcast episodes, compelling trailers, and short clips that bring the strongest moments to life.",
    deliverableHighlight: "Studio-Quality Podcast Episodes & Social Clips",
    timeline: "3 - 5 Days",
    features: [
      "Episode Editing & Conversation Structure",
      "Podcast Trailers & Short-Form Clips",
      "Audio Cleanup & Social Content Assets",
    ],
    techStack: ["Audition", "Descript", "Riverside.fm", "Premiere Pro"],
  },
  {
    id: "ai",
    tabId: "production",
    number: "04",
    category: "AI-Assisted Content",
    title: "AI-Assisted Creative Production",
    icon: Sparkles,
    description:
      "We use AI-assisted workflows to support creative production, including voice, avatar, and generative content workflows where they fit the story.",
    deliverableHighlight: "AI-Assisted Video & Creative Production Workflows",
    timeline: "2 - 4 Days",
    features: [
      "AI Voice & Avatar Workflows",
      "Generative Content Production",
      "AI-Assisted Creative Workflows",
    ],
    techStack: ["Runway ML", "HeyGen", "ElevenLabs", "Midjourney"],
  },
  {
    id: "strategy",
    tabId: "strategy",
    number: "05",
    category: "Content Strategy",
    title: "Content Strategy & Story Development",
    icon: Globe,
    description:
      "We find the strongest ideas, story angles, and content formats to help founders and brands communicate what matters to their audience.",
    deliverableHighlight: "Content Roadmap, Story Angles & Repurposing Blueprint",
    timeline: "1 - 2 Weeks",
    features: [
      "Content Ideas & Story Angles",
      "Founder & Personal Brand Content",
      "Content Repurposing & Distribution Thinking",
    ],
    techStack: ["Notion", "Figma", "Miro", "Frame.io"],
  },
  {
    id: "production",
    tabId: "production",
    number: "06",
    category: "Creative Production",
    title: "Creative Direction & Content Production",
    icon: Code2,
    description:
      "From creative concepts to final edits, we shape the visual direction, format, and storytelling behind content built for its intended audience.",
    deliverableHighlight: "End-to-End Creative Direction & Production Execution",
    timeline: "2 - 3 Weeks",
    features: [
      "Creative Concepts & Visual Direction",
      "Story-Driven Content Formats",
      "Production & Editing Coordination",
    ],
    techStack: ["Premiere Pro", "After Effects", "Figma", "Frame.io"],
  },
  {
    id: "repurposing",
    tabId: "strategy",
    number: "07",
    category: "Content Repurposing",
    title: "One Story. Multiple Content Formats.",
    icon: Smartphone,
    description:
      "We adapt strong ideas and existing footage into different content formats, helping founders and brands make more of the stories they already have.",
    deliverableHighlight: "Multi-Platform Repurposed Content Packages",
    timeline: "3 - 5 Days",
    features: [
      "Long-Form to Short-Form Content",
      "Platform-Native Content Adaptation",
      "Multi-Format Content Assets",
    ],
    techStack: ["Premiere Pro", "CapCut Pro", "After Effects", "Canva Pro"],
  },
];

const TABS = [
  { id: "all", label: "All Services" },
  { id: "reels", label: "Reels & Short-Form" },
  { id: "longform", label: "Long-Form Video" },
  { id: "podcast", label: "Podcast" },
  { id: "strategy", label: "Content Strategy" },
  { id: "production", label: "Creative Production" },
];

interface ServicesSectionProps {
  singleColumn?: boolean;
  hideHeader?: boolean;
}

function ServiceCard({ service, idx }: { service: (typeof SERVICES)[0]; idx: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      key={service.id}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      className="glass-card rounded-2xl lg:rounded-3xl p-5 lg:p-6 flex flex-col justify-between group hover:border-zinc-600/80 relative overflow-hidden border border-zinc-800 shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 h-full"
    >
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-sky-400 group-hover:bg-zinc-800 group-hover:scale-105 transition-all duration-300">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold text-zinc-300 bg-zinc-900/90 border border-zinc-700/80 px-3 py-1 rounded-full">
            {service.category}
          </span>
        </div>

        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-zinc-100 transition-colors leading-tight line-clamp-1">
          {service.title}
        </h3>

        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-3.5 line-clamp-2">
          {service.description}
        </p>

        <div className="space-y-2 mb-4">
          {service.features.slice(0, 3).map((feat) => (
            <div key={feat} className="flex items-center gap-2 text-xs text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
        <span className="text-[11px] text-zinc-400 font-medium">Included in Custom Package</span>
        <PrimaryButton text="Explore Service" href="/service" showArrow={true} />
      </div>
    </motion.div>
  );
}

export default function ServicesSection({ singleColumn = false, hideHeader = false }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredServices =
    activeTab === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.id === activeTab || s.tabId === activeTab);

  if (singleColumn) {
    return (
      <section className={`relative bg-transparent ${hideHeader ? "pt-0 pb-24" : "py-24 border-t border-zinc-800/80"}`}>
        <div className="max-w-7xl mx-auto px-6">
          {!hideHeader && (
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-4">
                What We Do
              </div>
              <h2 className="text-3xl md:text-5xl font-sans font-normal leading-tight text-white mb-6">
                Storytelling &amp; Content Crafted for{" "}
                <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                  Maximum Impact
                </span>
              </h2>
            </div>
          )}

          {/* Filter Tabs */}
          <div className={`w-full flex items-center justify-center ${hideHeader ? "mb-6 pt-1" : "mb-12"}`}>
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-zinc-900/90 border border-zinc-800/80 backdrop-blur-xl max-w-full overflow-x-auto no-scrollbar">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 capitalize touch-manipulation cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-zinc-800 text-white font-semibold shadow-md border border-zinc-600"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

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
        </div>
      </section>
    );
  }

  // HOMEPAGE VIEW: SCREEN-FITTED SECTIONS WITH 1-LINE TABS & 1-LINE SQUARE CARDS PER SCROLL SECTION
  const row1Services = activeTab === "all" ? SERVICES.slice(0, 2) : filteredServices.slice(0, 2);
  const row2Services = activeTab === "all" ? SERVICES.slice(2, 4) : [];
  const row3Services = activeTab === "all" ? SERVICES.slice(4, 6) : [];
  const row4Services = activeTab === "all" ? SERVICES.slice(6, 7) : [];

  return (
    <section className="pt-24 pb-20 relative bg-transparent border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header + 1-Line Non-Scrollable Tabs */}
        <div className="flex flex-col items-center text-center max-w-4xl lg:max-w-5xl mx-auto mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-[11px] font-semibold uppercase tracking-wider text-zinc-300 mb-3"
          >
            What We Do
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-sans font-normal leading-tight text-white mb-5"
          >
            Storytelling & Content Crafted for{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              Maximum Impact
            </span>
          </motion.h2>

          {/* 1-Line Non-Scrollable Tabs Container */}
          <div className="w-full flex items-center justify-center">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-zinc-900/90 border border-zinc-800/80 backdrop-blur-xl shadow-lg">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-[11px] lg:text-xs font-medium transition-all duration-200 capitalize touch-manipulation cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-zinc-800 text-white font-semibold shadow-md border border-zinc-600"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Unified Clean Grid of Square Cards (No empty gaps between rows) */}
        <div className="w-full max-w-6xl mx-auto pt-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className={`grid grid-cols-1 ${
                filteredServices.length > 1 ? "md:grid-cols-2" : "max-w-xl mx-auto"
              } gap-6 w-full`}
            >
              {filteredServices.map((service, idx) => (
                <ServiceCard key={service.id} service={service} idx={idx} />
              ))}

              {/* If "all", complete the grid with the Custom Solutions card */}
              {activeTab === "all" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="glass-card rounded-2xl lg:rounded-3xl p-5 lg:p-6 flex flex-col justify-between group border border-zinc-800 hover:border-zinc-700 transition-all duration-300 h-full bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-11 h-11 rounded-xl bg-zinc-800/90 border border-zinc-700/80 flex items-center justify-center text-sky-400">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-sky-400 bg-sky-950/50 border border-sky-800/60 px-3 py-1 rounded-full">
                        Custom Solutions
                      </span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 leading-tight">
                      Need a Tailored Content Package?
                    </h3>

                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-3.5">
                      We combine storytelling, video editing, podcast content, and creative strategy around your goals, content needs, and production workflow.
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>Flexible Content Packages</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>Recurring Content Production</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>Direct Creative Collaboration</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-zinc-400 font-medium">Bespoke Strategy & Scope</span>
                    <PrimaryButton text="Book a Call" href="/contact-us" showArrow={true} />
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
