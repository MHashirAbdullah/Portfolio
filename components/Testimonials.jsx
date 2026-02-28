"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <span className="text-primary font-bold tracking-widest text-xs uppercase">
          Kind Words
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          Client Testimonials
        </h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            className={`glass-panel p-8 rounded-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
              testimonial.featured
                ? "border-primary/20 bg-primary/5 hover:border-primary/40"
                : "hover:border-primary/30"
            }`}
          >
            <div>
              <div className="flex text-primary mb-6 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary" />
                ))}
              </div>
              <p className="text-slate-400 leading-relaxed mb-8 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full overflow-hidden bg-slate-800 shrink-0">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-slate-100">{testimonial.name}</p>
                <p className="text-sm text-slate-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
