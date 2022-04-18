import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const[user]=useAuthState(auth);
  const  handlesignout=()=>{
      signOut(auth);
  }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="info" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">Gym Trainer</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/blogs' >Blogs</Nav.Link>
    
     
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      {
          user ?
          <button className='btn btn-link text-white text-decoration-none' onClick={handlesignout}>Sign out</button>
          :
   <Nav.Link as={Link} to="/login">
   Login
      </Nav.Link>
      }
   
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      
        </>
    );
};

export default Header;