import React from 'react'
import '../css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <div className="menu">
    <ul id="nav">
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Gallery">Gallery</Link></li>
      <li><input type="text" placeholder="name"></input></li>
    </ul>
  </div>
  );
}
export default Navbar;