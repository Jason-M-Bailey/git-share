/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getGithubUser: function (repos) {
    return axios.get("https://api.github.com/search/repositories?q=" + repos);
  },

  getProject: function (id) {
    return axios.get("/api/projects/" + id);
  },

  // // get users from database
  // getUsers: function () {
  //   return axios.get("/api/users");
  // },

  // // save user to database
  // saveUser: function (userData) {
  //   return axios.post("/api/users", userData);
  // },

  // // get projects from database
  getProjects: function () {
    return axios.get("/api/projects");
  },

  // save project to database
  saveProject: function (projectData) {
    return axios.post("/api/projects/", projectData);
  },

  // delete project
  editProjects: function (projectData) {
    return axios.put("/api/projects", projectData);
  }
};
