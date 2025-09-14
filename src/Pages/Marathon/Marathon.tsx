
import { Trophy, User, Star, Calendar, Clock } from "lucide-react";

interface Student {
  id: number;
  name: string;
  technicalScore: number;
  expertise: string;
}

const mockStudents: Student[] = [
  { id: 1, name: "Aarav Patel", technicalScore: 95, expertise: "Machine Learning" },
  { id: 2, name: "Diya Sharma", technicalScore: 88, expertise: "Web Development" },
  { id: 3, name: "Rohan Verma", technicalScore: 92, expertise: "Data Science" },
  { id: 4, name: "Pooja Singh", technicalScore: 85, expertise: "Cyber Security" },
  { id: 5, name: "Karan Mehta", technicalScore: 90, expertise: "Cloud Computing" },
];

const dailyQuestion = {
  question: "Explain the difference between supervised and unsupervised learning.",
  topic: "Machine Learning Basics",
};

const weeklyProgress = {
  completed: 5,
  total: 7,
};

const dailyProgress = {
  completed: 1,
  total: 1,
};

export default function StudentMarathon() {
  const sortedStudents = [...mockStudents].sort((a, b) => b.technicalScore - a.technicalScore);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 via-blue-50 to-indigo-200 p-6 flex flex-col items-center space-y-8">
      {/* Header */}
      <header className="text-center">
        <Trophy className="mx-auto w-16 h-16 text-yellow-500" />
        <h1 className="text-4xl font-bold text-indigo-900">Student Technical Marathon</h1>
        <p className="mt-2 text-gray-600">Sharpen your skills every day!</p>
      </header>

      {/* Daily Question Section */}
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6 space-y-4 border border-gray-200">
        <h2 className="text-2xl font-semibold text-indigo-800 flex items-center space-x-2">
          <Clock className="w-6 h-6 text-indigo-600" />
          <span>Today's Question</span>
        </h2>
        <p className="text-gray-700 font-medium">{dailyQuestion.question}</p>
        <p className="text-sm text-gray-500">Topic: {dailyQuestion.topic}</p>
      </div>

      {/* Progress Section */}
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Weekly Progress */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-indigo-800 flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <span>Weekly Progress</span>
          </h3>
          <div className="mt-4 text-center">
            <p className="text-3xl font-bold text-indigo-700">{weeklyProgress.completed}/{weeklyProgress.total}</p>
            <p className="text-sm text-gray-500 mt-1">Days Completed</p>
          </div>
        </div>

        {/* Daily Progress */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-indigo-800 flex items-center space-x-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            <span>Daily Progress</span>
          </h3>
          <div className="mt-4 text-center">
            <p className="text-3xl font-bold text-indigo-700">{dailyProgress.completed}/{dailyProgress.total}</p>
            <p className="text-sm text-gray-500 mt-1">Tasks Completed</p>
          </div>
        </div>
      </div>

      {/* Students Leaderboard */}
      <div className="w-full max-w-4xl grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sortedStudents.map((student, index) => (
          <div
            key={student.id}
            className={`relative bg-white rounded-xl shadow-lg overflow-hidden border-t-4 transition-transform transform hover:scale-105 ${
              index === 0 ? "border-yellow-400" : "border-indigo-300"
            }`}
          >
            {index === 0 && (
              <div className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
                <Star className="w-4 h-4" />
                <span>Top Performer</span>
              </div>
            )}

            <div className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="bg-indigo-100 p-4 rounded-full">
                <User className="w-12 h-12 text-indigo-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">{student.name}</h2>
              <p className="text-sm text-gray-500">{student.expertise}</p>
              <div className="flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>{student.technicalScore} pts</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-8">
        🚀 Keep learning daily and track your progress every week!
      </footer>
    </div>
  );
}
