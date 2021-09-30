import React from "react";

// todo: is there a standard way to import these?
import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";

import { Wrapper } from "./Layout.styles";

function ProjectCard(props) {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <Wrapper />
        <Row xs={12} md={12} lg={12} xxl={12} className="g-4">
          <div classname="card">
            <Card border="dark">
              <Card.Body>
                <Card.Header as="h5">seed.name</Card.Header>
                <Card.Title>seed.repo</Card.Title>
                <Card.Text>seed.description</Card.Text>
                <Card.Text>seed.role_needed</Card.Text>
                <Card.Text>Visit Github Repo</Card.Text>
                <Card.Text className="text-muted">
                  Comments: | Bookmarks:
                </Card.Text>

                <Card.Footer className="text-muted">
                  Project Created:
                </Card.Footer>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </div>
    </section>
  );
}

export default ProjectCard;
