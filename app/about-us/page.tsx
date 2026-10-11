"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Compass, Code2, Sparkles, TrendingUp, ChevronDown } from "lucide-react";
import TeamSection from "@/components/TeamSection";
import CTABanner from "@/components/CTABanner";
import PrimaryButton from "@/components/PrimaryButton";

const VALUES = [
  {
    title: "Creative Excellence",
    description: "We focus on thoughtful storytelling, precise execution, and polished results that communicate your message clearly.",
  },
  {
    title: "Smart Use of AI",
    description: "We use AI-assisted workflows where they add value, helping streamline production while maintaining creative quality.",
  },
  {
    title: "Client-First Thinking",
    description: "We align every project with your goals, audience, and brand identity to create relevant digital experiences.",
  },
  {
    title: "Reliable Delivery",
    description: "We value clear communication, organised workflows, and consistent progress throughout every project.",
  },
];

const ABOUT_PILLARS = [
  {
    step: "01",
    title: "Story-Driven Creative Direction",
    category: "CONCEPT & STRATEGY",
    description: "Every successful project starts with a clear idea. We shape concepts and narratives around your message, audience, and goals.",
    icon: Compass,
    image: "/images/pillar_creative_direction.jpg",
  },
  {
    step: "02",
    title: "Cinematic Editing & Post-Production",
    category: "VIDEO PRODUCTION",
    description: "Through precise editing, thoughtful pacing, colour grading, and sound design, we transform raw footage into engaging content.",
    icon: Code2,
    image: "/images/pillar_video_editing.jpg",
  },
  {
    step: "03",
    title: "AI-Powered Creative Workflows",
    category: "AI-ASSISTED PRODUCTION",
    description: "We use AI-assisted tools to support content creation, streamline repetitive tasks, and explore new creative possibilities.",
    icon: Sparkles,
    image: "/images/pillar_ai_workflow.jpg",
  },
  {
    step: "04",
    title: "Multi-Platform Content Experiences",
    category: "DIGITAL DISTRIBUTION",
    description: "We help adapt content and digital experiences to suit different platforms, audiences, and business objectives.",
    icon: TrendingUp,
    image: "/images/pillar_content_distribution.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-20">
      {/* Hero Banner - 1 Screen Composition */}
      <section className="relative min-h-[calc(100vh/0.9)] lg:h-[calc(100vh/0.9)] flex flex-col justify-between pt-24 pb-4 lg:pt-20 lg:pb-5 w-full overflow-hidden">
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center items-center text-center relative z-10 my-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-5"
          >
            ABOUT BIGTOAST
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-sans font-normal leading-[1.12] text-white mb-6 max-w-4xl"
          >
            We Are a Creative Studio for Video, Digital Experiences{" "}
            <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              &amp; Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            BigToast combines cinematic video editing, AI-assisted content production, and digital development to help brands and creators tell better stories and build stronger online experiences.
          </motion.p>
        </div>

        {/* Subtle Scroll Hint */}
        <div className="w-full flex items-center justify-center gap-2 text-zinc-500 text-xs py-1.5 pointer-events-none z-10">
          <span>Scroll to explore story</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce text-sky-400" />
        </div>
      </section>

      {/* Main Image Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden glass-card p-2">
            <Image
              src="/images/about_studio.jpg"
              alt="BigToast Creative Studio & Video Production Team"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-white leading-tight">
              Where Creative Ideas Meet Digital Execution
            </h2>
            <p className="text-paragraph text-base leading-relaxed">
              We bring together creative storytelling, thoughtful editing, and modern technology to turn ideas into engaging content and digital experiences for brands, businesses, and creators.
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
            <p className="text-paragraph">The principles that guide our creative process and every client project.</p>
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

      {/* Four Pillars Section */}
      <TeamSection
        badge="OUR CREATIVE APPROACH"
        headingPrefix="The Four Pillars of "
        headingHighlight="Our Creative Process"
        pillars={ABOUT_PILLARS}
      />

      {/* Final Call-To-Action Section */}
      <CTABanner
        badge="LET'S BUILD SOMETHING GREAT"
        headingPrefix="Have an Idea "
        headingHighlight="Worth Bringing to Life?"
        description="Let's turn your ideas into engaging content and digital experiences. Tell us about your project and let's explore how we can work together."
        buttonText="Start a Conversation"
        buttonHref="/contact-us"
      />
    </div>
  );
}
