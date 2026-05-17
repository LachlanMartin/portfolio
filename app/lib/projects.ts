import type { IconType } from "react-icons";

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
  images: { src: string; alt: string }[];
  techStack: ProjectTech[];
  skillSections: ProjectSkillSection[];
};

export const projects: Project[] = [];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
