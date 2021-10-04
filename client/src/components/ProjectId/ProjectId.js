import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

// need to update API
import API from "../../utils/API";

// styling
import { Wrapper } from "./ProjectId.styles";

function ProjectId(props) {
  const [project, setProject] = useState({});

  console.log("set Project ");


  const { id } = useParams();
  useEffect(() => {
    console.log("inside use effect ");
    API.getProject(id)
      .then((res) => setProject(res.data))
      .catch((err) => console.error(err));
  });


  return (
    <section>
      <Wrapper>
        <div>
          <h1>Title: {project.title}</h1>
          <h4>
            <a href={project.github_repo}>Visit Github Repo</a>
          </h4>
          <h5>Description: {project.description}</h5>

          <Row xs={1} md={2} lg={3}>
            <Card>
              <Card.Body>
                <Card.Header as="h3">CSS</Card.Header>
                <Card.Text>Improve overall design.</Card.Text>

                <Card.Footer className="text-muted">
                  October 4th, 2021
                </Card.Footer>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Header as="h3">POST</Card.Header>
                <Card.Text>Post Projects functionality</Card.Text>

                <Card.Footer className="text-muted">
                  October 4th, 2021
                </Card.Footer>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Header as="h3">Login / Register</Card.Header>
                <Card.Text>
                  Allow users to register and login to add projects
                </Card.Text>

                <Card.Footer className="text-muted">
                  October 4th, 2021
                </Card.Footer>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Header as="h3">Login / Register</Card.Header>
                <Card.Text>
                  Allow users to register and login to add projects
                </Card.Text>

                <Card.Footer className="text-muted">
                  October 4th, 2021
                </Card.Footer>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Header as="h3">New Tech #1</Card.Header>
                <Card.Text>Draggable priorities!</Card.Text>

                <Card.Footer className="text-muted">
                  October 4th, 2021
                </Card.Footer>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Header as="h3">New Tech #2</Card.Header>
                <Card.Text>???</Card.Text>

                <Card.Footer className="text-muted">
                  October 4th, 2021
                </Card.Footer>
              </Card.Body>
            </Card>
          </Row>
        </div>
      </Wrapper>
    </section>
  );
}

export default ProjectId;
