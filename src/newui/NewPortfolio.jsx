import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import SectionShell from "./SectionShell";
import Footer from "./Footer";
import Contact from "./Contact";
import Education from "./Education";

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
        <SectionShell id="about" title="About Me" subtitle="Profile and career overview">
          <About />
        </SectionShell>
        <SectionShell id="education" title="Education" subtitle="Academic background & coursework">
          <Education />
        </SectionShell>
        <SectionShell id="skills" title="Skills" subtitle="Core technologies and tooling">
          <SkillsMatrix />
        </SectionShell>
        <SectionShell id="work" title="Work Experience" subtitle="Professional experience and impact">
          <WorkExperience />
        </SectionShell>
        <SectionShell id="internships" title="Internships" subtitle="Applied industry experience">
          <Internships />
        </SectionShell>
        <SectionShell id="projects" title="Projects" subtitle="Selected projects and case studies">
          <ProjectsGrid />
        </SectionShell>
        <SectionShell id="contact" title="Contact" subtitle="Let's connect">
          <Contact />
        </SectionShell>
      </main>
      <Footer />
    </div>
  );
}