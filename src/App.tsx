import { useState } from "react";
import Navigation from "./Component/Nevigation";

import type { TabType } from "./data";
import { Route, Routes } from "react-router-dom";

import Courses from "./Pages/Courses.tsx";
import Dashboard from "./Pages/Dashboard.tsx";
import OpenProject from "./Pages/OpenProject.tsx";
import ProjectContribution from "./Pages/ProjectContribution.tsx";
import QueryScreen from "./Pages/QueryScreen.tsx";
// import About from "./Pages/ProjectAbout.tsx";
import ProjectAbout from "./Pages/ProjectAbout.tsx";
import CompanyAbout from "./Pages/CompanyAbout.tsx";
import Intership from "./Pages/Intership.tsx";
// import Login from "./Auth/LoginScreen.tsx";
// import Signup from "./Auth/SignupScreen.tsx";
// import OnboardingQuestions from "./Component/OnboardingScreen.tsx";


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
          <Route path="/Elevana/" element={<Dashboard />} />
          <Route path="/Elevana/openproject" element={<ProjectContribution/>} />
          <Route path="/Elevana/project/:id" element={<OpenProject/>} />
          <Route path="/Elevana/courses" element={<Courses />} />
     
          <Route path="/Elevana/query" element={<QueryScreen />} />
          <Route path="/Elevana/projectabout/:id" element={<ProjectAbout />} />
          <Route path="/Elevana/about" element={<CompanyAbout />} />
          <Route path="/Elevana/intership" element={<Intership />} />
          
        </Routes>
      </div>
         </div>
  );
};

export default App;
