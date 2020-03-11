import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function MyNav() {
    return (
        <Navbar expand="md" className="mt-3">
            <Navbar.Brand>
                <span role="img" aria-label="web">🌐 </span>
                <span role="img" aria-label="developer">👨🏻‍💻 </span>
                <span role="img" aria-label="Singapore">🇸🇬</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="w-100" justify>
                    <Nav.Item>
                        <Nav.Link href="https://www.linkedin.com/in/kevin-ng-th/" target="_blank">
                            <FaLinkedin style={{transform: "translateY(-3px)", color: "#2877b5"}}/> LinkedIn 
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://github.com/kevinngth" target="_blank">
                            <FaGithub style={{transform: "translateY(-3px)", color: "#24292f"}}/> GitHub
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="mailto:kevin.ng.th@gmail.com">
                            <MdEmail style={{transform: "translateY(-2px)", color: "#656d72"}}/> Email
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNav;
