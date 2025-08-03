import React from "react";

export default function Projects() {
  return (
    <section>
                <h2 className="text-2xl font-semibold mb-6">Projects</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      name: "Stack Overflow Job Satisfaction",
                      link: "https://github.com/Onkar97/Stack-Overflow-Job-Satisfaction.git"
                    },
                    {
                      name: "Predicting Alzheimer’s Disease",
                      link: "https://github.com/Onkar97/-Predicting-Alzheimer-s-Disease-Using-Brain-Imaging-and-Genetic-Data.git"
                    },
                    {
                      name: "Online Job Portal",
                      link: "https://github.com/Onkar97/Online-Job-Portal.git"
                    },
                    {
                      name: "Regional Chat Room App",
                      link: "https://github.com/Onkar97/node-chat-app.git"
                    },
                    {
                      name: "Product Review Analysis",
                      link: "https://github.com/Onkar97/product-reviews.git"
                    },
                    {
                      name: "PICT CSI Web Portal",
                      link: "https://github.com/Onkar97/PICT-CSI-Web-Portal.git"
                    },
                  ].map((project) => (
                    <div key={project.name} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                      <h3 className="font-semibold text-white text-lg">{project.name}</h3>
                      <a
                        href={project.link}
                        className="text-blue-400 text-sm hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on GitHub
                      </a>
                    </div>
                  ))}
                </div>
              </section>
  );
}
