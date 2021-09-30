// import "./projectcard.css";
import { Card } from "react-bootstrap";
import React from "react";
import { Wrapper } from "./ProjectCard.styles";
// import Card from "react-bootstrap/Card";
// import projectseed from "./seed/projectData.json";
import Row from "react-bootstrap/Row";

function ProjectCard(props) {
  // const projects = useState(projectseed);

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        {/* <div className="flex flex-col w-full mb-20"> */}
        <Wrapper />

        {/* </div> */}

        {/* <div class="ui link cards"> */}

        <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
          {props.projects.map((seed) => {
            return (
              <div classname="card">
                <Card border="dark" style={{ width: "18rem" }}>
                  {/* add to seed data if we want images on the cards */}
                  {/* <Card.Img variant="top" src={seed.image} /> */}
                  <Card.Body>
                    <Card.Header as="h5">{seed.name}</Card.Header>
                    {/* <Card.Title>{seed.name}</Card.Title> */}
                    <Card.Title>{seed.repo}</Card.Title>
                    <Card.Text>{seed.description}</Card.Text>
                    <Card.Text>{seed.role_needed}</Card.Text>
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
        {/* </div> */}
      </div>
    </section>
  );
}

export default ProjectCard;
