"use client";

import { useSection } from "@/hooks/use-section";
import SectionHeading from "@/components/section-heading";

export default function Skills() {
  const ref = useSection("Skills");

  return (
    <section ref={ref}>
      <SectionHeading title="My Skills" />
    </section>
  );
}
