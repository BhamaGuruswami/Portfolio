import { Row, InputGroup, Form, Col, Button, Container } from 'react-bootstrap/';
import Image from './img/myphoto.jpg'
import React, { useState } from 'react';
import  './Home.css'

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

  return (
    <Container id='Contact'>
    <Row>
        {/* <h3>For More Information</h3> */}
        <h1>Contact Me</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="">
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
                <Form.Control type="text" placeholder="Message" required />
                <Form.Control.Feedback type="invalid">
                  Write your message.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

        </Row>
        <button className='submit-btn my-3' type="submit">Send</button>
      </Form>

        {/* <form>
  <div class="form-outline mb-3">
  <label class="form-label" for="form4Example1">Name</label>
    <input type="text" id="form4Example1" class="form-control" />
  </div>

<div class="form-outline mb-3">
    <input type="email" id="form4Example2" class="form-control" />
    <label class="form-label" for="form4Example2">Email address</label>
  </div>

  <div class="form-outline mb-3">
    <textarea class="form-control" id="form4Example3" rows="2"></textarea>
    <label class="form-label" for="form4Example3">Subject</label>
  </div>
  <div class="form-outline mb-3">
    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
    <label class="form-label" for="form4Example3">Message</label>
  </div>

  <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
</form>         */}
        {/* <Col>
        {/* <img src={Image} className="profile" alt="profile" /> */}
        {/* </Col> */} 

    </Row>
    </Container>
  )
}

export default Contact
