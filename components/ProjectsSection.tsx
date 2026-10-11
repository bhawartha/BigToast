"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

const PROJECTS = [
  {
    id: "founder-brand-content",
    title: "Founder Stories & Brand Content",
    category: "FOUNDER & BRAND CONTENT",
    year: "2026",
    image: "/images/project_founder_stories.jpg",
    link: "/project",
  },
  {
    id: "podcast-stories-clips",
    title: "Podcast Stories & Short-Form Clips",
    category: "PODCAST EDITING & STORYTELLING",
    year: "2026",
    image: "/images/project_podcast_studio.jpg",
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
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(PROJECTS.length / 2);
  const visibleProjects = PROJECTS.slice(currentPage * 2, currentPage * 2 + 2);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative bg-transparent border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-6 md:mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3"
            >
              Selected Portfolio
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-sans font-normal leading-tight text-white"
            >
              Stories Crafted to{" "}
              <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
                Command Attention
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 shrink-0"
          >
            {/* Prev / Next Controls */}
            <div className="flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-800/80 p-1 rounded-full backdrop-blur-md">
              <button
                onClick={() => setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))}
                aria-label="Previous projects"
                className="w-9 h-9 rounded-full bg-zinc-800/80 hover:bg-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1 px-1.5">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    aria-label={`Go to page ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentPage === i ? "w-5 bg-sky-400" : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))}
                aria-label="Next projects"
                className="w-9 h-9 rounded-full bg-zinc-800/80 hover:bg-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <PrimaryButton text="View All Projects" href="/project" showArrow={true} />
          </motion.div>
        </div>

        {/* Portfolio Cards — 2 Cards Fitted In Screen */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            >
              {visibleProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <Link href={project.link} className="group block touch-manipulation">
                    <div className="glass-card rounded-2xl lg:rounded-3xl overflow-hidden p-3.5 lg:p-4 border border-zinc-800 group-hover:border-zinc-600 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                      <div className="relative aspect-[16/9.5] max-h-[300px] rounded-xl lg:rounded-2xl overflow-hidden mb-3.5">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                        {/* Floating Corner Arrow Badge */}
                        <div className="absolute top-3 right-3 lg:top-4 lg:right-4 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-zinc-900/90 backdrop-blur-md border border-zinc-700 flex items-center justify-center text-white group-hover:bg-zinc-800 group-hover:border-zinc-500 group-hover:scale-110 transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:rotate-45 transition-transform duration-300" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between px-1.5 pb-0.5">
                        <div className="min-w-0 pr-3">
                          <span className="text-[11px] lg:text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-0.5">
                            {project.category}
                          </span>
                          <h3 className="text-lg lg:text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors truncate">
                            {project.title}
                          </h3>
                        </div>
                        <span className="text-xs lg:text-sm font-medium text-zinc-400 border border-zinc-800 px-3 py-1 rounded-full shrink-0">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
