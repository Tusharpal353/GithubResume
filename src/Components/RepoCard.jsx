/* import { ExternalLink, Star } from "lucide-react";

const RepoCard = ({ prepos }) => {
  const startCount = prepos.stargazers_count;
  return (
    <div className=" ">
      <div className="border border-black m-2 p-4  flex">
        <div className="">
          <h1 className="text-xl"> {prepos?.name || "name"}</h1>
          <p className="text-yellow-300 flex">
          <Star className=""/>
          {prepos.stargazers_count}
          </p>
        </div>
        <a
          href={prepos?.html_url || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {prepos?.html_url ? <ExternalLink className="m-2 text-blue-500" /> : "No URL"}
        </a>
        
      </div>
    </div>
  );
};

export default RepoCard;
 */
import React from 'react';
import { ExternalLink, Star, Code } from 'lucide-react';

const RepoCard = ({ prepos }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {prepos.name || "Unnamed Repository"}
          </h2>
          <a
            href={prepos.html_url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        {prepos.description && (
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{prepos.description}</p>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">{prepos.stargazers_count}</span>
            </div>
            {prepos.language && (
              <div className="flex items-center text-gray-600">
                <Code className="w-4 h-4 mr-1" />
                <span className="text-sm">{prepos.language}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;