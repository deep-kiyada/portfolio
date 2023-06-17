"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BrandExample() {
  return (
    <>
      <Navbar bg="dark" expand={"sm"} variant="dark">
        <Container>
          <Navbar.Brand href="#home">Deep Kiyada</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown
              title="About"
              id={`offcanvasNavbarDropdown-expand-${"sm"}`}
            >
              <NavDropdown.Item href="#Skills">Skills</NavDropdown.Item>
              <NavDropdown.Item href="#Experience">Experience</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Education">Education</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;