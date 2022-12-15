import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Notice = () => {
    return (
      <Navbar bg="primary" expand="lg">
        <Container className="justify-content-center">
          <Navbar.Brand className="text-white text-center">
            Notice here
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
};

export default Notice;