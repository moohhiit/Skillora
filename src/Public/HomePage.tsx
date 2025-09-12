import { ArrowRight, Code, Brain, Zap, Mic } from "lucide-react";
import { Link } from "react-router-dom";



export function HomePage() {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Master JavaScript, React.js, Next.js, and backend technologies",
      skills: ["JavaScript", "React.js", "Next.js", "Node.js"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Deep dive into AI, ML, DL, and Generative AI technologies",
      skills: ["Python", "TensorFlow", "PyTorch", "OpenAI"]
    },
    {
      icon: Zap,
      title: "Automation & N8N",
      description: "Build powerful workflows and automation solutions",
      skills: ["N8N", "Zapier", "APIs", "Webhooks"]
    },
    {
      icon: Mic,
      title: "Voice Agents",
      description: "Create intelligent voice-powered applications",
      skills: ["Speech AI", "NLP", "Voice UI", "Conversational AI"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="px-3 py-1 text-sm rounded bg-gray-200 w-fit inline-block">
                  Expert-Led Training
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                  Master the Future of
                  <span className="text-purple-600"> AI & Tech</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                  Join our comprehensive internship programs and online courses.
                  Learn software engineering, AI/ML, and cutting-edge
                  technologies from industry experts.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to={'/about'}
                  className="px-6 py-3 text-white bg-purple-600 rounded-lg flex items-center"
                >
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                 to={'/team'}
                  className="px-6 py-3 border rounded-lg"
                >
                  Meet Our Team
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://cdn.pixabay.com/photo/2023/08/13/22/00/computer-8188538_1280.jpg"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              {/* Removed previous purple overlay */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="px-3 py-1 text-sm rounded bg-purple-200 w-fit mx-auto inline-block">
              Our Expertise
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Comprehensive Learning Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From frontend to backend, AI to automation - we cover all aspects
              of modern software development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 text-xs  rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600">
              Join hundreds of students who have transformed their careers with
              our expert-led programs
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
            to={'/about'}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg"
            >
              Learn More About Us
            </Link>
            <Link
              to={'/dashboard'}
              className="px-6 py-3 border rounded-lg"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
