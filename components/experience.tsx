"use client";

import { useTheme } from "next-themes";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { useSection } from "@/hooks/use-section";

import SectionHeading from "@/components/section-heading";

import { experiencesData } from "@/lib/data";

export default function Experience() {
  const { theme } = useTheme();
  const ref = useSection("Experience", 0.5);

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading title="My Experience" />
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, idx) => (
          <VerticalTimelineElement
            key={idx}
            contentStyle={{
              backgroundColor:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.5rem solid #9ca3af"
                  : "0.5rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: theme === "light" ? "white" : "#343a47",
              color: theme === "light" ? "#696666" : "rgba(255, 255, 255, 0.7)",
            }}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="!mt-1 !text-sm !font-normal">{item.location}</p>
            <p className="!font-normal text-gray-700 dark:text-white/75">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
