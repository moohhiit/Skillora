import { useState } from "react";

interface Question {
  id: number;
  question: string;
  answer: string;
  mentions?: string[];
}

export default function QueryScreen() {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      question: "How do I integrate Tailwind CSS in a Vite project?",
      answer: "You can follow the official Tailwind docs for Vite setup. Install dependencies and update your postcss.config.js.",
      mentions: ["@Mohit", "@TechMentor"]
    },
    {
      id: 2,
      question: "What is the difference between React and React Native?",
      answer: "React is for building web apps, while React Native is for mobile apps using native components.",
      mentions: ["@JohnDoe"]
    }
  ]);

  const [newQuestion, setNewQuestion] = useState("");

  const handleAddQuestion = () => {
    if (!newQuestion.trim()) return;
    const newQ: Question = {
      id: questions.length + 1,
      question: newQuestion,
      answer: "Waiting for answer...",
      mentions: []
    };
    setQuestions([...questions, newQ]);
    setNewQuestion("");
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 p-6 overflow-y-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Query & Discussion</h1>

      {/* Question List */}
      <div className="space-y-4">
        {questions.map((q) => (
          <div key={q.id} className="bg-white rounded-lg shadow p-4 border border-gray-200">
            <h2 className="font-semibold text-lg text-gray-900">{q.question}</h2>
            <p className="text-gray-700 mt-2">{q.answer}</p>

            {q.mentions && q.mentions.length > 0 && (
              <div className="mt-2 space-x-2">
                {q.mentions.map((m, i) => (
                  <span
                    key={i}
                    className="text-blue-600 text-sm font-medium bg-blue-100 px-2 py-1 rounded"
                  >
                    {m}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Question */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow border border-gray-200">
        <textarea
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Type your question..."
          className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddQuestion}
          className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Add Question
        </button>
      </div>
    </div>
  );
}
