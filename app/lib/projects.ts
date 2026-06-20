import type { IconType } from "react-icons";
import { LuMail, LuTestTubeDiagonal } from "react-icons/lu";
import {
  SiAmazoncognito,
  SiAmazoniam,
  SiAmazonrds,
  SiAmazonroute53,
  SiAmazons3,
  SiAwsamplify,
  SiAwssecretsmanager,
  SiCloudflare,
  SiDocker,
  SiGithubactions,
  SiResend,
  SiStripe,
  SiNextdotjs,
  SiOllama,
  SiPnpm,
  SiPostgresql,
  SiPrisma,
  SiSwift,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

export type ProjectSkillSection = {
  title: string;
  items: string[];
};

export type ProjectTech = {
  name: string;
  icon: IconType;
  description?: string;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  url?: string;
  images: { src: string; alt: string }[];
  techStack: ProjectTech[];
  skillSections: ProjectSkillSection[];
};

export const projects: Project[] = [
  {
    slug: "startline",
    title: "Startline",
    shortDescription:
      "Fitness event discovery for Australia: HYROX, CrossFit, running, and hybrid competitions in one searchable place—with filters by type, state, date, and format plus links to official registration.",
    url: "https://startlineau.com",
    images: [
      {
        src: "/photos/startline-logo.svg",
        alt: "Startline",
      },
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs, description: "App Router with server components, API routes, and middleware for a fast fitness event directory." },
      { name: "TypeScript", icon: SiTypescript, description: "Full type safety across database queries, API handlers, and React components." },
      { name: "Tailwind CSS", icon: SiTailwindcss, description: "Custom dark athletic design system with responsive layouts throughout." },
      { name: "Prisma", icon: SiPrisma, description: "Type-safe ORM with PostgreSQL on AWS RDS for event and user data." },
      { name: "PostgreSQL", icon: SiPostgresql, description: "Relational database on AWS RDS with production and non-production instances." },
      { name: "AWS RDS", icon: SiAmazonrds, description: "Managed PostgreSQL with automated backups, Multi-AZ, and separate prod/non-prod instances." },
      { name: "AWS Amplify", icon: SiAwsamplify, description: "Hosting with per-branch configuration, CI/CD, and Terraform-provisioned IAM roles." },
      { name: "AWS Cognito", icon: SiAmazoncognito, description: "User pools for customers, organisers, and admins with email-based sign-in and JWT verification." },
      { name: "Terraform", icon: SiTerraform, description: "Multi-environment infrastructure provisioning for VPC, RDS, Cognito, Route 53, and OIDC." },
      { name: "Route53", icon: SiAmazonroute53, description: "DNS for startlineau.com with ALIAS, MX, SPF, DKIM, and ACM validation records." },
      { name: "S3", icon: SiAmazons3, description: "App file uploads (logos, covers, photos) and remote Terraform state storage." },
      { name: "IAM", icon: SiAmazoniam, description: "OIDC trust for GitHub Actions CI, plus Amplify execution and per-service roles." },
      { name: "Secrets Manager", icon: SiAwssecretsmanager, description: "Database credentials and environment secrets per deployment environment." },
      { name: "Stripe", icon: SiStripe, description: "Payment processing with Stripe Connect for organiser onboarding and payment intents." },
      { name: "Resend", icon: SiResend, description: "Transactional email for contact forms, event registration, and waitlist notifications." },
      { name: "GitHub Actions", icon: SiGithubactions, description: "CI/CD with terraform-plan on PRs and terraform-apply on merge to main." },
      { name: "Cloudflare", icon: SiCloudflare, description: "DNS, CDN, and SSL/TLS for startlineau.com with proxy and security rules." },
    ],
    skillSections: [
      {
        title: "Product & frontend",
        items: [
          "Next.js 15 App Router with TypeScript and Tailwind for a fast, responsive UI.",
          "Event discovery UX: browse and filter competitions by type, Australian state, date range, and individual vs team format.",
          "Radix-based accessible components (accordions, composition patterns) alongside a cohesive dark, athletic visual style.",
        ],
      },
      {
        title: "Data & persistence",
        items: [
          "Prisma as the data access layer with a PostgreSQL database.",
          "PostgreSQL on AWS RDS with separate non-production and production databases (`startline-nonprod-postgres` / `startline-prod-postgres`).",
          "Clear separation of app schema/migrations from operational concerns documented in the deployment guide.",
        ],
      },
      {
        title: "AWS infrastructure (Terraform)",
        items: [
          "Multi-environment Terraform (`module.env[*]`) provisioning VPCs, RDS, Cognito user pools, and per-branch Amplify configuration.",
          "Shared concerns: Route 53 for `startlineau.com`, S3-backed remote state, and GitHub OIDC trust for CI roles.",
          "Terraform applies on merge to `main`; application deploys are decoupled and run on `non-production` / `production` branches only.",
        ],
      },
      {
        title: "CI/CD & release discipline",
        items: [
          "GitHub Actions: `terraform-plan` on PRs (fmt, validate, plan + PR comment) and `terraform-apply` on push to `main` when infra changes.",
          "Promotion flow `feature → main → non-production → production` with documented reset procedures for staging.",
          "Awareness of ordering: new Amplify env vars from Terraform require a branch rebuild or console redeploy to take effect.",
        ],
      },
      {
        title: "Integrations & operations",
        items: [
          "Transactional email via Resend (API key supplied as a GitHub Actions / Amplify secret).",
          "Cognito-backed authentication shape in infrastructure; operational defaults like RDS deletion protection differ sensibly between prod and nonprod.",
        ],
      },
    ],
  },
  {
    slug: "the-morning-money",
    title: "The Morning Money",
    shortDescription:
      "Plain-English summaries of ASX announcements for the tickers you watch. Delivered every morning — with zero external accounts required.",
    url: "https://github.com/LachlanMartin/the-morning-money",
    images: [
      {
        src: "/projects/the-morning-money/favicon.svg",
        alt: "The Morning Money",
      },
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs, description: "App Router with React 19 orchestrating ASX ingest, analysis, and email delivery." },
      { name: "TypeScript", icon: SiTypescript, description: "End-to-end type safety across the full pipeline — database, LLM, and email." },
      { name: "Tailwind CSS", icon: SiTailwindcss, description: "Utility-first styling with Tailwind CSS 4 for a clean, minimal interface." },
      { name: "Prisma", icon: SiPrisma, description: "Type-safe ORM with PrismaPg adapter and dual-connection layout for migrations and runtime." },
      { name: "PostgreSQL", icon: SiPostgresql, description: "Relational database with pgvector extension on PostgreSQL 17." },
      { name: "Docker", icon: SiDocker, description: "Multi-service orchestration with Compose — app, database, Ollama, Mailpit, and cron sidecar." },
      { name: "Ollama", icon: SiOllama, description: "Local LLM inference with gemma3:12b for ASX announcement analysis." },
      { name: "Nodemailer", icon: LuMail, description: "SMTP email delivery for the daily morning digest." },
      { name: "pnpm", icon: SiPnpm, description: "Fast, disk-efficient package manager with strict dependency resolution." },
      { name: "Playwright", icon: LuTestTubeDiagonal, description: "E2E tests covering the full ingest-analyse-deliver pipeline." },
    ],
    skillSections: [
      {
        title: "Product & frontend",
        items: [
          "Next.js 16 App Router with React 19 and Tailwind CSS 4 for a clean, responsive UI.",
          "Local-first UX: clone and docker compose up gives a fully working app with local LLM, local email, and local storage.",
          "shadcn components with Lucide icons for a polished interface.",
        ],
      },
      {
        title: "Data & persistence",
        items: [
          "Prisma 7 as the data access layer with PostgreSQL 17 and pgvector extension for vector search capabilities.",
          "Dual connection layout: DIRECT_URL for migrations, DATABASE_URL for runtime queries via PrismaPg adapter.",
          "Announcements deduplicated by sourceHash; at most one email per user/day via DigestRun unique constraint.",
        ],
      },
      {
        title: "Local LLM pipeline",
        items: [
          "Ollama with gemma3:12b for local ASX announcement analysis — summary, sentiment, and directional insight.",
          "Daily digest pipeline: ingest PDFs from ASX, analyse via Ollama, compose digest, deliver via email.",
          "Cost efficient: one analysis per announcement, not per user — capped at O(announcements).",
        ],
      },
      {
        title: "Email & automation",
        items: [
          "Nodemailer for SMTP delivery in production; Mailpit captures and inspects all outbound email in development.",
          "Cron sidecar triggers the digest pipeline weekdays at 10am AEST, with manual trigger via shell script.",
          "Idempotent pipeline design prevents duplicate emails via unique constraints and sourceHash deduplication.",
          "Playwright e2e tests and Vitest unit tests ensure reliability across ingest, analysis, and delivery.",
        ],
      },
    ],
  },
  {
    slug: "onedisplay",
    title: "OneDisplay",
    shortDescription:
      "macOS menu bar utility that auto-blanks your laptop screen when an external monitor is plugged in, using CGDisplayCapture. Clamshell-aware, handles sleep/wake, Launch at Login support, no external dependencies.",
    url: "https://github.com/LachlanMartin/OneDisplay",
    images: [
      {
        src: "/projects/onedisplay/app-icon.png",
        alt: "OneDisplay",
      },
    ],
    techStack: [
      { name: "Swift", icon: SiSwift, description: "Native macOS menu bar app using AppKit, SwiftUI, and CGDisplayCapture for display management." },
    ],
    skillSections: [
      {
        title: "Core display management",
        items: [
          "Uses CGDisplayCapture to take exclusive control of the built-in display, rendering it black and inactive when an external monitor is connected.",
          "Monitors display connection/disconnection via NSNotificationCenter and restores the laptop screen on disconnect.",
          "Clamshell-aware: blanking respects whether the laptop lid is open or closed.",
        ],
      },
      {
        title: "Menu bar app",
        items: [
          "Lightweight menu bar utility with SwiftUI for the popover and AppKit for display management.",
          "Launch at Login support via SMAppService (macOS 13+).",
          "Hide icon mode — runs silently in the background.",
          "Handles sleep/wake events gracefully, re-blanking on wake if a monitor is still connected.",
        ],
      },
      {
        title: "Build & dependencies",
        items: [
          "Pure Swift — zero external dependencies.",
          "Makefile-based build system with targets for build, bundle, run, and icon generation.",
          "MIT licensed, supports Apple Silicon and Intel Macs on macOS 13+.",
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
