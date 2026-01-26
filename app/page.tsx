"use client";

import Image from "next/image";
import Link from "next/link";
import { metaData, socialLinks } from "./lib/config";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

const navItems = {
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" },
  "/photos": { name: "Photos" },
};

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
          <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
          <SocialLink href={socialLinks.github} icon={FaGithub} />
          <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
          <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
          <SocialLink href={socialLinks.email} icon={TbMailFilled} />
          <a href="/rss.xml" target="_self">
            <FaRss />
          </a>
        </div>
      </header>
      <nav className="flex flex-col gap-4 items-center">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 text-base"
          >
            {name}
          </Link>
        ))}
      </nav>
    </section>
  );
}
