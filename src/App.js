import './App.css';
import Home from './components/Home';
import Work from './components/Work';
import Story from './components/Story';
import Contact from './components/Contact';
import { BrowserRouter as Router,Route, Routes} from "react-router-dom"
import  React from 'react';


function App() {
  return (
    <div className="App">
      <Router>
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
