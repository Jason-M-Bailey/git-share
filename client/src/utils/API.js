/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getGithubUser: function (query) {
    return axios.get("https://api.github.com/" + query);
  },

  // get users from database
  getUsers: function() {
    return axios.get("/api/users");
  },

  // save user to database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },

  // get projects from database
  getProjects: function() {
    return axios.get("/api/projects");
  },

  // save project to database
  saveProject: function(projectData) {
    return axios.post("/api/projects", projectData);
  },
};
