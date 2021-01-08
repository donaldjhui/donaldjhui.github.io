import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import for Animated Background
import Sky from 'react-sky'
import Orange from './images/orange.gif'
import Apple from './images/apple.gif'
import Strawberry from './images/strawberry.gif'
import Pear from './images/pear.gif'
import BJunimo from './images/blue-junimo.gif'


// Components for different pages
import Navbar from './components/navbar'

import Home from './sections/home'
import Main from './sections/main'
import About from './sections/about'
import Contact from './sections/contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Route path="/" exact component={Home} /> */}
        <Home />
        <Main />
        <About />
        <Contact />
      </Router>

      <div>
        <Sky
          images={{
            0: Orange,
            1: Pear,
            2: Strawberry,
            3: Apple,
          }}
          how={20} /* Pass the number of images Sky will render chosing randomly */
          time={40} /* time of animation */
          size={'100px'} /* size of the rendered images */
          background={'palettedvioletred'} /* color of background */
        />
      </div>
    </div>
  );

}

export default App;
