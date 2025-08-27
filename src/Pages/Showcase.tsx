// src/pages/Showcase.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Showcase: React.FC = () => {

  const navigate  = useNavigate()

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold">🚀 Join Elevana</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          A student-first platform to <span className="font-semibold">Learn</span>,{" "}
          <span className="font-semibold">Contribute</span>, and{" "}
          <span className="font-semibold">Build Real Projects</span>.
        </p>
        <button
          className="mt-8 px-6 md:px-8 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
          onClick={() => navigate('/login')}
        >
          Join Us Today
        </button>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black">Why Join Elevana?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          <FeatureCard
            title="📘 Learn by Doing"
            description="Go beyond theory with practical, project-based learning."
          />
          <FeatureCard
            title="🤝 Collaborate"
            description="Work with peers & mentors on real open-source style projects."
          />
          <FeatureCard
            title="🌟 Build Your Profile"
            description="Gain hands-on experience and grow your portfolio for future jobs."
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 px-6 text-center">
        <h2 className="text-3xl font-bold text-black">How It Works</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          <StepCard step="1" title="Join" description="Sign up and become part of our student community." />
          <StepCard step="2" title="Learn" description="Access resources, courses, and mentorship." />
          <StepCard step="3" title="Contribute" description="Work on open projects and grow your skills." />
        </div>
      </section>

      {/* Open Projects Showcase */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-black
        ">Our Projects</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          <ProjectCard title="💻 Student Portal" description="Manage learning & projects in one place." />
          <ProjectCard title="📊 Analytics Dashboard" description="Track progress, contributions, and achievements." />
          <ProjectCard title="🌍 Community App" description="Connect students worldwide through collaboration." />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 px-6 text-center">
        <h2 className="text-3xl font-bold text-indigo-700">Student Stories</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
          <TestimonialCard
            name="Aditi Sharma"
            role="Student Developer"
            feedback="EduHub helped me build my first real-world project and land an internship."
          />
          <TestimonialCard
            name="Rahul Verma"
            role="Open Source Contributor"
            feedback="The community support is amazing! I’ve learned so much by contributing."
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-indigo-50 px-6 text-center">
        <h2 className="text-3xl font-bold text-indigo-700">Our Impact</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
          <StatCard number="5K+" label="Active Students" />
          <StatCard number="160+" label="Open Projects" />
          <StatCard number="100+" label="Mentors Worldwide" />
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-indigo-700">Earn Badges as You Grow</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <BadgeCard emoji="🎯" title="Beginner" desc="Start your learning journey." />
          <BadgeCard emoji="⚡" title="Contributor" desc="Work on open projects." />
          <BadgeCard emoji="🏆" title="Mentor" desc="Guide others & share knowledge." />
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700">Your Journey with Elevana</h2>
        <div className="mt-10 max-w-4xl mx-auto space-y-8">
          <RoadmapStep step="1" title="Sign Up" desc="Create your free account." />
          <RoadmapStep step="2" title="Learn" desc="Access courses & mentorship." />
          <RoadmapStep step="3" title="Contribute" desc="Join projects & teams." />
          <RoadmapStep step="4" title="Showcase" desc="Build a strong portfolio." />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-700 text-center">Frequently Asked Questions</h2>
        <div className="mt-10 space-y-6">
          <FAQ question="Is EduHub free to join?" answer="Yes, it's completely free for students." />
          <FAQ question="Do I need prior experience?" answer="No, beginners are welcome. We have resources for all levels." />
          <FAQ question="How do I contribute?" answer="You can browse open projects after joining and pick one to work on." />
        </div>
      </section>

      
     

      {/* Call to Action */}
      <section className="py-20 bg-indigo-700 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Journey?</h2>
        <button
          className="mt-6 px-6 md:px-8 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
          onClick={() => navigate('/login')}
        >
          Join Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center text-sm md:text-base">
        <p>© {new Date().getFullYear()} Elevana. All rights reserved.</p>
      </footer>
    </div>
  );
};

/* ✅ Components */
interface FeatureCardProps {
  title: string;
  description: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

interface StepCardProps {
  step: string;
  title: string;
  description: string;
}
const StepCard: React.FC<StepCardProps> = ({ step, title, description }) => (
  <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
    <h3 className="text-2xl font-bold text-indigo-700">Step {step}</h3>
    <h4 className="text-lg font-semibold mt-2">{title}</h4>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

interface ProjectCardProps {
  title: string;
  description: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => (
  <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

interface TestimonialCardProps {
  name: string;
  role: string;
  feedback: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, feedback }) => (
  <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
    <p className="italic text-gray-600">“{feedback}”</p>
    <h4 className="mt-4 font-semibold">{name}</h4>
    <p className="text-sm text-gray-500">{role}</p>
  </div>
);

interface StatCardProps {
  number: string;
  label: string;
}
const StatCard: React.FC<StatCardProps> = ({ number, label }) => (
  <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
    <h3 className="text-4xl font-bold text-indigo-700">{number}</h3>
    <p className="mt-2 text-gray-600">{label}</p>
  </div>
);

interface BadgeCardProps {
  emoji: string;
  title: string;
  desc: string;
}
const BadgeCard: React.FC<BadgeCardProps> = ({ emoji, title, desc }) => (
  <div className="w-48 p-6 bg-indigo-100 rounded-2xl shadow hover:scale-105 transition transform">
    <div className="text-4xl">{emoji}</div>
    <h4 className="mt-4 font-semibold">{title}</h4>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

interface RoadmapStepProps {
  step: string;
  title: string;
  desc: string;
}
const RoadmapStep: React.FC<RoadmapStepProps> = ({ step, title, desc }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-700 text-white font-bold text-lg">
      {step}
    </div>
    <div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  </div>
);

interface FAQProps {
  question: string;
  answer: string;
}
const FAQ: React.FC<FAQProps> = ({ question, answer }) => (
  <div className="p-4 border-b border-gray-200">
    <h4 className="font-semibold text-lg">{question}</h4>
    <p className="mt-2 text-gray-600">{answer}</p>
  </div>
);

export default Showcase;
