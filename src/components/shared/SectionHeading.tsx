"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
  eyebrow?: string;
}

export function SectionHeading({
  title,
  subtitle,
  id,
  eyebrow,
}: SectionHeadingProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16 text-center"
    >
      {eyebrow && (
        <p className="mb-3 font-mono text-xs tracking-[0.2em] text-primary uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title.split(" ").length > 1 ? (
          <>
            {title.split(" ")[0]}{" "}
            <span className="text-gradient">
              {title.split(" ").slice(1).join(" ")}
            </span>
          </>
        ) : (
          <span className="text-gradient">{title}</span>
        )}
      </h2>
      <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
