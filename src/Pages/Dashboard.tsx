import React, { useState } from "react";

const Dashboard: React.FC = () => {
  const [level] = useState(4);
  const [xp, setXp] = useState(320);
  const xpRequired = 500;

  const progressPercent = (xp / xpRequired) * 100;

  const tasks = [
    { id: 1, text: "Complete React Basics", done: true },
    { id: 2, text: "Build Final Project", done: false },
    { id: 3, text: "Pass Level 5 Quiz", done: false },
  ];

  const notifications = [
    { id: 1, text: "🎉 You unlocked Level 4!", type: "success" },
    { id: 2, text: "📢 New event: Hackathon starts this Sunday!", type: "info" },
  ];

  const messages = [
    { id: 1, from: "Admin", text: "Welcome to the community! 🎉" },
    { id: 2, from: "John", text: "Need help with Tailwind styling?" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Your Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Progress Overview */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Progress Overview</h2>
          <p>Level: <span className="font-bold">{level}</span></p>
          <p>XP: {xp} / {xpRequired}</p>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
            <div
              className="bg-green-500 h-3 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Tasks */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Pending Tasks</h2>
          <ul className="space-y-2">
            {tasks.map(task => (
              <li
                key={task.id}
                className={`p-3 rounded-lg flex justify-between items-center ${
                  task.done ? "bg-green-100" : "bg-gray-100"
                }`}
              >
                <span className={task.done ? "line-through text-gray-400" : ""}>
                  {task.text}
                </span>
                {task.done ? "✔" : "⏳"}
              </li>
            ))}
          </ul>
        </div>

        {/* Notifications */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Notifications</h2>
          <ul className="space-y-2">
            {notifications.map(note => (
              <li
                key={note.id}
                className={`p-3 rounded-lg ${
                  note.type === "success"
                    ? "bg-green-100"
                    : "bg-blue-100"
                }`}
              >
                {note.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Messages */}
        <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
          <h2 className="text-lg font-semibold mb-2">Messages</h2>
          <ul className="space-y-2">
            {messages.map(msg => (
              <li key={msg.id} className="border-b pb-2">
                <p className="font-semibold">{msg.from}</p>
                <p>{msg.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Leaderboard */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Leaderboard</h2>
          <ol className="list-decimal list-inside">
            <li>Mohit Sharma – 1500 XP</li>
            <li>John Doe – 1400 XP</li>
            <li>Jane Smith – 1350 XP</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
