import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Repo = ({ username, setPRepos }) => {
  const [repos, setRepos] = useState([]);
  const [droppedRepos, setDroppedRepos] = useState([]);
  const navigate = useNavigate();
  // Fetch repositories from GitHub
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/tusharpal353/repos`
        );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };
    fetchRepos();
  }, [username]);

  // Handle drag start
  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("repo", JSON.stringify(item));
  };

  // Clear data when drag ends
  const handleDragend = (e) => {
    e.dataTransfer.clearData();
  };

  // Prevent default behavior on drag over
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle drop to add repo to droppedRepos
  const handleDrop = (e) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("repo"));

    // Prevent duplicates in the drop area
    if (!droppedRepos.find((repo) => repo.id === item.id)) {
      setDroppedRepos((prev) => [...prev, item]);
      setPRepos((prev) => [...prev, item]);
    }
  };

  return (
    <div className="flex justify-center pt-20">
      <div className="border p-8 shadow-xl">
        <h2 className="text-2xl font-semibold pb-4">Repositories</h2>
        <ul className="space-y-2 max-h-72 overflow-y-auto scrollbar-hide " >
          {repos.map((repo) => (
            <li className="p-3 bg-gray-100 rounded-md  cursor-move hover:bg-gray-200 transition-colors text-lg"
              key={repo.id}
              draggable
              onDragStart={(e) => handleDragStart(e, repo)}
              onDragEnd={handleDragend}
            >
              <a className=" " href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
              <p>{repo.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-8 border ml-8 shadow-2xl">
      <h3 className="font-semibold text-xl">Dropped Repositories</h3>
        <div
          className="page border-dotted  w-[300px]  border border-gray-500 p-5 min-h-40 mt-5 rounded-lg"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          
        >
          
          <ul className="space-y-2 max-h-72 overflow-y-auto scrollbar-hide">
            {droppedRepos.map((repo) => (
              <li className="p-3 bg-gray-200 rounded-md  cursor-move hover:bg-gray-200 transition-colors text-lg" key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                 
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="px-4 py-2 border bg-black text-white rounded-xl mt-2"
          onClick={() => {
            navigate("/resume");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Repo;
