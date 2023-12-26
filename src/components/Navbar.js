
import React from 'react';
import './Navbar.css'; 

function Navbar() {
  return (
    <div className = "zz">
    <nav className="navbar navbar-expand-lg navbar-light mm">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarRightAlignExample">
          <div className="container-fluid tt">
            <img src="navbar_pic.png" alt="Navbar Pic" />
          </div>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-primary"
                href="!#"
                role="button"
              >
                Demo
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="!#"
                role="button"
              >
                Pages
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="!#"
                role="button"
              >
                Acount
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="!#">
                MyNetwork
              </a>
            </li>
            <li className="nav-item">
              <img src="navbar_man .png" alt="Navbar Man" />
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
    </div>
  );
}

export default Navbar;
