import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import for Animated Background
import Sky from 'react-sky'
import Orange from './images/orange.gif'
import Apple from './images/apple.gif'
import Strawberry from './images/strawberry.gif'
import Pear from './images/pear.gif'
import Duck from './images/duck.png'


// Components for different pages
import Navbar from './components/navbar'
import Home from './sections/home'
import About from './sections/about'
import Education from './sections/education'
import Experience from './sections/experience'
import Contact from './sections/contact'
import Socialbar from './components/socialbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <About />
        <Education />
        <Experience />
        <Contact />
        <Socialbar />
      </Router>

      <div>
        <Sky
          images={{
            0: Orange,
            1: Pear,
            2: Strawberry,
            3: Duck,
          }}
          how={20}
          time={40}
          size={'100px'}
          background={'rgb(231, 231, 231)'}
        />
      </div>
    </div>
  );

}

export default App;
