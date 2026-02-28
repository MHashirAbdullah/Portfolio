"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { allProjects } from "@/lib/projects";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-16 lg:gap-24">
      {allProjects.map((project, index) => {
        const isReversed = index % 2 === 1;
        return (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Image */}
            <div
              className={`${
                isReversed ? "lg:col-span-7 lg:order-2" : "lg:col-span-7"
              } overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_40px_-15px_rgba(61,126,255,0.4)]`}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ paddingBottom: "56.25%" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </div>

            {/* Text */}
            <div
              className={`${
                isReversed ? "lg:col-span-5 lg:order-1" : "lg:col-span-5"
              } flex flex-col gap-5`}
            >
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
                {project.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-base lg:text-lg">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold group/link w-fit"
                >
                  View Project
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                </a>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
