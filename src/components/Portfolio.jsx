import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import About from "./About";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import Internships from "./Internships";
import Projects from "./Projects";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");
  const tabs = ["about", "skills", "work", "internships", "projects"];
  const tabLabels = {
    about: "About Me",
    skills: "Skills",
    work: "Work Experience",
    internships: "Internships",
    projects: "Projects",
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans px-4 py-8">
      <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
        <div className="w-full md:w-1/3">
          <Sidebar />
        </div>
        <div className="w-full md:w-2/3">
          <Header />
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 mb-10 mt-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full font-medium transition-all duration-300 shadow-sm ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-white border hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tabLabels[tab]}
              </button>
            ))}
          </nav>
          <main className="text-justify">
            {activeTab === "about" && <About />}
            {activeTab === "skills" && <Skills />}
            {activeTab === "work" && <WorkExperience />}
            {activeTab === "internships" && <Internships />}
            {activeTab === "projects" && <Projects />}
          </main>
        </div>
      </div>
    </div>
  );
}
