import React from "react";
import profileImg from '../assets/Profile_Image.jpg'
export default function Sidebar() {
  return (
    <div className="flex flex-col items-center md:items-start px-4">
      <img
        src={profileImg}
        alt="Profile"
        className="rounded-lg w-48 sm:w-56 md:w-64 h-auto border-2 border-white shadow-lg"
      />
      <div className="text-white mt-6 text-sm space-y-4">
        <div>
          <h3 className="font-semibold">Quick Info</h3>
          <p><strong>Location:</strong> Boston, MA</p>
          <p><strong>Education:</strong> MS in Software Engineering Systems</p>
        </div>
        <div>
          <h3 className="font-semibold">Career Highlights</h3>
          <ul className="list-disc list-inside">
            <li>3+ years full-stack development</li>
            <li>System optimization & backend</li>
            <li>React, Spring Boot, SQL, Docker</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Soft Skills</h3>
          <ul className="list-disc list-inside">
            <li>Team Collaboration</li>
            <li>Problem Solving</li>
            <li>Agile Methodology</li>
            <li>Adaptability & Communication</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
