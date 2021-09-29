import "./App.css";
import Navbar from "./components/Navbar/navbar";

import ProjectCard from "./components/ProjectCard/projectcard";
import projectseed from "./seed/projectData.json";
import React, { useState } from "react";
import API from "./utils/API";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

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
        <Router>
          <Route exact path="/" element={<Home />}>
            {/* this is not ideal, it should be on the <Home /> component but I could not get it to work properly tonight */}
            <ProjectCard projects={projects} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Router>
      </div>
    </div>
  );
}

export default App;
