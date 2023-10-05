import { create } from "zustand";
import { SectionType } from "@/types";

type ActiveSectionStore = {
  activeSection: SectionType;
  setActiveSection: (sectionName: SectionType) => void;
  lastClicked: number;
  setLastClicked: (time: number) => void;
};

export const useActiveSectionStore = create<ActiveSectionStore>((set) => ({
  activeSection: "Home",
  setActiveSection: (sectionName: SectionType) =>
    set({ activeSection: sectionName }),
  lastClicked: 0,
  setLastClicked: (time: number) => set({ lastClicked: time }),
}));
