import React from 'react'
import Image from './img/myphoto.jpg'
import { Container, Row, Col } from 'react-bootstrap/';
import  './Home.css'
import profile from './img/myphoto.jpg'
import "./Story.css";


function Story() {
  return (
    <Container id='Story'>
              <div className='section'>


<div className="section__container">


    <div className="section__img">
        {/* <img src={man2} alt="" /> */}
    </div>


    <div className="section__content">
        <h1>Who is Bhama</h1>
        <p>Currently I am doing Web development trainee at becode</p>
        <p>Junior fronted Developert</p>
        <p>Passionate about creating interactive applications</p>
        <p>Javascript Developer</p>
        <p>React js Developer</p>
    </div>



</div>


</div>

    {/* <Row>
      <Col>
        <h1>About Me</h1>
        I am bhama guruswami junior fronted developer .Currently I am doing Web development trainee at becode
        
        
      </Col>
      <Col>
      <img src={Image} className="profile" alt="profile" />
      </Col>

    </Row> */}
  </Container>

  );
}

export default Story;

