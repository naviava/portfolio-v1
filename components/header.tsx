"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { useActiveSectionStore } from "@/hooks/use-active-section-store";

import { cn } from "@/lib/utils";
import { links } from "@/lib/data";

export default function Header() {
  const { activeSection, setActiveSection, setLastClicked } =
    useActiveSectionStore();

  return (
    <header className="relative z-[999] scroll-mt-28">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 100 }}
        className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
      />
      <nav className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              className="flex h-3/4 items-center justify-center"
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setLastClicked(Date.now());
                  setActiveSection(link.name);
                }}
                className={cn(
                  "relative flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-white",
                  activeSection === link.name &&
                    "text-white hover:text-white dark:text-white",
                )}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 -z-10 my-2 rounded-full bg-violet-500 dark:bg-violet-800"
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
