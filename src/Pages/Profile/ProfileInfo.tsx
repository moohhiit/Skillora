import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";

interface StudentProfile {
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  projects: string;
  skills: string[];
}

const Profile = () => {
  const [profile, setProfile] = useState<StudentProfile | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data: StudentProfile = {
        name: "Mohit Sharma",
        email: "mohit@example.com",
        phone: "+91 9876543210",
        education: "B.Tech in Computer Science, XYZ University",
        experience: "Intern at ABC Corp - Web Development",
        projects: "Resume Builder, Student Portal, Chat App",
        skills: ["JavaScript", "React", "Node.js", "TypeScript"],
      };
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setProfile(data);
    };

    fetchData();
  }, []);

  if (!profile) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-gray-500">Loading profile...</div>
      </div>
    );
  }

  const handleEdit = (field: keyof StudentProfile) => {
    alert(`Edit ${field} clicked!`);
  };

  const renderField = (label: string, value: string, fieldKey: keyof StudentProfile) => (
    <div className="flex justify-between items-start py-4 border-b border-gray-200">
      <div>
        <h3 className="text-sm font-semibold text-gray-600">{label}</h3>
        <p className="mt-1 text-gray-800">{value}</p>
      </div>
      <button
        onClick={() => handleEdit(fieldKey)}
        className="p-1 hover:bg-gray-100 rounded-md text-gray-500 hover:text-blue-600 transition-colors"
        title={`Edit ${label}`}
      >
        <Pencil className="h-4 w-4" />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-5 bg-blue-50 border-b border-blue-100">
          <h1 className="text-2xl font-bold text-gray-800 text-center">Student Profile</h1>
        </div>

        <div className="px-6 py-5 space-y-4">
          {renderField("Full Name", profile.name, "name")}
          {renderField("Email", profile.email, "email")}
          {renderField("Phone Number", profile.phone, "phone")}
          {renderField("Education", profile.education, "education")}
          {renderField("Experience", profile.experience, "experience")}
          {renderField("Projects", profile.projects, "projects")}

          {/* Skills Section */}
          <div className="py-4 border-b border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold text-gray-600">Technical Skills</h3>
              <button
                onClick={() => handleEdit("skills")}
                className="p-1 hover:bg-gray-100 rounded-md text-gray-500 hover:text-blue-600 transition-colors"
                title="Edit Technical Skills"
              >
                <Pencil className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 text-center">
          <button
            onClick={() => alert("Save functionality can be implemented here")}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
