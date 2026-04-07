"use client";

import { motion } from "motion/react";
import { Mail, Github, Linkedin, ArrowRight, MapPin } from "lucide-react";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [state, handleSubmit] = useForm("myknqdqw");

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-linear-to-t from-[#3B9DD8]/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-6"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              color: "#1a202c",
            }}
          >
            Let&apos;s Connect
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto font-medium"
            style={{ color: "#2d3748" }}
          >
            Interested in collaborating or have a question? My inbox is open.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email Card */}
            <motion.a
              href="mailto:hemantaregmi20@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-1 bg-linear-to-br  rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

              <div className="relative bg-white/25 backdrop-blur-2xl border-2 border-white/40 rounded-3xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_16px_48px_rgba(77,168,218,0.2)] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br  flex items-center justify-center shrink-0">
                    <Mail className="w-7 h-7 text-[#4DA8DA]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-extrabold mb-1">
                      Email
                    </div>
                    <div className="text-gray-800 font-bold truncate">
                      hemantaregmi20@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-linear-to-br  rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

              <div className="relative bg-white/25 backdrop-blur-2xl border-2 border-white/40 rounded-3xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_16px_48px_rgba(77,168,218,0.2)] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br  flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7 text-[#4DA8DA]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-extrabold mb-1">
                      Location
                    </div>
                    <div className="text-gray-800 font-bold">Houston, TX</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links - Horizontal Liquid Glass Bubbles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-6 justify-center items-center pt-4"
          >
            {/* GitHub Bubble */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredLink("github")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <a
                href="https://github.com/HemantaRegmi"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.15, y: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="relative w-20 h-20 cursor-pointer"
                >
                  {/* Outer glow effect on hover */}
                  <div className="absolute -inset-2 bg-linear-to-br from-slate-600/40 to-slate-800/40 rounded-full opacity-0 hover:opacity-100 blur-xl transition duration-500"></div>

                  {/* Glass bubble */}
                  <div className="relative w-full h-full rounded-full bg-white/35 backdrop-blur-2xl border-2 border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300 flex items-center justify-center">
                    {/* Inner icon glow */}
                    <div className="absolute inset-3 bg-linear-to-br from-slate-400/10 to-slate-800/10 rounded-full blur-sm"></div>

                    <Github className="w-9 h-9 text-slate-800 relative z-10 drop-shadow-sm" />
                  </div>
                </motion.div>
              </a>

              {/* Hover text label */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{
                  opacity: hoveredLink === "github" ? 1 : 0,
                  y: hoveredLink === "github" ? 0 : 5,
                }}
                transition={{ duration: 0.2 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap"
              >
                <div className="bg-white/40 backdrop-blur-2xl border-2 border-white/60 rounded-full px-4 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.95)]">
                  <span className="text-sm font-bold text-gray-800">
                    GitHub
                  </span>
                </div>
              </motion.div>
            </div>

            {/* LinkedIn Bubble */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredLink("linkedin")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.15, y: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="relative w-20 h-20 cursor-pointer"
                >
                  {/* Outer glow effect on hover */}
                  <div className="absolute -inset-2 bg-linear-to-br from-blue-500/40 to-blue-700/40 rounded-full opacity-0 hover:opacity-100 blur-xl transition duration-500"></div>

                  {/* Glass bubble */}
                  <div className="relative w-full h-full rounded-full bg-white/35 backdrop-blur-2xl border-2 border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.3)] transition-all duration-300 flex items-center justify-center">
                    {/* Inner icon glow */}
                    <div className="absolute inset-3 bg-linear-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-sm"></div>

                    <Linkedin className="w-9 h-9 text-blue-600 relative z-10 drop-shadow-sm" />
                  </div>
                </motion.div>
              </a>

              {/* Hover text label */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{
                  opacity: hoveredLink === "linkedin" ? 1 : 0,
                  y: hoveredLink === "linkedin" ? 0 : 5,
                }}
                transition={{ duration: 0.2 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap"
              >
                <div className="bg-white/40 backdrop-blur-2xl border-2 border-white/60 rounded-full px-4 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.95)]">
                  <span className="text-sm font-bold text-gray-800">
                    LinkedIn
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative group w-full"
          >
            {/* Outer glow */}
            <div className="absolute -inset-1 bg-linear-to-br rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

            {/* Main form card with light glass effect */}

            <div className="relative bg-white/25 backdrop-blur-2xl border-2 border-white/40 rounded-3xl p-8 lg:p-10 shadow-[0_16px_48px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8)] overflow-hidden">
              <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-extrabold text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full bg-white/60 border-2 border-gray-200 rounded-xl px-4 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#4DA8DA]/20 focus:border-[#4DA8DA] transition-all shadow-sm font-medium"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-extrabold text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="youremail@example.com"
                    className="w-full bg-white/60 border-2 border-gray-200 rounded-xl px-4 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#4DA8DA]/20 focus:border-[#4DA8DA] transition-all shadow-sm font-medium"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-extrabold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can I help you?"
                    name="message"
                    className="w-full bg-white/60 border-2 border-gray-200 rounded-xl px-4 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#4DA8DA]/20 focus:border-[#4DA8DA] transition-all shadow-sm font-medium resize-none"
                  />
                </div>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                {state.succeeded && (
                  <p className="text-blue-600 font-semibold text-center">
                    Message sent successfully!
                  </p>
                )}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full group bg-[#4DA8DA] hover:bg-[#3B9DD8] text-white font-extrabold text-lg rounded-xl px-4 py-4 flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(77,168,218,0.4)] hover:shadow-[0_12px_32px_rgba(77,168,218,0.5)] transition-all duration-300 cursor-pointer"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
