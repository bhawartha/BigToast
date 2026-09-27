"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Mic, Film, Sparkles, CheckCircle2, ArrowRight, Layers, UserCheck } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

export const SERVICES = [
  {
    id: "founder-authority",
    number: "01",
    name: "Founder Authority Engine",
    tagline: "Turn expertise into authority.",
    icon: UserCheck,
    targetAudience: "For founders, executives and experts who have something valuable to say but don't want content to become another job.",
    body: "You already have the knowledge. You've built things. Solved problems. Made mistakes. Learned things the hard way. Built opinions. We turn those experiences into a repeatable content and distribution system.",
    included: [
      "Positioning & Story Strategy",
      "Story Bank Development",
      "Scriptwriting & Hook Creation",
      "Short & Long Form Video Production",
      "Podcast Production & Repurposing",
      "Distribution System & Content Calendar",
      "Performance Review & Iteration",
    ],
    ctaText: "Build My Authority",
    href: "/contact-us",
  },
  {
    id: "podcast-engine",
    number: "02",
    name: "Podcast Content Engine",
    tagline: "One episode. Weeks of content.",
    icon: Mic,
    targetAudience: "For creators, companies, and hosts looking for full-lifecycle podcast growth.",
    body: "Full podcast production, short-form clips, trailers, audiograms and distribution assets — so your podcast actually grows your audience instead of just existing.",
    included: [
      "Full Episode Editing",
      "Trailer & Teaser Creation",
      "Short-Form Clip Extraction",
      "Branded Audiograms",
      "Multi-Platform Distribution Assets",
      "Show Growth Strategy",
    ],
    ctaText: "Launch My Podcast",
    href: "/contact-us",
  },
  {
    id: "corporate-storytelling",
    number: "03",
    name: "Corporate Storytelling",
    tagline: "Make your business impossible to ignore.",
    icon: Film,
    targetAudience: "For high-growth businesses and brands wanting cultural resonance and market authority.",
    body: "Brand films, founder stories, case study videos and recruitment content — built to communicate what makes your business worth caring about.",
    included: [
      "Brand Films",
      "Founder Story Videos",
      "Case Study Videos",
      "Product Story Films",
      "Recruitment & Culture Content",
      "Corporate Documentary Content",
    ],
    ctaText: "Tell Our Story",
    href: "/contact-us",
  },
  {
    id: "ai-storytelling",
    number: "04",
    name: "AI Storytelling",
    tagline: "Human stories. AI scale.",
    icon: Sparkles,
    targetAudience: "For ambitious campaigns demanding high volume, multi-variant testing, and rapid execution.",
    body: "AI ads, product commercials, visual campaigns and AI-enhanced content workflows — where the story still comes first and AI helps it travel further and faster.",
    importantNote: "AI is part of our toolkit. It isn't the story.",
    included: [
      "AI Ad Films",
      "AI Product Commercials",
      "AI Visual Campaigns",
      "AI Avatar Content",
      "AI-Enhanced Repurposing Workflows",
      "Automated Content at Scale",
    ],
    ctaText: "Explore AI Storytelling",
    href: "/contact-us",
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
    <section id="services" className="py-24 relative bg-transparent border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-4"
          >
            WHAT WE BUILD
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-normal leading-tight text-white mb-6"
          >
            Media services built around{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              storytelling and distribution.
            </span>
          </motion.h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            {[
              { id: "all", label: "All Services" },
              { id: "founder-authority", label: "Founder Authority" },
              { id: "podcast-engine", label: "Podcast Engine" },
              { id: "corporate-storytelling", label: "Corporate Storytelling" },
              { id: "ai-storytelling", label: "AI Storytelling" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 capitalize touch-manipulation ${
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
          /* 1 SERVICE PER ROW DETAILED LAYOUT (Used in /service) */
          <div className="flex flex-col gap-10">
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
                    className="glass-card rounded-3xl p-8 md:p-12 border border-zinc-800 hover:border-zinc-600/80 transition-all duration-300 relative overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                      {/* Left: Metadata, Title, Description */}
                      <div className="lg:col-span-7 flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-extrabold text-sky-400 bg-zinc-900 border border-zinc-700/80 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                            SERVICE {service.number}
                          </span>
                          <span className="text-xs font-semibold text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-3.5 py-1.5 rounded-full">
                            {service.tagline}
                          </span>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-sky-300 shrink-0 group-hover:bg-zinc-800 transition-all">
                            <Icon className="w-7 h-7 md:w-8 md:h-8" />
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-zinc-100 transition-colors leading-tight">
                              {service.name}
                            </h3>
                            <p className="text-xs md:text-sm text-sky-400 font-medium mt-1">
                              ✦ {service.tagline}
                            </p>
                          </div>
                        </div>

                        {service.targetAudience && (
                          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-3.5 text-xs md:text-sm text-zinc-300">
                            <span className="font-semibold text-zinc-200">Who it's for: </span>
                            {service.targetAudience}
                          </div>
                        )}

                        <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                          {service.body}
                        </p>

                        {service.importantNote && (
                          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-300 bg-sky-950/40 border border-sky-800/50 px-3.5 py-2 rounded-xl">
                            <span>✦</span>
                            <span>{service.importantNote}</span>
                          </div>
                        )}
                      </div>

                      {/* Right: What's included Checklist & CTA */}
                      <div className="lg:col-span-5 glass-card-charcoal rounded-2xl p-6 md:p-8 border border-zinc-700/80 flex flex-col justify-between h-full gap-6">
                        <div>
                          <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                              <Layers className="w-3.5 h-3.5 text-sky-400" />
                              What's Included
                            </span>
                            <span className="text-[11px] text-zinc-400">
                              System Architecture
                            </span>
                          </div>

                          <div className="space-y-3">
                            {service.included.map((item) => (
                              <div key={item} className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-200">
                                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-zinc-800">
                          <PrimaryButton text={`${service.ctaText} →`} href={service.href} className="w-full justify-center" />
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
                        <div className="w-13 h-13 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white group-hover:bg-zinc-800 transition-all duration-300">
                          <Icon className="w-6 h-6 text-sky-300" />
                        </div>
                        <span className="text-[11px] font-bold text-sky-400 bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-full uppercase tracking-wider">
                          SERVICE {service.number}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zinc-100 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs font-semibold text-sky-400 mb-4">
                        {service.tagline}
                      </p>

                      <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                        {service.body}
                      </p>

                      {service.importantNote && (
                        <div className="mb-6 text-xs text-sky-300 font-medium bg-sky-950/40 border border-sky-800/40 p-2.5 rounded-xl">
                          ✦ {service.importantNote}
                        </div>
                      )}

                      {/* Included checklist */}
                      <div className="space-y-2 mb-8">
                        {service.included.slice(0, 5).map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                        {service.included.length > 5 && (
                          <span className="text-[11px] text-zinc-500 font-medium pl-5 block">
                            + {service.included.length - 5} more deliverables
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                      <span className="text-xs text-zinc-400 font-medium">Story-Led System</span>
                      <PrimaryButton text={`${service.ctaText} →`} href={service.href} />
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
