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
      {/* <Home /> */}
      <Routes>
      <Route path="/BHAMA_PORTFOLIO" exact element={<Home />}/>
      <Route path='/BHAMA_PORTFOLIO/work'  exact element={<Work />}/>
      <Route path='/BHAMA_PORTFOLIO/story' exact element={<Story />}/>
      <Route path='/BHAMA_PORTFOLIO/contact' exact element={<Contact />}/> 

      </Routes>
      </Router>
    </div>
  );
}

export default App;
