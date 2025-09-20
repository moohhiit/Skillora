import React, { useEffect, useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Plus,
  X,
  Edit3,
  Save,
  FileText,
  GraduationCap,
  Briefcase,
  Award,
  Globe,
} from "lucide-react";
import { Badge, Button, Card, CardContent, CardHeader, CardTitle, Input, Label, Textarea } from "../../Component/Global/ui";


interface Education {
  degree: string;
  school: string;
  year: string;
}
interface Experience {
  title: string;
  company: string;
  year: string;
  desc: string;
}
interface Link {
  platform: string;
  url: string;
}

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  location: string;
  institute: string;
  bio: string;
  skills: string[];
  education: Education[];
  experience: Experience[];
  achievements: string[];
  links: Link[];
}
type Gender = "male" | "female";
export default function Profile() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newSkill, setNewSkill] = useState<string>("");
  const [profile, setProfile] = useState<ProfileData>({
    name: "John Student",
    email: "john.student@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    institute: "Tech University",
    bio: "Passionate software developer with experience in full-stack development. Always eager to learn new technologies and contribute to innovative projects.",
    skills: ["JavaScript", "React", "Node.js", "Python"],
    education: [
      { degree: "B.Tech CSE", school: "Tech University", year: "2022–2026" },
    ],
    experience: [
      {
        title: "Frontend Intern",
        company: "StartupX",
        year: "2024",
        desc: "Worked on React components, Tailwind styling, and API integration.",
      },
    ],
    achievements: ["Won Hackathon 2023", "Certified in AWS Cloud"],
    links: [
      { platform: "GitHub", url: "https://github.com/johnstudent" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/johnstudent" },
    ],
  });
  const [newAchievement, setNewAchievement] = useState<string>("");
  const [newEducation, setNewEducation] = useState<Education>({
    degree: "",
    school: "",
    year: "",
  });
  const [newExperience, setNewExperience] = useState<Experience>({
    title: "",
    company: "",
    year: "",
    desc: "",
  });

  const handleAddSkill = () => {
    const skill = newSkill.trim();
    if (skill && !profile.skills.includes(skill)) {
      setProfile((prev) => ({
        ...prev,
        skills: [...prev.skills, skill],
      }));
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setProfile((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save changes to backend if needed
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof ProfileData
  ) => {
    setProfile((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };
  const [avatarUrl, setAvatarUrl] = useState("");
  const [gender, setGender] = useState<Gender>("male");

  useEffect(() => {
    generateAvatar("male"); // default
  }, []);

  const maleAvatarLilst = [
    "Eliza",
    'Easton',
    'Brian',
    'Liam',
    'Jessica',
    'Destiny',
    'Luis',
    'Chase',
    'Ryan'
  ]

  const generateAvatar = (selectedGender: Gender) => {
    setGender(selectedGender);
    const seed = Math.floor(Math.random() * maleAvatarLilst.length) + 1;
    const url = `https://api.dicebear.com/9.x/adventurer/svg?seed=${maleAvatarLilst[seed]}`;
    setAvatarUrl(url);
  };
  const [newLink, setNewLink] = useState<Link>({ platform: "", url: "" });



  // 🔹 Achievements
  const handleAddAchievement = () => {
    if (newAchievement.trim()) {
      setProfile((prev) => ({
        ...prev,
        achievements: [...prev.achievements, newAchievement],
      }));
      setNewAchievement("");
    }
  };
  const handleRemoveAchievement = (ach: string) => {
    setProfile((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((a) => a !== ach),
    }));
  };

  // 🔹 Education
  const handleAddEducation = () => {
    if (newEducation.degree && newEducation.school && newEducation.year) {
      setProfile((prev) => ({
        ...prev,
        education: [...prev.education, newEducation],
      }));
      setNewEducation({ degree: "", school: "", year: "" });
    }
  };
  const handleRemoveEducation = (index: number) => {
    setProfile((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  // 🔹 Experience
  const handleAddExperience = () => {
    if (newExperience.title && newExperience.company) {
      setProfile((prev) => ({
        ...prev,
        experience: [...prev.experience, newExperience],
      }));
      setNewExperience({ title: "", company: "", year: "", desc: "" });
    }
  };
  const handleRemoveExperience = (index: number) => {
    setProfile((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  // 🔹 Links
  const handleAddLink = () => {
    if (newLink.platform && newLink.url) {
      setProfile((prev) => ({
        ...prev,
        links: [...prev.links, newLink],
      }));
      setNewLink({ platform: "", url: "" });
    }
  };
  const handleRemoveLink = (index: number) => {
    setProfile((prev) => ({
      ...prev,
      links: prev.links.filter((_, i) => i !== index),
    }));
  };



  return (
    <div className="space-y-6 m-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Profile
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your personal information and skills
          </p>
        </div>
        <Button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className=" hover:from-blue-700 hover:to-green-700"
          style={{ backgroundColor: '#00ADB5' }}
        >
          {isEditing ? (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <Edit3 className="h-4 w-4 mr-2" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Basic Information */}
        <div className="lg:col-span-2">
          <Card className="bg-white/80 backdrop-blur-sm ">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => handleInputChange(e, "name")}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => handleInputChange(e, "email")}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => handleInputChange(e, "phone")}
                    disabled={!isEditing}
                    className="mt-1"
                  />
                </div>
                <div>

                  <Label htmlFor="Gender">Gender</Label>
                  <select
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
                    value={gender}
                  // onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select your gender</option>
                    <option value="male">Male ♂</option>
                    <option value="female">Female ♀</option>
                    <option value="other">Other ⚧</option>
                  </select>
                </div>
              </div>
              <div
              >
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={profile.location}
                  onChange={(e) => handleInputChange(e, "location")}
                  disabled={!isEditing}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={profile.bio}
                  onChange={(e) => handleInputChange(e, "bio")}
                  disabled={!isEditing}
                  className="mt-1"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Summary */}
        <div>
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Profile Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <div className="w-20 h-20  rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#00ADB5' }}>
                {avatarUrl && <img src={avatarUrl} alt="Random Avatar" className="w-full h-full" />}
              </div>
              <h3 className="font-semibold">{profile.name}</h3>
              <p className="text-sm text-gray-500">{profile.institute}</p>

              <div className="space-y-2 mt-2 text-left">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span className="truncate">{profile.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-purple-600" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Building className="h-4 w-4 text-orange-600" />
                  <span>{profile.institute}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <FileText className="h-4 w-4 text-pink-600 flex-shrink-0" />
                  <span>{profile.bio}</span>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-indigo-600" />
            Education
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {profile.education.map((edu, i) => (
            <div key={i} className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{edu.degree}</p>
                <p className="text-sm text-gray-500">
                  {edu.school} | {edu.year}
                </p>
              </div>
              {isEditing && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveEducation(i)}
                >
                  <X className="h-4 w-4 text-red-600" />
                </Button>
              )}
            </div>
          ))}
          {isEditing && (
            <div className="grid grid-cols-3 gap-2">
              <Input
                placeholder="Degree"
                value={newEducation.degree}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, degree: e.target.value })
                }
              />
              <Input
                placeholder="School"
                value={newEducation.school}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, school: e.target.value })
                }
              />
              <Input
                placeholder="Year"
                value={newEducation.year}
                onChange={(e) =>
                  setNewEducation({ ...newEducation, year: e.target.value })
                }
              />
              <Button onClick={handleAddEducation}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Experience */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-yellow-600" />
            Experience / Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {profile.experience.map((exp, i) => (
            <div key={i} className="flex justify-between items-start">
              <div>
                <p className="font-semibold">{exp.title}</p>
                <p className="text-sm text-gray-600">
                  {exp.company} | {exp.year}
                </p>
                <p className="text-gray-500">{exp.desc}</p>
              </div>
              {isEditing && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveExperience(i)}
                >
                  <X className="h-4 w-4 text-red-600" />
                </Button>
              )}
            </div>
          ))}
          {isEditing && (
            <div className="grid grid-cols-4 gap-2">
              <Input
                placeholder="Title"
                value={newExperience.title}
                onChange={(e) =>
                  setNewExperience({ ...newExperience, title: e.target.value })
                }
              />
              <Input
                placeholder="Company"
                value={newExperience.company}
                onChange={(e) =>
                  setNewExperience({ ...newExperience, company: e.target.value })
                }
              />
              <Input
                placeholder="Year"
                value={newExperience.year}
                onChange={(e) =>
                  setNewExperience({ ...newExperience, year: e.target.value })
                }
              />
              <Input
                placeholder="Description"
                value={newExperience.desc}
                onChange={(e) =>
                  setNewExperience({ ...newExperience, desc: e.target.value })
                }
              />
              <Button onClick={handleAddExperience}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-green-600" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {profile.achievements.map((ach, i) => (
            <Badge key={i} variant="secondary" className="flex items-center gap-1">
              {ach}
              {isEditing && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveAchievement(ach)}
                  className="p-0 h-auto"
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </Badge>
          ))}
          {isEditing && (
            <div className="flex gap-2 w-full">
              <Input
                placeholder="New achievement"
                value={newAchievement}
                onChange={(e) => setNewAchievement(e.target.value)}
              />
              <Button onClick={handleAddAchievement}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Links */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-600" />
            Links
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {profile.links.map((link, i) => (
            <div key={i} className="flex justify-between items-center">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {link.platform}: {link.url}
              </a>
              {isEditing && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveLink(i)}
                >
                  <X className="h-4 w-4 text-red-600" />
                </Button>
              )}
            </div>
          ))}
          {isEditing && (
            <div className="flex gap-2">
              <Input
                placeholder="Platform"
                value={newLink.platform}
                onChange={(e) =>
                  setNewLink({ ...newLink, platform: e.target.value })
                }
              />
              <Input
                placeholder="URL"
                value={newLink.url}
                onChange={(e) =>
                  setNewLink({ ...newLink, url: e.target.value })
                }
              />
              <Button onClick={handleAddLink}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5 text-green-600" /> Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex gap-2">
            <Input
              placeholder="Add new skill..."
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={(e: KeyboardEvent<HTMLInputElement>) =>
                e.key === "Enter" && handleAddSkill()
              }
              disabled={!isEditing}
            />
            <Button onClick={handleAddSkill} disabled={!isEditing}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, i) => (
              <Badge key={i} variant="primary" className="flex items-center gap-1">
                {skill}
                {isEditing && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto"
                    onClick={() => handleRemoveSkill(skill)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
