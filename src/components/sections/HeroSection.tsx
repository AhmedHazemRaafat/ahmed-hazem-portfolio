"use client";

import { ArrowDown, Download, Mail, Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "3+", label: "Years Experience" },
  { value: "Full-Stack", label: "Engineering" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/40 px-4 py-1.5 backdrop-blur-sm"
          >
            <Sparkles className="size-3.5 text-primary" />
            <span className="font-mono text-xs tracking-wider text-primary/90">
              IMPLEMENTATION ENGINEER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Ahmed <span className="text-gradient">Hazem</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-5 text-lg text-muted-foreground sm:text-xl"
          >
            Computer Science Graduate crafting{" "}
            <span className="text-foreground/90">practical software</span> that
            solves real-world problems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-4 text-base leading-relaxed text-muted-foreground/90"
          >
            Full-stack development, API integrations, automation pipelines, and
            AI-assisted tooling — built with precision and purpose.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="shadow-lg shadow-primary/20">
              <a href="#projects">
                <Rocket />
                View Projects
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/15 bg-background/40 backdrop-blur-sm hover:bg-background/60"
            >
              <a href="/cv.pdf" download>
                <Download />
                Download CV
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#contact">
                <Mail />
                Contact
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/8 pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
      >
        <span className="font-mono tracking-widest uppercase">Explore</span>
        <ArrowDown className="size-4 animate-float text-primary/70" />
      </motion.a>
    </section>
  );
}
