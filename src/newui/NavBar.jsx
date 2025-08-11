import React, { useState, useEffect } from "react";
import { FiMenu as Menu, FiX as X, FiUser, FiCpu, FiBriefcase, FiBookOpen, FiLayers, FiMail } from "react-icons/fi";

const links = [
  { href: "#about", label: "About", Icon: FiUser },
  { href: "#skills", label: "Skills", Icon: FiCpu },
  { href: "#work", label: "Experience", Icon: FiBriefcase },
  { href: "#internships", label: "Internships", Icon: FiBookOpen },
  { href: "#projects", label: "Projects", Icon: FiLayers },
  { href: "#contact", label: "Contact", Icon: FiMail },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "backdrop-blur bg-black/70 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">Onkar</span>{" "}
          <span className="text-white/80">Portfolio</span>
        </a>
        <button className="md:hidden p-2 rounded-lg border border-white/10" onClick={() => setOpen(!open)} aria-label="Open menu">
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map(({href, label, Icon}) => (
            <li key={href}>
              <a href={href} className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                <Icon className="opacity-80" size={16} aria-hidden /> <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="grid gap-2">
            {links.map(({href, label, Icon}) => (
              <li key={href}>
                <a onClick={() => setOpen(false)} href={href} className="flex items-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10">
                  <Icon size={16} /> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}