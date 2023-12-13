import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { Link } from "react-router-dom";

const navLinkStyle = {
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
  fontSize: "16px",
  lineHeight: "2.5",
  fontWeight: "normal",
  marginLeft: "15px",
};

const brandStyle = {
  ...navLinkStyle,
  fontWeight: "bold",
};

const centerText = {
  textAlign: "center", // Centra el texto dentro del menú desplegable
  width: "500px", // Puedes ajustar el ancho del contenedor según tus necesidades
  // maxWidth: "200px", // O puedes usar maxWidth en lugar de width
  margin: "5px 2px", // Agrega margen superior e inferior para evitar colisiones
  padding: "10px",
};

export const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={brandStyle}>Tienda Daniel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" style={navLinkStyle}>
              Home
            </Link>
            <Link to="#link" style={navLinkStyle}>
              Productos
            </Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <Link to="/category/laptops" style={{ ...navLinkStyle, ...centerText }}>
                Laptops
              </Link>
              <Link to="/category/smartphones" style={{ ...navLinkStyle, ...centerText }}>
                Smartphones
              </Link>
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
