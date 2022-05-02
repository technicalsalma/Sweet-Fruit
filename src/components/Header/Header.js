import React from 'react';
import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOutButton = () =>{
    signOut(auth)
  }
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          sticky="top"
          bg="warning"
          variant="dark"
        >
          <Container>
            <Navbar.Brand as={Link} to="/"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                
                <Nav.Link as={Link} to="/blog">
                  Blog
                </Nav.Link>
              </Nav>
              <Nav>
               {
                 user?
                 <button className='btn btn-link text-white text-decaration-none' onClick={handleSignOutButton}>sign out</button>
                 :
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;