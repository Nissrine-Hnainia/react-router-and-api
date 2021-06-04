import React from 'react';
import {Nav, Navbar} from "react-bootstrap"
import { Link } from 'react-router-dom';

const NavBar = () => {
    const linkStyle ={
        display:"flex",
        justifyContent:"space-around",
        width:"150px"
    }
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto" style={linkStyle}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </Nav>
  </Navbar>
    )
}

export default NavBar
