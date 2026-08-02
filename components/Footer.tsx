"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const FOOTER_NAV = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "About Founder", href: "/about-founder" },
  { name: "Services", href: "/service" },
  { name: "Projects", href: "/project" },
  { name: "Blogs", href: "/blog" },
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
                  alt="BigToast Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                />
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white font-sans">
                BigToast<span className="text-zinc-500">.</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
              BigToast is a modern creative design studio focused on intentional design and strategic messaging, helping brands connect, stand out, and grow with clarity.
            </p>
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

          {/* Col 3: Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-6">
              Subscribe to Insights
            </h4>
            <p className="text-zinc-400 text-sm mb-4">
              Get our monthly briefing on design strategy, AI trends, and web engineering.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-full px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500"
              />
              <button
                type="submit"
                className="w-11 h-11 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 flex items-center justify-center text-white font-bold shrink-0 transition-colors"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Bar & Social Icons */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-zinc-400 gap-6 border-b border-zinc-800">
          <div className="flex flex-wrap items-center gap-1.5 text-center md:text-left">
            <span>© Copyright - </span>
            <span className="text-white font-semibold">BigToast</span>
            <span className="mx-1">Designed by</span>
            <span className="text-white font-semibold">Anova Flow</span>
            <span className="mx-1.5">|</span>
            <a href="#" className="hover:text-white transition-colors">License</a>
            <span className="mx-1">Powered by</span>
            <span className="text-white font-semibold">Webflow</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* GIANT "BIGTOAST" DISPLAY TYPOGRAPHY WITH ELEGANT CHARCOAL FADE */}
        <div className="pt-8 pb-4 text-center overflow-hidden select-none cursor-default">
          <h1 className="text-[15vw] leading-none font-serif italic tracking-tight uppercase font-normal bg-gradient-to-b from-zinc-200 via-sky-300/60 to-transparent bg-clip-text text-transparent transform scale-y-105 opacity-70 transition-opacity hover:opacity-100 duration-500">
            BIGTOAST
          </h1>
        </div>
      </div>
    </footer>
  );
}
