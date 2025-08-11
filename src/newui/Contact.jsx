import React from "react";
import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  const items = [
    {
      label: "Email",
      value: "bhujbal.o@northeastern.edu",
      href: "mailto:bhujbal.o@northeastern.edu",
      Icon: FiMail,
    },
    {
      label: "Mobile",
      value: "(857) 339 - 8839",
      href: "tel:+18573398839",
      Icon: FiPhone,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/onkar97",
      href: "https://www.linkedin.com/in/onkar97",
      Icon: FiLinkedin,
    },
  ];

  return (
    <div id="contact" className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(({ label, value, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3 rounded-2xl bg-white/8 border border-white/10 px-4 py-4 hover:bg-white/12 transition"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
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
  );
}
