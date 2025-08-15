export default function ProjectAbout() {
  const contributors = [
    { name: "Mohit Sharma", role: "Lead Developer", avatar: "https://i.pravatar.cc/100?u=mohit" },
    { name: "John Doe", role: "Backend Developer", avatar: "https://i.pravatar.cc/100?u=john" },
    { name: "Jane Smith", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/100?u=jane" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About This Project</h1>
        <p className="text-gray-700 mb-8">
          This platform allows users to post questions, provide answers, and collaborate with other 
          contributors. It is designed for speed, scalability, and ease of use.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Features</h2>
        <ul className="list-disc list-inside mb-8 space-y-2">
          <li>Ask and answer questions in real-time</li>
          <li>Tag users and use mentions</li>
          <li>Responsive and modern UI</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {["React", "Vite", "Tailwind CSS", "Node.js", "Express"].map((tech) => (
            <span key={tech} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Contributors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contributors.map((c, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
              <img src={c.avatar} alt={c.name} className="w-16 h-16 rounded-full mb-3 border" />
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-sm text-gray-600">{c.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
