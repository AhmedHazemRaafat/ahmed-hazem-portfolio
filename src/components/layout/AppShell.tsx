"use client";

import { PageBackground } from "@/components/background/PageBackground";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageBackground />
      <div className="noise-overlay pointer-events-none fixed inset-0 z-[1]" />
      {children}
    </>
  );
}
