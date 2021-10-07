import React from "react";

import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

function NavbarLoggedin(props) {
  const handleSubmit = () => {
    fetch("/api/users/logout")
      .then((res) => res.json())
      .catch((logout) => (window.location.href = "/"));
  };

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">GitShare 2.0</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link eventKey={2} href="/planning">
              Planning
            </Nav.Link>
            <Nav.Link href="/add_new_project">Add New Project</Nav.Link>
            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/account">My Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              {/* route for logout is wrong? */}
              <NavDropdown.Item onClick={handleSubmit}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLoggedin;
