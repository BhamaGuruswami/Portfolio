import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Row,Col} from 'react-bootstrap/';
import Image from '../img/myphoto.jpg'
import  './Home.css'
import  './Project.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Project1 from '../img/getflix.png';
import Project2 from '../img/cookiclicker.png';
import Project3 from '../img/potofilio.png';
import {Link} from "react-router-dom"

function Work() {
  const [isMobile,setIsMobile]= useState(false)

  return (
    <Box sx={{ flexGrow: 1, textAlign:"center"}}>
      <Grid container>
        <Grid item  xs={12} md={6}sm={12} lg={6}>
        <Row className='mx-auto'>
        <Col >
        <nav className='navbar'>
        <h3 className='logo'> <strong>bh</strong>  <span class="heading-dot"></span></h3>
              <ul className={isMobile? 'nav-links-mobile':'nav-links'}
                            onClick={()=>setIsMobile(false)}
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
<Grid>
<Card  sx={{ maxWidth: 395,elevation:"2",margin:"auto",border:"1px solid grey",mb:3}}>
      <CardMedia
        component="img"
        height="140"
        image={Project1}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        BesTube        </Typography>
        <Typography variant="body2" >
        <p>In this exercise, we created a Streaming site in html / css, javascript and php.
       We were inspired by Netflix, Amazon Prime Video, Youtube... The goal is to display a catalogue of movies and TV series.
</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card  sx={{ maxWidth: 395,elevation:"2",margin:"auto",border:"1px solid grey",mb:3}}>
      <CardMedia
        component="img"
        height="140"
        image={Project2}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Cooki Clicker        </Typography>
        <Typography variant="body2" color="text.secondary">
        The team project was to develop the cooki clicker game using html,css and javascript
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card  sx={{ maxWidth: 395,elevation:"2",margin:"auto",border:"1px solid grey",mb:3}}>
      <CardMedia
        component="img"
        height="140"
        image={Project3}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Portfolio        </Typography>
        <Typography variant="body2" color="text.secondary">
        Creating the portfolio website using the library react and frame work bootstrap
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>


        </Col>
      </Row>
        </Grid>
        <Grid item xs={6}>
        <Col className='hide-on-mobile lg-6'>
             <img src={Image} className="profile" alt="profile" />

        </Col>
        </Grid>
      </Grid>
    </Box>

//     <Container>
//     <Row className=' box-service m-0 mx-auto gy-4 lg={3} md-{4} sm={12} xs={12} justify-content-center'>
//     {/* first card */}
//     </Row>
//     </Container>

);
  }
  

export default Work;