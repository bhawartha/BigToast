"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Instagram, Linkedin, ArrowRight } from "lucide-react";
import PrimaryButton from "@/components/PrimaryButton";
import FAQSection from "@/components/FAQSection";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Founder Authority Engine",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-36 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-6"
        >
          START A CONVERSATION
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-sans font-normal leading-tight text-white mb-6 max-w-4xl"
        >
          You have the story. We can help you build{" "}
          <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
            what happens next.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-300 text-lg max-w-2xl leading-relaxed"
        >
          Whether you're building a company, a personal brand, a product or a movement — let's find the story worth telling and build the system that helps it travel.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card rounded-3xl p-8 border border-zinc-800 flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-white mb-2">Direct Details</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-sky-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-zinc-400 block">Direct Email</span>
                  <a
                    href="mailto:hello@bigtoastcompany.com"
                    className="text-white hover:text-sky-300 font-semibold text-base transition-colors"
                  >
                    hello@bigtoastcompany.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-sky-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-zinc-400 block">Location</span>
                  <span className="text-white font-semibold text-base">Delhi, India · Working Globally</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-zinc-800">
                <span className="text-xs font-medium text-zinc-400 block mb-3">Connect On Social</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/bigtoastcompany"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-sky-400" />
                    <span>@bigtoastcompany</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/bigtoastcompany"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>Big Toast Company</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card-charcoal rounded-3xl p-7 border border-zinc-800 text-xs text-zinc-400 leading-relaxed">
              <span className="text-zinc-200 font-semibold block mb-1">Our Working Model:</span>
              We work with clients remotely across India and internationally. All video, podcast, and story-led content systems are managed via dedicated production pipelines.
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 md:p-10 border border-zinc-700">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-sky-500/20 border border-sky-400 flex items-center justify-center text-sky-300 mb-2">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Conversation Started!</h3>
                  <p className="text-zinc-300 max-w-md text-sm leading-relaxed">
                    Thank you for reaching out. We will review your project details and get in touch to schedule an introductory strategy conversation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-zinc-800 text-white text-sm hover:bg-zinc-700 transition-colors border border-zinc-600"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Sharma"
                        className="w-full bg-zinc-900/80 border border-zinc-700 rounded-2xl px-4 py-3.5 text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-400 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-zinc-900/80 border border-zinc-700 rounded-2xl px-4 py-3.5 text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-400 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block mb-2">
                        Brand / Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company or Personal Brand name"
                        className="w-full bg-zinc-900/80 border border-zinc-700 rounded-2xl px-4 py-3.5 text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-400 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block mb-2">
                        Primary Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-sky-400 transition-colors text-sm"
                      >
                        <option value="Founder Authority Engine">Founder Authority Engine</option>
                        <option value="Podcast Content Engine">Podcast Content Engine</option>
                        <option value="Corporate Storytelling">Corporate Storytelling</option>
                        <option value="AI Storytelling">AI Storytelling</option>
                        <option value="Full Story & Distribution System">Full Story & Distribution System</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider block mb-2">
                      Tell Us About Your Project & Goals
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What are you building, what is your current content rhythm, and what would you like to achieve?"
                      className="w-full bg-zinc-900/80 border border-zinc-700 rounded-2xl p-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-400 transition-colors resize-none text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-all text-sm cursor-pointer shadow-lg"
                    >
                      <span>Start a Conversation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
