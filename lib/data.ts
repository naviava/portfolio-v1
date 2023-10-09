import { createElement } from "react";

import { FaReact } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import fondingoImg from "@/public/fondingoImg.jpg";
import academixImg from "@/public/academixImg.jpg";
import vacationHavenImg from "@/public/vacationHavenImg.jpg";

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
      "After graduating as an Information Science Engineer, I immediately found a job at Accenture.",
    icon: createElement(LuGraduationCap),
    date: "2012 - 2013",
  },
  {
    title: "IT Systems Engineer",
    location: "Abu Dhabi, UAE",
    description:
      "I worked at Danat Al Emarat Hospital for just over 8 years. During my final years, IT Security, and ISO27001 adherence became my main role.",
    icon: createElement(CgWorkAlt),
    date: "2013 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Bengaluru, India",
    description:
      "As a full-stack developer working as a freelancer, I've cultivated a strong skill set that includes React, Next.js, TypeScript, TailwindCSS and Prisma ORM with MongoDB, MySQL, and PostgreSQL databases. I'm open to full-time opportunities.",
    icon: createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Academix LMS",
    description:
      "A learning management system, where users can create or enroll for courses. Has a robust admin panel and progress tracking functionality for each course.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "MySQL",
      "TailwindCSS",
      "Prisma",
      "Stripe",
    ],
    image: academixImg,
  },
  {
    title: "Vacation Haven",
    description:
      "An AirBnB clone, where users can add properties, mark favorites, make reservations and manage reservations for their owned properties.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "TailwindCSS",
      "Next-Auth",
      "Prisma",
    ],
    image: vacationHavenImg,
  },
  {
    title: "Fondingo",
    description:
      "I didn't want to use another blog site to write articles, so I made my own. Includes a custom built Headless CMS which is not public facing. This is a live website with additional features planned in the future.",
    tags: ["React", "Next.js", "TypeScript", "MySQL", "TailwindCSS", "Prisma"],
    image: fondingoImg,
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
  "Node.js",
  "Git",
  "TailwindCSS",
  "Prisma",
  "Zustand",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
