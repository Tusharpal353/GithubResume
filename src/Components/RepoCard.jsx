

const RepoCard = ({ prepos }) => {
  return (
    <div className="flex ">
    <div className="border border-black flex ">
      <div >
        <h1> {prepos?.name || "name"}</h1>
        <a href={prepos?.html_url || "#"} target="_blank" rel="noopener noreferrer">
          {prepos?.html_url ? "View Repository" : "No URL"}
        </a>
      </div>
      <div>⭐{prepos?.stargazers_count ||  "star counr"}</div>
    </div>
    </div>
  );
};

export default RepoCard;
