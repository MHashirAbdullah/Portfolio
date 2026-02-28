"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="text-primary font-bold tracking-widest text-xs uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
            Have a project in mind?
            <br />
            Let&apos;s build something great.
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-md">
            Whether you have a specific project or just want to chat about
            design, I&apos;m always open to new opportunities.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">
                  Email Me
                </p>
                <p className="text-lg font-medium">
                  hashirabdullah46@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">
                  Based In
                </p>
                <p className="text-lg font-medium">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full -z-10" />
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-panel p-8 md:p-10 rounded-2xl ocean-glow-box space-y-6"
          >
            <div className="space-y-2">
              <label
                htmlFor="contact-name"
                className="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-1"
              >
                Full Name
              </label>
              <input
                id="contact-name"
                name="user_name"
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-slate-800/50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/50 text-white transition-all placeholder:text-slate-500 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-email"
                className="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-1"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                name="user_email"
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-slate-800/50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/50 text-white transition-all placeholder:text-slate-500 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="block text-xs font-bold text-slate-400 uppercase tracking-widest ml-1"
              >
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                placeholder="How can I help you?"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-slate-800/50 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/50 text-white transition-all placeholder:text-slate-500 outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-primary hover:bg-primary/90 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-xl shadow-primary/30 flex items-center justify-center gap-2 group"
            >
              {status === "loading" && (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                </>
              )}
              {status === "idle" && (
                <>
                  Send Message
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </>
              )}
              {status === "success" && (
                <>
                  <CheckCircle className="h-5 w-5" /> Message Sent!
                </>
              )}
              {status === "error" && (
                <>
                  <AlertCircle className="h-5 w-5" /> Failed — Try Again
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
