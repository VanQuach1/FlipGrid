import React, { Component } from 'react';
import '../App.css';
import { Navbar } from 'react-bootstrap';

class NavbarHeader extends Component {
    render() {
        return (
            <Navbar className="navbar-header">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/SignUp">Sign Up</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default NavbarHeader;