import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

// need to update API
import API from "../../utils/API";

// styling
import { Wrapper, Hover } from "./ProjectId.styles";

function ProjectId(props) {
  const [project, setProject] = useState({});

  console.log("set Project ");

  const { id } = useParams();
  useEffect(() => {
    console.log("inside use effect ");

    console.log(`project title is ${project.title}`);

    API.getProject(id)
      .then((res) => setProject(res.data))
      .catch((err) => console.error(err));
  });

  // console.log(`project priority #1 is ${project.priorities[0]}`);
  // console.log(`project priority #2 is ${project.priorities[1]}`);

  return (
    <section>
      <Wrapper>
        <div>
          <h1>{project.title} by: {project.github_username}</h1>
          <h4>
            <a href={project.github_repo}>Visit Github Repo</a>
          </h4>
          <h5>{project.description}</h5>

          <h3>{project.priorities}</h3>

          <section
            id="projects"
            className="text-gray-400 bg-gray-900 body-font"
          >
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">

              {/* TODO: MUST FIGURE OUT HOW TO MAP THROUGH THE PRIORITIES */}
              <Row xs={3} md={3} lg={3} xxl={3} className="g-4">
                <div classname="card">
                  <Hover>
                    <Card
                      border="dark"
                      style={{ width: "18rem" }}
                      clickable="true"
                    >
                      <Card.Body>
                        <Card.Header as="h5">
                          {/* if you change this to priorities[1] AFTER you're on the page then it will read the data */}
                          {project.priorities}
                        </Card.Header>
                        <Card.Text>some text about the priority</Card.Text>
                      </Card.Body>
                    </Card>
                  </Hover>

                  <Hover>
                    <Card
                      border="dark"
                      style={{ width: "18rem" }}
                      clickable="true"
                    >
                      <Card.Body>
                        <Card.Header as="h5">
                          {/* if you change this to priorities[2] AFTER you're on the page then it will read the data */}
                          {project.priorities}
                        </Card.Header>
                        <Card.Text>some text about the priority</Card.Text>
                      </Card.Body>
                    </Card>
                  </Hover>

                  <Hover>
                    <Card
                      border="dark"
                      style={{ width: "18rem" }}
                      clickable="true"
                    >
                      <Card.Body>
                        <Card.Header as="h5">
                          {/* if you change this to priorities[0] AFTER you're on the page then it will read the data */}
                          {project.priorities}
                        </Card.Header>
                        <Card.Text>some text about the priority</Card.Text>
                      </Card.Body>
                    </Card>
                  </Hover>

                </div>
              </Row>
            </div>
          </section>
        </div>
      </Wrapper>
    </section>
  );
}

export default ProjectId;
