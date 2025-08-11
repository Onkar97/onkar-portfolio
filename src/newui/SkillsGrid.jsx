import React from "react";

const skills = [
  "JavaScript","React","HTML","CSS","Tailwind CSS",
  "Node.js","Express.js","SQL","MongoDB",
  "Java","Spring Boot","Docker","Git"
];

export default function SkillsGrid() {
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s} className="group rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-sm hover:shadow-md hover:bg-white/10 transition">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-cyan-300 text-black text-xs font-bold group-hover:scale-110 transition-transform">✓</span>
              <span className="font-medium">{s}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}