import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Nav,Navbar,Row,Col} from 'react-bootstrap/';
import { FaCircle} from 'react-icons/fa';
import profile from './img/myphoto.jpg'

import  './Home.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1, textAlign:"center"}}>
      <Grid container>
        <Grid item  xs={12} md={6}>
        <Row className='mx-auto'>
        <Col className='lg-6 md-6' >
        <Navbar expand="lg my-3">
        <Navbar.Brand href="#home bg-danger"> <strong>bh</strong>  <small><FaCircle /></small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-5">
            <Nav.Link href="./Work.js">Work</Nav.Link>
            <Nav.Link href="#Story">Story</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
       </Navbar>
        </Col>
        <div className='section'>


<div className="section__container">


    <div className="section__img">
        <img src={profile} alt=""  height={"100"} width={'150px'}/>
    </div>


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


      </Row>
        </Grid>
        <Grid item xs={6}>
        <Col className='hide-on-mobile lg-6'>
             <img src={Image} className="profile" alt="profile" />

        </Col>
        </Grid>
      </Grid>
    </Box>
  );
}
