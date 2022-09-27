import React, { useState } from 'react';
import  './Home.css'
import "./Story.css";
import {Row,Col} from 'react-bootstrap/';
import Image from '../img/myphoto.jpg'
import  './Home.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom"

function Story() {
  const [isMobile,setIsMobile]= useState(false)

  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
    <Grid container>
      <Grid item xs={12} md={6} lg={6}>
        <Row className='mx-auto'>
          <Col>
          <nav className='navbar'>
          <h3 className='logo'> <strong>bh</strong>  <span class="heading-dot"></span></h3>
              <ul className={isMobile? 'nav-links-mobile':'nav-links'}
                 onClick={()=> setIsMobile(false)}
                 >
                <Link to='/' className='home'>
                  <li>Home</li>
                </Link>
                <Link to='/Work' className='work'>
                  <li>Work</li> 
                </Link>
                <Link to='/Story' className='story'>
                  <li>Story</li>
                </Link>
                <Link to='/Contact' className='contact'>
                  <li>Contact</li>
                </Link>

              </ul>
              <button className='mobile-menu-icon'
              onClick={()=>setIsMobile(!isMobile) }
              >
              {isMobile ? <i className="fa-sharp fa-solid fa-circle-xmark"></i>:<i className="fa-solid fa-bars"></i>}
              </button>
            </nav>

        {/* <Navbar expand="lg my-3">
        <Navbar.Brand href="#home bg-danger"> <strong>bh</strong>  <small><FaCircle /></small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-5">
            <Nav.Link to="./Work.js">Work</Nav.Link>
            <Nav.Link to="#Story">Story</Nav.Link>
            <Nav.Link to="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
       </Navbar> */}

            <div className='section'>


<div className="section__container">


    {/* <div className="section__img">
        <img src={profile} alt=""  height={"100"} width={'150px'}/>
    </div> */}


    <div className="section__content">
        <h1>Who is Bhama ?</h1>
        <p>Currently I am doing Web development trainee at becode</p>
        <p>Junior fronted Developert</p>
        <p>Passionate about creating interactive applications</p>
        <p>Javascript Developer</p>
        <p>React js Developer</p>
    </div>



</div>


</div>
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

  );
}

export default Story;

