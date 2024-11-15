
import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Form = ({setFormData}) => {
  const [LocalFormData, setLocalFormData] = useState({
    name: "",
    profession: "",
    email: "",
    phone: "",
    location: "",
    githubUsername: "",
    profileSummary: "",
    jobTitle: "",
    company: "",
    experienceLocation: "",
    startDate: "",
    endDate: "",
    education: "",
    skills: "",
  });

  // Function to handle input changes dynamically
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({
      ...LocalFormData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", LocalFormData);
    setFormData(LocalFormData);
    navigate('/resume'); 
    // Here you can add API call or further processing logic
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Header />
        <div className="mx-16 h-full my-4 border border-black bg-slate-400">
          {/* Personal Info Section */}
          <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Personal Info</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <input
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  name="name"
                  type="text"
                  value={LocalFormData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                />
                <input
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  name="profession"
                  type="text"
                  value={LocalFormData.profession}
                  onChange={handleInputChange}
                  placeholder="Profession"
                />
                <input
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  name="email"
                  type="email"
                  value={LocalFormData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
              </div>
              <div className="space-y-4">
                <input
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  name="phone"
                  type="tel"
                  value={LocalFormData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                />
                <input
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  name="location"
                  type="text"
                  value={LocalFormData.location}
                  onChange={handleInputChange}
                  placeholder="Location"
                />
                <input
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  name="githubUsername"
                  type="text"
                  value={LocalFormData.githubUsername}
                  onChange={handleInputChange}
                  placeholder="GitHub Username"
                />
                <button type="button" onClick={() => console.log("API Call initiated")}>
                  API Call
                </button>
              </div>
            </div>
            <textarea
              className="w-full h-32 px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Profile Summary"
              name="profileSummary"
              value={LocalFormData.profileSummary}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Experience Section */}
          <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Experience</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <input
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  name="jobTitle"
                  type="text"
                  value={LocalFormData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="Job Title"
                />
                <input
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  name="company"
                  type="text"
                  value={LocalFormData.company}
                  onChange={handleInputChange}
                  placeholder="Company"
                />
                <input
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  name="experienceLocation"
                  type="text"
                  value={LocalFormData.experienceLocation}
                  onChange={handleInputChange}
                  placeholder="Location"
                />
              </div>
              <div className="space-y-4">
                <input
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  name="startDate"
                  type="text"
                  value={LocalFormData.startDate}
                  onChange={handleInputChange}
                  placeholder="Start Date"
                />
                <input
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  name="endDate"
                  type="text"
                  value={LocalFormData.endDate}
                  onChange={handleInputChange}
                  placeholder="End Date"
                />
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Education</h1>
            <textarea
              className="w-full h-32 px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              name="education"
              value={LocalFormData.education}
              onChange={handleInputChange}
              placeholder="Education Details"
            ></textarea>
          </div>

          {/* Skills Section */}
          <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Skills</h1>
            <textarea
              className="w-full h-12 px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              name="skills"
              value={LocalFormData.skills}
              onChange={handleInputChange}
              placeholder="Skills"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              className="px-6 py-2 bg-blue-500 text-white text-xl font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="submit"
            >
              Submit
            </button>
            
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
