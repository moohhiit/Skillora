import { useState, type JSX } from "react";
import { Navigate, Route, Routes, Outlet } from "react-router-dom";

import Navigation from "./Component/Nevigation";
import type { TabType } from "./data";

import Courses from "./Pages/Courses";
import Dashboard from "./Pages/Dashboard";
import OpenProject from "./Pages/OpenProject";
import ProjectContribution from "./Pages/ProjectContribution";
import QueryScreen from "./Pages/QueryScreen";
import ProjectAbout from "./Pages/ProjectAbout";
import { AboutPage } from "./Public/CompanyAbout";
import Intership from "./Pages/Intership";
import CourseAbout from "./Pages/CouseAbout";
import Showcase from "./Pages/Showcase";

import { AuthProvider, useAuth } from "./Context/AuthContext";
import Login from "./Auth/LoginScreen";
import Signup from "./Auth/SignupScreen";
import DeviceCheck from "./Component/DeviceCheck";
import { DataProvider } from "./Context/UserDataContext";
import PublicNavBar from "./Public/PublicNevBar";
import { HomePage } from "./Public/HomePage";
import { TeamPage } from "./Public/TeamPage";
import { ProjectsPage } from "./Public/ProjectPage";
import Company_Req from "./Pages/Company_Req/Company_Req";
import ProfileInfo from "./Pages/Profile/ProfileInfo";
import Marathon from "./Pages/Marathon/Marathon";

// ✅ Public Layout
function PublicLayout() {
  const [activeTab, setActiveTab] = useState<TabType>("cartoon");

  return (
    <div className="min-h-screen bg-background">
      <PublicNavBar activeTab={activeTab} onChange={setActiveTab} />

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/teamElevana" element={<TeamPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/login" element={<LoginRedirect />} />
          <Route path="/signup" element={<SignupRedirect />} />
        </Routes>
      </div>

      <footer className="bg-card border-t border-border mt-20">
        {/* Footer content here */}
      </footer>
    </div>
  );
}

// ✅ Redirect if logged in
function LoginRedirect() {
  const { user } = useAuth();
  return user ? <Navigate to="/dashboard" replace /> : <Login />;
}

function SignupRedirect() {
  const { user } = useAuth();
  return user ? <Navigate to="/dashboard" replace /> : <Signup />;
}

// ✅ Private Layout
function PrivateLayout() {
  const [activeTab, setActiveTab] = useState<TabType>("cartoon");

  return (
    <div className="h-screen flex bg-gray-200 overflow-hidden">
      {/* Sidebar */}
      <div className="transition-all duration-300 ease-in-out">
        <Navigation activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>

  );
}

// ✅ Protected Route Component
function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return user ? children : <Navigate to="/login" replace />;
}

const App: React.FC = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/*" element={<PublicLayout />} />

          {/* Private Routes */}
          <Route
            path="dashboard/*"
            element={
              <ProtectedRoute>
                <DeviceCheck>
                  <PrivateLayout />
                </DeviceCheck>
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="myproject" element={<Showcase />} />
            <Route path="openproject" element={<ProjectContribution />} />
            <Route path="project/:id" element={<OpenProject />} />
            <Route path="courses" element={<Courses />} />
            <Route path="query" element={<QueryScreen />} />
            <Route path="projectabout/:id" element={<ProjectAbout />} />
            <Route path="intership" element={<Intership />} />
            <Route path="company_req" element={<Company_Req />} />
            <Route path="marathon" element={<Marathon/>} />
            <Route path="profile" element={<ProfileInfo/>} />
            <Route
              path="course/:id"
              element={
                <CourseAbout
                  project={{
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
                  onContribute={() => {
                    console.log("Contribute Clicked");
                  }}
                />
              }
            />
          </Route>
        </Routes>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;
