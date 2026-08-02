"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import PrimaryButton from "@/components/PrimaryButton";
import FAQSection from "@/components/FAQSection";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "UI/UX & Web Development",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-36 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-6"
        >
          Get In Touch
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-sans font-normal leading-tight text-white mb-6 max-w-4xl"
        >
          Let's Start a Conversation About Your{" "}
          <span className="font-serif italic bg-gradient-to-r from-zinc-300 via-sky-300 to-cyan-400 bg-clip-text text-transparent">Next Launch</span>
        </motion.h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-white mb-2">Direct Contact</h3>

              <div className="flex items-start gap-4 text-paragraph">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-white/50 block">Email Us</span>
                  <span className="text-white font-semibold text-base">hello@bigtoast.studio</span>
                </div>
              </div>

              <div className="flex items-start gap-4 text-paragraph">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-white/50 block">Call Us</span>
                  <span className="text-white font-semibold text-base">+1 (800) 450-9281</span>
                </div>
              </div>

              <div className="flex items-start gap-4 text-paragraph">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-white/50 block">Headquarters</span>
                  <span className="text-white font-semibold text-base">755 Innovation Blvd, San Francisco, CA</span>
                </div>
              </div>
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
                  <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                  <p className="text-paragraph max-w-md">
                    Thank you for reaching out. A BigToast senior strategist will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-semibold text-white/80 uppercase tracking-wider block mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Marcus Leclerc"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-sky-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-white/80 uppercase tracking-wider block mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marcus@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-sky-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-semibold text-white/80 uppercase tracking-wider block mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Inc."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-sky-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-white/80 uppercase tracking-wider block mb-2">
                        Required Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-surface border border-white/10 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-sky-400 transition-colors"
                      >
                        <option value="UI/UX & Web Development">UI/UX & Web Development</option>
                        <option value="Brand Strategy & Messaging">Brand Strategy & Messaging</option>
                        <option value="AI Workflow Integration">AI Workflow Integration</option>
                        <option value="Full Digital Transformation">Full Digital Transformation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-white/80 uppercase tracking-wider block mb-2">
                      Project Overview
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your goals, timeline, and budget..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-sky-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <PrimaryButton text="Submit Inquiry" showArrow={true} />
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
