
interface AppData {
  name: string;
  icon: string;
  description: string;
  downloadLink?: string;
  websiteLink?: string;
}
export default function CompanyAbout() {
  const team = [
    { name: "Mohit Sharma", role: "Founder & CEO", avatar: "https://i.pravatar.cc/100?u=mohit" },
    { name: "Ansh Jaiswal", role: "Founder & CEO", avatar: "https://i.pravatar.cc/100?u=mohit" },
    { name: "Sumit Rathor", role: "Founder & CEO", avatar: "https://i.pravatar.cc/100?u=mohit" },
    { name: "Tripti Tiwari", role: "Founder & CEO", avatar: "https://i.pravatar.cc/100?u=mohit" },
    { name: "Avani Singh", role: "Founder & CEO", avatar: "https://i.pravatar.cc/100?u=mohit" },
    { name: "Anam Ali", role: "CTO", avatar: "https://i.pravatar.cc/100?u=priya" },
   
  ];
  const apps: AppData[] = [
  {
    name: "TechLearn",
    icon: "https://img.icons8.com/color/96/code.png",
    description: "An interactive platform to learn programming with real-time code execution.",
    websiteLink: "https://techlearn.com",
  },
  {
    name: "TaskFlow",
    icon: "https://img.icons8.com/color/96/task.png",
    description: "A project management tool for tech teams with AI assistance.",
    downloadLink: "https://play.google.com/taskflow",
  },
  {
    name: "CodeChat",
    icon: "https://img.icons8.com/color/96/chat.png",
    description: "A chat platform for coders with built-in code editor and compiler.",
    websiteLink: "https://codechat.com",
    downloadLink: "https://play.google.com/codechat",
  },
];
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Our Company</h1>
        <p className="text-gray-700 mb-8">
          We are a tech-driven company committed to building innovative solutions that solve 
          real-world problems. Our mission is to empower individuals and businesses with 
          cutting-edge tools that drive success.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-gray-700 mb-8">
          To provide accessible, scalable, and impactful technology solutions for everyone.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
        <p className="text-gray-700 mb-8">
          To be a global leader in innovation, setting new benchmarks in quality and performance.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
              <img src={member.avatar} alt={member.name} className="w-16 h-16 rounded-full mb-3 border" />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      <section>
      
        <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Our Apps</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {apps.map((app, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center cursor-pointer"
          >
            {/* Icon in Circle */}
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden shadow-md group-hover:opacity-50 transition-opacity duration-300">
              <img src={app.icon} alt={app.name} className="w-16 h-16" />
            </div>

           
            
          </div>
        ))}
      </div>
    </div>
      </section>
                      </div>
    </div>
  );
}
