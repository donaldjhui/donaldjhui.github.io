import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import for Animated Background
import Sky from 'react-sky'
import Orange from './orange.gif'
import Apple from './apple.gif'
import Strawberry from './strawberry.gif'
import Pear from './pear.gif'

// Components for different pages
import Navbar from './components/navbar'
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Route path="/" exact component={Home} />
        {/* <Route path="/TripList" exact component={TripList} /> */}
      </Router>

      <div>
        <Sky
          images={{
            0: Orange,
            1: Pear,
            2: Strawberry
          }}
          how={130} /* Pass the number of images Sky will render chosing randomly */
          time={40} /* time of animation */
          size={'100px'} /* size of the rendered images */
          background={'palettedvioletred'} /* color of background */
        />
      </div>
    </div>
  );
}

export default App;
