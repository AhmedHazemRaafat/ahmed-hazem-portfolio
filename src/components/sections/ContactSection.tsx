"use client";

import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "ahmed.hazem@example.com",
    href: "mailto:ahmed.hazem@example.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ahmedhazem",
    href: "https://github.com/ahmedhazem",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/ahmedhazem",
    href: "https://linkedin.com/in/ahmedhazem",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Preparing for Germany",
    href: null,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 hero-glow opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Connect"
          title="Contact"
          subtitle="Open to collaborations, opportunities, and conversations about software and research."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl"
        >
          <div className="gradient-border glass-card overflow-hidden p-8 sm:p-10">
            <div className="mb-8 text-center">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                Let&apos;s{" "}
                <span className="text-gradient">Connect</span>
              </h3>
              <p className="mt-3 text-muted-foreground">
                Whether it&apos;s a project idea, job opportunity, or academic
                collaboration — I&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-3">
              {contactLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/3 p-4 transition-all duration-300 hover:border-primary/25 hover:bg-primary/5"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <link.icon className="size-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                      {link.label}
                    </p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="truncate text-sm font-medium transition-colors hover:text-primary"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{link.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="mt-8 w-full shadow-lg shadow-primary/20"
            >
              <a href="mailto:ahmed.hazem@example.com">
                <Send />
                Send an Email
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
