import React from "react";
import { Link } from "react-router-dom";

// todo: is there a standard way to import these?
import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";

import { Wrapper, Hover } from "./ProjectCard.styles";

function ProjectCard(props) {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <Wrapper />
        <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
          {props.projects.map((project) => {
            return (
              <div classname="card">
                <Link
                  to={"/project/" + project._id}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <Hover>
                    <Card
                      border="dark"
                      style={{ width: "18rem" }}
                      clickable="true"
                    >
                      <Card.Body>
                        <Card.Header as="h5">{project.title}</Card.Header>
                        <Card.Title>{project.repo}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        {/* <Card.Text>{project.role_needed}</Card.Text> */}
                        <Card.Text></Card.Text>
                        <Card.Text>
                          <a href={project.github_repo}>Visit Github Repo</a>
                        </Card.Text>
                        {/* <Card.Text className="text-muted">
                          Comments: {project.comments} | Bookmarks:{" "}
                          {project.bookmarks}
                        </Card.Text> */}

                        <Card.Footer className="text-muted">
                          Project Created By: {project.project_created}
                        </Card.Footer>
                      </Card.Body>
                    </Card>
                  </Hover>
                </Link>
              </div>
            );
          })}
        </Row>
      </div>
    </section>
  );
}

export default ProjectCard;
