"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/projects";

export default function FeaturedWork() {
  return (
    <section
      id="featured"
      className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10"
    >
      {/* Header */}
      <div className="mb-10 flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="mt-2 text-slate-500">
            Selected digital artifacts from my workshop.
          </p>
        </motion.div>

        {/* Desktop Explore Button */}
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("work")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-6 hidden items-center gap-2 text-sm font-bold text-primary hover:underline md:flex md:mt-0"
        >
          Explore All <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <div className="group relative aspect-video overflow-hidden rounded-2xl bg-slate-800 shadow-2xl cursor-pointer transition-transform duration-300 hover:-translate-y-2 will-change-transform">
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Explore Button */}
      <div className="mt-10 flex justify-center md:hidden">
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("work")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-sm font-bold text-primary hover:underline"
        >
          Explore All <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
