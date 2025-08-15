import React, { useState } from "react";

interface Course {
  name: string;
  progress: number;
  color: string;
  enrolled: boolean;
}

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    { name: "Full Stack Development", progress: 75, color: "bg-indigo-500", enrolled: true },
    { name: "Data Structures & Algorithms", progress: 50, color: "bg-green-500", enrolled: true },
    { name: "Machine Learning", progress: 0, color: "bg-yellow-500", enrolled: false },
    { name: "UI/UX Design", progress: 0, color: "bg-pink-500", enrolled: false },
  ]);
   const availableProjects = [
    { id: 3, title: "Stock Price Predictor", description: "ML-based stock prediction tool" },
    { id: 4, title: "Portfolio Website", description: "React + Tailwind portfolio template" },
  ];

  const handleEnroll = (index: number) => {
    const updatedCourses = [...courses];
    updatedCourses[index].enrolled = true;
    updatedCourses[index].progress = 0;
    setCourses(updatedCourses);
  };

  const currentCourses = courses.filter(course => course.enrolled);
  const availableCourses = courses.filter(course => !course.enrolled);

  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-10">
      
      {/* Current Courses */}
      <section>
        <h1 className="text-2xl font-bold mb-6">📖 Current Courses</h1>
        {currentCourses.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition transform hover:scale-[1.02]"
              >
                <h2 className="text-lg font-semibold mb-3">{course.name}</h2>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`${course.color} h-3`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm text-gray-600">{course.progress}% completed</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No current courses.</p>
        )}
      </section>

      {/* Available Courses */}
      <section>
        <h1 className="text-2xl font-bold mb-6">🆕 Available Courses</h1>
        {availableCourses.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition transform hover:scale-[1.02]"
              >
                <h2 className="text-lg font-semibold mb-3">{course.name}</h2>
                <button
                  onClick={() =>
                    handleEnroll(courses.findIndex(c => c.name === course.name))
                  }
                  className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
                >
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No available courses to enroll.</p>
        )}
      </section>
      
    </div>
  );
};

export default Courses;
