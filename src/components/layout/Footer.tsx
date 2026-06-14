import { Github, Heart, Linkedin, Mail } from "lucide-react";

import { contactInfo } from "@/data/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 bg-muted/20 section-glow">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold">
            Ahmed <span className="text-gradient">Hazem</span>
          </p>
          <p className="mt-1 flex items-center justify-center gap-1 text-xs text-muted-foreground sm:justify-start">
            Built with Next.js, Three.js &{" "}
            <Heart className="size-3 text-primary" />
          </p>
        </div>

        <p className="text-xs text-muted-foreground">
          © {year} All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {[
            {
              href: contactInfo.githubUrl,
              label: "GitHub",
              icon: Github,
            },
            {
              href: contactInfo.linkedinUrl,
              label: "LinkedIn",
              icon: Linkedin,
            },
            {
              href: `mailto:${contactInfo.email}`,
              label: "Email",
              icon: Mail,
            },
          ].map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={
                href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="flex size-10 items-center justify-center rounded-xl border border-white/8 bg-card/50 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
              aria-label={label}
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
