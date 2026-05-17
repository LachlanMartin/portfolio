"use client";

import Image from "next/image";
import { ProjectShowcase } from "./components/project-showcase";
import { metaData, socialLinks } from "./lib/config";
import { projects } from "./lib/projects";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa6";
import { FaStrava, FaPaypal } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { SiThreads, SiLetterboxd } from "react-icons/si";

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
          {/* Professional */}
          <SocialLink href={socialLinks.email} icon={TbMailFilled} />
          <SocialLink href={socialLinks.github} icon={FaGithub} />
          <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
          {/* Social Media */}
          <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
          {/* <SocialLink href={socialLinks.threads} icon={SiThreads} /> */}
          {/* Content */}
          {/* <SocialLink href={socialLinks.youtube} icon={FaYoutube} /> */}
          {/* Hobbies */}
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
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectShowcase key={project.slug} project={project} />
          ))
        ) : (
          <p className="text-neutral-500 dark:text-neutral-500 text-sm font-light italic">
            Projects coming soon...
          </p>
        )}
      </div>
    </section>
  );
}
