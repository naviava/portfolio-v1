"use client";

import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { useSection } from "@/hooks/use-section";

import SectionHeading from "@/components/section-heading";

import { experiencesData } from "@/lib/data";

export default function Experience() {
  const { ref } = useSection("Experience", 0.5);

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading title="My Experience" />
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, idx) => (
          <VerticalTimelineElement
            key={idx}
            contentStyle={{
              backgroundColor: "#f3f4f6",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{ borderRight: "0.5rem solid #9ca3af" }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: "white",
              color: "#696666",
            }}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="!mt-1 !text-sm !font-normal">{item.location}</p>
            <p className="!font-normal text-gray-700">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
