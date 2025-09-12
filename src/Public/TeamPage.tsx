import { Linkedin, Github, Mail, Target, Users, Lightbulb } from "lucide-react";

export function TeamPage() {
  const teamMembers = [
    {
      name: "Sumit Rathore",
      role: "Founder & Lead Instructor",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      socials: {
        linkedin: "#",
        github: "#",
        email: "mailto:sumit@example.com",
      },
    },
    {
      name: "Priya Sharma",
      role: "AI/ML Mentor",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      socials: {
        linkedin: "#",
        github: "#",
        email: "mailto:priya@example.com",
      },
    },
    {
      name: "Rahul Verma",
      role: "Full Stack Mentor",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      socials: {
        linkedin: "#",
        github: "#",
        email: "mailto:rahul@example.com",
      },
    },
  ];

  const highlights = [
    {
      icon: Target,
      title: "Mission-Driven",
      desc: "We empower students to build careers in tech with real-world skills.",
    },
    {
      icon: Users,
      title: "Community First",
      desc: "Learning is fun when you’re part of a strong, supportive network.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "We stay ahead of the curve by embracing the latest in AI & tech.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-16 text-center bg-gradient-to-r from-purple-50 to-purple-100">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Meet Our Amazing Team
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          The people behind <span className="text-purple-600 font-semibold">TechEdu Pro</span> 
          are passionate mentors, engineers, and innovators dedicated to shaping 
          the next generation of tech leaders.
        </p>
      </section>

      {/* Team Members */}
      <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Mentors</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-6 border-4 border-purple-200"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-purple-600 mb-4">{member.role}</p>
              <div className="flex justify-center gap-6">
                <a
                  href={member.socials.linkedin}
                  className="text-gray-600 hover:text-purple-600 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.socials.github}
                  className="text-gray-600 hover:text-purple-600 transition"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={member.socials.email}
                  className="text-gray-600 hover:text-purple-600 transition"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights / What We Do */}
      <section className="py-20 px-6 lg:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Makes Us Different
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-purple-100 rounded-full">
                  <Icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-6 lg:px-16 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2024/04/18/10/09/ai-generated-8703972_1280.jpg"
            alt="Team working"
            className="w-full h-96 object-cover rounded-2xl shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Culture & Mentorship</h2>
          <p className="text-gray-700 mb-4">
            At TechEdu Pro, we don’t just teach — we mentor. Our culture is built 
            on collaboration, curiosity, and creativity. Students learn by doing, 
            working on **real projects** guided by industry professionals.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Weekly mentorship sessions</li>
            <li>Collaborative project work</li>
            <li>Hands-on coding labs</li>
            <li>Open community discussions</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-16 text-center bg-gradient-to-r from-purple-50 to-purple-100">
        <h2 className="text-4xl font-bold mb-6">Want to Learn with Us?</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Our mentors are ready to help you level up your skills in AI, Full Stack, 
          and cutting-edge technologies. Join us and become part of a thriving tech community.
        </p>
        <button className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition">
          Join the Program
        </button>
      </section>
    </div>
  );
}


