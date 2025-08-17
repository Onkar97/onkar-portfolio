import React from "react";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const work = [
  {
    role: "Software Analyst",
    company: "Yardi Software India Pvt. Ltd.",
    location: "Pune, India",
    period: "Sep 2022 – Nov 2023",
    bullets: [
      "Triaged and resolved 600+ P1/P2 production issues across .NET services and MS SQL Server using structured logs and query plans; shipped 10 targeted hotfixes for major product bugs",
      "Drove root–cause analysis of bugs with QA, translated findings into tested fixes, runbooks, and preventive checks, reducing mean time to resolution by 10%",
      "Optimized T−SQL stored procedures and indexing (set-based rewrites, parameter-sniffing mitigation), improving p95 query latency and overall system throughput by 8%",
    ],
  },
  {
    role: "Software Engineer",
    company: "Lifeline Systech Solutions Pvt. Ltd.",
    location: "Pune, India",
    period: "Nov 2020 – Aug 2022",
    bullets: [
      "Owned IIS deployments across environments (app pools, bindings, config transforms, warm-ups); reduced downtime by 12% and improved response consistency",
      "Investigated production defects with targeted SQL analysis; authored safe data-correction scripts and stored-proc fixes, improving operational efficiency by 12%",
      "Introduced a shared, structured logging convention and lightweight triage template for cross-team reviews; accelerated reproduction and diagnosis, cutting production issue resolution time by 10%",
    ],
  },
];

function Item({ it, isLast }) {
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
              {it.role} <span className="text-white/70">· {it.company}</span>
            </h3>
            <span className="inline-flex items-center gap-2 text-sm text-white/70">
              <FiCalendar className="opacity-80" />
              {it.period}
            </span>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-4 text-white/80">
            <span className="inline-flex items-center gap-2">
              <FiBriefcase className="opacity-80" />
              Full-Time
            </span>
            <span className="inline-flex items-center gap-2">
              <FiMapPin className="opacity-80" />
              {it.location}
            </span>
          </div>

          {it.bullets?.length > 0 && (
            <ul className="mt-4 space-y-2 text-white/80 list-disc list-inside">
              {it.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}

export default function WorkTimeline({ items = work }) {
  return (
    <div className="relative">
      {/* subtle background glow to match Education */}
      <div className="pointer-events-none absolute -inset-x-6 -top-6 h-40 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-cyan-400/10 blur-2xl" />
      <ul className="relative space-y-8 md:space-y-10">
        {items.map((it, i) => (
          <Item key={`${it.company}-${i}`} it={it} isLast={i === items.length - 1} />
        ))}
      </ul>
    </div>
  );
}
