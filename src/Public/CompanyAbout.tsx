import { Target, Lightbulb, Award, Users } from "lucide-react";

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Empowering the next generation of tech professionals through practical, industry-relevant education",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "Staying ahead of technology trends to provide cutting-edge curriculum and learning experiences",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "Maintaining high standards in education delivery and student outcomes",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "Building a supportive learning community that extends beyond the classroom",
    },
  ];

  const stats = [
    { number: "4+", label: "Years Experience" },
    { number: "500+", label: "Students Mentored" },
    { number: "50+", label: "Industry Projects" },
    { number: "95%", label: "Job Placement Rate" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Story Section */}
      <div className="grid lg:grid-cols-2 gap-12 px-8 lg:px-16 py-20 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-purple-600">
            Our Story
          </h2>
          <p className="text-gray-700 mb-4">
            TechEdu Pro was founded by a team of industry veterans who saw the
            gap between traditional education and industry demands.
          </p>
          <p className="text-gray-700 mb-4">
            Having worked in startups, global tech firms, and emerging
            technologies like Voice AI & automation, our mentors bring practical
            insights to every program.
          </p>
          <p className="text-gray-700">
            Through internships, projects, and guided mentorship, we prepare
            students to confidently tackle real-world challenges.
          </p>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/736x/e8/7e/c4/e87ec4c9d80e8e3da206a9c67e368226.jpg"
            alt="Students working on tech project"
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Student Learning Section */}
      <div className="grid lg:grid-cols-2 gap-12 px-8 lg:px-16 py-20 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-purple-600">
            Student Learning
          </h2>
          <p className="text-gray-700 mb-4">
            At TechEdu Pro, students learn through interactive sessions, hands-on
            coding labs, and guided mentorship. Our programs ensure a strong
            foundation in both theory and practice.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Live coding sessions & workshops</li>
            <li>Self-paced learning with mentor guidance</li>
            <li>Weekly quizzes and feedback</li>
            <li>Community discussions and support</li>
          </ul>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2024/04/18/10/09/ai-generated-8703972_1280.jpg"
            alt="Students learning"
            className="w-full h-96 object-cover rounded-2xl shadow"
          />
        </div>
      </div>

      {/* Student Working Section */}
      <div className="grid lg:grid-cols-2 gap-12 px-8 lg:px-16 py-20 items-center">
        <div className="order-2 lg:order-1">
          <img
            src="https://i.pinimg.com/1200x/81/29/92/812992f44a2cd6e6787b8b61209abf48.jpg"
            alt="Students working"
            className="w-full h-96 object-cover rounded-2xl shadow"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">
            Student Working
          </h2>
          <p className="text-gray-700 mb-4">
            Beyond learning, our students work on real industry projects to apply
            their skills and build professional portfolios. They collaborate in
            teams, solve real challenges, and gain practical exposure.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Internship with live projects</li>
            <li>Building full-stack applications</li>
            <li>Working on AI/ML use cases</li>
            <li>Industry mentorship and feedback</li>
          </ul>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16 px-8 lg:px-16">
        <h2 className="text-3xl font-semibold text-center mb-10 text-purple-600">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl text-center shadow-md hover:shadow-xl transition-all border"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-purple-50 rounded-full">
                  <Icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-purple-600">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-8 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-2xl p-6 shadow-md hover:scale-105 transition-transform"
          >
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {stat.number}
            </div>
            <div className="text-gray-700">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

