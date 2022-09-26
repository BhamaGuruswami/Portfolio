import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Nav,Navbar,Row,Col} from 'react-bootstrap/';
import { FaCircle} from 'react-icons/fa';
import Image from '../img/myphoto.jpg'
import  '../Home.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Project1 from '../img/getflix.png';
import Project2 from '../img/cookiclicker.png';
import Project3 from '../img/potofilio.png';


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
            <Nav.Link to="./Work.js">Work</Nav.Link>
            <Nav.Link to="#Story">Story</Nav.Link>
            <Nav.Link to="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
       </Navbar>
       <Card sx={{ maxWidth: 345,marginTop:"15px",elevation:"2" }}>
      <CardMedia
        component="img"
        height="140"
        image={Project1}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        BesTube        </Typography>
        <Typography variant="body2" color="text.secondary">
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
    <Card sx={{ maxWidth: 345,marginTop:"15px" }}>
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
    <Card sx={{ maxWidth: 345,marginTop:"15px",border:"2px solid orange" }}>
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
  );
}
