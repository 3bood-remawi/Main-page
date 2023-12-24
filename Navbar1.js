import React from 'react';
import './Navbar1.css';
import logo from './icon.png'; 

const Navbar1 = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="navbar-logo" /> {/* Logo  */}
        <ul className="nav-links">
          <li><a href="/blog">Blog</a></li>
          <li><a href="/security">Security</a></li>
          {/*  add more links here as needed */}
        </ul>
        <button className="download-btn">Download app</button>
      </div>
    </nav>
  );
};

export default Navbar1 ;
