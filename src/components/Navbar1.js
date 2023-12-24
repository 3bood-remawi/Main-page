import React from 'react';
import './Navbar1.css';
import logo from './icon.png'; 

const Navbar1 = () => {
  return (
    <nav className="navbar1">
      <div className="navbar1-container">
        <img src={logo} alt="Logo" className="navbar1-logo" /> {/* Logo  */}
        <ul className="nav1-links">
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
