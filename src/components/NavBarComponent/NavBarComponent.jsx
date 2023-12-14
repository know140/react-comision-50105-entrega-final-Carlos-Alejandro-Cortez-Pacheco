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
  textAlign: "center",
  width: "500px", 
  
  margin: "5px 2px", 
  padding: "10px",
};

export const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={brandStyle}>CUBO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" style={navLinkStyle}>
              Home
            </Link>
            <Link to="#link" style={navLinkStyle}>
              Productos
            </Link>
            <Link to="/contacto" style={navLinkStyle}>
    Contacto
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
