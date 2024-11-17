import { useEffect, useState } from "react";
import Header from "../Header";
import GitHubCalendar from "react-github-calendar";
import RepoCard from "../RepoCard";
const Resume = ({ formData, prepos }) => {
  const [GithubData, setGithubData] = useState("");

  useEffect(() => {
    const githubApiCall = () => {
      fetch(`https://api.github.com/users/${formData.githubUsername}`)
        .then((res) => res.json())
        .then((data) => setGithubData(data));
    };
    if (formData.githubUsername) {
      githubApiCall();
      console.log(GithubData);
    }
  }, [formData.githubUsername]);

  return (
    <div>
      <Header />

      <div className="mx-64 h-full my-4  border border-black  p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Resume</h1>
        <div className="space-y-4">
          <div className="">
            <div className="flex ">
              <p className="text-3xl flex justify-between">
                <div>{formData.name}</div>
                <img
                  className="h-20 w-20"
                  src={GithubData.avatar_url}
                  alt="github_pfp"
                />
                {/* tushar pal */}
              </p>
            </div>
            <p className="text-lg">
              {formData.profession}
              {/* student */}
            </p>
          </div>

          <div className="flex ">
            <p className="mr-2">
              {formData.email}
              {/* tusharpal430@gmail.com */}
            </p>
            <p className="mx-2">
              {formData.phone}
              {/* 123456789 */}
            </p>
            <p className="mx-2">
              {formData.location}
              {/* mohali */}
            </p>
            <p className="mx-2">
              {formData.githubUsername}
              {/* tusharpal353 */}
            </p>
            <p className="mx-2">
              {GithubData.login}
              {/* tusharpal353 */}
            </p>
          </div>
          <p>
            <strong>Profile Summary:</strong> {formData.profileSummary}
            {/* summary */}
          </p>
        </div>

        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <div>
            {prepos.map((repo) => (
              <RepoCard key={repo.id} prepos={repo} />
            ))}

            {/* 
              {prepos && prepos.length > 0 ? (
  prepos.map((repo) => (
    <RepoCard key={repo.id} prepos={repo} />
  ))
) : (
  <p>No repositories to display.</p>
)}

            
            
            
            */}
          </div>
        </div>

        <div className="">
          <GitHubCalendar username="Tusharpal353" />;
        </div>

        <div>
          <h1 className="text-xl">Experience</h1>
          <div className="flex justify-between">
            <p>Intern</p>
            <p>22jan-22 july</p>
          </div>
          <p>
            <ul>
              <li> - Build a github clone</li>
            </ul>
          </p>
        </div>

        <div className="space-y-4 mt-6">
          <h2 className="text-2xl font-bold">Education</h2>
          <p>{formData.education}</p>
        </div>

        <div className="space-y-4 mt-6">
          <h2 className="text-2xl font-bold">Skills</h2>
          <p>{formData.skills}</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
