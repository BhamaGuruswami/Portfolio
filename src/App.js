import './App.css';
import Home from './Home';
import Work from './Work';
import Story from './Story';
import Contact from './Contact';
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
        <Home/>
      <Routes>
      <Route exact path="/" component={Home}/>
      <Route path='/work' component={Work}/>
      <Route path='/story' component={Story}/>
      <Route path='/contact' component={Contact}/> 

      </Routes>
      </Router>
    </div>
  );
}

export default App;
