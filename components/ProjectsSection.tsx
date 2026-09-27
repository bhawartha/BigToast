"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

export const FEATURED_PROJECTS = [
  {
    id: "scaler",
    title: "Scaler School of Business & Technology",
    category: "Content Strategy & Video Production",
    description:
      "Content strategy and video production for one of India's leading education platforms — working across multiple content formats to build authority and reach across platforms.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    link: "/project",
  },
  {
    id: "ruloans",
    title: "Ruloans",
    category: "Corporate Video",
    description:
      "Corporate video production — building brand credibility through structured, story-driven video content.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    link: "/project",
  },
  {
    id: "desirable-podcast",
    title: "Desirable Podcast — Singapore",
    category: "Podcast Production & Distribution",
    description:
      "End-to-end podcast production and distribution system for an international podcast based in Singapore — editing, content extraction and platform distribution.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1200&auto=format&fit=crop",
    link: "/project",
  },
  {
    id: "karishma-ahuja",
    title: "Dr. Karishma Ahuja",
    category: "Brand Content & Podcast",
    description:
      "Personal brand content, podcast production and distribution strategy for a manifestation coach — building authority through consistent storytelling.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    link: "/project",
  },
  {
    id: "divya-jain",
    title: "Divya Jain — Safexpress",
    category: "Personal Branding & Podcast",
    description:
      "Personal branding and podcast content for an entrepreneur — turning expertise into a consistent content presence.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    link: "/project",
  },
  {
    id: "yanisa",
    title: "Yanisa Execution — AI Projects",
    category: "AI Ad Films & Founder Content",
    description:
      "AI-driven content projects including AI ad films, short-form ads, founder personal brand content and modernised production workflows.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    link: "/project",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-28 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-4"
            >
              Selected Portfolio
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-sans font-normal leading-tight text-white"
            >
              Stories We've Helped{" "}
              <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                Shape and Distribute
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <PrimaryButton text="Explore All Work" href="/project" showArrow={true} />
          </motion.div>
        </div>

        {/* Portfolio Grid - 6 Real Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              <Link href={project.link} className="group block touch-manipulation h-full">
                <div className="glass-card rounded-3xl overflow-hidden p-4 border border-zinc-800 group-hover:border-zinc-600 transition-all duration-500 flex flex-col justify-between h-full">
                  <div>
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                      {/* Floating Corner Arrow Badge */}
                      <div className="absolute top-3.5 right-3.5 w-10 h-10 rounded-full bg-zinc-900/90 backdrop-blur-md border border-zinc-700 flex items-center justify-center text-white group-hover:bg-zinc-800 group-hover:border-zinc-500 group-hover:scale-110 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                      </div>
                    </div>

                    <div className="px-1.5">
                      <span className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider block mb-1.5">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-zinc-100 transition-colors leading-snug mb-3">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-zinc-800/80 px-1.5 flex items-center justify-between text-xs text-zinc-400 font-medium">
                    <span>Explore Project</span>
                    <span className="text-sky-400 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Small Note Underneath */}
        <div className="text-center mt-12 pt-4 border-t border-zinc-800/60">
          <p className="text-xs md:text-sm text-zinc-400">
            Work delivered across employment, collaboration and direct client relationships. Case studies available on request.
          </p>
        </div>
      </div>
    </section>
  );
}
