import { Resend } from "resend";

import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import SectionDivider from "@/components/section-divider";

const resend = new Resend(process.env.RESEND_API_KEY);

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
