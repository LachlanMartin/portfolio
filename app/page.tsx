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
        DevOps Engineer @ NAB
      </p>
      <header className="mb-8 text-center">
        <div className="flex text-xl gap-4 justify-center transition-opacity duration-300 hover:opacity-90">
          <SocialLink href={socialLinks.github} icon={FaGithub} />
          <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
          <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
          <SocialLink href={socialLinks.youtube} icon={FaYoutube} />
          <SocialLink href={socialLinks.strava} icon={FaStrava} />
          <SocialLink href={socialLinks.spotify} icon={FaSpotify} />
          <SocialLink href={socialLinks.threads} icon={SiThreads} />
          <SocialLink href={socialLinks.letterboxd} icon={SiLetterboxd} />
          <SocialLink href={socialLinks.email} icon={TbMailFilled} />
        </div>
      </header>
      <div className="mt-12 w-full">
        <div className="flex flex-col gap-16">
          <div className="flex flex-row items-center gap-6">
            <div className="flex flex-col space-y-1 text-left w-1/2">
              <h3 className="text-xl font-medium text-black dark:text-white">Timed Passwords</h3>
              {/* <p className="text-neutral-600 dark:text-neutral-400 text-sm">Store passwords away behind a timed unlock. Helping you beat screen time addictions.</p> */}
            </div>
            <div className="w-1/2 aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
              <p className="text-xs text-center text-neutral-500 dark:text-neutral-400 px-2">To be announced soon</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-6">
            <div className="w-1/2 aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
              <p className="text-xs text-center text-neutral-500 dark:text-neutral-400 px-2">To be announced soon</p>
            </div>
            <div className="flex flex-col space-y-1 text-right w-1/2">
              <h3 className="text-xl font-medium text-black dark:text-white">Vyne</h3>
              {/* <p className="text-neutral-600 dark:text-neutral-400 text-sm">Showcase your music taste by building your own virtual vinyl collection.</p> */}
            </div>
          </div>
          <div className="flex flex-row items-center gap-6">
            <div className="flex flex-col space-y-1 text-left w-1/2">
              <h3 className="text-xl font-medium text-black dark:text-white">Morning Money</h3>
              {/* <p className="text-neutral-600 dark:text-neutral-400 text-sm">Daily AI summary of latest stakeholders news of your market watchlist.</p> */}
            </div>
            <div className="w-1/2 aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center">
              <p className="text-xs text-center text-neutral-500 dark:text-neutral-400 px-2">To be announced soon</p>
            </div>
          </div>
        </div>
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
