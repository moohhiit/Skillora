import React, { useEffect, useState } from "react";


const Intership: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete React Basics", done: false },
    { id: 2, text: "Finish Tailwind Styling", done: true },
    { id: 3, text: "Build First Project", done: false },
    { id: 4, text: "Pass Level 4 Quiz", done: false },
    { id: 5, text: "Submit Final Project", done: false },
  ]);

 

  const completedCount = tasks.filter(task => task.done).length;
  const allComplete = completedCount === tasks.length;
 useEffect(()=>{
  setTasks([
    { id: 1, text: "Complete React Basics", done: false },
    { id: 2, text: "Finish Tailwind Styling", done: true },
    { id: 3, text: "Build First Project", done: false },
    { id: 4, text: "Pass Level 4 Quiz", done: false },
    { id: 5, text: "Submit Final Project", done: false },
  ])
 },[])
  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Complete to Unlock 🔒</h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Your Tasks</h2>
        
        <ul className="space-y-3">
          {tasks.map(task => (
            <li
              key={task.id}
              className="flex items-center justify-between border p-3 rounded-lg cursor-pointer hover:bg-gray-50"
             
            >
              <span className={task.done ? "line-through text-gray-400" : ""}>
                {task.text}
              </span>
              {task.done && (
                <span className="text-green-500 text-lg font-bold">✔</span>
              )}
            </li>
          ))}
        </ul>

        {!allComplete ? (
          <p className="mt-4 text-red-500 font-medium">
            {tasks.length - completedCount} tasks remaining to unlock this screen.
          </p>
        ) : (
          <div className="mt-4 text-green-600 font-bold text-center">
            🎉 Congratulations! Final Level Unlocked 🎉
          </div>
        )}
      </div>
    </div>
  );
};

export default Intership;
