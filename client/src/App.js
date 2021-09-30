import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// styling
import "./App.css";

// components
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import ProjectCard from "./components/ProjectCard/projectcard";
import Register from "./components/Register"
import AnotherGridLayout from "./components/Layout"

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
          <Route exact path="/" element={<Home />}>
            {/* this is not ideal, it should be on the <Home /> component but I could not get it to work properly tonight */}
            <ProjectCard projects={projects} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/layout">
            <AnotherGridLayout />
          </Route>
        </Router>
      </div>
    </div>
  );
}

export default App;
