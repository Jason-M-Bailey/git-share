import "./App.css";
import Navbar from "./components/Navbar/navbar";

import ProjectCard from "./components/ProjectCard/projectcard";
import projectseed from "./seed/projectData.json";
import React, { useState } from "react";
import API from "./utils/API";


function App() {
  const [projects, setProjects] = useState(projectseed);
  const [repos, setRepos] = useState("");
  const handleInputSearch = (e) => {
    console.log(repos);
    API.getGithubUser(repos).then((res) => {
      console.log(res.data);
      const newRepos = res.data.items.map((repo) => {
        return {
          name: repo.full_name,
          github_repo: repo.html_url,
          description: repo.description,
          role_needed: repo.language,
        };
      });
      setProjects(newRepos);
    });
  };

  return (
    <div className="App">

      <div>
        <Navbar
          handleInputSearch={handleInputSearch}
          setRepos={setRepos}
          repos={repos}
        />
        <ProjectCard projects={projects} />
      </div>

    </div>
  );
}

export default App;
