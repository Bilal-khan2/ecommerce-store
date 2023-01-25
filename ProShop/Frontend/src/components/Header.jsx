import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'

import './style.css';


function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to='/'>
           <Navbar.Brand >The Proshop</Navbar.Brand>
        </LinkContainer>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-left">
            <LinkContainer to='/cart'>
              <Nav.Link ><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/signin'>
              <Nav.Link><i className='fas fa-user'></i> Signin</Nav.Link>
            </LinkContainer>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header