import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./Components/Form";

import Resume from "./Components/Resume/Resume";
import { useEffect, useState } from "react";

import Repo from "./Components/Form/Repo";
import RepoCard from "./Components/RepoCard";

function App() {
  const [formData, setFormData] = useState(null);
  const [prepos, setPRepos] = useState([]);

  console.log(formData);
  useEffect(() => {
    console.log(prepos, "parent");
  }, [prepos]);

  return (
    /*  <FinalResume/> */
    /*   <Provider store={appStore}> */
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form setFormData={setFormData} />}></Route>
        <Route
          path="/resume"
          element={<Resume formData={formData} prepos={prepos} />}
        ></Route>
        <Route
          path="/selectrepo"
          element={<Repo setPRepos={setPRepos} formData={formData} />}
        ></Route>
        <Route path="/gitrepo" element={<RepoCard prepos={prepos} />}></Route>
      </Routes>
    </BrowserRouter>
    /*   </Provider> */
  );
}

export default App;
