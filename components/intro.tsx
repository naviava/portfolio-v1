"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaHashnode } from "react-icons/fa6";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";

import { useActiveSectionStore } from "@/hooks/use-active-section-store";
import { useSection } from "@/hooks/use-section";

import { SocialLink } from "@/components/social-link";

import { myPortrait } from "@/public/images";

export default function Intro() {
  const ref = useSection("Home");
  const { setActiveSection, setLastClicked } = useActiveSectionStore();

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-52 text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={myPortrait}
              alt="Navin's portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-3xl"
          >
            🚀
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hi, I’m Navin Avadhani.</span> I’m a{" "}
        <span className="font-bold">Full-Stack Software Engineer</span> with
        over <span className="font-bold">10 years of IT experience</span>,
        specializing in{" "}
        <span className="italic">scalable web applications</span>. I craft
        reliable, innovative solutions using{" "}
        <span className="font-bold underline">React and TypeScript</span>.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row"
      >
        <Link
          href="#contact"
          onClick={() => {
            setLastClicked(Date.now());
            setActiveSection("Contact");
          }}
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Get in Touch
          <BsArrowRight className="shrink-0 opacity-70 transition group-hover:translate-x-1" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="group flex cursor-pointer select-none items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
        >
          Download Resume{" "}
          <HiDownload className="shrink-0 opacity-60 transition group-hover:animate-bounce group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
        </a>
        <div className="flex gap-4">
          <SocialLink
            icon={FaGithubSquare}
            label="GitHub"
            url="https://github.com/naviava"
            className="text-[1.35rem] hover:text-[#171515] dark:hover:text-[#c9c4c4]"
          />
          <SocialLink
            icon={BsLinkedin}
            label="LinkedIn"
            url="https://www.linkedin.com/in/navin-avadhani-aa288785"
            className="hover:text-[#0072b1] dark:hover:text-[#6baed2]"
          />
          <SocialLink
            icon={FaSquareXTwitter}
            label="X (Twitter)"
            url="https://twitter.com/oldmannav"
            className="text-[1.3rem] hover:text-neutral-900 dark:hover:text-neutral-900"
          />
          <SocialLink
            icon={FaHashnode}
            label="Hashnode Blog"
            url="https://naviava.hashnode.dev"
            className="text-[1.3rem] hover:text-[#2962FF] dark:hover:text-[#2962FF]"
          />
        </div>
      </motion.div>
    </section>
  );
}
