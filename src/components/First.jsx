import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Nav, Navbar, Row, Col } from 'react-bootstrap/';
import { FaCircle, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from '../img/myphoto.jpg'
import '../Home.css'
import {Link} from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={6}>
          <Row className='mx-auto'>
            <Col>
              <nav className='navbar'>
                <h3 className='logo'>logo</h3>
                <ul>
                  <link to='/'>
                    <li>Home</li>
                  </link>
                  <link to='/Second'>
                    <li>Work</li>
                  </link>
                  <link to='/Third'>
                    <li>Story</li>
                  </link>
                </ul>
              </nav>

              {/* <h1>Bhama</h1>
              <h2>Guruswami</h2>
              <p>Hi, I’m Bhama Guruswami Junior fronted developer at <b>BeCode</b>.</p>
              <Col className='social'>
                <button className='hello'>Say Hello</button>
                <button className='github'><FaGithub /></button>
                <button className='instagram'>< FaInstagram /></button>
                <button className='linkedin'>< FaLinkedinIn /></button>
              </Col>
 */}
            </Col>
          </Row>
        </Grid>
        {/* <Grid item xs={6}>
          <Col className='hide-on-mobile lg-6'>
            <img src={Image} className="profile" alt="profile" />

          </Col>
        </Grid> */}
      </Grid>
    </Box>
  );
}
