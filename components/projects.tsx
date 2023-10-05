import { Fragment } from "react";

import ProjectItem from "@/components/project-item";
import SectionHeading from "@/components/section-heading";

import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section>
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
