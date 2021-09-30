import "./App.css";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ProjectCard from "./components/ProjectCard/projectcard";

import projectseed from "./seed/projectData.json";
import React, { useState } from "react";
import API from "./utils/API";
import ProjectCreate from "./pages/newproject";
import FrontPage from "./pages/frontpage";

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
      <Navbar
        handleInputSearch={handleInputSearch}
        setRepos={setRepos}
        repos={repos}
      />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={FrontPage} projects={projects} />

            <Route exact path="/projectcreate" component={ProjectCreate} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
