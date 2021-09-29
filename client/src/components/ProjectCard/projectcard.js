import { Card } from "react-bootstrap";
import React from "react";
import { Wrapper } from "./ProjectCard.styles";

import Row from "react-bootstrap/Row";

function ProjectCard(props) {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <Wrapper />
        <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
          {props.projects.map((seed) => {
            return (
              <div classname="card">
                <Card border="dark" style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Header as="h5">{seed.name}</Card.Header>
                    <Card.Title>{seed.repo}</Card.Title>
                    <Card.Text>{seed.description}</Card.Text>
                    <Card.Text>{seed.role_needed}</Card.Text>
                    <Card.Text>
                      <a href={seed.github_repo}>Visit Github Repo</a>
                    </Card.Text>
                    <Card.Text className="text-muted">
                      Comments: {seed.comments} | Bookmarks: {seed.bookmarks}
                    </Card.Text>

                    <Card.Footer className="text-muted">
                      Project Created: {seed.project_created}
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Row>
      </div>
    </section>
  );
}

export default ProjectCard;
