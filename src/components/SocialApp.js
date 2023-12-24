import React from "react";
import "./SocialApp.css";

const SocialApp = () => {
  return (
    <div className="content">
      <strong className="title">
        Download The Best
        <br />
        Social App
      </strong>
      <p>
        See resolved goodness felicity shy civility domestic had but perceive
        <br />
        laughing six did far
      </p>
      <div>
        <button id="Signup">Sign up Free</button>
        <span id="CBelieve">"Can't believe it's free!"</span>
      </div>
      <div className="device-container">
        <img src="phone.png" alt="Phone Icon" className="phone" />
        <img src="laptop.png" alt="Phone Icon" className="laptop" />
      </div>
    </div>
  );
};

export default SocialApp;
