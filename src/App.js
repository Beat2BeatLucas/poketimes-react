import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, 
         Route, 
         Switch } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

class App extends Component {
  
  render() {
    return (
      <Router>
          <div className="App">
            <Navbar />
            
            <Switch>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
      </Router>
      
    );
  }
}

export default App;
