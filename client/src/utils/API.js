/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getGithubUser: function (query) {
    return axios.get("https://api.github.com/" + query);
  },
};
