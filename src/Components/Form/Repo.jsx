/* import React, { useEffect, useState } from "react";

const Repo = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [droppedRepos, setDroppedRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(
        `https://api.github.com/users/Tusharpal353/repos`
      );
      const data = await response.json();
      setRepos(data);
    };
    fetchRepos();
  }, [username]);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("repo", item);
  };
  const handleDragend = (e) => {
    e.dataTransfer.clearData();
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const item = e.dataTransfer.getData();
  };

  return (
    <div>
      <h2>Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li
            onDragStart={(e) => handleDragStart(e, repo.name)}
            onDragEnd={handleDragend}
            draggable
            key={repo.id}
          >
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="page border-dotted p-[20px] w-[300px] min-h-fit"
      ></div>
    </div>
  );
};

export default Repo;



 */


import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Repo = ({ username ,setPRepos}) => {
  const [repos, setRepos] = useState([]);
  const [droppedRepos, setDroppedRepos] = useState([]);
  const navigate=useNavigate()
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
    <div>
      <h2>Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li
            key={repo.id}
            draggable
            onDragStart={(e) => handleDragStart(e, repo)}
            onDragEnd={handleDragend}
          >
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>

      <div
        className="page border-dotted p-[20px] w-[300px] min-h-fit"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: "2px dashed #007bff",
          padding: "20px",
          minHeight: "150px",
          marginTop: "20px",
        }}
      >
        <h3>Dropped Repositories</h3>
        <ul>
          {droppedRepos.map((repo) => (
            <li key={repo.id}>
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
      <button className="px-4 py-2 border bg-blue-400" onClick={

        ()=>{
          navigate("/resume")
        }
      }>Submit</button>
    </div>
  );
};

export default Repo;
 