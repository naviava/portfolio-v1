import React from "react";

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
      "After graduation, I immediately found a job as a Systems Engineer at Accenture.",
    icon: React.createElement(LuGraduationCap),
    date: "2012 - 2013",
  },
  {
    title: "IT Systems Engineer",
    location: "Abu Dhabi, UAE",
    description:
      "I worked as an IT Systems Engineer at Danat Al Emarat Hospital for just over 8 years. During my final years, IT Security, and ISO27001 adherence became my main role.",
    icon: React.createElement(CgWorkAlt),
    date: "2013 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Bengaluru, India",
    description:
      "As a full-stack developer working as a freelancer. I've cultivated a strong skill set that includes React, Next.js, TypeScript, TailwindCSS and Prisma ORM with MongoDB, MySQL, and PostgreSQL databases. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Fondingo",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "TypeScript", "MySQL", "TailwindCSS", "Prisma"],
    imageUrl: fondingoImg,
  },
  {
    title: "Vacation Haven",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "Express", "TailwindCSS", "MongoDB"],
    imageUrl: vacationHavenImg,
  },
  {
    title: "Academix Learning Management System",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "TypeScript", "MySQL", "TailwindCSS", "Prisma"],
    imageUrl: academixImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "Prisma",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Express",
  "Python",
  "Django",
  "Framer Motion",
] as const;