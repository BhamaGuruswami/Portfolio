import {Nav,Container,Navbar,Row,Col} from 'react-bootstrap/';
import React from 'react'
import Image from './img/myphoto.jpg'
import  './Home.css'
import { FaCircle,FaGithub,FaInstagram,FaLinkedinIn} from 'react-icons/fa';
function Home() {
  return (
    <Container id='Home'>
      <Row className='mx-auto'>
        <Col className='lg-6 sm={12}' >
        <Navbar expand="lg my-3">
        <Navbar.Brand href="#home bg-danger"> <strong>bh</strong>  <small><FaCircle /></small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-5">
            <Nav.Link href="#Work">Work</Nav.Link>
            <Nav.Link href="#Story">Story</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
       </Navbar>
        <h1>Bhama</h1>
        <h2>Guruswami</h2>
        <p>Hi, I’m Bhama Guruswami Junior fronted developer at <b>BeCode</b>.</p>
        <Col className='social'>
          <button className='hello'>Say Hello</button>
          <button className='github'><FaGithub /></button>
          <button className='instagram'>< FaInstagram/></button>
          <button className='linkedin'>< FaLinkedinIn/></button>
          </Col>

        </Col>
        <Col className='mx-auto lg-6'>
             <img src={Image} className="profile" alt="profile" />

        </Col>

      </Row>
    </Container>

  );
}

export default Home;