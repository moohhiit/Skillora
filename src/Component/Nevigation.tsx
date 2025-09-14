import React, { useState } from "react";
import type { TabType } from "../data";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { Home, FileText, Folder, Activity, User, Settings, MessageSquare, UserCircle, ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationProps {
  activeTab: TabType;
  onChange: (tab: TabType) => void;
}

const Navigation: React.FC<NavigationProps> = () => {
  const location = useLocation();
  const [isMinimized, setIsMinimized] = useState(false);
  const { user } = useAuth();

  const menu = [
    { name: "DashBoard", path: "/dashboard", icon: <Home size={20} /> },
    { name: "Resume", path: "/dashboard/courses", icon: <FileText size={20} /> },
    { name: "Open Projects", path: "/dashboard/openproject", icon: <Folder size={20} /> },
    { name: "Marathon", path: "/dashboard/marathon", icon: <Activity size={20} /> },
    { name: "Intership", path: "/dashboard/intership", icon: <User size={20} /> },
    { name: "Company Requirements", path: "/dashboard/company_req", icon: <Settings size={20} /> },
    { name: "Query", path: "/dashboard/query", icon: <MessageSquare size={20} /> },
    { name: "Profile Info", path: "/dashboard/profile", icon: <UserCircle size={20} /> },
  ];

  return (
    <div className={`bg-black text-white h-screen flex flex-col transition-all duration-300 ${isMinimized ? "w-20" : "w-64"}`}>
      
      {/* Header with logo, title, and toggle button on the right */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <Link to={'/'}>
            <img
              src="src/assets/logo.svg"
              alt="App Logo"
              className="w-8 h-8"
            />
          </Link>
          {!isMinimized && 
          
          <Link
          to={'/'}
          >
          <h1 className="text-lg font-bold">Skill India</h1>
          </Link>
          
          }
        </div>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="text-white p-1 hover:bg-gray-800 rounded"
        >
          {isMinimized ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* User Info always visible */}
      <div className="p-4 border-b border-gray-700 flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full  text-lg font-bold" style={{backgroundColor:'#00ADB5'}}>
          {user?.displayName ? user.displayName[0] : ""}
        </div>
        {!isMinimized && (
          <div>
            <h2 className="text-base font-bold leading-tight">{user?.displayName}</h2>
            <p className="text-gray-400 text-xs">{user?.email}</p>
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-2 overflow-y-auto">
        <ul className="space-y-2">
          {menu.map((tab, index) => (
            <li key={index} className="relative">
              <Link
                to={tab.path}
                className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-200 ${
                  location.pathname === tab.path
                    ? "bg-gray-800  shadow-lg"
                    : "hover:bg-gray-900"
                }`}
                style={{color:location.pathname === tab.path ?'#00ADB5' :'#ffffffff'}}
              >
                <div>{tab.icon}</div>
                {!isMinimized && <span>{tab.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
