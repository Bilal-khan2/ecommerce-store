import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
import './style.css';


function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">The Proshop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-left">
          <Nav.Link href="#home"><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
          <Nav.Link href="#link"><i className='fas fa-user'></i> Signin</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header