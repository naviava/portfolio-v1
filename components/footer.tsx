export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 px-4 pb-12 text-center text-gray-500">
      <small className="text-xs">
        &copy; 2023 Navin Avadhani. All rights reserved.
      </small>
      <small className="text-xs">
        This portfolio has been built with{" "}
        <span className="font-semibold">React.js</span> and{" "}
        <span className="font-semibold">Next.js (app router)</span> using
        <span className="font-semibold">TypeScript</span>,{" "}
        <span className="font-semibold">TailwindCSS</span>,{" "}
        <span className="font-semibold">Zustand</span> and{" "}
        <span className="font-semibold">Framer Motion</span>.
      </small>
    </footer>
  );
}
