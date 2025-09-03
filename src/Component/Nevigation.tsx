import React from "react";
import type { TabType } from "../data";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";


interface NavigationProps {
  activeTab: TabType;
  onChange: (tab: TabType) => void;
}

const Navigation: React.FC<NavigationProps> = () => {
  const location = useLocation();
  const menu = [

    { name: "DashBoard", path: "/dashboard" },
    { name: "Courses", path: "/courses" },
    { name: "Open Projects", path: "/openproject" },
    { name: "Intership", path: "/intership" },
    { name: "Query", path: "/query" },
    { name: "About", path: "/about" },

  ];
  const { user } = useAuth()
 
  return (
    <div className="w-64 bg-black text-white flex flex-col shadow-lg">

      {/* App Logo & Name */}
      <div className="flex items-center gap-3 p-4  ">
        <img
          src="src/assets/Logo-White.png"
          alt="App Logo"
          className="w-8 h-8"
        />
        <h1 className="text-lg font-bold">Elevana</h1>
      </div>

      {/* User Profile */}
      <div className="p-4 border-b border-gray-700 flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-500 text-lg font-bold">
          {user?.displayName ? user.displayName[0] : ""}
        </div>
        <div>
          <h2 className="text-base font-bold leading-tight">{user?.displayName}</h2>
          <p className="text-gray-400 text-xs">{user?.email}</p>
        </div>
      </div>

      {/* Connected Line Menu */}
      <nav className="flex-1 p-4">
        <ul className="relative border-l border-gray-600 pl-6 space-y-6">
          {menu.map((tab, index) => (
            <li key={index} className="relative">
              {/* Horizontal connector */}
              <span className="absolute left-[-1.5rem] top-1/2 w-6 h-px bg-gray-600"></span>

              <Link
                to={tab.path}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 font-medium ${location.pathname === tab.path
                    ? "bg-gray-800 shadow-lg text-indigo-400"
                    : "hover:bg-gray-900"
                  }`}
              >
                {tab.name}
              </Link>
            </li>

          ))}

        </ul>
      </nav>


    </div>
  );
};

export default Navigation;
