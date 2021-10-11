import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// styling
import "./App.css";

// components

import Home from "./components/Home";
import Login from "./components/Login";
import ProjectCard from "./components/ProjectCard/projectcard";
import Register from "./components/Register";
import ProjectCreate from "./components/ProjectCreate/ProjectCreate";
import ProjectForm from "./components/ProjectForm/projectForm";
import ProjectId from "./components/ProjectId/ProjectId";
import Account from "./components/Account";
import NavShow from "./components/NavShow/NavShow";

// utils
import API from "./utils/API";

function App() {
  // Setting our component's initial state
  const [projects, setProjects] = useState([]);

  // Load all projects and store them with setProjects
  useEffect(() => {
    loadProjects();
  }, []);

  // Loads all projects and sets them to projects
  function loadProjects() {
    API.getProjects()
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <div>
        <NavShow />
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
            <Route path="/project/:id" component={ProjectId} />
            <Route exact path="/add_new_project">
              <ProjectForm />
            </Route>
            <Route exact path="/planning">
              <ProjectCreate />
            </Route>
            <Route exact path="/account">
              <Account />
              <ProjectCreate />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
