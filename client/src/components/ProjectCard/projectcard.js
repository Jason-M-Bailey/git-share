// import "./projectcard.css";
import { Card } from "react-bootstrap";
import React from "react";
// import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


function ProjectCard(props) {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Why does the text start right at the top, being hidden behind the
            navbar? Need to increase the padding or something. Why does the text
            start right at the top, being hidden behind the navbar? Need to
            increase the padding or something. Why does the text start right at
            the top, being hidden behind the navbar? Need to increase the
            padding or something. Why does the text start right at the top,
            being hidden behind the navbar? Need to increase the padding or
            something.
          </p>
        </div>

        {/* <div class="ui link cards"> */}

        <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
          {props.projects.map((seed) => {
            return (
              <div classname="card">
                <Card border="dark" style={{ width: '18rem' }}>
                  <Card.Body>
                  <Card.Header as="h5">{seed.name}</Card.Header>
                    {/* <Card.Title>{seed.name}</Card.Title> */}
                    <Card.Title>{seed.repo}</Card.Title>
                    <Card.Text>{seed.description}</Card.Text>
                    <Card.Text>{seed.role_needed}</Card.Text>
                    <Card.Text className="text-muted">Comments: {seed.comments} | Bookmarks: {seed.bookmarks}</Card.Text>
                    <Card.Footer className="text-muted" >Project Created: {seed.project_created} </Card.Footer>
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
