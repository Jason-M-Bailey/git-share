import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// styling
import "./App.css";

// components
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import ProjectCard from "./components/ProjectCard/projectcard";
import Register from "./components/Register";
import ProjectCreate from "./components/ProjectCreate/ProjectCreate";
import ProjectForm from "./components/ProjectForm/projectForm";
import ProjectId from "./components/ProjectId/ProjectId";
// import useToken from "./components/App/useToken";
import Account from "./components/Account";

// utils
import API from "./utils/API";

// seed
// import projectseed from "./seed/projectData.json";

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  // user authentication
  // const { token, setToken } = useToken();

  // // user authentication
  // const token = getToken();

  // Setting our component's initial state
  const [projects, setProjects] = useState([]);

  // Load all projects and store them with setProjects
  useEffect(() => {
    loadProjects();
  }, []);

  //if(!token) {
  //  return <Login setToken={setToken} />
  //}

  // search github repos
  // const [projects, setProjects] = useState(projectseed);
  // const [repos, setRepos] = useState("");
  // const handleInputSearch = (e) => {
  //   console.log(repos);
  //   API.getGithubUser(repos).then((res) => {
  //     console.log(res.data);
  //     const newRepos = res.data.items.map((repo) => {
  //       return {
  //         name: repo.full_name,
  //         github_repo: repo.html_url,
  //         description: repo.description,
  //         role_needed: repo.language,
  //       };
  //     });
  //     setProjects(newRepos);
  //   });
  // };

  // Loads all projects and sets them to projects
  function loadProjects() {
    API.getProjects()
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }

  // todo: clean this up so its merely Router, Switch, Route, Link
  return (
    <div className="App">
      <div>
        <Navbar
        // handleInputSearch={handleInputSearch}
        // setRepos={setRepos}
        // repos={repos}
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
            <Route path="/project/:id" component={ProjectId} />
            {/* we need this to map through priorities on the ProjectId page */}
            {/* <ProjectId projects={projects}/> */}
            {/* </Route> */}
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
