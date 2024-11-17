import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { User, Mail, Phone, MapPin, Github, Briefcase, GraduationCap, Code } from 'lucide-react';

const RepoCard = ({ prepos }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
    <h3 className="text-lg font-semibold mb-2">{prepos.name}</h3>
    <p className="text-gray-600 mb-2">{prepos.description}</p>
    <a
      href={prepos.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:underline"
    >
      View on GitHub
    </a>
  </div>
);

const Resume = ({ formData, prepos }) => {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    const githubApiCall = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${formData.githubUsername}`);
        const data = await res.json();
        setGithubData(data);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    if (formData.githubUsername) {
      githubApiCall();
    }
  }, [formData.githubUsername]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Resume Builder</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <div>
                <h1 className="text-3xl font-bold">{formData.name}</h1>
                <p className="text-xl text-gray-600">{formData.profession}</p>
              </div>
              {githubData && githubData.avatar_url && (
                <img
                  className="h-24 w-24 rounded-full border-4 border-gray-200"
                  src={githubData.avatar_url}
                  alt="GitHub Profile"
                />
              )}
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Mail className="mr-2" size={16} />
                <span>{formData.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" size={16} />
                <span>{formData.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2" size={16} />
                <span>{formData.location}</span>
              </div>
              <div className="flex items-center">
                <Github className="mr-2" size={16} />
                <span>{formData.githubUsername}</span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2 flex items-center">
                <User className="mr-2" size={24} />
                Profile Summary
              </h2>
              <p className="text-gray-700">{formData.profileSummary}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Code className="mr-2" size={24} />
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prepos.map((repo) => (
                  <RepoCard key={repo.id} prepos={repo} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Github className="mr-2" size={24} />
                GitHub Contributions
              </h2>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <GitHubCalendar username={formData.githubUsername} />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Briefcase className="mr-2" size={24} />
                Experience
              </h2>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">Intern</h3>
                  <span className="text-gray-600">22 Jan - 22 July</span>
                </div>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Build a GitHub clone</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <GraduationCap className="mr-2" size={24} />
                Education
              </h2>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-700">{formData.education}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Code className="mr-2" size={24} />
                Skills
              </h2>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-700">{formData.skills}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Resume;