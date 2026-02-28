"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import dynamic from "next/dynamic";

const ProceduralGround = dynamic(
  () => import("@/components/ui/procedural-ground"),
  {
    ssr: false,
  },
);

const stats = [
  { value: "5+", label: "Projects" },
  { value: "2+", label: "Years EXP" },
  { value: "10+", label: "GLOBAL CLIENTS" },
  { value: "99%", label: "COFFEE INTAKE" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* WebGL Background */}
      <ProceduralGround />

      {/* Overlay for content readability */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0f1623]/60 via-[#0f1623]/20 to-[#0f1623]/40 z-1" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for Opportunities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl font-black tracking-tight sm:text-5xl lg:text-6xl will-change-transform"
        >
          <span className="text-slate-100">Hashir </span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
            Abdullah
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-8 max-w-2xl text-lg font-medium text-slate-400 sm:text-xl leading-relaxed"
        >
          Software Engineer &amp; Full-Stack Developer. Specialized in Next.js,
          Django, Node.js &amp; MERN Stack.{" "}
          <span className="italic text-slate-500/60">
            I&apos;ll log off when I&apos;m dead.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="group relative flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-8 font-bold text-white transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(61,126,255,0.5)] sm:w-auto"
          >
            View My Work
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-xl border border-slate-700/50 bg-slate-800/50 px-8 font-bold transition-all duration-300 hover:bg-slate-800 sm:w-auto backdrop-blur-sm"
          >
            Let&apos;s Talk
            <MessageCircle className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-24 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-700/30 bg-slate-800/20 p-6 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="text-3xl font-black text-primary">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
