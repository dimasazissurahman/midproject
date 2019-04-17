import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from '../src/Widgets/Navbar';
import TimeComponent from './Widgets/Time';

import './App.css';

const TextComponent = () =>{
  return (
    <p>Dimas Azis Surahman <br/> IT DEVELOPER
    </p>    
  );
}

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Navbar/>
        <TimeComponent/>
          <img src={logo} className="App-logo" alt="logo" 
          />
          <TextComponent/>
          <p>
            Welcome to my CV
          </p>
          <a
            className="App-link"
            href="https://www.instagram.com/dimasazissurahman"
            target="_blank"
            rel="noopener noreferrer"            
          >
          Follow My Instagram!!!
          </a>
        </header>
        <div className="footer">
        hahahahahah
        </div>
      </div>     
    );
  }
}


export default App;
