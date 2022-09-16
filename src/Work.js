import React from "react";
import "./Project.css";
import Project1 from './img/getflix.png';
import Project2 from './img/cookiclicker.png';
import Project3 from './img/potofilio.png';
import {Card,Row,Col,Button,Container} from 'react-bootstrap/';

function Work() {
  return (
    <Container id='Work'>

    <Row className=' box-service m-0 mx-auto gy-4 lg={3} md-{4} sm={12} xs={12} justify-content-center'>
    {/* first card */}
    <h3 className="text-center">My projects</h3>
    <Col>
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Project1} />
      <Card.Body>
        <Card.Title>BesTube</Card.Title>
        <Card.Text>
          <p>In this exercise, we created a Streaming site in html / css, javascript and php.
       We were inspired by Netflix, Amazon Prime Video, Youtube... The goal is to display a catalogue of movies and TV series.
</p>
        </Card.Text>
        <a href="https://infinite-depths-37750.herokuapp.com/signin/sign.php"  target="_blank">
        <button  class="learn ">Learn More</button>
  </a> 
      </Card.Body>
      </Card>

    </Col>
    {/* second card */}
    <Col>
    <Card  className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Project2} />
      <Card.Body>
        <Card.Title>Cooki Clicker</Card.Title>
        <Card.Text>
          The team project was to develop the cooki clicker game using html,css and javascript
        </Card.Text>
        <a href="https://seninet.github.io/JavaScript-Cookie-Clicker/web.html"  target="_blank">
        <button  class="learn ">Learn More</button>
  </a> 

      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Project3} />
      <Card.Body>
        <Card.Title>Portfolio</Card.Title>
        <Card.Text>
          Creating the portfolio website using the library react and frame work bootstrap
        </Card.Text>
        <button class="learn button1">Learn More</button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>

);
  }
  

export default Work;