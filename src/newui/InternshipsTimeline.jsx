import React from "react";
import { FiCalendar, FiMapPin, FiUser } from "react-icons/fi";

const internships = [
  {
    role: "Software Developer Intern",
    company: "Lifeline Systech Solutions Pvt. Ltd.",
    location: "Pune, India",
    period: "Jul 2020 – Oct 2020",
    bullets: [
      "Developed a multithreaded C# application to organize and migrate large folder trees (retry logic, checksum validation)",
      "Refactored multi-step updates into a single atomic PL/SQL stored procedure (pre-checks, business rules, commit/rollback discipline); shortened commit path and eliminated inconsistent intermediate states",
      "Authored 7+ technical documents for software updates, ensuring smoother project transitions and easier handovers",
    ],
  },
  {
    role: "Application Developer Intern",
    company: "Fuzen.io",
    location: "Remote, India",
    period: "Mar 2020 – Jun 2020",
    bullets: [
      "Automated post schedules using Google Apps Script, boosted efficiency, decreased manual workload by 25%",
      "Leveraged 5+ scripts to optimize content distribution, enhanced social media reach, revised post errors",
      "Integrated Microsoft Assets API and Facebook Graph API for posts, cutting manual reconciliation time by 20%",
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
              <FiUser className="opacity-80" />
              Internship
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

export default function InternshipsTimeline({ items = internships }) {
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
