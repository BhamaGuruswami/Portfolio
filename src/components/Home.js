import React from 'react'
import '../App.css'
import { FaGithub, FaInstagram } from 'react-icons/fa';


function Home() {
  return (
      <div className='intro'>
        <h1  className='firstname'>bhama </h1>
        <h1 className='secondname' >guruswami<span className="dot"></span></h1>
        <p>Hi, I’m Bhama Guruswami Junior fronted developer at <b>BeCode</b> and looking for an internship from November to February 2023</p>
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