import { useState, type JSX } from "react";
import Navigation from "./Component/Nevigation";

import type { TabType } from "./data";
import { Navigate, Route, Routes } from "react-router-dom";

import Courses from "./Pages/Courses.tsx";
import Dashboard from "./Pages/Dashboard.tsx";
import OpenProject from "./Pages/OpenProject.tsx";
import ProjectContribution from "./Pages/ProjectContribution.tsx";
import QueryScreen from "./Pages/QueryScreen.tsx";
import ProjectAbout from "./Pages/ProjectAbout.tsx";
import CompanyAbout from "./Pages/CompanyAbout.tsx";
import Intership from "./Pages/Intership.tsx";
import CourseAbout from "./Pages/CouseAbout.tsx";
import Showcase from "./Pages/Showcase.tsx";

import { AuthProvider, useAuth } from "./Context/AuthContext.tsx";
import Login from "./Auth/LoginScreen.tsx";
import Signup from "./Auth/SignupScreen.tsx";
import OnboardingQuestions from "./Component/OnboardingScreen.tsx";
import DeviceCheck from "./Component/DeviceCheck.tsx";
import { DataProvider } from "./Context/UserDataContext.tsx";


function PrivateLayout() {
  const [activeTab, setActiveTab] = useState<TabType>("cartoon");

  return (
    <div className="h-screen flex bg-gray-200 overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white fixed h-screen overflow-hidden">
        <Navigation activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {/* Main content */}
      <div className="ml-64 flex-1 overflow-y-auto">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/openproject" element={<ProjectContribution />} />
          <Route path="/project/:id" element={<OpenProject />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/query" element={<QueryScreen />} />
          <Route path="/projectabout/:id" element={<ProjectAbout />} />
          <Route path="/about" element={<CompanyAbout />} />
          <Route path="/intership" element={<Intership />} />
          <Route path="/course/:id" element={<CourseAbout project={{
            id: "p-001",
            title: "Open Source Learning Platform",
            description:
              "A collaborative project where students can learn, contribute, and share resources in real-time. Built with React, Node.js, and Firebase.",
            tags: ["React", "Node.js", "Firebase", "OpenSource"],
            repoUrl: "https://github.com/example/repo",
            websiteUrl: "https://example.com",
            coverImage:
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1350&q=80",
            contributors: [
              { id: "u1", name: "Mohit Sharma", avatar: "https://i.pravatar.cc/100?img=3" },
              { id: "u2", name: "Sneha Rao" },
              { id: "u3", name: "Arjun Patel", avatar: "https://i.pravatar.cc/100?img=6" },
            ],
          }} 
          onContribute={()=>{console.log("Contribute Clicked")}}
          
          
          />} />
        </Routes>
      </div>
    </div>
  );
}
const App: React.FC = () => {

  // 🔒 Route protection
  function ProtectedRoute({ children }: { children: JSX.Element }) {
    const { user, loading } = useAuth();
    if (loading) return <p>Loading...</p>;
    return user ? children : <Navigate to="/" replace />;
  }

  return (
    <AuthProvider>
      <DataProvider>

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Showcase />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboarding" element={<OnboardingQuestions />} />


          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <DeviceCheck>
                  <PrivateLayout />
                </DeviceCheck>
              </ProtectedRoute>
            }
          />

        </Routes>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;
