import { useEffect, useState } from "react";
import Header from "../Header";
import GitHubCalendar from "react-github-calendar";
import RepoCard from "../RepoCard";
import { Github, Mail, MapPin, Phone } from "lucide-react";
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
            <div className="text-3xl flex flex-row justify-between">
              <div>
                <p className="font-bold">{formData.name}</p>
                <p className="text-lg">
                  {formData.profession}
                  {/* student */}
                </p>
              </div>
              <div className="shadow-2xl rounded-full drop-shadow-xl">
                <img
                  className="h-20 w-20 rounded-full "
                  src={GithubData.avatar_url}
                  alt="github_pfp"
                />
              </div>
              {/* tushar pal */}
            </div>
          </div>

          <div className="flex ">
            <div className="flex">
              <Mail />
              <p className="mr-2">
                {formData.email}
                {/* tusharpal430@gmail.com */}
              </p>
            </div>
            <div className="flex">
              <Phone />
              <p className="mx-2">
                {formData.phone}
                {/* 123456789 */}
              </p>
            </div>
            <div className="flex">
              <MapPin />
              <p className="mx-2">
                {formData.location}
                {/* mohali */}
              </p>
            </div>
            {/* <p className="mx-2">
              {formData.githubUsername}
              
            </p> */}
            <div className="flex">
              <Github />
              <p className="mx-2 text-blue-700">
                {GithubData.login}
                {/* tusharpal353 */}
              </p>
            </div>
          </div>
          
        </div>

        <div>
          <h1 className="text-3xl ">Projects</h1>
          <div className="flex">
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
            <p>{formData.company}</p>
            <p>{formData.startDate}-{formData.endDate}</p>
          </div>
          <p>
          <div className="">
            <p>
              {formData.profileSummary}
              {/* summary */}
            </p>
          </div>
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
