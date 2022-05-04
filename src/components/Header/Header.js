import React from 'react';
import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import logo from '../../imges/logo/logo.png'
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOutButton = () =>{
    signOut(auth)
  }
    return (
      <div>
        <Navbar
          className="navber-top"
          collapseOnSelect
          expand="lg"
          sticky="top"
        >
          <Container className="link">
            <Navbar.Brand as={Link} to="/">
              <img className="logo" src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  className="text-white"
                  id="text-style"
                  as={Link}
                  to="/home"
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  className="text-white"
                  id="text-style"
                  as={Link}
                  to="/blog"
                >
                  Blog
                </Nav.Link>
                {user && (
                  <>
                    <Nav.Link
                      className="text-white"
                      id="text-style"
                      as={Link}
                      to="/manageitems"
                    >
                      Manage-Item
                    </Nav.Link>
                    <Nav.Link
                      className="text-white"
                      id="text-style"
                      as={Link}
                      to="/addinventory"
                    >
                      Add-Item
                    </Nav.Link>
                    <Nav.Link
                      className="text-white"
                      id="text-style"
                      as={Link}
                      to="/myitems"
                    >
                      My-Items
                    </Nav.Link>
                  </>
                )}
              </Nav>
              <Nav>
                {user ? (
                  <button
                    className="button text-white"
                    id="text-styles"
                    onClick={handleSignOutButton}
                  >
                    sign out
                  </button>
                ) : (
                  <Nav.Link
                    as={Link}
                    to="/login"
                    className="button text-white"
                    id="text-style"
                  >
                    Login
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;