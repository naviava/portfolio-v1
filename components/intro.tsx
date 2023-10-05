"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";

import { useSection } from "@/hooks/use-section";
import { useActiveSectionStore } from "@/hooks/use-active-section-store";

import myPortrait from "@/public/myPortrait.jpg";

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
            🤘
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hello, I&apos;m Navin.</span> I&apos;m a{" "}
        <span className="font-bold">Full-Stack Web Developer</span>, who loves
        building <span className="italic">websites & apps</span>, using{" "}
        <span className="font-bold italic underline">React & NextJS</span>.
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
          Contact me
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="group flex cursor-pointer select-none items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 transition group-hover:animate-bounce group-hover:text-emerald-600" />
        </a>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/navin-avadhani-aa288785/"
            target="_blank"
            className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-600 transition hover:scale-[1.15] hover:text-[#0072b1] focus:scale-[1.15] active:scale-105"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/naviava"
            target="_blank"
            className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-[0.9rem] text-[1.35rem] text-gray-600 transition hover:scale-[1.15] hover:text-[#171515] focus:scale-[1.15] active:scale-105"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
