import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./NavHeader.css";

function NavHeader() {
  const examples = ["circle", "circles", "enter-exit"];
  const exampleLinks = examples.map((link) => (
    <NavDropdown.Item key={link}>
      <Link to={`/${link}`} className="link-unstyled">
        {link}
      </Link>
    </NavDropdown.Item>
  ));
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container className="">
        <Navbar.Brand>
          <Link to="/" className="link-unstyled">
            D3 & Me
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" d-flex align-items-center ">
            {false && (
              <Link to="/dashboard" className="link-unstyled">
                Dashboard
              </Link>
            )}
            <NavDropdown title="Examples" id="basic-nav-dropdown">
              {exampleLinks}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
