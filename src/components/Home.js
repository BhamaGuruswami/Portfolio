import { Row, Col } from 'react-bootstrap/';
import React, { useState } from 'react'
import Image from '../img/myphoto.jpg'
import '../App.css'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


function Home() {
  const [isMobile, setIsMobile] = useState(false)
  return (
    // <div className='container'>
      <div className='intro'>
        <div><h1 className='firstname'>bhama </h1></div>
        <div><h3 className='secondname'>Guruswami <span className="dot"></span></h3></div>
        <div><p>Hi, I’m Bhama Guruswami Junior fronted developer at <b>BeCode</b> and looking for an internship from November to February 2023</p> </div>
        <div className='social'>
          <button href=' https://github.com/BhamaGuruswami?tab=repositories' className='hello'>Say Hello</button>
          <button className='github' ><FaGithub /></button>
          <button className='instagram'>< FaInstagram /></button>
        </div>
      </div>
    // </div>

  );
}

export default Home;