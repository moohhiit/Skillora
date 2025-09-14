import { Linkedin, Github, Mail, Target, Users, Lightbulb, Star } from "lucide-react";

export function TeamPage() {
  const teamMembers = [
    {
      name: "Mohit Sharma",
      role: "Founder & Visionary",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      socials: {
        linkedin: "#",
        github: "#",
        email: "itzmohitsharma20@gmail.com",
      },
    },
    {
      name: "Sumit Rathore",
      role: "Tech Architect",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      socials: {
        linkedin: "#",
        github: "#",
        email: "mailto:sumit@example.com",
      },
    },
    {
      name: "Ansh Jaiswal",
      role: "Growth Strategist",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      socials: {
        linkedin: "#",
        github: "#",
        email: "mailto:ansh@example.com",
      },
    },
  ];

  const highlights = [
    {
      icon: Target,
      title: "Driven by Purpose",
      desc: "We set out to build a platform that solves real problems and makes a positive impact on people’s lives.",
    },
    {
      icon: Users,
      title: "Built Together",
      desc: "Our journey started as a small team with a shared vision—and it continues to grow with contributions from passionate individuals.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      desc: "We embrace creativity and technology to explore new ways of solving challenges and delivering value.",
    },
  ];

  const testimonials = [
    {
      name: "Neha Sharma",
      quote: "The platform has been a game-changer for connecting with like-minded people and exploring new opportunities!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Raj Verma",
      quote: "A great initiative with a supportive community. It’s amazing to see how much this team cares about making an impact.",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-16  text-white text-center overflow-hidden" style={{backgroundColor:'#00ADB5'}}>
        <div className="absolute top-0 left-0 w-full h-full  pointer-events-none"></div>
        <h1 className="text-5xl font-extrabold relative z-10">Meet Our Team</h1>
        <p className="max-w-2xl mx-auto mt-4 relative z-10 text-lg text-purple-100">
          We are three passionate individuals who started this project to bring ideas to life and build a community around innovation and purpose.
        </p>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-6 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Teams</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 p-6 text-center group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2  transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{backgroundColor:'#00ADB5'}} ></div>
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4  mb-4 group-hover:scale-105 transform transition"
                style={{borderColor:'#00ADB5'}}
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className=" mb-4" style={{color:'#00ADB5'}} >{member.role}</p>
              <div className="flex justify-center gap-4 text-gray-500 hover:text-blue-600 transition">
                <a href={member.socials.linkedin} aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.socials.github} aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
                <a href={member.socials.email} aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 mb-4">
          It all began with <span className="font-semibold" style={{color:'#00ADB5'}} >Mohit Sharma’s vision</span> to create something impactful. His idea to solve real problems and empower people became the driving force behind this project. Together with Sumit and Ansh, they turned that dream into a thriving community where creativity and collaboration flourish.
        </p>
        <p className="max-w-3xl mx-auto text-center text-gray-700">
          From brainstorming sessions to late-night coding and endless discussions, their passion and perseverance have laid the foundation of a platform built on innovation, teamwork, and purpose.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6 lg:px-16 "  style={{backgroundColor:'#f0feff'}}>
        <h2 className="text-3xl font-bold text-center mb-12">Why We Do This</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
                <div className="w-14 h-14 mx-auto flex items-center justify-center  rounded-full mb-4" style={{backgroundColor:'#8efaff'}}>
                  <Icon className="w-6 h-6" style={{color :'#ffffffff'}} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 lg:px-16 " style={{backgroundColor:'#b5fcff'}} >
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testi, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition relative group">
              
              <p className="text-gray-700 mb-4 italic">"{testi.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testi.image}
                  alt={testi.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                />
                <div>
                  <h4 className="font-semibold">{testi.name}</h4>
                  <p className="text-sm text-gray-500">Community Member</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


   

      {/* Final CTA */}
      <section className="py-16 px-6 lg:px-16  text-white text-center" style={{backgroundColor:'#01787cff'}}>
        <h2 className="text-4xl font-bold mb-4">Let’s Build Together</h2>
        <p className="max-w-2xl mx-auto mb-8 text-purple-100">
          Join us on this exciting journey of creativity, collaboration, and innovation.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-purple-100 transition">
          Connect Now
        </button>
      </section>
    </div>
  );
}
