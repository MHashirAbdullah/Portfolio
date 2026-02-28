import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Work */}
      <FeaturedWork />

      {/* Selected Work / Projects */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Available for Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Selected <span className="text-primary">Work.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            A curated selection of premium digital experiences crafted with
            precision, focus, and a touch of magic.
          </p>
        </div>
        <Projects />
        <CTABanner />
      </section>

      {/* Experience & Skills */}
      <section
        id="experience"
        className="px-6 py-20 lg:px-20 max-w-7xl mx-auto w-full"
      >
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for hire
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-r from-white via-primary to-slate-400">
            Experience &amp; Expertise
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            A curated journey of building digital products, scaling engineering
            teams, and mastering the modern web stack.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <Experience />
          <Skills />
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <ContactForm />
    </>
  );
}
