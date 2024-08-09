import { createElement } from "react";

import { FaReact } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import {
  mintsagaImg,
  fsplitImg,
  ticketItImg,
  hotTiffinImg,
  fondingoImg,
  myBazaarImg,
} from "@/public/images";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Systems Engineer",
    location: "Bengaluru, India",
    description:
      "After earning my degree in Information Science Engineering, I quickly secured a position at Accenture, where I began my professional journey in IT systems engineering.",
    icon: createElement(LuGraduationCap),
    date: "2012 - 2013",
  },
  {
    title: "IT Systems Engineer",
    location: "Abu Dhabi, UAE",
    description:
      "I spent over 8 years at Danat Al Emarat Hospital, where I played a pivotal role in IT systems engineering. In my final years, I led the development and implementation of IT security policies, achieving ADHICS compliance, and focused on ensuring ISO27001 adherence. My responsibilities also included managing helpdesk operations, optimizing infrastructure, and enhancing overall system reliability.",
    icon: createElement(CgWorkAlt),
    date: "2013 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Bengaluru, India",
    description:
      "As a freelance full-stack developer, I've honed a robust skill set encompassing React, Next.js, TypeScript, and TailwindCSS, along with Prisma ORM for seamless integration with MongoDB, MySQL, and PostgreSQL databases. My focus is on building efficient, scalable, and visually engaging web applications. I am currently open to full-time opportunities where I can leverage my expertise to drive impactful solutions.",
    icon: createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "MintSaga",
    description:
      "A hackathon winner blockchain app for storing historical images as NFTs. Features include OAuth-based wallet linking, support for multiple wallets per account, public visibility toggling, favorites, and community comments.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "PWA",
      "Blockchain",
      "OAuth",
    ],
    image: mintsagaImg,
    href: "https://mintsaga.vercel.app",
  },
  {
    title: "FSplit",
    description:
      "An expense management application designed for efficient tracking and division among groups. It features a secure friends system, a specialized algorithm to simplify group debts, responsive design, and PWA capabilities.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "PWA",
      "PostgreSQL",
    ],
    image: fsplitImg,
    href: "https://split.fondingo.com",
  },
  {
    title: "Ticket It",
    description:
      "A helpdesk ticketing system with dynamic layouts for different user roles, various ticket assignment methods, and comprehensive ticket logs. Ensures secure ticket interactions with robust server and client-side security.",
    tags: ["React", "Next.js", "TypeScript", "MongoDB", "TailwindCSS"],
    image: ticketItImg,
    href: "https://ticket-it.vercel.app",
  },
  {
    title: "Hot Tiffin",
    description:
      "A restaurant point-of-sale system where staff can manage orders, personalize profiles, and customize menu items. Features include order history access and category management.",
    tags: ["React", "Next.js", "TypeScript", "MySQL", "TailwindCSS", "Prisma"],
    image: hotTiffinImg,
    href: "https://hot-tiffin.vercel.app",
  },
  {
    title: "Fondingo",
    description:
      "A personal blog website featuring an admin panel for adding and editing articles. The app is PWA-enabled, allowing users to access it like a mobile app.",
    tags: ["React", "Next.js", "TypeScript", "MySQL", "TailwindCSS", "Prisma"],
    image: fondingoImg,
    href: "https://github.com/naviava/readngrab",
  },
  {
    title: "My Bazaar",
    description:
      "An e-commerce app that includes an admin panel for managing store items. Uses PostgreSQL with Prisma ORM, with planned features like Stripe payment integration.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "TailwindCSS",
      "Prisma",
      "Stripe",
    ],
    image: myBazaarImg,
    href: "https://github.com/naviava/mybazaar",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Express",
  "Hono.js",
  "Cloudflare",
  "AWS",
  "Docker",
  "Node.js",
  "Git",
  "CI/CD",
  "TailwindCSS",
  "Prisma",
  "Zustand",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Framer Motion",
] as const;
