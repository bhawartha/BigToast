"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

const PROJECTS = [
  {
    id: "fitfuel-reels",
    title: "FitFuel Reels Campaign",
    category: "Short-Form Video Editing",
    year: "2026",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
    link: "/project",
  },
  {
    id: "elevate-podcast",
    title: "Elevate Podcast Series",
    category: "Podcast Production & Audiograms",
    year: "2026",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1200&auto=format&fit=crop",
    link: "/project",
  },
  {
    id: "novabrand-film",
    title: "NovaBrand Corporate Film",
    category: "Long-Form Brand Film",
    year: "2025",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
    link: "/project",
  },
  {
    id: "ai-video-campaign",
    title: "AI Avatar Ad Campaign",
    category: "AI Video Generation",
    year: "2025",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200&auto=format&fit=crop",
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
              Crafted Edits That{" "}
              <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Command Attention</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <PrimaryButton text="View All Projects" href="/project" />
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <Link href={project.link} className="group block touch-manipulation">
                <div className="glass-card rounded-3xl overflow-hidden p-4 border border-zinc-800 group-hover:border-zinc-600 transition-all duration-500">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Floating Corner Arrow Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-zinc-900/90 backdrop-blur-md border border-zinc-700 flex items-center justify-center text-white group-hover:bg-zinc-800 group-hover:border-zinc-500 group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-2">
                    <div>
                      <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <span className="text-sm font-medium text-zinc-400 border border-zinc-800 px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
