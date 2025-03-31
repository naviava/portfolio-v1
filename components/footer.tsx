import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 px-4 pb-12 text-center text-gray-500">
      <small className="text-xs">
        &copy; 2025 Navin Avadhani. All rights reserved.
      </small>
      <small className="text-xs">
        This portfolio has been built with <Emphasized>Next.js</Emphasized>{" "}
        using
        <Emphasized>TypeScript</Emphasized>,{" "}
        <Emphasized>TailwindCSS</Emphasized>, <Emphasized>Zustand</Emphasized>{" "}
        and <Emphasized>Framer Motion</Emphasized>.
      </small>
    </footer>
  );
}

function Emphasized({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold">{children}</span>;
}
