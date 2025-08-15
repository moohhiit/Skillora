import React from "react";
// import { useParams } from "react-router-dom";

const OpenProject: React.FC = () => {
  // For demo: Fake project data
  // const { id } = useParams();
  const project = {
    title: "Stock Price Predictor",
    description:
      "This project aims to develop a machine learning-based system to predict stock prices using historical data and news sentiment analysis.",
    techStack: ["Python", "TensorFlow", "Pandas", "React"],
    postedBy: "Ankit Sharma",
    members: [
      { name: "Mohit Sharma", role: "Backend Dev" },
      { name: "Riya Singh", role: "ML Engineer" },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Project Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{project.title}</h1>
      <p className="text-gray-600 mb-6">{project.description}</p>

      {/* Project Info */}
      <div className="bg-white p-5 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-white p-5 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold text-purple-600 mb-3">Team Members</h2>
        <ul className="space-y-2">
          {project.members.map((member, index) => (
            <li
              key={index}
              className="flex justify-between bg-gray-50 px-4 py-2 rounded-lg"
            >
              <span className="font-medium">{member.name}</span>
              <span className="text-gray-500">{member.role}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Join Project Button */}
      <button className="w-full py-3 bg-green-500 text-white rounded-lg text-lg font-medium hover:bg-green-600 transition">
        Join Project
      </button>
    </div>
  );
};

export default OpenProject;
