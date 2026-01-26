import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Projects</h1>
      <div className="flex flex-col gap-16">
        {projects.map((project, index) => {
          // Alternate layout: even indices have image on right, odd indices have image on left
          const isEven = index % 2 === 0;
          const imageOnRight = isEven;
          
          // Text aligns TOWARDS the image for visual cohesion
          // When image is on right → text aligns right (towards image)
          // When image is on left → text aligns left (towards image)
          const textAlignment = imageOnRight ? "text-right" : "text-left";

          return (
            <Link
              key={index}
              href={project.url}
              className="flex flex-row items-center gap-6 transition-opacity duration-200 hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              {!imageOnRight && (
                <div className="w-1/2 aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  ) : (
                    <p className="text-xs text-center text-neutral-500 dark:text-neutral-400 px-2">To be announced soon</p>
                  )}
                </div>
              )}
              <div className={`flex flex-col space-y-1 ${textAlignment} w-1/2`}>
                <h2 className="text-xl font-medium text-black dark:text-white">{project.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {project.description}
                </p>
              </div>
              {imageOnRight && (
                <div className="w-1/2 aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  ) : (
                    <p className="text-xs text-center text-neutral-500 dark:text-neutral-400 px-2">To be announced soon</p>
                  )}
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
