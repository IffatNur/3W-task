import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import avatar from '../assets/avatar.png'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const Header = () => {
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-white">
        <Container>
          <Navbar.Brand href="#home">Faucets</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Form.Select>
                <option>Arbitrum Rinkeby</option>
                <option>Avalanche Fuji</option>
                <option>BNB Chain Testnet</option>
                <option>Ethereum Rinkeby</option>
                <option>Fantom Testnet</option>
                <option>Harmony Testnet</option>
                <option>POA Network Sokol</option>
                <option>Polygon Mumbai</option>
              </Form.Select>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;