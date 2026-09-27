"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const FOOTER_NAV = [
  { name: "Home", href: "/" },
  { name: "What We Do", href: "/service" },
  { name: "How We Work", href: "/#how-we-work" },
  { name: "Work", href: "/project" },
  { name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-800 bg-[#131317] pt-20 pb-6 overflow-hidden">
      {/* Background Grid & Charcoal Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950/20 to-transparent" />
      <div className="absolute inset-0 pointer-events-none opacity-15 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:36px_36px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-800">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Big Toast Company Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold tracking-tight text-white font-sans">
                  Big Toast Company<span className="text-zinc-500">.</span>
                </span>
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                  Storytelling × Distribution
                </span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
              Building Stories. Creating Distribution. We help founders and brands turn ideas, expertise and experiences into stories, content and distribution systems that compound over time.
            </p>
            <div className="text-xs text-zinc-400 flex flex-col gap-1.5 pt-2">
              <span className="text-zinc-300 font-semibold">Location:</span>
              <span>Delhi, India · Working Globally</span>
              <a
                href="mailto:hello@bigtoastcompany.com"
                className="text-sky-400 hover:text-sky-300 transition-colors pt-1"
              >
                hello@bigtoastcompany.com
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 p-0 list-none text-sm">
              {FOOTER_NAV.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-white transition-colors block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Inquiry */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
              Start a Conversation
            </h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              You have the story. We can help you build what happens next. Tell us about your project or get in touch directly.
            </p>
            <div className="pt-2">
              <a
                href="mailto:hello@bigtoastcompany.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-white text-sm font-medium transition-all"
              >
                <span>hello@bigtoastcompany.com</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar & Social Icons */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-zinc-400 gap-6 border-b border-zinc-800">
          <div className="flex flex-wrap items-center gap-1.5 text-center md:text-left">
            <span>© 2026</span>
            <span className="text-white font-semibold">Big Toast Company</span>
            <span className="mx-1.5">·</span>
            <span>All rights reserved.</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/bigtoastcompany"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/bigtoastcompany"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* GIANT "BIG TOAST" DISPLAY TYPOGRAPHY WITH ELEGANT CHARCOAL FADE */}
        <div className="pt-8 pb-4 text-center overflow-hidden select-none cursor-default">
          <h1 className="text-[13vw] leading-none font-serif italic tracking-tight uppercase font-normal bg-gradient-to-b from-zinc-200 via-sky-300/60 to-transparent bg-clip-text text-transparent transform scale-y-105 opacity-70 transition-opacity hover:opacity-100 duration-500">
            BIG TOAST
          </h1>
        </div>
      </div>
    </footer>
  );
}
