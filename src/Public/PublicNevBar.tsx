import { useState } from "react";
import { Home, Users, FolderKanban, BarChart3, Info, Menu, X, LogIn, UserPlus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"; 
import type { TabType } from "../data";

interface NavigationProps {
    activeTab: TabType;
    onChange: (tab: TabType) => void;
}

const PublicNavBar: React.FC<NavigationProps> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { user } = useAuth(); 

    const navItems = [
        { id: "home", label: "Home", icon: <Home className="w-5 h-5" />, path: '/' },
        { id: "about", label: "About", icon: <Info className="w-5 h-5" />, path: '/about' },
        { id: "team", label: "Team", icon: <Users className="w-5 h-5" />, path: '/teamElevana' },
        { id: "projects", label: "Projects", icon: <FolderKanban className="w-5 h-5" />, path: '/projects' },
    ];

    
    const authItems = user
        ? [{ id: "dashboard", label: "Dashboard", icon: <BarChart3 className="w-5 h-5" />, path: '/dashboard' }]
        : [
            { id: "login", label: "Login", icon: <LogIn className="w-5 h-5" />, path: '/login' },
            { id: "signup", label: "Signup", icon: <UserPlus className="w-5 h-5" />, path: '/signup' },
          ];

    const allItems = [...navItems, ...authItems];

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
                <div className="flex justify-between items-center h-16 ">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-primary-foreground font-bold">T</span>
                        </div>
                        <span className="font-semibold text-lg">TechEdu Pro</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {allItems.map((item) => (
                            <Link
                                key={item.id}
                                to={item.path}
                                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition ${location.pathname === item.path
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                }`}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="p-2 rounded-md hover:bg-accent transition"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            <div className={`fixed inset-0 z-40 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
                <div className="relative bg-card w-64 h-full shadow-lg p-6 space-y-6 bg-white">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-primary-foreground font-bold">T</span>
                            </div>
                            <span className="font-semibold text-lg">TechEdu Pro</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-md hover:bg-accent transition"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <div className="flex flex-col space-y-3 mt-6">
                        {allItems.map((item) => (
                            <Link
                                key={item.id}
                                to={item.path}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition ${location.pathname === item.path
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                }`}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default PublicNavBar;
