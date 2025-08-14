import React from "react";
import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";

export default function ContactCard() {
  const items = [
    { label: "Email", value: "bhujbal.o@northeastern.edu", href: "mailto:bhujbal.o@northeastern.edu", Icon: FiMail },
    { label: "Mobile", value: "(857) 339 - 8839", href: "tel:+18573398839", Icon: FiPhone },
    { label: "LinkedIn", value: "linkedin.com/in/onkar-bhujbal", href: "https://www.linkedin.com/in/onkar-bhujbal-385283242/", Icon: FiLinkedin },
  ];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-x-6 -top-6 h-40 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-cyan-400/10 blur-2xl" />

      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg">
        <div className="h-1.5 w-full rounded-t-2xl bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-sky-400" />
        <div className="p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-3">
            {items.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 rounded-2xl bg-white/8 border border-white/10 px-4 py-4 hover:bg-white/12 transition"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Icon />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wide text-white/70">{label}</div>
                  <div className="text-sm sm:text-base">{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
