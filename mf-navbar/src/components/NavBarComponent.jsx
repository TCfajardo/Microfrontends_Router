import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const NavBarComponent = () => {
    return (
        <Navbar className="bg-body-tertiary justify-content-between">
            <Container>
                <Navbar.Brand as = {NavLink} to = {"/"}></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as = {NavLink} to = {"/Home"}>Home</Nav.Link>
                    <Nav.Link as = {NavLink} to = {"/Characters"}>Characters</Nav.Link>
                    <Nav.Link as = {NavLink} to = {"/About"}>About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;