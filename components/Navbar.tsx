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
  {
    name: "About Us",
    href: "/about-us",
    isDropdown: true,
  },
  { name: "Services", href: "/service" },
  { name: "Projects", href: "/project" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
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
                alt="BigToast Logo"
                width={64}
                height={64}
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_4px_14px_rgba(255,255,255,0.2)]"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white font-sans drop-shadow-sm">
              BigToast<span className="text-zinc-400">.</span>
            </span>
          </Link>

          {/* Floating Charcoal Glass Navigation Pill */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-zinc-800/90 backdrop-blur-2xl border border-zinc-600 px-3.5 py-2 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.7)]">
            {NAV_LINKS.map((link) => {
              if (link.isDropdown) {
                const isAboutActive = pathname.startsWith("/about");
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setAboutDropdownOpen(true)}
                    onMouseLeave={() => setAboutDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setAboutDropdownOpen((prev) => !prev);
                      }}
                      className={`relative px-4 py-2 text-[14px] font-medium transition-colors duration-200 rounded-full flex items-center gap-1.5 touch-manipulation select-none cursor-pointer ${
                        isAboutActive
                          ? "text-white font-semibold"
                          : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      {isAboutActive && (
                        <motion.div
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full bg-zinc-700/80 border border-zinc-500 shadow-[0_0_20px_rgba(255,255,255,0.15)] pointer-events-none"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 pointer-events-none">{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 relative z-10 pointer-events-none transition-transform duration-200 ${
                          aboutDropdownOpen ? "rotate-180 text-white" : "text-zinc-400"
                        }`}
                      />
                    </button>

                    {/* About Us Dropdown Menu */}
                    <AnimatePresence>
                      {aboutDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 p-2 rounded-2xl bg-zinc-900/95 backdrop-blur-2xl border border-zinc-700 shadow-[0_12px_40px_rgba(0,0,0,0.8)] z-50 flex flex-col gap-1"
                        >
                          <Link
                            href="/about-us"
                            onClick={() => setAboutDropdownOpen(false)}
                            className={`px-3.5 py-2.5 rounded-xl transition-all flex flex-col gap-0.5 touch-manipulation cursor-pointer ${
                              pathname === "/about-us"
                                ? "bg-zinc-800 text-white font-semibold"
                                : "hover:bg-zinc-800/70 text-zinc-200 hover:text-white"
                            }`}
                          >
                            <span className="text-sm font-semibold">About Us</span>
                            <span className="text-[11px] text-zinc-400 font-normal">
                              Studio vision & values
                            </span>
                          </Link>

                          <Link
                            href="/about-founder"
                            onClick={() => setAboutDropdownOpen(false)}
                            className={`px-3.5 py-2.5 rounded-xl transition-all flex flex-col gap-0.5 touch-manipulation cursor-pointer ${
                              pathname === "/about-founder"
                                ? "bg-zinc-800 text-white font-semibold"
                                : "hover:bg-zinc-800/70 text-zinc-200 hover:text-white"
                            }`}
                          >
                            <span className="text-sm font-semibold flex items-center justify-between">
                              <span>About Founder</span>
                              <span className="w-2 h-2 rounded-full bg-sky-400" />
                            </span>
                            <span className="text-[11px] text-sky-400 font-normal">
                              Marcus Leclerc - Founder & CEO
                            </span>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setAboutDropdownOpen(false)}
                  className={`relative px-4 py-2 text-[14px] font-medium transition-colors duration-200 rounded-full touch-manipulation select-none cursor-pointer ${
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
              <PrimaryButton text="Get Started" href="/contact-us" />
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
            <div className="flex flex-col gap-5 overflow-y-auto">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-medium tracking-tight block py-1 ${
                  pathname === "/" ? "text-white font-bold" : "text-zinc-300"
                }`}
              >
                Home
              </Link>

              {/* About Dropdown in Mobile */}
              <div className="flex flex-col gap-2 py-1 border-l-2 border-zinc-700 pl-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                  About Studio
                </span>
                <Link
                  href="/about-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-medium block py-0.5 ${
                    pathname === "/about-us" ? "text-white font-bold" : "text-zinc-300"
                  }`}
                >
                  About Us
                </Link>
                <Link
                  href="/about-founder"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-medium block py-0.5 ${
                    pathname === "/about-founder" ? "text-white font-bold" : "text-zinc-300"
                  }`}
                >
                  About Founder
                </Link>
              </div>

              <Link
                href="/service"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-medium tracking-tight block py-1 ${
                  pathname === "/service" ? "text-white font-bold" : "text-zinc-300"
                }`}
              >
                Services
              </Link>

              <Link
                href="/project"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-medium tracking-tight block py-1 ${
                  pathname === "/project" ? "text-white font-bold" : "text-zinc-300"
                }`}
              >
                Projects
              </Link>

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-medium tracking-tight block py-1 ${
                  pathname === "/blog" ? "text-white font-bold" : "text-zinc-300"
                }`}
              >
                Blogs
              </Link>

              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-medium tracking-tight block py-1 ${
                  pathname === "/contact-us" ? "text-white font-bold" : "text-zinc-300"
                }`}
              >
                Contact
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-6 border-t border-zinc-700"
            >
              <PrimaryButton
                text="Get Started"
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
