import React, { useState } from 'react';
import  './Home.css'
import "./Story.css";
// import "./About.css";
import Typography from '@mui/material/Typography';

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

            {/* <div className='aboutus'>
       <div className="aboutus">
    <div className="aboutus">
        <h1>Who is Bhama ?</h1>
        <p>Web development trainee at becode
        Junior fronted Developer
        Passionate about creating interactive applications
        Javascript Developer
        React js Developer</p>
    </div>
</div>

</div> */}
      <Typography className='text' variant="subtitle1" gutterBottom paddingLeft={14} paddingRight={13} mt={5} align={'justify'} >
       Currently I am doing Web development trainee at becode.
        Junior fronted Developer
        Passionate about creating interactive applications
        
         </Typography>


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

