import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function NavbarApp() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">GitShare 2.0</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Sort" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Most Bookmarks
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Most Comments
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Newest</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Oldest</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* todo: remove search button and use onSubmit to search --- or even better, return results as user begins to type */}
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            <Nav.Link href="#add_new_project">Add New Project</Nav.Link>
            <Nav.Link eventKey={2} href="#login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;