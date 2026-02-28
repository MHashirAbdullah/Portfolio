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
        className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors duration-200 relative z-10 shadow-xl"
      >
        Get Started
      </a>
    </motion.div>
  );
}
