import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionType } from "@/types";
import { useActiveSectionStore } from "./use-active-section-store";

export function useSection(sectionName: SectionType, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold });
  const { lastClicked, setActiveSection } = useActiveSectionStore();

  useEffect(() => {
    if (inView && Date.now() - lastClicked > 1000)
      setActiveSection(sectionName);
  }, [inView, lastClicked, sectionName, setActiveSection]);

  return { ref, inView };
}
