import { Row, InputGroup, Form, Col,Container } from 'react-bootstrap/';
import Image from '../img/myphoto.jpg'
import React, { useState } from 'react';
import  './Home.css'
import  './Contact.css'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom"

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const [isMobile,setIsMobile]= useState(false)

  return (
    <Box sx={{ flexGrow: 1, textAlign: "center",}}>
    <Grid container>
      <Grid item xs={12} md={6} lg={6}sx={{border:"px solid red" }} >
        <Row className='mx-auto'>
          <Col>
            <nav className='navbar'>
              <h3 className='logo'> <strong>bh</strong>  <span class="heading-dot"></span></h3>
              <ul className={isMobile? 'nav-links-mobile':'nav-links'}
              onClick={()=>setIsMobile(false)}
              >
                {/* <Link to='/' className='home'>
                  <li>Home</li>
                </Link> */}
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
               <Row>
           <Grid sx={{border:"px solid red",padding:' 0px 125px',marginTop:'4px' }} >

         <h5>Contact Me</h5>
         <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="contact-box">
           <Col>
           <Form.Group as={Col}  controlId="validationCustom01">
            <Form.Label className='justify-content-start'>First name</Form.Label>
          <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid"> Please write your Name.
            </Form.Control.Feedback>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group as={Col}  controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid"> Please write your Last Name.
            </Form.Control.Feedback>
          </Form.Group>
          </Col>

        </Row>

        <Row className="mb-3 ">
            <Col>
              <Form.Group as={Col} md="12" sm="12" controlId="validationCustomUsername">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                  <Form.Control
                    type="email"
                    placeholder="email"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please write your email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col>
              <Form.Group as={Col} md="12" sm ='12' controlId="validationCustom03">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" required />
                <Form.Control.Feedback type="invalid">
                  Write your subject.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

          </Row>
          <Row>
            <Col>
              <Form.Group as={Col} md="12"  sm="12" controlId="validationCustom04">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} />
                <Form.Control.Feedback type="invalid">
                  Write your message.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

        </Row>
        <button className='submit-btn my-3' type="submit">Send</button>
      </Form>
      </Grid>

    </Row>
    

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

  )
}

export default Contact
