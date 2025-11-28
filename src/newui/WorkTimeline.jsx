import React from "react";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const work = [
  {
    role: "Associate Software Engineer",
    company: "Yardi Software India Pvt. Ltd.",
    location: "Pune, India",
    period: "Sep 2022 – Jul 2024",
    bullets: [
      "Developed centralized logging system using Node.js and Winston to aggregate logs from 10 microservices processing 2M+ daily requests, reducing mean time to debug production issues from 45 minutes to 12 minutes",
      "Refactored monolithic React application into component library with 20+ reusable modules, reducing initial page load time by 15% for 1000+ monthly active users",
      "Constructed GitHub Actions CI/CD pipeline with Terraform and Packer for AWS infrastructure deployment (EC2, S3, RDS, CloudWatch), increasing release frequency from 3 to 7 per week with automated deployment workflows",
      "Streamlined observability through building 5 new CloudWatch dashboards and 12 critical alerts on Grafana, reducing mean time to acknowledge (MTTA) for P1 incidents by 20%"
    ],
  },
  {
    role: "Software Engineer",
    company: "Lifeline Systech Solutions Pvt. Ltd.",
    location: "Pune, India",
    period: "Nov 2020 – Aug 2022",
    bullets: [
      "Upgraded monolithic Java application into 5 Spring Boot microservices serving 10K+ daily transactions, reducing deployment downtime from 2 hours to 15 minutes and decreasing P1 incidents by 12%",
      "Optimized SQL queries for analytics dashboards serving 500+ concurrent users during peak hours, improving query execution time by 27% through query refactoring, proper indexing, and data model improvements",
      "Implemented containerized deployments using Docker, Kubernetes and Jenkins on AWS EC2, creating automated build pipelines that reduced environment setup time from 5 hours to 2 hours per environment",
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
