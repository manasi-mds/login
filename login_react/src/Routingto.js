import React,{Component} from 'react';
import Login from './Login';
import Signup from './Signup';
import {BrowserRouter,Route} from 'react-router-dom';
//import ReactDOM from 'react-dom';
//import { BrowserRouter as Router } from 'react-router-dom';

export default class Routingto extends Component {
    render() {
        return(
    
        <BrowserRouter>
            <div>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup}/>
            </div>
        </BrowserRouter>
        );
    }
}
