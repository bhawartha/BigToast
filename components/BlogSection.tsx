"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

import { BLOG_POSTS } from "@/lib/blogData";

interface BlogSectionProps {
  limit?: number;
}

export default function BlogSection({ limit }: BlogSectionProps) {
  const postsToDisplay = limit ? BLOG_POSTS.slice(0, limit) : BLOG_POSTS;

  return (
    <section className="py-28 relative bg-transparent border-t border-zinc-800/80">
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
              Latest Insights
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-sans font-normal leading-tight text-white"
            >
              Thoughts on Design, AI &{" "}
              <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Digital Strategy</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <PrimaryButton text="Explore All Articles" href="/blog" />
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {postsToDisplay.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block touch-manipulation"
              >
                <div className="glass-card rounded-3xl p-5 flex flex-col justify-between border border-zinc-800 group-hover:border-zinc-600 transition-all">
                  <div>
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-zinc-900/90 backdrop-blur-md border border-zinc-700 px-3 py-1 rounded-full text-xs font-medium text-zinc-300">
                        {post.category}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-zinc-400 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zinc-200 transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-white">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
