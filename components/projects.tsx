"use client";

import { Fragment } from "react";

import { useSection } from "@/hooks/use-section";

import ProjectItem from "@/components/project-item";
import SectionHeading from "@/components/section-heading";

import { projectsData } from "@/lib/data";

export default function Projects() {
  const ref = useSection("Projects", 0.4);

  return (
    <section id="projects" ref={ref} className="scroll-mt-28">
      <SectionHeading title="My Projects" />
      <div className="space-y-3 sm:space-y-8">
        {projectsData.map((project, idx) => (
          <Fragment key={idx}>
            <ProjectItem {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
