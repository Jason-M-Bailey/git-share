import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Draggable from "react-draggable";

// need to update API
import API from "../../utils/API";

// styling
import { Wrapper, Hover } from "./ProjectId.styles";

function ProjectId() {
  const [project, setProject] = useState({});
  // const [priorities, setPriorities] = useState([]);

  const { id } = useParams();
  // setPriorities(...project.priorities.concat(newPriority));

  const apiCall = async () => {
    await API.getProject(id)
      .then((res) => setProject(res.data))
      .catch((err) => console.error(err));
  };

  // const saveProjectHandler = (event) => {
  //   event.preventDefault();
  //   API.editProject({
  //     priorities: priorities,
  //   })
  //     .then(() => alert("priority added"))
  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <section>
      <Wrapper>
        <div>
          <h1>
            {project.title} by: {project.github_username}
          </h1>
          <h4>
            <a href={project.github_repo}>Visit Github Repo</a>
          </h4>
          <h5>{project.description}</h5>

          {project.priorities?.map((property) => {
            return (
              <Draggable>
                <Hover>
                  <Card border="dark" style={{ width: "95%" }} clickable="true">
                    <Card.Body>
                      <Card.Header as="h5">{property}</Card.Header>
                      <Card.Text>some text about the priority</Card.Text>
                    </Card.Body>
                  </Card>
                </Hover>
              </Draggable>
            );
          })}
        </div>

        {/* <form onSubmit={saveProjectHandler} className="inform">
          <div>
            <label className="title">Add a priority:</label>
            <input required onSubmit={newPriority}></input>
          </div>
          <button type="submit"> Submit</button>
        </form> */}
      </Wrapper>
    </section>
  );
}

export default ProjectId;
