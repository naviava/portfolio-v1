"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
    >
      <SectionHeading title="About Me" />
      <p className="mb-6">
        I have a bachelor&apos;s degree in{" "}
        <span className="font-[600]">Information Science and Engineering</span>{" "}
        and <span className="font-[600]">9 years</span> of experience in{" "}
        <span className="font-medium">IT Security and Systems Management</span>.
        After being away from home for so long, I decided to return and pursue
        my passion of getting into programming.{" "}
        <span className="italic underline">
          I love the feeling of problem-solving using logic
        </span>
        . It gives a sort of happiness that is{" "}
        <span className="italic">unparalleled</span>. The tech stacks I learned
        during my time in college were outdated, so I decided to learn React and
        fell in love instantly. My core stack is{" "}
        <span className="font-[600]">React, Next.js, Node.js</span> using{" "}
        <span className="font-[600]">TypeScript</span> and{" "}
        <span className="font-[600]">MongoDB / MySQL</span>. I am also
        well-versed with <span className="font-[600]">Prisma ORM</span>. I am
        always looking to{" "}
        <span className="italic underline">learn new technologies</span> and{" "}
        <span className="italic underline">updating myself continuously</span>.
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        When I&apos;m not coding, I enjoy playing video games, watching
        football, content creation, writing on my blog, exploring and trying
        different kinds of food, reading a good book or listening to one on
        Audible. I am also keen on learning{" "}
        <span className="font-medium">Data Science</span> and eventually dive
        into <span className="font-medium">Machine Learning</span> and{" "}
        <span className="font-medium">A.I</span>, using{" "}
        <span className="font-[600]">Python</span>.
      </p>
    </motion.section>
  );
}
