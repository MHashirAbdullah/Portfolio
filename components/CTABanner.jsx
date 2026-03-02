"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-32 p-12 rounded-3xl bg-primary relative overflow-hidden flex flex-col items-center text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />
      <h2 className="text-3xl md:text-5xl font-black text-white relative z-10 mb-6">
        Have a project in mind?
      </h2>
      <p className="text-white/80 text-lg max-w-xl relative z-10 mb-10">
        Let&apos;s collaborate to build something exceptional. Now accepting new
        projects for Q2 2026.
      </p>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="cursor-target group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 transition-all hover:scale-105 hover:bg-slate-100 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
      >
        Get Started
      </a>
    </motion.div>
  );
}
