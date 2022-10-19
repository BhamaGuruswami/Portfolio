import './App.css';
import { useState } from 'react';
import React  from 'react';
import Home from './components/Home';
import Story from './components/Story';
import Work from './components/Work';
import {Row,Col} from 'react-bootstrap/';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from './img/myphoto.jpg'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
function App() {
  const[myPage, setMyPage] = useState("Home");
  const [isMobile,setIsMobile]= useState(false)

  return (
    <div className="App ">
    <Box sx={{ flexGrow: 1 }}>
    <Grid container>
      <Grid  className='box1' item xs={12} md={6} lg={6}>
        <Row className='fullwidth'>
          <Col >
          <div className='container'>
            <div className="box">
              <div className="topheading">
              <nav className='navbar'>
              <h3 className='logo'> <strong>bh</strong><span className="heading-dot"></span></h3>
              <ul className={isMobile? 'nav-links-mobile':'nav-links'}
              onClick={()=>setIsMobile(false)}>
                <li className='home' onClick={()  => setMyPage("Home")}>Home</li >
                <li className='story' onClick={()  => setMyPage("Story")}>Story</li>
                <li  className='work' onClick={()  => setMyPage("Work")}>Work</li>
              </ul>
              <button className='mobile-menu-icon'
              onClick={()=>setIsMobile(!isMobile) }
              >
              {isMobile ? <CloseIcon/>:<MenuIcon/>}
              </button>
            </nav>
            <div >
              {myPage === "Home" && <Home/>}
              {myPage === "Story" && <Story/>}
              {myPage === "Work" && <Work/>}
            </div>
              </div>
            

            </div>
            </div>
          </Col>
        </Row>
      </Grid>


      <Grid item xs={6} md={6}  lg={6}>
        <Col className='hide-on-mobile lg-6'>
          <img src={Image} className="profile" alt="profile" />
        </Col>
      </Grid>
    </Grid>
  </Box>
    </div>
  );
}

export default App;
