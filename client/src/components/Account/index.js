import React from "react";
import { Wrapper, Hover } from "./Account.styles";
import { Card, Row } from "react-bootstrap";

function Account() {
  return (
    <div>
      <Wrapper>
        <h1>Made it to the account page</h1>
        <p>map through projects from this user</p>
      </Wrapper>

      <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
        <div classname="card">
          <Hover>
            <Card border="dark" style={{ width: "18rem" }} clickable="true">
              <Card.Body>
                <Card.Header as="h5">Project Title</Card.Header>
                <Card.Title>Repo</Card.Title>
                <Card.Text>Description</Card.Text>
                <Card.Text></Card.Text>
                <Card.Text>
                  <a href="">Visit Github Repo</a>
                </Card.Text>
              </Card.Body>
            </Card>
            
          </Hover>
        </div>
      </Row>
    </div>
  );
}

export default Account;
