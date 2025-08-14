import React from "react";
import {
  FiBookOpen,
  FiCalendar,
  FiMapPin,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";

const schools = [
  {
    school: "Northeastern University",
    location: "Boston, MA",
    degree: "M.S. in Software Engineering Systems",
    period: "Sept 2024 – May 2026",
    gpa: "3.6",
    coursework: [
      "Object-Oriented Programming",
      "Web Design & UX",
      "Data Science Methods",
      "Program Structure & Algorithms",
      "Design Patterns",
    ],
  },
  {
    school:
      "Pune Institute of Computer Technology (Savitribai Phule Pune University)",
    location: "Pune, India",
    degree: "B.E. in Information Technology",
    period: "Aug 2017 – May 2020",
    gpa: "3.8",
    coursework: [
      "Problem Solving and Object Oriented Programming System",
      "Data Science and Big Data Analytics",
      "Machine Learning and Applications",
      "Operating Systems",
      "Design and Analysis of Algorithms",
      "Software Engineering and Project Management",
      "Database Management Systems",
      "Cloud Computing"
    ],
  },
];

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/90">
      <FiCheckCircle className="opacity-70" />
      {children}
    </span>
  );
}

function EduCard({ item, isLast }) {
  return (
    <li className="relative pl-8 md:pl-12">
      {/* timeline line */}
      {!isLast && (
        <span className="absolute left-[10px] md:left-[14px] top-8 bottom-0 w-px bg-gradient-to-b from-fuchsia-500/60 via-sky-400/50 to-transparent" />
      )}

      {/* timeline dot */}
      <span className="absolute left-0 top-6 grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500 to-sky-400 shadow-lg">
        <span className="h-2.5 w-2.5 rounded-full bg-white" />
      </span>

      {/* card */}
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg">
        <div className="h-1.5 w-full rounded-t-2xl bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-sky-400" />
        <div className="p-5 md:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="text-xl md:text-2xl font-semibold">
              {item.school}
            </h3>
            <span className="inline-flex items-center gap-2 text-sm text-white/70">
              <FiCalendar className="opacity-80" />
              {item.period}
            </span>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-4 text-white/80">
            <span className="inline-flex items-center gap-2">
              <FiBookOpen className="opacity-80" />
              {item.degree}
            </span>
            <span className="inline-flex items-center gap-2">
              <FiMapPin className="opacity-80" />
              {item.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <FiAward className="opacity-80" />
              GPA: {item.gpa}
            </span>
          </div>

          {item.coursework && item.coursework.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.coursework.map((c) => (
                <Pill key={c}>{c}</Pill>
              ))}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default function Education() {
  return (
    <div className="relative">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute -inset-x-6 -top-6 h-40 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-cyan-400/10 blur-2xl" />
      <ul className="relative space-y-8 md:space-y-10">
        {schools.map((s, i) => (
          <EduCard key={s.school} item={s} isLast={i === schools.length - 1} />
        ))}
      </ul>
    </div>
  );
}
