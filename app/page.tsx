"use client";

import Image from "next/image";
import { metaData, socialLinks } from "./lib/config";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa6";
import { FaStrava } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { SiThreads, SiLetterboxd } from "react-icons/si";

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
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
        DevOps Engineer
      </p>
      <header className="mb-8 text-center">
        <div className="flex text-xl gap-4 justify-center transition-opacity duration-300 hover:opacity-90">
          {/* Professional */}
          <SocialLink href={socialLinks.email} icon={TbMailFilled} />
          <SocialLink href={socialLinks.github} icon={FaGithub} />
          <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
          {/* Social Media */}
          <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
          <SocialLink href={socialLinks.threads} icon={SiThreads} />
          {/* Content */}
          <SocialLink href={socialLinks.youtube} icon={FaYoutube} />
          {/* Hobbies */}
          <SocialLink href={socialLinks.spotify} icon={FaSpotify} />
          <SocialLink href={socialLinks.strava} icon={FaStrava} />
          <SocialLink href={socialLinks.letterboxd} icon={SiLetterboxd} />
        </div>
      </header>
      <div className="mt-8 flex items-center justify-center min-h-[100px]">
        <p className="text-neutral-600 dark:text-neutral-400 text-base">
          Projects coming soon
        </p>
      </div>
      <div className="mt-8">
        <Image
          src="/Personal_Brand_Logo-Light-removebg-preview.png"
          alt="Personal Brand Logo"
          width={48}
          height={48}
          className="dark:hidden"
          unoptimized
          priority
        />
        <Image
          src="/Personal_Brand_Logo-Dark-removebg-preview.png"
          alt="Personal Brand Logo"
          width={48}
          height={48}
          className="hidden dark:block"
          unoptimized
          priority
        />
      </div>
    </section>
  );
}
