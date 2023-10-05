"use client";

import { motion } from "framer-motion";
import { useSection } from "@/hooks/use-section";
import SectionHeading from "@/components/section-heading";
import { skillsData } from "@/lib/data";

const animationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Skills() {
  const { ref } = useSection("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading title="My Skills" />
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, idx) => (
          <motion.li
            key={idx}
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            custom={idx}
            viewport={{ once: true }}
            className="rounded-xl border border-black/10 bg-white px-5 py-3"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
