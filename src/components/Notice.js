import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Notice = () => {
    return (
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Navbar.Brand className='text-white'>Notice here</Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Notice;