import './App.css';
import Home from './components/Home';
import Work from './components/Work';
import Story from './components/Story';
import Contact from './components/Contact';
import { BrowserRouter as Router,Route, Routes} from "react-router-dom"
// import { Route, Routes} from "react-router-dom"
//import {Layout, Header, Navigation , Drawer, Content } from 'react-mdl'
import  React from 'react';
//import { Switch } from '@mui/material';
//import { faRoad } from '@fortawesome/free-solid-svg-icons';
// import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
      {/* <Home /> */}
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/work' element={<Work />}/>
      <Route path='/story' element={<Story />}/>
      <Route path='/contact' element={<Contact />}/> 

      </Routes>
      </Router>
    </div>
  );
}

export default App;
