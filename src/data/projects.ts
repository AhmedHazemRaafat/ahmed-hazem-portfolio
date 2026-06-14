import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "ecommerce-analytics-pipeline",
    name: "E-commerce Analytics Pipeline",
    problem:
      "E-commerce teams need reliable revenue and product insights without standing up an expensive cloud warehouse.",
    description:
      "A production-grade analytics stack — simulated exports through n8n scheduling, Python ETL with retry logic, DuckDB + dbt transforms, and a live Next.js BI dashboard with cohort heatmaps, geo choropleths, and automated revenue-drop alerts.",
    techStack: [
      "Python",
      "DuckDB",
      "dbt",
      "n8n",
      "Next.js",
      "Railway",
      "Recharts",
    ],
    liveUrl: "https://ecommerce-analytics-pipeline-theta.vercel.app/",
    githubUrl: "https://github.com/AhmedHazemRaafat/ecommerce-analytics-pipeline",
  },
  {
    id: "job-application-tracker",
    name: "JobTrack",
    problem:
      "Job seekers lose applications, follow-ups, and pipeline visibility when tracking everything in spreadsheets.",
    description:
      "A smart application tracker with drag-and-drop Kanban across seven stages, rich analytics (response rates, salary distribution, stage timing), CSV import/export with column mapping, and daily follow-up email reminders via Vercel Cron.",
    techStack: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "@dnd-kit",
      "Recharts",
      "Resend",
    ],
    liveUrl: "https://job-application-tracker-seven-tan.vercel.app/",
    githubUrl: "https://github.com/AhmedHazemRaafat/job-application-tracker",
  },
  {
    id: "ai-document-qa",
    name: "DocuMind",
    problem:
      "Finding accurate answers buried in long PDF documents is slow, manual, and error-prone.",
    description:
      "Production-ready RAG: upload PDFs, chunk and embed with OpenAI, store vectors in pgvector on Neon, then chat with streaming answers and page-level source citations — guarded by a similarity threshold so the AI never hallucinates beyond the document.",
    techStack: [
      "Next.js",
      "OpenAI",
      "pgvector",
      "Neon",
      "Vercel Blob",
      "AI SDK",
      "Prisma",
    ],
    liveUrl: "https://ai-document-qa-psi.vercel.app/",
    githubUrl: "https://github.com/AhmedHazemRaafat/ai-document-qa",
  },
  {
    id: "realtime-collaborative-workspace",
    name: "CollabSpace",
    problem:
      "Teams need Google Docs–level real-time collaboration with full control over their stack and data.",
    description:
      "A collaborative document editor powered by Yjs CRDTs for conflict-free merging, live cursors and presence, threaded comments, auto version snapshots every five minutes, workspace roles, email invitations, and Markdown/PDF export — with a dedicated WebSocket server on Railway.",
    techStack: [
      "Next.js",
      "Tiptap",
      "Yjs",
      "WebSockets",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
    ],
    liveUrl: "https://realtime-collaborative-workspace.vercel.app/",
    githubUrl:
      "https://github.com/AhmedHazemRaafat/realtime_collaborative_workspace",
  },
  {
    id: "saas-billing-dashboard",
    name: "SaaS Billing Dashboard",
    problem:
      "SaaS founders need multi-tenant billing, plan limits, and subscription management without rebuilding Stripe integration from scratch.",
    description:
      "A full multi-tenant billing platform with Free/Pro/Enterprise Stripe subscriptions, usage tracking with plan enforcement, customer billing portal, admin MRR/churn analytics, transactional emails, and GDPR data export and deletion — all scoped per organization.",
    techStack: [
      "Next.js",
      "Stripe",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "Recharts",
      "Resend",
    ],
    liveUrl: "https://saas-billing-dashboard-omega.vercel.app/",
    githubUrl: "https://github.com/AhmedHazemRaafat/saas-billing-dashboard",
  },
];
