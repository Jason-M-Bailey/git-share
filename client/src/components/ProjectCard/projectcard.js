import "./projectcard.css";
import { Card } from "react-bootstrap";

function ProjectCard(props) {
  return (
    <div class="ui link cards">
      {props.projects.map((seed) => {
        return (
          <div classname="card">
            <Card.Body>
              <Card.Title>{seed.name}</Card.Title>
              <Card.Title>{seed.repo}</Card.Title>
              <Card.Text>{seed.description}</Card.Text>
              <Card.Text>{seed.role_needed} : Needed</Card.Text>
            </Card.Body>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCard;
