import { ArrowRight, Code, Brain, Zap, Mic } from "lucide-react";
import { Link } from "react-router-dom";



export function HomePage() {
  const services = [
    {
      icon: Code,
      title: "Real Experience, Real Resume",
      description: 'No more adding “self-learning” on your resume. Showcase real projects and skills employers care about',
    },
    {
      icon: Brain,
      title: "Mentorship You Can Trust",
      description: "Get feedback and guidance from industry experts who care about helping you succeed.",
    },
    {
      icon: Zap,
      title: "A Community That Grows With You",
      description: "Learn together, share ideas, and build friendships that last beyond the classroom.",
    },
    {
      icon: Mic,
      title: "Opportunities That Match Your Goals",
      description: "Internships, collaborations, and challenges designed to help you grow professionally.",
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
                  Connect. Learn. Showcase. Succeed.
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                  Learn by Doing
                  <span style={{ color: '#00ADB5' }}> Grow by Contributing</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                  Skillora is a smart platform designed for students who want to learn, grow, and showcase their abilities. It’s more than just a resume builder – it’s a complete ecosystem where students can contribute to real open-source projects, gain practical experience, and update their resumes with meaningful accomplishments.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to={'/about'}
                  className="px-6 py-3 text-white bg-black rounded-lg flex items-center"
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
                src="./src/assets/HomePageImage.png"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
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

            <h2 className="text-3xl lg:text-4xl font-bold">
              How It Works
            </h2>

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
                    <div className="w-12 h-12 bg-neutral rounded-lg flex items-center justify-center" style={{backgroundColor:'#00ADB5'}}>
                      <Icon className="w-6 h-6 " style={{ color: 'white' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm  mb-4">
                        {service.description}
                      </p>

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
              className="px-6 py-3  text-white rounded-lg"
              style={{backgroundColor:'#00ADB5'}}
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
