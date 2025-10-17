import React from "react";
import { FiCalendar, FiMapPin, FiUser } from "react-icons/fi";

const internships = [
  {
    role: "Software Developer Intern",
    company: "Lifeline Systech Solutions Pvt. Ltd.",
    location: "Pune, India",
    period: "Jul 2020 – Oct 2020",
    bullets: [
      "Developed a multithreaded C# application to automate the migration of over 2 TB of client data, incorporating checksum validation and retry logic to ensure data integrity and reduce manual migration efforts by 40 hours",
      "Increased database reliability by refactoring a complex update process into a single atomic PL/SQL stored procedure, which eliminated 10% of data inconsistency errors and decreased transaction commit time by 15%",
      "Authored 7+ comprehensive technical documents for new software releases, improving knowledge transfer efficiency by 20% and reducing onboarding time for new engineers by 10%",
    ],
  },
  {
    role: "Application Developer Intern",
    company: "Fuzen.io",
    location: "Remote, India",
    period: "Mar 2020 – Jun 2020",
    bullets: [
      "Engineered a social media automation tool using Go and Google Apps Script to schedule over 500 monthly posts, reducing the manual workload for the content team by 25% and increasing posting consistency",
      "Used a content distribution service in Ruby on Rails that connected the Microsoft Assets and Facebook Graph APIs, automating user posts, and cutting manual data reconciliation time by 12%",
      "Deployed 5+ custom scripts to optimize content delivery pipelines, which enhanced social media reach across three platforms and decreased post-publication errors by 15%",
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
