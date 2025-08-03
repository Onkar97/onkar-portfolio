import React from "react";

export default function Skills() {
  const skills = [
    "JavaScript", "React", "HTML", "CSS", "Tailwind CSS",
    "Node.js", "Express.js", "SQL", "MongoDB",
    "Java", "Spring Boot", "Docker", "Git"
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
        {skills.map((skill, idx) => (
          <li key={idx} className="bg-gray-700 px-3 py-2 rounded">{skill}</li>
        ))}
      </ul>
    </section>
  );
}
