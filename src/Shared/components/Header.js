import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
function Header(){
return(
<Navbar bg="dark"  expand="lg" variant="dark">
  <Container fluid>
  <Navbar.Toggle className="mr-auto" aria-controls="basic-navbar-nav" />
    <Navbar.Brand href="#home">Your Places</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <NavLink to="/" exact className="active"><div className="nav-item px-2">ALL USERS</div></NavLink>
        <NavLink to="/u1/places" ><div className="nav-item px-2">MY PLACES</div></NavLink>
        <NavLink to="/places/new"><div className="nav-item px-2">ADD PLACE</div></NavLink>
        <NavLink to="/new"><div className="nav-item px-2">AUTHENTICATE</div></NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default Header;