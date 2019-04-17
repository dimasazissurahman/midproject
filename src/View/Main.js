import React, { Component } from 'react';
import { BrowserRouter ,Route } from 'react-router-dom';

import Login from '../View/Login';
import App from '../App';
import About from './About';
import Gallery from './Gallery';


class Main extends Component {
  render(){
    return(
      <BrowserRouter>        
          <Route path="/" exact strict component={Login} ></Route>
          <Route path="/Home" exact strict component={App}></Route>
          <Route path="/About" exact strict component={About}></Route>
          <Route path="/Gallery" exact strict component={Gallery}></Route> 
    </BrowserRouter>
    );
  }
}
export default Main;