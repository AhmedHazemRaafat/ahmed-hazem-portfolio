import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Outfit } from "next/font/google";

import { AppShell } from "@/components/layout/AppShell";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ahmed Hazem | Implementation Engineer & CS Graduate",
  description:
    "Portfolio of Ahmed Hazem — Computer Science graduate and Implementation Engineer building practical software tools for real-world problems.",
  keywords: [
    "Ahmed Hazem",
    "portfolio",
    "implementation engineer",
    "computer science",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Ahmed Hazem" }],
  openGraph: {
    title: "Ahmed Hazem | Developer Portfolio",
    description:
      "I build practical software tools that solve real-world problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} font-sans antialiased`}
      >
        <AppShell>
          <Header />
          <main className="relative z-10">{children}</main>
          <div className="relative z-10">
            <Footer />
          </div>
        </AppShell>
      </body>
    </html>
  );
}
