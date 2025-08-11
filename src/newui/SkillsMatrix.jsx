import React from "react";
import { FiCode, FiDatabase, FiAperture, FiTool, FiCompass } from "react-icons/fi";

const data = [
  {
    title: "Programming Languages",
    icon: FiCode,
    items: ["Java", "Python", "PL/SQL", "TypeScript", "JavaScript", "C#", "R"],
  },
  {
    title: "Databases",
    icon: FiDatabase,
    items: ["MS SQL", "MySQL", "PostgreSQL", "Firebase", "MongoDB"],
  },
  {
    title: "Web Technologies",
    icon: FiAperture,
    items: ["ASP .NET", "REST", "HTML", "CSS", "React", "Redux", "Node", "Express", "Flask"],
  },
  {
    title: "Tools/Frameworks",
    icon: FiTool,
    items: ["Git", "Jira", "Postman", "Docker", "Kafka", "IIS Server","AWS"],
  },
  {
    title: "Concepts",
    icon: FiCompass,
    items: ["Data Structures & Algorithms", "REST APIs", "Operating Systems", "Computer Vision", "Cloud Computing", "Machine Learning", "Deep Learning", "Natural Language Processing", "Semantic Analysis", "Sentiment Analysis", "Random Forest"],
  },
];

const Chip = ({ children }) => (
  <span className="px-4 py-2 rounded-full text-sm bg-[linear-gradient(135deg,rgba(255,182,193,0.35),rgba(173,216,230,0.35))] border border-white/20">
    {children}
  </span>
);

export default function SkillsMatrix() {
  return (
    <div className="space-y-10">
      {data.map(({ title, icon: Icon, items }) => (
        <div key={title} className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-3">
            <Icon className="text-white/90" /> {title}
          </h3>
          <div className="flex flex-wrap gap-3">
            {[...new Set(items)].map((it) => (<Chip key={it}>{it}</Chip>))}
          </div>
        </div>
      ))}
    </div>
  );
}