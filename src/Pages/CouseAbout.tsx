import { useNavigate } from "react-router-dom";

export default function CourseAbout() {
  const navigate = useNavigate();

  // Example course details
  const course = {
    title: "Full Stack Web Development",
    instructor: "Dr. Ananya Sharma",
    duration: "12 Weeks",
    description:
      "Learn to build modern, scalable web applications using React, Node.js, MongoDB, and Tailwind. This course is designed for beginners and intermediate learners who want to master full-stack development.",
    topics: [
      "HTML, CSS & JavaScript Fundamentals",
      "React with Hooks & Context",
      "Backend with Node.js & Express",
      "Database Management with MongoDB",
      "Authentication & Authorization",
      "Deployments on AWS & Vercel",
    ],
  };

  return (
      <div className=" w-full bg-white h-full p-8 relative">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-lg transition"
        >
          ⬅ Back
        </button>

        {/* Course Title */}
        <h1 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
          📚 {course.title}
        </h1>

        {/* Instructor & Duration */}
        <div className="text-center mb-6">
          <p className="text-gray-800 font-semibold">
            Instructor: {course.instructor}
          </p>
          <p className="text-gray-600">⏳ Duration: {course.duration}</p>
        </div>

        {/* Course Description */}
        <p className="text-gray-700 mb-6 leading-relaxed text-center">
          {course.description}
        </p>

        {/* Topics Covered */}
        <h2 className="text-xl font-semibold text-indigo-500 mb-3">
          📖 Topics Covered:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          {course.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>

        {/* Enroll CTA */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/enroll")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            🚀 Enroll Now
          </button>
        </div>
      </div>

  );
}
