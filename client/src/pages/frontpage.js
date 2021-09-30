import React, { Component } from "react";

import ProjectCard from "../components/ProjectCard/projectcard";

import projectseed from "../seed/projectData.json";
// import API from "./utils/API";

class FrontPage extends Component {
  state = projectseed;

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

  render() {
    return (
      <div>
        <ProjectCard />
      </div>
    );
  }
}

export default FrontPage;
