"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ProjectShowcase } from "./components/project-showcase";
import { metaData, socialLinks } from "./lib/config";
import { projects } from "./lib/projects";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSpotify,
} from "react-icons/fa6";
import { FaStrava, FaPaypal } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { SiLetterboxd } from "react-icons/si";

function SocialLink({ href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-60 transition-opacity duration-200"
    >
      <Icon />
    </a>
  );
}

export default function Page() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center">
      <Image
        src="/profile.png"
        alt="Profile photo"
        className="w-32 h-32 rounded-full object-cover object-center bg-gray-100 mb-6 grayscale"
        unoptimized
        width={128}
        height={128}
        priority
        style={{ objectPosition: '50% 30%' }}
      />
      <h1 className="mb-3 text-4xl font-semibold">{metaData.title}</h1>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400 text-base font-light">
        <span>
          <span className="font-semibold">DevOps</span>
          <span className="mx-2 text-neutral-400 dark:text-neutral-500">/</span>
          <span className="font-semibold">SRE</span>
          <span className="mx-2 text-neutral-400 dark:text-neutral-500">/</span>
          <span className="font-semibold">Cloud</span>
        </span>
   
      </p>
      <header className="mb-6 text-center">
        <div className="flex text-xl gap-4 justify-center">
          <SocialLink href={socialLinks.email} icon={TbMailFilled} />
          <SocialLink href={socialLinks.github} icon={FaGithub} />
          <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
          <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
          <SocialLink href={socialLinks.spotify} icon={FaSpotify} />
          <SocialLink href={socialLinks.strava} icon={FaStrava} />
          <SocialLink href={socialLinks.letterboxd} icon={SiLetterboxd} />
          <SocialLink href={socialLinks.paypal} icon={FaPaypal} />
        </div>
      </header>

      <div className="mt-6 w-full flex flex-col items-center gap-8">
        <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
          Projects
        </h2>
        {projects.map((project) => (
          <ProjectShowcase key={project.slug} project={project} />
        ))}
      </div>


      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-4 z-50 p-2.5 rounded-full bg-white/80 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:bg-white dark:hover:bg-neutral-800 transition-all duration-500 ease-out ${
          showScrollTop
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-12 opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg className="h-4 w-4 text-neutral-600 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </section>
  );
}
