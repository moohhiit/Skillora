import React from "react";


type Company = {
  name_company: string;
  average_lpa: number;
  currency: string;
  desired_skill: string[];
  about_company: string;
  availability_area: string[];
  company_type: "Product Base" | "Service Base" | string;
  website_url: string;
};

const Company_Req: React.FC = () => {
  const companies: Company[] = [
    {
      name_company: "Tech Solutions",
      average_lpa: 12,
      currency: "₹",
      desired_skill: ["React", "Node.js", "TypeScript"],
      about_company:
        "A fast-growing tech firm focusing on web and mobile applications.",
      availability_area: ["Delhi", "Bangalore"],
      company_type: "Product Base",
      website_url: "https://techsolutions.example.com",
    },
    {
      name_company: "Design Experts",
      average_lpa: 8,
      currency: "₹",
      desired_skill: ["UI/UX", "Figma"],
      about_company:
        "Providing creative design solutions to startups and enterprises.",
      availability_area: ["Mumbai", "Hyderabad"],
      company_type: "Service Base",
      website_url: "https://designexperts.example.com",
    },
    {
      name_company: "Data Minds",
      average_lpa: 15,
      currency: "$",
      desired_skill: ["Python", "Machine Learning", "Data Analytics"],
      about_company: "Leading AI solutions provider across industries.",
      availability_area: ["New York", "San Francisco"],
      company_type: "Product Base",
      website_url: "https://dataminds.example.com",
    },
  ];

  const handleAddToTarget = (companyName: string) => {
    alert(`${companyName} added to your target!`);
  };

  const handleAboutCompany = (about: string) => {
    alert(about);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Explore Top Companies
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="p-6 flex flex-col h-full justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-blue-700">
                  {company.name_company}
                </h2>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium">Average LPA:</span>{" "}
                  {company.currency}
                  {company.average_lpa}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium">Type:</span> {company.company_type}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium">Skills:</span>{" "}
                  {company.desired_skill.join(", ")}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium">Areas:</span>{" "}
                  {company.availability_area.join(", ")}
                </p>
              </div>
              <div className="mt-4 space-y-2">
                <button
                  onClick={() => handleAddToTarget(company.name_company)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add to My Target
                </button>
                <button
                  onClick={() => handleAboutCompany(company.about_company)}
                  className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  About the Company
                </button>
                <a
                  href={company.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-blue-600 hover:underline text-sm mt-2"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Company_Req