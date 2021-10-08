import React, { useState, useRef } from "react";
import API from "../../utils/API";
import { Wrapper } from "./projectForm.styles";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ProjectForm() {
  const [title, setTitle] = useState([]);
  const [github_username, setGithub_Username] = useState([]);
  const [github_repo, setGithub_Repo] = useState([]);
  const [description, setDescription] = useState([]);
  const [priorities, setPriority] = useState([]);
  const [priorityFields, setPriorityFields] = useState([]);

  const item = useRef(null);

  const itemEls = useRef(new Array());

  const addPriorityField = (event) => {
    setPriorityFields([
      ...priorityFields,
      {
        level: priorityFields.length,
      },
    ]);
  };

  // push into priorities
  const priorityUpdate = (event) => {
    setPriority(itemEls.current.map((item) => item.value));
  };

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
      priorities: priorities,
    })
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Project Added",
          text: "Your project has been added!",
          content: (window.location.href = "/"),
        })
      )
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Wrapper>
        <Form onSubmit={saveProjectHandler} className="inform">
          <Form.Group>
            <input
              className="mb-3"
              required
              onChange={titleUpdate}
              placeholder="Project Title"
            ></input>
          </Form.Group>
          <Form.Group>
            <input
              className="mb-3"
              required
              placeholder="Github Username"
              onChange={github_usernameUpdate}
            ></input>
          </Form.Group>
          <Form.Group>
            <input
              required
              className="mb-3"
              placeholder="Github Repo"
              onChange={github_repoUpdate}
            ></input>
          </Form.Group>
          <Form.Group>
            <input
              required
              className="mb-3"
              placeholder="Description"
              onChange={descriptionUpdate}
            ></input>
          </Form.Group>

          {priorityFields.map((priority, i) => (
            <Form.Group>
              <input
                className="mb-3"
                placeholder={"Add Priority # " + (priority.level + 1)}
                key={i}
                ref={(element) => (itemEls.current[i] = element)}
                onChange={priorityUpdate}
              ></input>
            </Form.Group>
          ))}
          <Button
            className="mb-3"
            variant="outline-primary"
            onClick={addPriorityField}
          >
            Add A Priority
          </Button>
          <br />
          <Button type="submit"> Submit Your Project </Button>
        </Form>
      </Wrapper>
    </div>
  );
}

export default ProjectForm;
