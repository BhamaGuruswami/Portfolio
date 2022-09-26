import {Row,Col} from 'react-bootstrap/';
import React, { useState } from 'react'
import Image from '../img/myphoto.jpg'
import  './Home.css'
import {FaGithub,FaInstagram,FaLinkedinIn,} from 'react-icons/fa';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom"

function Home() {
  const [isMobile,setIsMobile]= useState(true)
  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
    <Grid container>
      <Grid item xs={12} md={6} lg={6}>
        <Row className='mx-auto'>
          <Col>
            <nav className='navbar'>
              <h3 className='logo'> <strong>bh</strong>  <span class="heading-dot"></span></h3>
              <ul className={isMobile? 'nav-links-mobile':'nav-links'}
              onClick={()=>setIsMobile(false)}
              >
                <Link to='/' className='home'>
                  <li>Home</li>
                </Link>
                <Link to='./Work' className='work'>
                  <li>Work</li> 
                </Link>
                <Link to='./Story' className='story'>
                  <li>Story</li>
                </Link>
                <Link to='./Contact' className='contact'>
                  <li>Contact</li>
                </Link>

              </ul>
              <button className=' '>
                {isMobile ? <i className='fas fa-times'></i>: <i className='fas fa-bars'></i>}
              </button>
            </nav>

            <h1>Bhama </h1>
            <h2>Guruswami <span class="dot"></span></h2>
            <p>Hi, I’m Bhama Guruswami Junior fronted developer at <b>BeCode</b>.</p>
            <Col className='social'>
              <button  href=' https://github.com/BhamaGuruswami?tab=repositories' className='hello'>Say Hello</button>
              <button className='github'><FaGithub /></button>
              <button className='instagram'>< FaInstagram /></button>
              <button className='linkedin'>< FaLinkedinIn /></button>
            </Col>

          </Col>
        </Row>
      </Grid>
      <Grid item xs={6}  lg={6}>
        <Col className='hide-on-mobile lg-6'>
          <img src={Image} className="profile" alt="profile" />

        </Col>
      </Grid>
    </Grid>
  </Box>

    // <Container>
    //   <Row className='mx-auto'>
    //     <Col className='lg-6 md-6' >
    //     <Navbar expand="lg my-3">
    //     <Navbar.Brand href="#home bg-danger"> <strong>bh</strong>  <small><FaCircle /></small>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="text-align-justify">
    //         <Nav.Link to="./Home.js">Work</Nav.Link>
    //         <Nav.Link href="./Story.js">Story</Nav.Link>
    //         <Nav.Link href="./Contact.js">Contact</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //    </Navbar>
    //     <h1>Bhama</h1>
    //     <h2>Guruswami</h2>
    //     <p>Hi, I’m Bhama Guruswami Junior fronted developer at <b>BeCode</b>.</p>
    //     <Col className='social'>
    //       <button className='hello'>Say Hello</button>
    //       <button className='github'><FaGithub /></button>
    //       <button className='instagram'>< FaInstagram/></button>
    //       <button className='linkedin'>< FaLinkedinIn/></button>
    //       </Col>

    //     </Col> 
    //     <Col className=' lg-6'>
    //          <img src={Image} className="profile" alt="profile" />

    //     </Col>

    //   </Row>
    // </Container>

  );
}

export default Home;