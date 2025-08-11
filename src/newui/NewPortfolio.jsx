import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import SectionShell from "./SectionShell";
import Footer from "./Footer";
import Contact from "./Contact";

// Reuse your existing content components
import About from "../components/About";
import SkillsMatrix from "./SkillsMatrix";
import WorkExperience from "../components/WorkExperience";
import Internships from "../components/Internships";
import ProjectsGrid from "./ProjectsGrid";

export default function NewPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <NavBar />
      <main>
        <Hero />
        <SectionShell id="about" title="About Me">
          <About />
        </SectionShell>
        <SectionShell id="skills" title="Skills" subtitle="Tech I use frequently">
          <SkillsMatrix />
        </SectionShell>
        <SectionShell id="work" title="Work Experience">
          <WorkExperience />
        </SectionShell>
        <SectionShell id="internships" title="Internships">
          <Internships />
        </SectionShell>
        <SectionShell id="projects" title="Projects" subtitle="Selected work I’m proud of">
          <ProjectsGrid />
        </SectionShell>
        <SectionShell id="contact" title="Contact">
          <Contact />
        </SectionShell>
      </main>
      <Footer />
    </div>
  );
}