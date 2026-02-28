"use client";

import { motion } from "framer-motion";
import { Code, Layers, Database } from "lucide-react";
import { skillGroups } from "@/lib/skills";

const iconMap = {
  code: Code,
  layers: Layers,
  database: Database,
};

const levelOpacity = {
  expert: "bg-primary",
  advanced: "bg-primary/40",
  intermediate: "bg-primary/20",
};

export default function Skills() {
  return (
    <div className="lg:col-span-5">
      <div className="sticky top-24 space-y-12">
        {skillGroups.map((group, groupIndex) => {
          const IconComp = iconMap[group.icon] || Code;
          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: groupIndex * 0.08,
                ease: "easeOut",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <IconComp className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-800 shadow-sm cursor-default transition-transform duration-200 hover:scale-105 hover:-translate-y-0.5"
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${levelOpacity[skill.level]}`}
                    />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}

      </div>
    </div>
  );
}
