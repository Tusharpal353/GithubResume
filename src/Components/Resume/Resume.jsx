import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Github, Mail, MapPin, Phone, Briefcase, GraduationCap, Code, } from 'lucide-react';
import RepoCard from "../RepoCard";
import Header from "../Header";




const Resume = ({ formData, prepos }) => {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      if (formData.githubUsername) {
        try {
          const response = await fetch(`https://api.github.com/users/${formData.githubUsername}`);
          const data = await response.json();
          setGithubData(data);
        } catch (error) {
          console.error("Error fetching GitHub data:", error);
        }
      }
    };

    fetchGithubData();
  }, [formData.githubUsername]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className=" mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">{formData.name}</h1>
                <p className="text-xl text-gray-600">{formData.profession}</p>
              </div>
              {githubData && (
                <img
                  className="h-24 w-24 rounded-full border-4 border-gray-200"
                  src={githubData.avatar_url}
                  alt="Profile"
                />
              )}
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>{formData.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>{formData.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{formData.location}</span>
              </div>
              {githubData && (
                <div className="flex items-center">
                  <Github className="w-4 h-4 mr-2" />
                  <a href={`https://github.com/${githubData.login}`} className="text-blue-600 hover:underline">
                    {githubData.login}
                  </a>
                </div>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2" /> Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prepos.map((repo) => (
                  <RepoCard key={repo.id} prepos={repo} />
                ))}
              </div>
            </div>

            <div className="overflow-x-auto inline-block min-w-full ">
              <h2 className="text-2xl font-bold mb-4 ">GitHub Contributions</h2>
              <img
                src={`https://ghchart.rshah.org/${formData.githubUsername}`}
                alt="GitHub Contribution Chart"
                className="w-full dark:opacity-90 dark:contrast-125"
              />
            {/*   <GitHubCalendar username={formData.githubUsername} showTotalCount={true} // Show or hide the total contributions count
  showWeekdayLabels={true}   /> */}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Briefcase className="w-6 h-6 mr-2" /> Experience
              </h2>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{formData.company}</h3>
                  <p className="text-sm text-gray-600">
                    {formData.startDate} - {formData.endDate}
                  </p>
                </div>
                <p className="text-gray-700">{formData.profileSummary}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2" /> Education
              </h2>
              <p className="text-gray-700">{formData.education}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Code className="w-6 h-6 mr-2" /> Skills
              </h2>
              <p className="text-gray-700">{formData.skills}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;