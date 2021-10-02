import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// styling
import "./App.css";

// components
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import ProjectCard from "./components/ProjectCard/projectcard";
import Register from "./components/Register";
import AnotherGridLayout from "./components/Layout";
import ProjectCreate from "./components/ProjectCreate/ProjectCreate";
import ProjectForm from "./components/ProjectForm/projectForm";
import ProjectId from "./components/ProjectId/ProjectId";

// utils
import API from "./utils/API";

// seed
import projectseed from "./seed/projectData.json";

function App() {
  // search github repos
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

  // todo: clean this up so its merely Router, Switch, Route, Link
  return (
    <div className="App">
      <div>
        <Navbar
          handleInputSearch={handleInputSearch}
          setRepos={setRepos}
          repos={repos}
        />
        <Router>
          <Switch>
            <Route exact path="/" element={<Home />}>
              <ProjectCard projects={projects} />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route path="/project/:id">
              <ProjectId />
            </Route>
            <Route exact path="/layout">
              <AnotherGridLayout />
            </Route>
            <Route exact path="/add_new_project">
              <ProjectForm />
            </Route>
            <Route exact path="/planning">
              <ProjectCreate />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
