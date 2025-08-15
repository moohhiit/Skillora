import { useState } from "react";
import Navigation from "./Component/Nevigation";

import type { TabType } from "./data";
import { Route, Routes } from "react-router-dom";
import News from "./Pages/News.tsx";
import Cartoon from "./Pages/Cartoon";
import Games from "./Pages/Games";
import Courses from "./Pages/Courses.tsx";
import Dashboard from "./Pages/Dashboard.tsx";
import OpenProject from "./Pages/OpenProject.tsx";
import ProjectContribution from "./Pages/ProjectContribution.tsx";
import QueryScreen from "./Pages/QueryScreen.tsx";
import About from "./Pages/ProjectAbout.tsx";
import ProjectAbout from "./Pages/ProjectAbout.tsx";
import CompanyAbout from "./Pages/CompanyAbout.tsx";
import Intership from "./Pages/Intership.tsx";
import Login from "./Auth/LoginScreen.tsx";
import Signup from "./Auth/SignupScreen.tsx";
import OnboardingQuestions from "./Component/OnboardingScreen.tsx";


const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("news");

  return (
    <div className="h-screen flex bg-gray-200">
       <div className="w-64 bg-black text-white fixed h-screen overflow-hidden">
        
      <Navigation activeTab={activeTab} onChange={setActiveTab} />
      </div>
        <div className="ml-64 flex-1 overflow-y-auto">
        <Routes>
           {/* <Route path="/login" element={<Login  />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<OnboardingQuestions></OnboardingQuestions>} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/openproject" element={<ProjectContribution/>} />
          <Route path="/project/:id" element={<OpenProject/>} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/cartoon" element={<Cartoon />} />
          <Route path="/games" element={<Games />} />
          <Route path="/query" element={<QueryScreen />} />
          <Route path="/projectabout/:id" element={<ProjectAbout />} />
          <Route path="/about" element={<CompanyAbout />} />
          <Route path="/intership" element={<Intership />} />
          
        </Routes>
      </div>
         </div>
  );
};

export default App;
