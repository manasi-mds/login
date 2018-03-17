import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Routingto from './Routingto';
//import Login from './Login';
//import Signup from './Signup';
//import Rchange from './Rchange';
class App extends Component {
 
  render() {
    
    return (
      <BrowserRouter>
        <Routingto/>
      </BrowserRouter>
      
    );
  }
}

export default App;
