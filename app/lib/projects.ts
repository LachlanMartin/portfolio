import type { IconType } from "react-icons";
import {
  SiAwsamplify,
  SiGithubactions,
  SiNextdotjs,
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
    title: "StartLine",
    shortDescription:
      "Fitness event discovery for Australia: HYROX, CrossFit, running, and hybrid competitions in one searchable place—with filters by type, state, date, and format plus links to official registration.",
    url: "https://startlineau.com",
    images: [
      {
        src: "/photos/logo-title-white.png",
        alt: "StartLine",
      },
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "AWS Amplify", icon: SiAwsamplify },
      { name: "Terraform", icon: SiTerraform },
      { name: "GitHub Actions", icon: SiGithubactions },
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
      { name: "Swift", icon: SiSwift },
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
