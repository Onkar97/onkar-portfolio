import React from "react";

export default function SectionShell({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-28 py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          {subtitle && <p className="text-white/70 mt-1">{subtitle}</p>}
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6">{children}</div>
      </div>
    </section>
  );
}