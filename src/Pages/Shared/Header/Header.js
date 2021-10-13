import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {user,logOut} = useAuth()
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link as = {HashLink} to="/home#home">Home</Nav.Link>
                <Nav.Link  as = {HashLink} to="/home#services">Services</Nav.Link>
                <Nav.Link  as = {HashLink} to="/home#experts">Experts</Nav.Link>
                {
                    user.displayName ?  <Button onClick={logOut} variant="warning">Log out</Button> : <Nav.Link  as = {Link} to="/login">Log in</Nav.Link>
                }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;