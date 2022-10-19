import React from 'react';
import  '../App.css'
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
import Carousel from 'react-bootstrap/Carousel';

function Work() {
  return (
    <Carousel className='work'>
      <Carousel.Item>
         <Card  sx={{ maxWidth: 395,elevation:"2",margin:"auto",border:"1px solid grey",mb:3}}
         sm={{ maxWidth: 395,elevation:"2",margin:"auto",border:"1px solid grey",mb:3}}>
      <CardMedia
        component="img"
        height="140"
        image={Project1}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        BesTube        </Typography>
        <Typography fontSize={'16px'} >
        <p>In this exercise, we created a Streaming site in html / css, javascript and php.
       We were inspired by Netflix, Amazon Prime Video, Youtube... The goal is to display a catalogue of movies and TV series.
     </p>
        </Typography>
        <CardActions>
       <Button href="https://www.google.com/">Link</Button>
       </CardActions>
 
      </CardContent>
  </Card>
      </Carousel.Item>
      <Carousel.Item>
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
        <Typography fontSize={'16px'} >
        The team project was to develop the cooki clicker game using html,css and javascript
        </Typography>
      </CardContent>
      <CardActions>
       
      <Button href="https://www.google.com/">Link</Button>
      </CardActions>
    </Card>
   
      </Carousel.Item>
      <Carousel.Item>
      <Card  sx={{ maxWidth: 395,margin:"auto",border:"1px solid grey",mb:3,height:"300"}}>
      <CardMedia
        component="img"
        height="140"
        image={Project3}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Portfolio        </Typography>
        <Typography fontSize={'16px'} >
        Creating the portfolio website using the library react and frame work bootstrap
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card> 
   
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
);
  }
  

export default Work;