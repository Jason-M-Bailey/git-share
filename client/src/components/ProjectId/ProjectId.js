import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Draggable from "react-draggable";
import API from "../../utils/API";
import { Wrapper, Hover } from "./ProjectId.styles";

function ProjectId() {
  const [project, setProject] = useState({});
  const { id } = useParams();

  const apiCall = async () => {
    await API.getProject(id)
      .then((res) => setProject(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    apiCall();

    // find and set location of each priority
  }, []);

  const handleStop = (e, data, property) => {
    console.log("Event: ", e);
    console.log("Data: ", data);

    // on stop find and set this property location

    // sort by y value, ascending

    // save
  };

  return (
    <section>
      <Wrapper>
        <div>
          <h3>
            {project.title} by: {project.github_username}
          </h3>
          <p>
            <a href={project.github_repo} target="_blank" rel="noreferrer">
              Visit Github Repo
            </a>
          </p>
          <p>{project.description}</p>
          <h3>Project Priorities</h3>
          {project.priorities?.map((property) => {
            return (
              <Draggable
                axis="y"
                grid={[20, 20]}
                onStop={(e, data) => handleStop(e, data, property)}
              >
                <Hover>
                  <Card
                    border="dark"
                    clickable="true"
                  >
                    <Card.Body>
                      <Card.Text>{property}</Card.Text>
                    </Card.Body>
                  </Card>
                </Hover>
              </Draggable>
            );
          })}
        </div>
      </Wrapper>

      {/* <Comments /> */}
    </section>
  );
}

export default ProjectId;
