"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "What We Do", href: "/service" },
  { name: "How We Work", href: "/#how-we-work" },
  { name: "Work", href: "/project" },
  { name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group touch-manipulation select-none"
          >
            <div className="relative flex items-center justify-center h-14 w-14 md:h-16 md:w-16 shrink-0">
              <Image
                src="/logo.png"
                alt="Big Toast Company Logo"
                width={64}
                height={64}
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_4px_14px_rgba(255,255,255,0.2)]"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white font-sans drop-shadow-sm leading-tight">
                Big Toast<span className="text-zinc-400">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
                Storytelling × Distribution
              </span>
            </div>
          </Link>

          {/* Floating Charcoal Glass Navigation Pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-800/90 backdrop-blur-2xl border border-zinc-600 px-3 py-1.5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.7)]">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : link.href.startsWith("/#")
                  ? false
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13.5px] font-medium transition-colors duration-200 rounded-full touch-manipulation select-none cursor-pointer ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-zinc-700/80 border border-zinc-500 shadow-[0_0_20px_rgba(255,255,255,0.15)] pointer-events-none"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 pointer-events-none">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <PrimaryButton text="Start a Conversation" href="/contact-us" showArrow={true} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden relative z-50 flex flex-col justify-center items-center w-11 h-11 rounded-2xl bg-zinc-800 border border-zinc-600 text-white active:bg-zinc-700 transition-colors touch-manipulation"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-transform duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-opacity duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-transform duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#131317]/95 backdrop-blur-3xl lg:hidden flex flex-col pt-28 px-8 pb-12 justify-between"
          >
            <div className="flex flex-col gap-4 overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-medium tracking-tight block py-1.5 ${
                    pathname === link.href ? "text-white font-bold" : "text-zinc-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="pt-6 border-t border-zinc-700"
            >
              <PrimaryButton
                text="Start a Conversation"
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                showArrow={true}
                className="w-full justify-center"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
