// statusbar(navbar)

import React from 'react'
import { Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <Navbar className="bg-body-tertiary" style={{width:'100%', height:"104px"}}>
        <Container className='bg-light' style={{width:'100%', height:"104px"}}>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header