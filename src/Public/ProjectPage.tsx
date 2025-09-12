import { ExternalLink, Github, Users, Calendar } from "lucide-react";

export function ProjectsPage() {
  const projects = [
    {
      title: "ECommerce AI Assistant",
      description: "Full-stack e-commerce platform with AI chatbot for recommendations.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "OpenAI", "Stripe", "PostgreSQL"],
      students: 8,
      duration: "4 months"
    },
    {
      title: "Voice-Controlled Smart Home",
      description: "IoT smart home system with voice commands using AI models.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      technologies: ["Python", "Voice AI", "IoT", "React", "WebRTC"],
      students: 6,
      duration: "5 months"
    },
    {
      title: "Automated Trading Bot",
      description: "Trading bot using ML for market prediction and workflow automation.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      technologies: ["Python", "ML", "N8N", "APIs", "Docker"],
      students: 10,
      duration: "6 months"
    },
    {
      title: "Real-time Collaboration Platform",
      description: "Team collaboration tool with real-time editing and video calls.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "WebRTC"],
      students: 12,
      duration: "4 months"
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8 text-gray-900">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Student Projects</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Our students work on real-world projects under mentorship. Each project
          is portfolio-ready and built with modern technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-purple-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-700 text-sm">{project.description}</p>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" /> {project.students} students
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {project.duration}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 text-xs bg-white border rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 pt-2">
                <button className="flex-1 px-3 py-2 border rounded flex items-center justify-center text-gray-700 hover:text-purple-600">
                  <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                </button>
                <button className="flex-1 px-3 py-2 border rounded flex items-center justify-center text-gray-700 hover:text-purple-600">
                  <Github className="w-4 h-4 mr-2" /> Source Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats / CTA */}
      <div className="bg-purple-50 rounded-2xl p-8 lg:p-12 text-center space-y-8">
        <h2 className="text-2xl lg:text-3xl font-bold">Ready to Build Your Own Project?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Join our internship program and gain hands-on experience with real-world projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg">Apply for Internship</button>
          <button className="px-6 py-3 border rounded-lg">View Course Catalog</button>
        </div>
      </div>
    </div>
  );
}

