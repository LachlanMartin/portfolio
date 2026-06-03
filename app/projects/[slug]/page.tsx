import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getProjectBySlug,
  projects,
} from "../../lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} — skills`,
    description: `Skills and technical depth demonstrated in ${project.title}.`,
  };
}

export default async function ProjectSkillsPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="w-full max-w-xl text-left">
      <Link
        href="/"
        className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 underline-offset-4 hover:underline"
      >
        ← Back
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
        {project.title}
      </h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400 font-light">
        Technical skills demonstrated in this project
      </p>

      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 underline underline-offset-4 transition-colors"
        >
          {project.url.includes("github.com") ? "View on GitHub" : "Visit site"}
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      ) : null}

      <ul className="mt-8 space-y-8">
        {project.skillSections.map((section) => (
          <li key={section.title}>
            <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
              {section.title}
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap gap-3">
        {project.techStack.map(({ name, icon: Icon }) => (
          <span
            key={name}
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/80 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-300"
          >
            <Icon className="h-4 w-4 shrink-0" aria-hidden />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
