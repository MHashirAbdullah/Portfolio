"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Palette, Code, CheckCircle } from "lucide-react";
import { experiences } from "@/lib/experience";

const iconMap = {
  "building-2": Building2,
  palette: Palette,
  code: Code,
  briefcase: Briefcase,
};

export default function Experience() {
  return (
    <div className="lg:col-span-7">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-3 mb-10"
      >
        <Briefcase className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold tracking-tight">
          Professional Journey
        </h2>
      </motion.div>

      <div className="space-y-0 border-l-2 border-slate-800 ml-4">
        {experiences.map((exp, index) => {
          const IconComp = iconMap[exp.icon] || Building2;
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={`relative pl-10 group ${
                index < experiences.length - 1 ? "pb-12" : ""
              }`}
            >
              <div
                className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full border-4 border-[#0f1623] transition-all duration-300 group-hover:scale-125 ${
                  exp.isCurrent
                    ? "bg-primary shadow-[0_0_15px_rgba(61,126,255,0.5)]"
                    : "bg-slate-700 group-hover:bg-primary"
                }`}
              />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <span className="text-sm font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-400 w-fit">
                  {exp.period}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-4 text-primary font-medium">
                <IconComp className="h-4 w-4" />
                <span>{exp.company}</span>
              </div>

              <p className="text-slate-400 leading-relaxed mb-4">
                {exp.description}
              </p>

              {exp.achievements.length > 0 && (
                <ul className="grid grid-cols-1 gap-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-400"
                    >
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
