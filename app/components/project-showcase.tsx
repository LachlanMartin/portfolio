"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "../lib/projects";

type ProjectShowcaseProps = {
  project: Project;
  intervalSec?: number;
};

function ExpandableContent({ expanded, children }: { expanded: boolean; children: React.ReactNode }) {
  const [cached, setCached] = useState(children);

  useEffect(() => {
    if (expanded) {
      const id = setTimeout(() => setCached(children), 50);
      return () => clearTimeout(id);
    } else {
      const id = setTimeout(() => setCached(null), 300);
      return () => clearTimeout(id);
    }
  }, [expanded, children]);

  return (
    <div
      className="grid transition-[grid-template-rows] duration-300 ease-out"
      style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden min-h-0">
        {expanded ? children : cached}
      </div>
    </div>
  );
}

export function ProjectShowcase({
  project,
  intervalSec = 5,
}: ProjectShowcaseProps) {
  const [active, setActive] = useState(0);
  const [expandedTech, setExpandedTech] = useState<string | null>(null);
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const techTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);
  const skillTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  const images = project.images;

  useEffect(() => {
    if (images.length <= 1) return;
    const ms = Math.max(2, intervalSec) * 1000;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, ms);
    return () => window.clearInterval(id);
  }, [images.length, intervalSec]);

  function toggleTech(name: string) {
    clearTimeout(techTimeout.current);
    if (expandedTech === name) {
      setExpandedTech(null);
    } else if (expandedTech === null) {
      setExpandedTech(name);
    } else {
      setExpandedTech(null);
      techTimeout.current = setTimeout(() => setExpandedTech(name), 300);
    }
  }

  function toggleSkill(title: string) {
    clearTimeout(skillTimeout.current);
    if (expandedSkill === title) {
      setExpandedSkill(null);
    } else if (expandedSkill === null) {
      setExpandedSkill(title);
    } else {
      setExpandedSkill(null);
      skillTimeout.current = setTimeout(() => setExpandedSkill(title), 300);
    }
  }

  const selectedTech = expandedTech
    ? project.techStack.find((t) => t.name === expandedTech)
    : null;

  const selectedSkill = expandedSkill
    ? project.skillSections.find((s) => s.title === expandedSkill)
    : null;

  return (
    <article
      id={`project-${project.slug}`}
      className="w-full max-w-xl text-left rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950/40 overflow-hidden shadow-sm"
    >
      <div
        className="relative aspect-video w-full bg-neutral-950"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      >
        {images.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
            aria-hidden={i !== active}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain p-4"
              sizes="(max-width: 640px) 100vw, 36rem"
              priority={i === 0}
            />
          </div>
        ))}
        {images.length > 1 ? (
          <div
            className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5"
            role="tablist"
            aria-label="Project images"
          >
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show image ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === active
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        <div className="flex items-baseline gap-3">
          <h2 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            {project.title}
          </h2>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 underline underline-offset-4 transition-colors shrink-0"
            >
              {project.url.includes("github.com") ? "GitHub" : "Site"}
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 underline underline-offset-4 transition-colors shrink-0"
            >
              GitHub
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ) : null}
        </div>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
          {project.shortDescription}
        </p>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-2">
            Tech
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(({ name, icon: Icon }) => (
              <button
                key={name}
                type="button"
                onClick={() => toggleTech(name)}
                className={`inline-flex items-center gap-1.5 rounded border px-2.5 py-1 text-xs cursor-pointer transition-colors ${
                  expandedTech === name
                    ? "border-neutral-400 dark:border-neutral-500 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
                    : "border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                {name}
              </button>
            ))}
          </div>
          <ExpandableContent expanded={!!selectedTech}>
            {selectedTech?.description && (
              <div className="mt-1.5 pt-2 border-t border-neutral-200 dark:border-neutral-700 text-xs text-neutral-500 dark:text-neutral-400 font-light leading-relaxed bg-neutral-100/50 dark:bg-neutral-900/50 px-2 pb-1.5 rounded-b">
                {selectedTech.description}
              </div>
            )}
          </ExpandableContent>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-2">
            Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {project.skillSections.map((section) => (
              <button
                key={section.title}
                type="button"
                onClick={() => toggleSkill(section.title)}
                className={`rounded border px-2.5 py-1 text-xs cursor-pointer transition-colors ${
                  expandedSkill === section.title
                    ? "border-neutral-400 dark:border-neutral-500 bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
                    : "border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
          <ExpandableContent expanded={!!selectedSkill}>
            {selectedSkill && (
              <ul className="mt-1.5 pt-2 border-t border-neutral-200 dark:border-neutral-700 space-y-1 bg-neutral-100/50 dark:bg-neutral-900/50 px-2 pb-1.5 rounded-b">
                {selectedSkill.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </ExpandableContent>
        </div>
      </div>
    </article>
  );
}
