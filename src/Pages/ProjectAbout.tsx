import { useNavigate } from "react-router-dom";

export default function ProjectAbout() {
  const navigate = useNavigate();

  // Example contributor list (this can come from API later)
  const contributors = [
    { name: "Mohit Sharma", role: "Full Stack Developer" },
    { name: "Ansh", role: "UI/UX Designer" },
    { name: "Sumit", role: "Backend Engineer" },
  ];

  return (
  
      <div className="w-full bg-white  p-8 relative h-full">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-lg transition"
        >
          ⬅ Back
        </button>

        {/* Project Title */}
        <h1 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
          🚀 AI Learning Platform
        </h1>

        {/* Project Description */}
        <p className="text-gray-800 mb-6 leading-relaxed text-center">
          This project is an open-source initiative to create a modern learning 
          platform for students and developers. It combines real-time collaboration, 
          personalized dashboards, progress tracking, and a strong focus on 
          technical skill growth.
        </p>

        {/* Features List */}
        <h2 className="text-xl font-semibold text-indigo-500 mb-3">✨ Key Features:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>📊 Interactive dashboard with real-time progress tracking</li>
          <li>🤝 Open project contributions for community learning</li>
          <li>🎯 AI-driven suggestions based on skill level</li>
          <li>📚 Learning modules with quizzes and coding tasks</li>
        </ul>

        {/* Contributors Section */}
        <h2 className="text-xl font-semibold text-indigo-500 mb-3">👥 Contributors:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {contributors.map((c, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-indigo-600">{c.name}</h3>
              <p className="text-gray-700">{c.role}</p>
            </div>
          ))}
        </div>

        {/* Contribution CTA */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/project-contribution")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            💡 Contribute to Project
          </button>
        </div>
      </div>
   
  );
}
