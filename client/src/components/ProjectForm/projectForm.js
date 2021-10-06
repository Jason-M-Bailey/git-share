import React, { useState } from "react";
import API from "../../utils/API";
import { Wrapper } from "./projectForm.styles";
import Swal from "sweetalert2";

function ProjectForm() {
  const [title, setTitle] = useState([]);
  const [github_username, setGithub_Username] = useState([]);
  const [github_repo, setGithub_Repo] = useState([]);
  const [description, setDescription] = useState([]);

  const titleUpdate = (event) => {
    setTitle(event.target.value);
  };

  const github_usernameUpdate = (event) => {
    setGithub_Username(event.target.value);
  };

  const github_repoUpdate = (event) => {
    setGithub_Repo(event.target.value);
  };
  const descriptionUpdate = (event) => {
    setDescription(event.target.value);
  };

  const saveProjectHandler = (event) => {
    event.preventDefault();

    API.saveProject({
      title: title,
      github_username: github_username,
      github_repo: github_repo,
      description: description,
    })
      .then(() => Swal.fire({
        icon: "success",
        title: "Project Added",
        text: "Your project has been added!",
      }))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Wrapper>
        <form onSubmit={saveProjectHandler} className="inform">
          <div>
            <label className="title">Project Title:</label>
            <input required onChange={titleUpdate}></input>
          </div>
          <div>
            <label className="title">Github Username:</label>
            <input required onChange={github_usernameUpdate}></input>
          </div>
          <div>
            <label className="title">Github Repo:</label>
            <input required onChange={github_repoUpdate}></input>
          </div>
          <div>
            <label className="title">Description:</label>
            <input required onChange={descriptionUpdate}></input>
          </div>
          <button type="submit"> Submit</button>
        </form>
      </Wrapper>
    </div>
  );
}

export default ProjectForm;
