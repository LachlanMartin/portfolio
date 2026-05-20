"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "../lib/projects";

type ProjectShowcaseProps = {
  project: Project;
  /** Seconds between image transitions */
  intervalSec?: number;
};

export function ProjectShowcase({
  project,
  intervalSec = 5,
}: ProjectShowcaseProps) {
  const [active, setActive] = useState(0);
  const images = project.images;

  useEffect(() => {
    if (images.length <= 1) return;
    const ms = Math.max(2, intervalSec) * 1000;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, ms);
    return () => window.clearInterval(id);
  }, [images.length, intervalSec]);

  return (
    <article className="w-full max-w-xl text-left rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950/40 overflow-hidden shadow-sm">
      <div className="relative aspect-[16/10] w-full bg-neutral-900">
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
              className="object-contain p-8"
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

      <div className="p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
          {project.title}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
          {project.shortDescription}
        </p>

        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 underline underline-offset-4 transition-colors"
          >
            Visit site
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : null}

        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-2.5">
            Tech
          </p>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map(({ name, icon: Icon }) => (
              <span
                key={name}
                className="inline-flex items-center gap-1.5 rounded border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/80 px-2.5 py-1 text-xs text-neutral-700 dark:text-neutral-300"
                title={name}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-2.5">
            Skills
          </p>
          <div className="flex flex-wrap gap-3">
            {project.skillSections.map((section) => (
              <span
                key={section.title}
                className="rounded border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/80 px-2.5 py-1 text-xs text-neutral-700 dark:text-neutral-300"
              >
                {section.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
