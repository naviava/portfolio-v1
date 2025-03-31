"use client";

import { motion } from "framer-motion";
import { useSection } from "@/hooks/use-section";
import SectionHeading from "@/components/section-heading";

export default function About() {
  const ref = useSection("About");

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-justify leading-8 sm:mb-40"
    >
      <SectionHeading title="About Me" />
      <p className="mb-6">
        I&apos;m a{" "}
        <span className="font-[600]">Full-Stack Software Engineer</span> with
        over <span className="font-[600]">10 years of IT experience</span>,
        transitioning from{" "}
        <span className="font-medium">IT systems and security leadership</span>{" "}
        to building{" "}
        <span className="italic">scalable, user-focused web applications</span>.
        I hold a{" "}
        <span className="font-[600]">
          B.E. in Information Science & Engineering
        </span>{" "}
        and an <span className="font-[600]">MBA Global</span>, blending
        technical expertise with a strategic mindset. At{" "}
        <span className="font-medium">Danat Al Emarat Hospital</span>, I was a
        key member of the founding IT team, shaping its infrastructure from the
        ground up into a public success story—overseeing everything from data
        center deployment to achieving ADHICS compliance (akin to ISO27001) on
        the first audit.
      </p>
      <p className="mb-6">
        Today, I specialize in crafting{" "}
        <span className="font-medium">reliable, innovative solutions</span>{" "}
        using modern tools like{" "}
        <span className="font-[600]">React and TypeScript</span>, alongside
        backend technologies such as{" "}
        <span className="font-[600]">
          Node.js, SQL, MongoDB, Redis, and Kafka
        </span>
        . Whether it&apos;s streamlining expense tracking for groups, building
        blockchain-based NFT platforms, or designing secure ticketing systems, I
        thrive on turning complex challenges into intuitive, high-performing
        applications. I&apos;m passionate about staying ahead of the curve,
        continuously{" "}
        <span className="italic underline">
          adapting to emerging technologies
        </span>{" "}
        to deliver cutting-edge results.
      </p>
      <p>
        Beyond coding, I&apos;m an avid problem-solver who enjoys exploring new
        cuisines, diving into a good book, and cheering on my favorite football
        teams. I&apos;m excited to bring my skills to a{" "}
        <span className="font-medium">full-time role</span> or{" "}
        <span className="font-medium">freelance projects</span>, delivering
        impactful solutions that drive success for businesses and users alike.
      </p>
    </motion.section>
  );
}
