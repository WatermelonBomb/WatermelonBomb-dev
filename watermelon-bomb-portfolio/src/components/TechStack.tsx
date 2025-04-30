import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiDjango, SiPostgresql, SiGithub, SiFigma } from "react-icons/si";
import { FaPython } from "react-icons/fa";

export default function TechStack() {
  const stacks = [
    { name: "TypeScript", icon: <SiTypescript />, level: "Advanced" },
    { name: "React", icon: <SiReact />, level: "Advanced" },
    { name: "Next.js", icon: <SiNextdotjs />, level: "Advanced" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Proficient" },
    { name: "Python", icon: <FaPython />, level: "Proficient" },
    { name: "Django", icon: <SiDjango />, level: "Proficient" },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: "Proficient" },
    { name: "GitHub", icon: <SiGithub />, level: "Daily Use" },
    { name: "Figma", icon: <SiFigma />, level: "UI Design" },
  ];

  return (
    <section id="tech" className="py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-wide">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {stacks.map((stack, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-800 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-3 text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">
                {stack.icon}
              </div>
              <p className="text-lg font-semibold">{stack.name}</p>
              <p className="text-sm text-gray-400">{stack.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
