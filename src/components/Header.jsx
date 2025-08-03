import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="text-center md:text-left mb-4">
      <h1 className="text-4xl font-extrabold text-white">Onkar Pundlik Bhujbal</h1>
      <p className="text-lg text-gray-300">Software Engineer | Full Stack Developer</p>
      <div className="flex justify-center md:justify-start gap-6 mt-2 text-blue-400">
        <a href="mailto:bhujbal.o@northeastern.edu" className="flex items-center gap-2 hover:underline">
          <FaEnvelope /> Email
        </a>
        <a href="https://www.linkedin.com/in/onkar-bhujbal-385283242/" className="flex items-center gap-2 hover:underline">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/Onkar97" className="flex items-center gap-2 hover:underline">
          <FaGithub /> GitHub
        </a>
      </div>
    </header>
  );
}
