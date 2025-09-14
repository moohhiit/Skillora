import { useState, type JSX, Suspense, lazy } from "react";
import { Navigate, Route, Routes, Outlet } from "react-router-dom";

import Navigation from "./Component/Nevigation";
import type { TabType } from "./data";

import { AuthProvider, useAuth } from "./Context/AuthContext";
import { DataProvider } from "./Context/UserDataContext";

import DeviceCheck from "./Component/DeviceCheck";
import PublicNavBar from "./Public/PublicNevBar";
import ScrollToTop from "./Component/ScrollToTop";
import { AnimatePresence, motion } from "framer-motion";

// Lazy-loaded pages
const HomePage = lazy(() => import("./Public/HomePage").then(mod => ({ default: mod.HomePage })));
const AboutPage = lazy(() => import("./Public/CompanyAbout").then(mod => ({ default: mod.AboutPage })));
const TeamPage = lazy(() => import("./Public/TeamPage").then(mod => ({ default: mod.TeamPage })));
const Login = lazy(() => import("./Auth/LoginScreen"));
const Signup = lazy(() => import("./Auth/SignupScreen"));

const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const Showcase = lazy(() => import("./Pages/Showcase"));
const ProjectContribution = lazy(() => import("./Pages/ProjectContribution"));
const OpenProject = lazy(() => import("./Pages/OpenProject"));
const Courses = lazy(() => import("./Pages/Courses"));
const QueryScreen = lazy(() => import("./Pages/QueryScreen"));
const ProjectAbout = lazy(() => import("./Pages/ProjectAbout"));
const Intership = lazy(() => import("./Pages/Intership"));
const Company_Req = lazy(() => import("./Pages/Company_Req/Company_Req"));
const ProfileInfo = lazy(() => import("./Pages/Profile/ProfileInfo"));
const Marathon = lazy(() => import("./Pages/Marathon/Marathon"));
const CourseAbout = lazy(() => import("./Pages/CouseAbout"));

function PublicLayout() {
  const [activeTab, setActiveTab] = useState<TabType>("cartoon");

  return (
    <div className="min-h-screen bg-background">
      <PublicNavBar activeTab={activeTab} onChange={setActiveTab} />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/teamElevana" element={<TeamPage />} />
          <Route path="/login" element={<LoginRedirect />} />
          <Route path="/signup" element={<SignupRedirect />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>

      <footer className="bg-card border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                   <img src="./src/assets/logo.svg" ></img>
                </div>
                <span className="text-lg font-semibold">Skill India</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering the next generation of tech professionals through
                practical education and industry mentorship.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Open Project Contribution</li>
                <li>Resume Builder</li>
                <li>Marathon</li>
                <li>Compnay Requirements</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Our Team</li>
                
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>GitHub</li>
                <li>Discord</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Skillindia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LoginRedirect() {
  const { user } = useAuth();
  return user ? <Navigate to="/dashboard" replace /> : <Login />;
}

function SignupRedirect() {
  const { user } = useAuth();
  return user ? <Navigate to="/dashboard" replace /> : <Signup />;
}

function PrivateLayout() {
  const [activeTab, setActiveTab] = useState<TabType>("cartoon");

  return (
    <motion.div
      className="h-screen flex bg-gray-200 overflow-hidden"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="transition-all duration-300 ease-in-out">
        <Navigation activeTab={activeTab} onChange={setActiveTab} />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>

    </motion.div>
  );
}

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return user ? children : <Navigate to="/login" replace />;
}

const App: React.FC = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <ScrollToTop />
        <Suspense fallback={<div>Loading app...</div>}>
          <AnimatePresence mode="wait" >

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
                <Route path="marathon" element={<Marathon />} />
                <Route path="profile" element={<ProfileInfo />} />
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
                      onContribute={() => console.log("Contribute Clicked")}
                    />
                  }
                />
              </Route>
            </Routes>
          </AnimatePresence>
        </Suspense>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;
