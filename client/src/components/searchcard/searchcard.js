import React from "react";
import "./searchcard.css";

function SearchCard(props) {
  return (
    <div>
      <div class="ui link cards">
        {projects.map((project) => {
          return (
            <div classname="card">
              <Card>
                <Card.Content>
                  <Card.Header>{props.name}</Card.Header>
                  <Card.Header>{props.repo}</Card.Header>
                  <Card.Meta>
                    <span className="date"></span>
                  </Card.Meta>
                  <Card.Description>{props.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>{props.role_needed} : Needed</Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
      )
    </div>
  );
}

export default SearchCard;
