import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  status: "running" | "completed";
}

const projects: Project[] = [
  {
    title: "AI Chatbot",
    description: "A real-time chatbot for student query solving.",
    techStack: ["React", "Node.js", "Socket.IO", "MongoDB"],
    status: "running",
  },
  {
    title: "Online Learning Platform",
    description: "Platform for uploading and managing course content.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    status: "running",
  },
  {
    title: "Attendance Tracker",
    description: "Automated attendance tracking system with face recognition.",
    techStack: ["Python", "OpenCV", "Flask", "SQLite"],
    status: "completed",
  },
];


const ProjectContribution: React.FC = () => {
  const runningProjects = projects.filter((p) => p.status === "running");
  const completedProjects = projects.filter((p) => p.status === "completed");
  const Navigation = useNavigate()


  const handleNavigation =()=>{
    Navigation('/projectabout/1')
  }
  return (
    <div className="flex-1 h-screen overflow-y-auto bg-gray-50 p-6">
      {/* Running Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Running Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {runningProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h3>

              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="mt-3">
                <span className="font-semibold text-gray-700">Tech Stack:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
               
                <button
                  onClick={handleNavigation}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >

                  About Project
                </button>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Completed Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Completed Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {completedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="mt-3">
                <span className="font-semibold text-gray-700">Tech Stack:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
                <button
                  onClick={handleNavigation}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >

                  About Project
                </button>
            </div>
          ))}
        </div>
      </section>

      {/* Project Demonstration */}
      <section>
        <h2 className="text-2xl font-bold text-purple-600 mb-4">
          Project Demonstration
        </h2>
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-700">
            Here you can showcase videos, images, or detailed case studies of
            completed big projects.
          </p>
          <div className="mt-4">

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectContribution;
