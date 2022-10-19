import React, { useState } from 'react'
import '../App.css'
import { FaGithub, FaInstagram } from 'react-icons/fa';


function Home() {
  // const [isMobile, setIsMobile] = useState(false)
  return (
      <div className='intro'>
        <h1  className='firstname'>bhama </h1>
        <h3 className='secondname' >guruswami<span className="dot"></span></h3>
        <div><p>Hi, I’m Bhama Guruswami Junior fronted developer at <b>BeCode</b> and looking for an internship from November to February 2023</p> </div>
        <div className='social'>
          <button href=' https://github.com/BhamaGuruswami?tab=repositories' className='hello'>Say Hello</button>
          <button className='github' ><FaGithub /></button>
          <button className='instagram'>< FaInstagram /></button>
          {/* <button className='linkdin'>< FaLinkedinIn /></button> */}

        </div>
      </div>

  );
}

export default Home;